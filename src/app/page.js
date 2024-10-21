'use client'
import { Anchor, Calendar, Globe, Phone } from "lucide-react"
// import Link from "next/link"
import "@/app/globals.css"
import { Suspense } from "react"
import Yachts from "@/components/ui/yacht-listing"
import Hero from "../components/ui/hero"
import Destinations from "../components/ui/destinations"
import {Link, Button} from "@nextui-org/react";



export default function YachtCharterHome() {
  return (
    //<div className="flex flex-col min-h-screen">
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero 
          style="hero-home w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white" 
          mainText = "Experience the Ultimate Luxury on the Open Seas"
          smallText = "Discover our fleet of world-class yachts, tailored experiences, and breathtaking destinations."
          />

        <section className="featured-yachts w-full py-12 md:py-24 lg:py-32 bg-gray-200">
          <div className="px-4 md:px-6">
            <h2 className="featured-yachts-text text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Exclusive Yacht Collection</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
              <Yachts shortText={true} detailsBtn={false}/>
            </Suspense>
          </div>
        </section>

        <Destinations/>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-700">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Our Charter Services?</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Anchor, title: "Luxury Fleet", description: "World-class yachts" },
                  { icon: Calendar, title: "Custom Experiences", description: "Tailored charters to suit your needs" },
                  { icon: Globe, title: "Exclusive Destinations", description: "Visit secluded islands and hidden gems" },
                  { icon: Phone, title: "24/7 Support", description: "Concierge-level service throughout the journey" },
                ].map((feature) => (
                  <div key={feature.title} className="flex flex-col items-center text-center">
                    <feature.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                ))}
              </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-primary-foreground">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready for Your Next Adventure?</h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let us help you plan the perfect yacht charter experience.
              </p>
              <Button sizes="lg" color="primary" className="hover:bg-white/50" as={Link} href={"/booking"}>
                Request a Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}