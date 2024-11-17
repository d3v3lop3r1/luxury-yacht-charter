import { Card, CardBody, CardHeader, Divider, Button, Tabs, Tab, Input, Textarea, Chip, Spinner } from "@nextui-org/react"
import React from 'react'
import YachtImages from "@/components/ui/yachtimages"
import YachtImage from "@/components/ui/yachtimage"
//import placeholder from "@/public/images/placeholder.svg";
import FormattedPrice from "@/components/ui/FormattedPrice"
//import Image from "next/image";
import yachtsDb from "@/components/api/database.json"

const YachtDetails = ({id, onLoadDetails}) => {
  const yachts = Object.entries(yachtsDb.yachts)
  const yachtsObj = yachts.map(([key,val])=>{
    return {id:key,yacht:val}
  })

  const selectedYacht = yachtsObj.find(yacht=>{
    console.log(yacht.id)
    console.log(id)
    return yacht.id===id
  })
  
  console.log("Selected yacht",selectedYacht)

  const handleImageData=()=>{
    console.log("handleImageData started")

    const imagesRef = `/images/yachts`
    const rndImage = Math.floor(Math.random()*(selectedYacht.yacht.images.exterior.length))
    const urlLink = imagesRef+selectedYacht.yacht.images.exterior[rndImage]

    onLoadDetails(selectedYacht.yacht.name, urlLink)
  }

  handleImageData()

  return (
    <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-1">
      <div>
        <Card className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
          <CardHeader className="flex justify-between items-center px-6 py-4">
            <h1 className="text-3xl font-bold text-gray-500 mb-2">{selectedYacht.yacht.name}</h1>
            <Chip color="primary" size="lg">{selectedYacht.yacht.model}</Chip>
          </CardHeader>
          <Divider className="my-4"/>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <YachtImage
                  name={selectedYacht.yacht.name}
                  imageH={400}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div>
                    <YachtImages
                    imageW={200}
                    name={selectedYacht.yacht.name}
                    className="h-32 object-cover rounded-lg"
                    />
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-4">{selectedYacht.yacht.short_text}</p>
                <div className="grid grid-cols-2 gap-4 mb-4 text-gray-600 shadow-lg p-5">
                  <div>
                    <strong>Length:</strong> {selectedYacht.yacht.length}m
                  </div>
                  <div>
                    <strong>Capacity:</strong> {selectedYacht.yacht.guests} person
                  </div>
                  <div>
                    <strong>Cabins:</strong> {selectedYacht.yacht.cabins}
                  </div>
                  <div>
                    <strong>Crew:</strong> {selectedYacht.yacht.crew} person
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{selectedYacht.yacht.long_text}</p>
                <div className="grid grid-cols-2 gap-4 mb-4 justify-center justify-items-center">
                  <Chip className="text-l font-bold p-2" color="secondary">Low season price: <FormattedPrice price={selectedYacht.yacht.low_season_price}/></Chip>
                  <Chip className="text-l font-bold p-2" color="secondary">High season price: <FormattedPrice price={selectedYacht.yacht.high_season_price}/></Chip>
                </div>
                <Button color="primary" size="lg" className="w-full">
                  Book Now - from <FormattedPrice price={selectedYacht.yacht.price_from}/>
                </Button>
              </div>
            </div>
          </CardBody>
          
        </Card>

        <Tabs color="primary" aria-label="Yacht Details">
          <Tab key="amenities" title="Amenities">
            <Card>
              <CardBody>
                <h2 className="text-2xl font-bold mb-4 text-gray-400">Onboard Amenities</h2>
                <ul className="grid grid-cols-2 gap-4 text-gray-600">
                  {(selectedYacht.yacht.amenities.split(",")).map((amenitie, index)=>{
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
                  {(selectedYacht.yacht.general_infos.split(",")).map((info, index)=>{
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