/* eslint-disable */
"use strict";
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth";
import {
  addDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { store } from "@/store";
import { config } from "@/firebaseConfig";
import router from "./router"

const firebaseConfig = config;

// import Klaro with CSS

// Initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig);
// Use these for db & auth
export const db = getFirestore(firebaseApp);
export const auth = getAuth();
setPersistence(auth, inMemoryPersistence);

auth.onAuthStateChanged(async () => {
  if (!auth.currentUser) {
      router.push('/').then(() => {
          localStorage.clear()
          store.currentUser = {}
          store.knownUsers = {}
          store.chats = []
          store.currentChat= {}
          console.log('you have been logged out')
      })
  }
})


//----------------------------------------------------------------

export function createQuery(path, ...queryConstraints) {
  return query(collection(db, path), ...queryConstraints);
}

export async function setData(data, path, ...pathSegments) {
  const docRef = doc(db, path, ...pathSegments);
  await setDoc(docRef, data);
}

export async function updateData(data, path, ...pathSegments) {
  const docRef = doc(db, path, ...pathSegments);
  await docRef.update(data);
}

export async function addData(path, data) {
  try {
    const docRef = await addDoc(collection(db, path), data);
    return docRef;
  } catch (error) {
    console.error("Error adding document", error);
    return null;
  }
}

export async function getDocData(path, pathSegments) {
  const docRef = doc(db, path, pathSegments);
  return getDataFromDocRef(docRef);
}

export async function getDataFromDocRef(docRef) {
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    console.error("No such document! " + docRef.path);
    console.error(docRef);
    return null;
  }
  return docSnap.data();
}

export async function getDataFromQuery(path, ...queryConstraints) {
  const q = createQuery(path, ...queryConstraints);
  const querySnapshot = await getDocs(q);
  let result = [];
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    data.id = doc.id;
    result.push(data);
  });
  return result;
}

//----------------------------------------------------------------
export function getCurrentUser() {
  return auth.currentUser;
}

export async function getUserData(userId) {
  return getDocData("users", userId);
}

export async function getChatData(chatId) {
  return getDocData("chats", chatId);
}

export async function writeUserData(userData, userId) {
  return addData(userData, "users/" + userId);
}

export async function getUserChats() {
  const chats = await getDataFromQuery(
    "chats",
    where("users", "array-contains", auth.currentUser.uid)
  );
  for (const chat of chats) {
    chat.messages = await getChatMessages(chat.id);
  }
  return chats;
}

export async function getChatMessages(chatId) {
  return getDataFromQuery("chats/" + chatId + "/messages");
}

export function getRandId(length = 15) {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join("");
}

export async function addMessage(message, chatId) {
  return setData(message, `chats/${chatId}/messages`, message.id);
}

export async function addChat(chat) {
  // store.currentChat = chat;
  return setData(chat, `chats`, chat.id);
}

export async function leaveChat(chat) {
  return setData(chat, `chats`, chat.id);
}

export async function initCurrentUser(username) {
  getUserData(auth.currentUser.uid)
    .then((user) => (store.currentUser = user))
    .catch(async () => {
      const userData = {
        id: auth.currentUser.uid,
        img: auth.currentUser.photoURL ?? "https://picsum.photos/200",
        name:
          username ?? auth.currentUser.displayName ?? auth.currentUser.email,
        email: auth.currentUser.email,
      };
      store.currentUser = userData;
      await setData(userData, "users", auth.currentUser.uid);
    });
}

export async function initMessages(chat) {
  const currentChatId = chat.id;
  const userChatsQuery = createQuery(
    `chats/${currentChatId}/messages`,
    orderBy("time", "asc")
  );
  onSnapshot(userChatsQuery, async (querySnapshot) => {
    console.log("a new message received");
    const messages = [];
    querySnapshot.forEach((snapShotDoc) => {
      const msg = snapShotDoc.data();
      messages.push(msg);
    });

    if (store.currentChat.id === currentChatId)
      store.currentChat.messages = messages;

    const lastMessage = messages[messages.length - 1];
    if (
      Notification.permission === "granted" &&
      lastMessage?.userId !== store.currentUser.id &&
      lastMessage?.time > new Date().getTime() - 10000
    ) {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const editedChat = store.chats.filter(
        (chat) => chat.id === currentChatId
      )[0];
      editedChat.newMessage++;
      // addChat(editedChat);
      if (store.lastMessageId !== lastMessage.id) {
        new Notification(chat.title, {
          title: chat.title,
          body: lastMessage.text,
          icon: "https://picsum.photos/200",
          // image: 'https://picsum.photos/200',
        });
        store.lastMessageId = lastMessage.id;
      }
    }
  });
}

export async function initUserChats() {
  const userChatsQuery = createQuery(
    `chats`,
    where("users", "array-contains", auth.currentUser.uid)
  );
  onSnapshot(userChatsQuery, async (querySnapshot) => {
    console.log("chats updated");
    const chats = [];
    querySnapshot.forEach((snapShotDoc) => {
      const chat = snapShotDoc.data();
      chat.newMessage = 0;
      chat.active = false;
      chats.push(chat);
    });

    for (const chat of chats) {
      initMessages(chat);
      const users = [];
      for (const userId of chat.users) {
        const user = await getDocData("users", userId);
        users.push(user);
        store.knownUsers[user.id] = user;
      }
      chat.messages = await getChatMessages(chat.id);
      chat.users = users;
    }
    store.chats = chats;
    if (store.currentChat?.id)
      store.currentChat = store.chats.find(
        (chat) => chat.id === store.currentChat.id
      );
  });
}

export async function joinChat(chatId) {
  const chat = await getChatData(chatId);
  if (chat) {
    const users = [
      ...new Set([...chat.users.map((user) => user.id), store.currentUser.id]),
    ];
    const newChat = {
      id: chat.id,
      title: chat.title,
      users: users,
      img: chat.img,
      created: chat.created,
    };
    addChat(newChat);
    chat.users = users;
    store.chats = [...store.chats, chat];
    store.currentChat = chat;
  }
}
