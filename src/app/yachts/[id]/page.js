'use client'
import Hero from "@/components/ui/hero-solo"
import YachtDetails from "@/components/ui/yacht-details"
// import getYachtDetails from "@/components/api/getYachtDetails"
// import getYachtImages from "@/components/api/getYachtImages"
import { Suspense, useState } from "react"

//import yachtsDb from "@/components/api/database.json"


export default function YachtsPage({params}){
    const id = String(params.id)
    const [imageUrl, setImageUrl]=useState("/images/hero_yachts2.jpg")
    const [name, setName]=useState()

    const resolveImageData = (nameValue,imgValue)=>{
        setImageUrl(imgValue)
        console.log("imgValue", imgValue)
        setName(nameValue)
        console.log("nameValue", nameValue)
    }
    console.log("name", name)
    console.log("imageUrl", imageUrl)

    return(
        <div>
        <Hero style="hero-yacht w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white" 
            bg={imageUrl}
            mainText = {`See our luxury ${name} yacht details.`}
            smallText = "Review the specifications and amenities of our yacht."/>
        {/* Add your yacht grid here */}
        <section className="featured-yachts w-full py-12 md:py-24 lg:py-32 bg-gray-200">
            <div className="px-4 md:px-6">
                <Suspense fallback={<h2>Loading...</h2>}>
                    <YachtDetails id ={id} onLoadDetails={resolveImageData}/>
                </Suspense>
            </div>
        </section>
    </div>
)

}