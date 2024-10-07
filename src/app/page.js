'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Anchor, Calendar, Globe, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import placeholder from "@/public/images/placeholder.svg"
import "@/app/globals.css"
import { Suspense } from "react"
import Destinations from "@/public/destinations"
import Yachts from "@/components/ui/yachts"


export default function YachtCharterHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="hero w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Experience the Ultimate Luxury on the Open Seas
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Discover our fleet of world-class yachts, tailored experiences, and breathtaking destinations.
                </p>
              </div>
              <div className="space-x-4">
                <Button sizes="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link  href="/yachts">
                  Explore Yachts
                </Link>
                </Button>
                <Button sizes="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  View Destinations
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-yachts w-full py-12 md:py-24 lg:py-32 bg-gray-200">
          <div className="container px-4 md:px-6">
            <h2 className="featured-yachts-text text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Exclusive Yacht Collection</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
              <Yachts/>
            </Suspense>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 destinations">
          <div className="container px-4 md:px-6">
            <Suspense>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Discover Breathtaking Destinations</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {Destinations.map((destination) => (
                  <div key={destination.name} className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-white text-2xl font-bold">{destination.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
            </Suspense>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-600">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Our Charter Services?</h2>
            <Suspense>
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
            </Suspense>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-500">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Emma Thompson", review: "An unforgettable experience! The yacht was stunning and the crew was exceptional.", image: placeholder },
                { name: "Michael Chen", review: "Impeccable service from start to finish. We'll definitely be booking again!", image: placeholder },
                { name: "Sophia Rodriguez", review: "The destinations were breathtaking. It was truly a journey of a lifetime.", image: placeholder },
              ].map((testimonial) => (
                <Card key={testimonial.name} className="text-center">
                  <CardHeader>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4"
                    />
                    <CardTitle>{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{testimonial.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready for Your Next Adventure?</h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let us help you plan the perfect yacht charter experience.
              </p>
              <Button sizes="lg" variants="primary" className="hover:bg-white/50">
                Request a Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}