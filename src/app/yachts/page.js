import Hero from "@/components/ui/hero"

export default function Yachts() {
    return (
      <div>
        <Hero style="hero-yachts w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white" 
        mainText = "Explore our collection of luxury yachts."
        smallText = "Discover our fleet of world-class yachts, tailored experiences, and breathtaking destinations."/>
        {/* Add your yacht grid here */}
      </div>
    );
  }