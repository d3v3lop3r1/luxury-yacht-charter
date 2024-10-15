'use client'
import Hero from "@/components/ui/hero"
import YachtDetails from "@/components/ui/yacht-details"
import { Suspense } from "react"

export default function YachtsPage({params}){
    const id = params.id;
    return(
    <div>
        <Hero style="hero-yacht w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white" 
            mainText = "Explore our collection of luxury yachts."
            smallText = "Discover our fleet of world-class yachts, tailored experiences, and breathtaking destinations."/>
        {/* Add your yacht grid here */}
        <section className="featured-yachts w-full py-12 md:py-24 lg:py-32 bg-gray-200">
            <div className="container px-4 md:px-6">
                <Suspense fallback={<h2>Loading...</h2>}>
                    <YachtDetails id = {id}/>
                </Suspense>
            </div>
        </section>
    </div>
);

}