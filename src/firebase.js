/* eslint-disable */
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {addDoc, doc, getDoc, getFirestore, setDoc, collection, query, where, getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAL-ggVnDRPCTO16OkTZL_gWtHvMtggLeQ",
    authDomain: "vue-whatsapp-clone.firebaseapp.com",
    projectId: "vue-whatsapp-clone",
    storageBucket: "vue-whatsapp-clone.appspot.com",
    messagingSenderId: "16303384438",
    appId: "1:16303384438:web:d0dd3e84181b2689fcbc57"
}

// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Use these for db & auth
export const db = getFirestore(firebaseApp);
export const auth = getAuth();


//----------------------------------------------------------------

export function createQuery(path, ...queryConstraints) {
    return query(collection(db, path), ...queryConstraints)
}

export async function setData(data, path,...pathSegments ) {
    const docRef = doc(db, path, ...pathSegments);
    await setDoc(docRef, data)
}

export async function updateData(data, path,...pathSegments ) {
    const docRef = doc(db, path, ...pathSegments);
    await docRef.update(data)
}

export async function addData(path, data) {
    try {
        const docRef = await addDoc(collection(db, path), data)
        console.log("Document written with ID: " + docRef.path)
        return docRef
    } catch (error) {
        console.error("Error adding document", error)
        return null
    }
}

export async function getDocData(path, pathSegments) {
    const docRef = doc(db, path, pathSegments);
    return getDataFromDocRef(docRef)
}

export async function getDataFromDocRef(docRef) {
    console.info("Document Ref: " + docRef.path)
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
        console.error("No such document! " + docRef.path)
        return null
    }
    return docSnap.data();
}

export async function getDataFromQuery(path, ...queryConstraints) {
    const q = createQuery(path, ...queryConstraints);
    const querySnapshot = await getDocs(q);
    let result = [];
    querySnapshot.forEach((doc) => {
        let data = doc.data()
        data.id = doc.id
        result.push(data);
    })
    return result
}

//----------------------------------------------------------------