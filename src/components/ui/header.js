'use client'
import { usePathname } from 'next/navigation'
import { Button } from "@nextui-org/button"
import {Link} from "@nextui-org/link"
//import Image from "next/image";
import { Image } from "@nextui-org/image"
import "@/app/globals.css"

export default function Header(){
    const pathname = usePathname()
    console.log(pathname)
    return (
    <header className="header px-4 lg:px-6 h-20 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Image src={"/images/logo_transp.svg"} width={50} height={50} alt={"logo"}/>
          <span className="ml-2 text-2xl text-white">Zlatna Luka Luxury Yachting</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link color='foreground' className={`${pathname === '/' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/">
            Home
          </Link>
          <Link color='foreground' className={`${pathname === '/yachts' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/yachts">
            Yacht Fleet
          </Link>
          <Link color='foreground' className={`${pathname === '/destinations' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/destinations">
            Destinations
          </Link>
          <Link color='foreground' className={`${pathname === '/charters' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/charters">
            Charter Packages
          </Link>
          <Link color='foreground' className={`${pathname === '/about-us' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/about-us">
            About Us
          </Link>
          <Link color='foreground' className={`${pathname === '/contact' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/contact">
            Contact
          </Link>
          <Button color='primary' as={Link} href={"/booking"}>Book Now</Button>
        </nav>
    </header>

    )
}