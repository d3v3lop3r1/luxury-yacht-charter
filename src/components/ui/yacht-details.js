import { Card, CardBody, CardHeader, Divider, Button, Tabs, Tab, Input, Textarea, Chip, Spinner } from "@nextui-org/react"
import React, { useEffect, useState } from 'react'
import firebaseConfig from '@/firebaseConfig';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import YachtImages from "@/components/ui/yachtimages"
import YachtImage from "@/components/ui/yachtimage"
//import placeholder from "@/public/images/placeholder.svg";
import FormattedPrice from "@/components/ui/formattedprice"
//import Image from "next/image";



// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const YachtDetails = (props) => {
  const id = props.id
  const [yacht, setYacht] = useState([])
  const [loading, setLoading] = useState([])
  useEffect(() => {
    const fetchYacht = async () => {
      try {
        const yachtCollection = collection(db, 'yachts')
        const yachtSnapshot = await getDocs(yachtCollection)
        const datas = yachtSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const yachtFounded = datas.find(data => data.id === id)
        //console.log("Founded :",yachtFounded)
        setYacht(yachtFounded)

        setLoading(false)
      } catch (error) {
        console.error("Error fetching yachts:", error)
        setLoading(false)
      }
    }

    fetchYacht()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-1">
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
          <CardHeader className="flex justify-between items-center px-6 py-4">
            <h1 className="text-3xl font-bold text-gray-500 mb-2">{yacht.name}</h1>
            <Chip color="primary" size="lg">{yacht.model}</Chip>
          </CardHeader>
          <Divider className="my-4"/>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <YachtImage
                  name={yacht.name}
                  imageW={400}
                  imageH={400}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div>
                    <YachtImages
                      name={yacht.name}
                      className="h-32 object-cover rounded-lg"
                    />
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-4">{yacht.short_text}</p>
                <div className="grid grid-cols-2 gap-4 mb-4 text-gray-600">
                  <div>
                    <strong>Length:</strong> {yacht.length}m
                  </div>
                  <div>
                    <strong>Capacity:</strong> {yacht.guests} person
                  </div>
                  <div>
                    <strong>Cabins:</strong> {yacht.cabins}
                  </div>
                  <div>
                    <strong>Crew:</strong> {yacht.crew} person
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{yacht.long_text}</p>
                <div className="grid grid-cols-2 gap-4 mb-4 justify-center justify-items-center">
                  <Chip className="text-l font-bold p-2" color="secondary">Low season price: <FormattedPrice price={yacht.low_season_price}/> per day</Chip>
                  <Chip className="text-l font-bold p-2" color="secondary">High season price: <FormattedPrice price={yacht.high_season_price}/> per day</Chip>
                </div>
                <Button color="primary" size="lg" className="w-full">
                  Book Now - from <FormattedPrice price={yacht.price_from}/> per day
                </Button>
              </div>
            </div>
          </CardBody>
          
        </Card>

        <Tabs aria-label="Yacht Details">
          <Tab key="amenities" title="Amenities">
            <Card>
              <CardBody>
                <h2 className="text-2xl font-bold mb-4 text-gray-400">Onboard Amenities</h2>
                <ul className="grid grid-cols-2 gap-4 text-gray-600">
                  {(yacht.amenities.split(",")).map((amenitie, index)=>{
                    return(
                      <li key={index} className="flex items-center">
                        <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {amenitie}
                      </li>
                    )
                  })}
                </ul>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="genInfos" title="General Infos">
            <Card>
              <CardBody>
                <h2 className="text-2xl font-bold mb-4 text-gray-400">General Infos</h2>
                <ul className="grid grid-cols-2 gap-4 text-gray-600">
                  {(yacht.general_infos.split(",")).map((info, index)=>{
                    return(
                      <li key={index} className="flex items-center">
                        <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {info}
                      </li>
                    )
                  })}
                </ul>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="destinations" title="Destinations">
            <Card>
              <CardBody>
                <h2 className="text-2xl font-bold mb-4 text-gray-400">Popular Destinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
                  {yacht.homeport}
                    <Card key={yacht.id} className="text-center">
                      <CardBody>
                        <svg className="w-12 h-12 mx-auto mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className="font-semibold">{yacht.homeport}</h3>
                        <p className="text-sm text-gray-600">Explore the beauty of {yacht.homeport}</p>
                      </CardBody>
                    </Card>
                
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="booking" title="Booking">
            <Card>
              <CardBody>
                <h2 className="text-2xl font-bold mb-4 text-gray-400">Book Your Charter</h2>
                <form className="space-y-4">
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    variant="bordered"
                  />
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    variant="bordered"
                  />
                  <Input
                    label="Preferred Date"
                    placeholder="Select your preferred date"
                    type="date"
                    variant="bordered"
                  />
                  <Textarea
                    label="Special Requests"
                    placeholder="Any special requests or requirements?"
                    variant="bordered"
                  />
                  <Button color="primary" type="submit" className="w-full">
                    Request Booking
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default YachtDetails