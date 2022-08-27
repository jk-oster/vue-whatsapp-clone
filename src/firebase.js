/* eslint-disable */
"use strict";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

const firebaseConfig = config;

// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Use these for db & auth
export const db = getFirestore(firebaseApp);
export const auth = getAuth();

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
    console.log("Document written with ID: " + docRef.path);
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
  console.info("Document Ref: " + docRef.path);
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
  return getDataFromQuery("users/" + userId);
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
  console.log(chat);
  console.log(store);
  store.currentChat = chat;
  return setData(chat, `chats`, chat.id);
}

export async function leaveChat(chat) {
  return setData(chat, `chats`, chat.id);
}

export async function initCurrentUser(username) {
  const userData = {
    id: auth.currentUser.uid,
    img: auth.currentUser.photoURL ?? "https://picsum.photos/200",
    name: username ?? auth.currentUser.displayName ?? auth.currentUser.email,
    email: auth.currentUser.email,
  };
  console.log(auth.currentUser);
  store.currentUser = userData;
  await setData(userData, "users", auth.currentUser.uid);
}

export async function initMessages(chatId) {
  const currentChatId = chatId;
  const userChatsQuery = createQuery(
    `chats/${currentChatId}/messages`,
    orderBy("time", "asc")
  );
  onSnapshot(userChatsQuery, async (querySnapshot) => {
    console.log("a new message received");
    const messages = [];
    console.log(messages);
    querySnapshot.forEach((snapShotDoc) => {
      const msg = snapShotDoc.data();
      messages.push(msg);
    });

    if(store.currentChat.id === currentChatId) store.currentChat.messages = messages;

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
        new Notification({
            title: "New Message",
            body: lastMessage.text,
            icon: 'https://picsum.photos/200',
            image: 'https://picsum.photos/200',
            
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
    console.log(chats);
    querySnapshot.forEach((snapShotDoc) => {
      const chat = snapShotDoc.data();
      chat.newMessage = 0;
      chat.active = false;
      chats.push(chat);
    });

    for (const chat of chats) {
      initMessages(chat.id);
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
    if(store.currentChat?.id) store.currentChat = store.chats.filter(chat => chat.id === store.currentChat.id)
  });
  console.log(store);
}
