import firebaseConfig from '@/firebaseConfig';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { SelectItem } from "@nextui-org/react"

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default async function SelectYachts(){
    try {
    const yachtCollection = collection(db, 'yachts')
    const results = await getDocs(yachtCollection)
    const yachts = results.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const result = yachts.docs.map((yacht) =>  {
        return ( 
           <SelectItem key={yacht.id} textValue={yacht.name} className=" text-gray-600">
                 {yacht.name} - {yacht.type} (Capacity: {yacht.capacity})
           </SelectItem>
        )
   })
    return result; 
    } catch (error) {
    console.error("Error fetching yachts:", error)
    return false
    }
};
