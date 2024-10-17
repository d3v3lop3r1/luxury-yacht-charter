import { Button } from "@/components/ui/button"
import Link from "next/link"
import "@/app/globals.css"

export default function Hero({style, mainText, smallText, bg}){
    return (
        <section className={style} style={{backgroundImage: `url(${bg})`}} >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {mainText}
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl">
              {smallText}
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

    )
}
