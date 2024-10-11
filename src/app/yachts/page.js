'use client'
import Hero from "@/components/ui/hero"
import YachtListing from "@/components/ui/yacht-listing"
import { Suspense } from "react"


export default function Yachts() {
    return (
      <div>
        <Hero style="hero-yachts w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white" 
        mainText = "Explore our collection of luxury yachts."
        smallText = "Discover our fleet of world-class yachts, tailored experiences, and breathtaking destinations."/>
        {/* Add your yacht grid here */}
        <section className="featured-yachts w-full py-12 md:py-24 lg:py-32 bg-gray-200">
          <div className="container px-4 md:px-6">
            <h2 className="featured-yachts-text text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Exclusive Yacht Collection</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
              <YachtListing/>
            </Suspense>
          </div>
        </section>
      </div>
    );
  }