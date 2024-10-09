import Image from "next/image";
import placeholder from "@/public/images/placeholder.svg";
import { useState } from 'react';
import { GetServerSideProps } from "next";
import { fs } from "fs";


export const getServerSideProps = async (directoryPath) => {
    const fileList = fs.readdir(directoryPath); 

    return {
        props: {
        fileList: fileList,
        }
    };
};


export default function YachtImageLocal(props) {
    const [urlLink, setUrlLink] = useState();
    const name = props.name;  
    const directoryPath = `/images/yachts/${name}/exterior`;
    const fileList = getServerSideProps(directoryPath);
    const file = files.at(1);
    const link = `/images/yachts/${name}/exterior/${file}`
    if(link){
    setUrlLink(link); // Set the list of image URLs
    }else{
        setUrlLink(placeholder);
    }
    files.forEach((file) => {
        console.log(file);
    });
    
    
    
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