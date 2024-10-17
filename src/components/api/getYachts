import firebaseConfig from '@/firebaseConfig';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default async function getYachts(){
    try {
    const yachtCollection = collection(db, 'yachts')
    const yachtSnapshot = await getDocs(yachtCollection)
    const yachts = yachtSnapshot.docs.map((doc,index) => ([ {id: index}, {name: doc.name}, {model: doc.model} ]));
    //console.log(yachts)
    return yachts
    } catch (error) {
    console.error("Error fetching yachts:", error)
    return false
    }
};
