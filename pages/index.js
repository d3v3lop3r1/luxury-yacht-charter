import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Anchor, Calendar, Globe, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import placeholder from "@/public/images/placeholder.svg"
import "@/app/globals.css"

export default function YachtCharterHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="header px-4 lg:px-6 h-20 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Anchor className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">LuxeYacht</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/yachts">
            Yacht Fleet
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Destinations
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Charter Packages
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Button>Book Now</Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="hero w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Experience the Ultimate Luxury on the Open Seas
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-400 md:text-xl">
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Ocean Breeze", description: "80ft Luxury Sailing Yacht, 4 Cabins", image: placeholder },
                { name: "Royal Waves", description: "100ft Motor Yacht, 5 Cabins", image: placeholder },
                { name: "Serenity", description: "120ft Mega Yacht, 6 Cabins", image: placeholder },
              ].map((yacht) => (
                <Card key={yacht.name}>
                  <CardHeader>
                    <CardTitle>{yacht.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={yacht.image}
                      alt={yacht.name}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover mb-4 rounded-md"
                    />
                    <p className="text-sm text-gray-500">{yacht.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-200">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Discover Breathtaking Destinations</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Mediterranean", image: placeholder },
                { name: "Caribbean", image: placeholder },
                { name: "Seychelles", image: placeholder },
                { name: "Greek Isles", image: placeholder },
              ].map((destination) => (
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
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-600">
          <div className="container px-4 md:px-6">
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
      <footer className="w-full py-12 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">Luxury yacht charters for unforgettable experiences on the open seas.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Yacht Fleet</Link></li>
                <li><Link href="#" className="hover:text-white">Destinations</Link></li>
                <li><Link href="#" className="hover:text-white">Charter Packages</Link></li>
                <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +1 (555) 123-4567</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> 123 Marina Blvd, Luxury Port, FL 33000</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="space-y-2">
                <Input className="bg-gray-800 border-gray-700" placeholder="Enter your email" type="email" />
                <Button className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2024 LuxeYacht Charter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}