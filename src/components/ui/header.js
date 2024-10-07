import { Button } from "@/components/ui/button"
import { Anchor } from "lucide-react"
import Link from "next/link"
import "@/app/globals.css"

export default function Header(){
    return (
    <header className="header px-4 lg:px-6 h-20 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Anchor className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">Zlatna Luka</span>
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

    )
}