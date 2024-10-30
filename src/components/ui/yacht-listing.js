import React, { useEffect, useState } from 'react'
import { 
  Card, 
  CardBody, 
  CardFooter, 
  Button,
  Link, 
  Pagination,
  Spinner
} from "@nextui-org/react"
import firebaseConfig from '@/firebaseConfig';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import YachtImage from "@/components/ui/yachtimage"


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)



const YachtListing = () => {
  const [yachts, setYachts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const yachtsPerPage = 12

  useEffect(() => {
    const fetchYachts = async () => {
      try {
        const yachtCollection = collection(db, 'yachts')
        const yachtSnapshot = await getDocs(yachtCollection)
        const yachtList = yachtSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setYachts(yachtList)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching yachts:", error)
        setLoading(false)
      }
    }

    fetchYachts()
  }, [])

  const indexOfLastYacht = currentPage * yachtsPerPage
  const indexOfFirstYacht = indexOfLastYacht - yachtsPerPage
  const currentYachts = yachts.slice(indexOfFirstYacht, indexOfLastYacht)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentYachts.map((yacht) => (
          <Card key={yacht.id} className="w-full bg-white rounded-lg shadow-md overflow-hidden p-2">
            <CardBody className="p-0">
              <YachtImage name={yacht.name} imageW={500} imageH={500}/>
            </CardBody>
            <CardFooter className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">{yacht.name}</h2>
              <p className="text-gray-600 mb-2 text-xl">{yacht.model}</p>
              <div className="flex justify-between w-full mb-4 text-gray-500">
                <span>Length: {yacht.length}m</span>
                <span>Capacity: {yacht.guests} guests</span>
              </div>
              <div className="flex justify-between w-full items-center">
                <span className="text-l text-gray-700">
                    <FormattedPrice price = {yacht.price_from}></FormattedPrice></span>
                <Button color='primary' size='lg' as={Link} href={`/yachts/${yacht.id}`}>
                  View Details
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center p-3">
        <Pagination
          total={Math.ceil(yachts.length / yachtsPerPage)}
          initialPage={1}
          onChange={paginate}
        />
      </div>
    </div>
  )
}

export default YachtListing

function FormattedPrice({price}){
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(price);
      return <span>from {formattedPrice}</span>
}

