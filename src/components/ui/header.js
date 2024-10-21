'use client'
import { usePathname } from 'next/navigation'
//import Image from "next/image";
//import { Image } from "@nextui-org/image"
import "@/app/globals.css"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {ZlLogo} from "/public/images/logo_transp.jsx"

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname()
  console.log(pathname)
  return (  
    //<header className="header px-4 lg:px-6 h-20 flex items-center border-b">
      <Navbar className="header" maxWidth="full" onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <ZlLogo className="zlogo"/>
            <p className="font-bold text-inherit ml-4">Zlatna Luka<br/>Luxury Yachting</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem >
            <Link color='foreground' className={`${pathname === '/' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' className={`${pathname === '/yachts' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/yachts">
              Yacht Fleet
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' className={`${pathname === '/about-us' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/about-us">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' className={`${pathname === '/contact' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color='primary' as={Link} href={"/booking"}>Book Now</Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className='mt-5'>
          <NavbarMenuItem >
            <Link color='foreground' className={`${pathname === '/' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color='foreground' className={`${pathname === '/yachts' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/yachts">
              Yacht Fleet
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color='foreground' className={`${pathname === '/about-us' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/about-us">
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color='foreground' className={`${pathname === '/contact' ? 'active' : ''} text-sm font-medium hover:underline underline-offset-4`} href="/contact">
              Contact
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    //</header>
  );
}