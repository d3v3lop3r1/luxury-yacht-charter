import "@/app/globals.css"
import destData from "@/public/destinations"
import Image from "next/image"
//import { Image } from "@nextui-org/react"




export default function Destinations(){
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 destinations">
            <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Discover Breathtaking Destinations</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {destData.map((destination) => (
                    <div key={destination.name} className="relative group overflow-hidden rounded-lg">
                    <Image
                        className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                        src={destination.image}
                        alt={destination.name}
                        width={400}
                        height={300}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-2xl font-bold">{destination.name}</h3>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

    )
}
