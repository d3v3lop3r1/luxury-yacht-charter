import firebaseConfig from '@/firebaseConfig';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default async function getYachtDetails({id}){
    console.log("Id :",id)
    try {
    const yachtCollection = collection(db, 'yachts')
    const yachtSnapshot = await getDocs(yachtCollection)
    const datas = yachtSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const yachtFounded = datas.find(data => data.id === id)
    console.log("Founded :",yachtFounded.name)
    return yachtFounded
    } catch (error) {
    console.error("Error fetching yachts:", error)
    return false
    }
};

