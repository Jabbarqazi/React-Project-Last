import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTGeEQiw48-fU9ieRPXt8Lq1fC76nCFNo",
    authDomain: "last-assignment-177d7.firebaseapp.com",
    projectId: "last-assignment-177d7",
    storageBucket: "last-assignment-177d7.firebasestorage.app",
    messagingSenderId: "701079438821",
    appId: "1:701079438821:web:7cfa13544279021efc1b0c",
    measurementId: "G-ZZHZG25H8P"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db };
export default app;
