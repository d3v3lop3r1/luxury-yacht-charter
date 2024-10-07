import { Button } from "@/components/ui/button"
import { Anchor, Calendar, Globe, MapPin, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"

import Link from "next/link"
import "@/app/globals.css"

export default function Footer(){
    return (
        <footer className="w-full py-12 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">We provide a full range of services throughout the Adriatic Sea for our valued customers. 
              Luxury Yachts and Luxury Villas can now be rented in the fastest and most reliable way through our website. We provide a professional service that fully meets your needs. 
              Contact us with confidence! <br/>
              All your wishes and dreams are the most important for us!<br/>
              Peter Novak<br/>
              Zlatna Luka Yachting</p>
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
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +386 (555) 123-4567</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> 123 Marina Blvd, Luxury Port, Serbia</li>
              </ul>
            </div>
            <div><br/>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="space-y-2">
                <Input className="bg-gray-800 border-gray-700" placeholder="Enter your email" type="email" />
                <Button className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2024 Zlatna Luka Yachts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}