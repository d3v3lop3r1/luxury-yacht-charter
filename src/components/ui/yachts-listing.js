import { Card, CardBody, CardFooter, Button,Link, Image } from "@nextui-org/react"
import yachtsDb from "@/components/api/database.json"


export default function YachtsListing(imageW, imageH){
  const yachts = Object.entries(yachtsDb.yachts)
  const url = "/images/yachts/"
  return yachts.map(([key,val],i)=>{
    const rndImage = Math.random()*(val.images.exterior.length+1)
    return (
      <div key={key}>
      <Card  className="w-full bg-white rounded-lg shadow-md overflow-hidden p-2">
      <CardBody className="p-0">
        <Image 
        src={url+val.images.exterior[0]} 
        alt={val.name} 
        name={val.name} 
        width={imageW} 
        height={imageH} 
        //fallbackSrc="https://via.placeholder.com/300x200"
        className="w-full h-full object-cover"/>
      </CardBody>
      <CardFooter className="flex flex-col items-start">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">{val.name}</h2>
        <p className="text-gray-600 mb-2 text-xl">{val.model}</p>
        <div className="flex justify-between w-full mb-4 text-gray-500">
          <span>Length: {val.length}m</span>
          <span>Capacity: {val.guests} guests</span>
        </div>
        <div className="flex justify-between w-full items-center">
          <span className="text-l text-gray-700">
              <FormattedPrice price = {val.price_from}></FormattedPrice></span>
          <Button color='primary' size='lg' as={Link} href={`/yachts/${key}`}>
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
    </div>

  )})
}
  function FormattedPrice({price}){
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(price);
      return <span>from {formattedPrice}</span>
}
