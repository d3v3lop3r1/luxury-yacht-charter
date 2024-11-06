'use client'
import Hero from "@/components/ui/hero"
import YachtsListing from "@/components/ui/yachts-listing"
import { Suspense } from "react"
import { Spinner } from "@nextui-org/react"
import yachtsDb from "@/components/api/database.json"


export default function Yachts() {
    return (
      <div>
        <Hero style="hero-yachts w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white" 
        mainText = "Explore our collection of luxury yachts."
        smallText = "Discover our fleet of world-class yachts, tailored experiences, and breathtaking destinations."/>
        {/* Add your yacht grid here */}
        <section className="featured-yachts w-full py-12 md:py-24 lg:py-32 bg-gray-200">
          <div>
            <h2 className="featured-yachts-text text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Exclusive Yacht Collection</h2>
            <div className="mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <YachtsListing yachts={yachtsDb} imageW={500} imageH={300}/>
                </div>
            </div>
          </div>
        </section>
      </div>
    );
  }