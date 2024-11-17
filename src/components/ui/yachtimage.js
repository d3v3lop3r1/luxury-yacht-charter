import { Image } from "@nextui-org/react"
import yachtsDb from "@/components/api/database.json"



export default function YachtImage({ name, imageH, imageW}) {
    // const [urlLink, setUrlLink] = useState();
    // const [loading, setLoading] = useState(true)
    const imagesRef = `/images/yachts/` 
    const yachts = Object.entries(yachtsDb.yachts)
    const yachtsObj = yachts.map(([key,val])=>{
      return {id:key,yacht:val}
    })
    const selectedYacht = yachtsObj.find(yacht=>{
      return yacht.yacht.name===name
    })
    const urlLink = selectedYacht.yacht.images.exterior.at(0)

    return (
    <div>
          <Image
          src={imagesRef+urlLink}
          alt={`Image ${name}`}
          width={imageW}
          height={imageH}
          //className="w-full object-cover mb-4 rounded-md"
          className="w-full object-cover"
          /> 
      </div>
    )
  }