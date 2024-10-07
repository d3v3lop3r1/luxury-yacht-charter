import "@/app/globals.css"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"


export default function Template({ children }) {
    return (
        <div>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
  }