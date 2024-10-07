
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from "@/firebase"
// import { Anchor, Calendar, Globe, Phone } from "lucide-react"
// import { burger } from '@lucide/lab';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Suspense } from "react"
import YachtImage from "@/components/ui/yachtimage"

export default async function Yachts(props){
  const yachtsCol = collection(firestore, 'yachts')
  const snapshot =await  getDocs(yachtsCol)
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return (
    <div>
    <Suspense>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((yacht) => (
            <Card key={yacht.id}>
                <CardHeader>
                    <CardTitle>{yacht.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <YachtImage name={yacht.name}/>
                    <div className="grid gap-auto grid-cols-4">
                        <div className="text-gray-900">
                            <p>Cabins: {yacht.cabins}</p>
                        </div>
                        <div className="text-gray-900">
                            <p>Guests: {yacht.guests}</p>
                        </div>
                        <div className="text-gray-900">
                            <p>Crew: {yacht.crew}</p>
                        </div>
                        <div className="text-gray-900">
                            <p>{yacht.price_from}</p>
                        </div>
                        
                        
                    </div>

                    {props.short_text?"":<p className="text-sm text-gray-500">{yacht.short_text}</p>}
                </CardContent>
                <CardFooter>
                    {props.details_btn?"":(<Button className="w-full">View Details</Button>)}
                </CardFooter>
            </Card>
            ))}
        </div>
    </Suspense>    
    </div>

  )
}
