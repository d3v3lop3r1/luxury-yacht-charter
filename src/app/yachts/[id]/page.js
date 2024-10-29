'use client'
import Hero from "@/components/ui/hero-solo"
import YachtDetails from "@/components/ui/yacht-details"
import getYachtDetails from "@/components/api/getYachtDetails"
import getYachtImages from "@/components/api/getYachtImages"
import { Suspense, useState, useEffect } from "react"

export default function YachtsPage({params}){
    const id = params.id
    const [imageURL, setImageUrl] = useState()
    useEffect(() =>{
        async function getImageURL(id){
            const selectedYacht = await getYachtDetails({id});
            const name = selectedYacht.name;
            const selectedYachtImage = await getYachtImages({name});
            console.log(selectedYacht.name);
            console.log(selectedYachtImage);
            const randomNr=Math.floor(Math.random() * selectedYachtImage.length);
            const bgImageUrl = selectedYachtImage.at(randomNr);
            setImageUrl(bgImageUrl)
        }
        getImageURL()
      }, [])
      if (!imageURL) return <div>Loading...</div>

    return(
    <div>
        <Hero style="hero-yacht w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white" 
            bg={imageURL}
            mainText = {`See our luxury ${selectedYacht.name} yacht details.`}
            smallText = "Review the specifications and amenities of our yacht."/>
        {/* Add your yacht grid here */}
        <section className="featured-yachts w-full py-12 md:py-24 lg:py-32 bg-gray-200">
            <div className="px-4 md:px-6">
                <Suspense fallback={<h2>Loading...</h2>}>
                    <YachtDetails id = {id}/>
                </Suspense>
            </div>
        </section>
    </div>
);

}