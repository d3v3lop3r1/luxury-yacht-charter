
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from "@/firebase"
// import { Anchor, Calendar, Globe, Phone } from "lucide-react"
// import { burger } from '@lucide/lab';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import YachtImage from "@/components/ui/yachtimage"

export default async function Yachts(){    
    const yachtsCol = collection(firestore, 'yachts')
    const snapshot =await  getDocs(yachtsCol)
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return (
    <div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((yacht) => (
            <Card key={yacht.id}>
                <CardHeader>
                    <CardTitle>{yacht.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <YachtImage name={yacht.name}/>
                    <div className="grid gap-auto grid-cols-4 border-solid border-gray-200 border-2 p-2 m-2 rounded text-xs font-bold ring-offset-2 ring">
                        <div className="text-gray-900 justify-center">
                            <p className="text-center">Cabins: {yacht.cabins}</p>
                        </div>
                        <div className="text-gray-900">
                            <p className="text-center">Guests: {yacht.guests}</p>
                        </div>
                        <div className="text-gray-900">
                            <p className="text-center">Crew: {yacht.crew}</p>
                        </div>
                        <div className="text-gray-900">
                            <FormattedPrice price = {yacht.price_from}></FormattedPrice>
                        </div>   
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">View Details</Button>
                </CardFooter>
            </Card>
            ))}
        </div>
    </div>

  )
}
function FormattedPrice({price}){
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(price);
      return <p className="text-center">from {formattedPrice}</p>
}
