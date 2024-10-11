import { storage } from "@/firebase";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.svg";
import { useState,useEffect } from 'react';
import { Spinner } from "@nextui-org/react"


export default function YachtImage({ name, imageH, imageW}) {
    const [urlLink, setUrlLink] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
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
            setLoading(false)
        } catch (error) {
            console.error("Error fetching images", error);
            setLoading(false)
        }
       };

      fetchImage(name);

    }, [name])

    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <Spinner size="lg" />
        </div>
      )
    }

      return (
      <div>
            <Image
            fallbackSrc="https://via.placeholder.com/300x200"
            src={urlLink}
            alt={`Image ${name}`}
            width={imageW}
            height={imageH}
            //className="w-full object-cover mb-4 rounded-md"
            className="w-full object-cover"
            /> 
        </div>
    );
  }