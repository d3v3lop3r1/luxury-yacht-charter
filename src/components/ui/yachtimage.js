import { storage } from "@/firebase";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.svg";
import { useState } from 'react';


export default function YachtImage(props) {
    const [urlLink, setUrlLink] = useState();
      const name = props.name;  
      const fetchImage = async (name) => {
          const imagesRef = ref(storage, `/yachts/${name}/exterior`); // Reference to the images directory in Firebase Storage  
        try {
          const result = await listAll(imagesRef); // List all items in the images directory
          
          const urls = await Promise.all(result.items.map(async (item) => {
              const url = await getDownloadURL(item);
              return url;
            })); 
        
            const urlsLink = urls.at(1);
            if(urlsLink){
                setUrlLink(urlsLink); // Set the list of image URLs
            }else{
                setUrlLink(placeholder);
            }
            
        } catch (error) {
            console.error("Error fetching images", error);
        }
       };
    fetchImage(name);
    //setUrlLink(fetchedLink);
    return (
      <div>
            <Image
            src={urlLink}
            alt={`Image ${name}`}
            width={600}
            height={400}
            className="w-full h-64 object-cover mb-4 rounded-md"
            /> 
        </div>
    );
  }