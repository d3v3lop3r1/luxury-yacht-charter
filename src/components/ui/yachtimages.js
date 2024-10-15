import { storage } from "@/firebase";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.svg";
import { useState,useEffect } from 'react';
import { Spinner } from "@nextui-org/react"


export default function YachtImages({ name}) {
    const [urlsLink, setUrlsLink] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      const fetchImages = async (name) => {
          const imagesRef = ref(storage, `/yachts/${name}/exterior`); // Reference to the images directory in Firebase Storage  
        try {
          const result = await listAll(imagesRef); // List all items in the images directory
          
          const urls = await Promise.all(result.items.map(async (item) => {
              const url = await getDownloadURL(item);
              return url;
            })); 
        
            if(urls){
                setUrlsLink(urls); // Set the list of image URLs
            }else{
                setUrlsLink(placeholder);
            }
            setLoading(false)
        } catch (error) {
            console.error("Error fetching images", error);
            setLoading(false)
        }
       };

      fetchImages(name);

    }, [name])

    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <Spinner size="lg" />
        </div>
      )
    }
    

      return (
      <div className="grid grid-cols-4 gap-4 mt-4">
        {urlsLink.map((url, index) => (    
            <Image
            key={index}
            src={url}
            width={400}
            height={400}
            alt={`Image ${name}`}
            //className="w-full object-cover mb-4 rounded-md"
            className="w-full object-cover"
            /> 
          ))};
      </div>
    );
  }