
import { collection, getDocs } from'firebase/firestore'
import { firestore } from "@/firebase"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Suspense } from "react"
import YachtImage from "@/components/ui/yachtimage"

export default async function Yachts(){
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
              <YachtImage
              name={yacht.name}
              />
              <p className="text-sm text-gray-500">{yacht.short_text}</p>
            </CardContent>
            <CardFooter>
            <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Suspense>    
    </div>

  )
}
