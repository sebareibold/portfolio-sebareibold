import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "obbware-ecommerce.firebaseapp.com",
  projectId: "obbware-ecommerce",
  storageBucket: "obbware-ecommerce.firebasestorage.app",
  messagingSenderId: "980866115580",
  appId: "1:980866115580:web:a83ac09da636140e0bf479",
  measurementId: "G-6JQ4X4WZD1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getItems() {
  const querySnapshot = await getDocs(collection(db, 'items'));
  querySnapshot.forEach(doc => console.log(`${doc.id} => ${doc.data().nombre}`))
}
