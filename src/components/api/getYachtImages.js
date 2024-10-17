import { storage } from "@/firebase";
import { listAll, ref, getDownloadURL } from "firebase/storage";


export default async function getYachtImages({ name }) {
        const imagesRef = ref(storage, `/yachts/${name}/exterior`); // Reference to the images directory in Firebase Storage  
        try {
            const result = await listAll(imagesRef); // List all items in the images directory
            
            const urls = await Promise.all(result.items.map(async (item) => {
                const url = await getDownloadURL(item);
                return url;
            })); 
        return urls
        } catch (error) {
            console.error("Error fetching images", error);
            return null
        }
       

      
  }