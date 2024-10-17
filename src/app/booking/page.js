'use client'
import React, { useState } from 'react'
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import { 
  Input,
  Select,
  SelectItem,
  Textarea,
  Button,
  Checkbox,
  Divider
} from "@nextui-org/react"
import { CalendarIcon } from '@heroicons/react/24/outline'
//import getYachts from "@/components/api/getYachts"

const yachts = [
  { id: '1', name: 'Ocean Breeze', type: 'Sailing Yacht', capacity: 8, price: 5000 },
  { id: '2', name: 'Sea Princess', type: 'Motor Yacht', capacity: 12, price: 8000 },
  { id: '3', name: 'Wind Dancer', type: 'Catamaran', capacity: 10, price: 6000 },
]
export default function BookingPage() {
  const [selectedYacht, setSelectedYacht] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  //const [yachts, setYachts] = useState('')
  
  // const yachts = getYachts();
  // //setYachts (getYachts) ;
  // console.log(yachts)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { 
      selectedYacht, startDate, endDate, guests, name, email, phone, specialRequests, agreeTerms 
    })
    // You could also add validation here before submitting
  }


  return (
    <div className="booking-page mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Book Your Luxury Yacht</h1>
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex justify-center">
          <h2 className="text-2xl font-semibold text-default-400">Booking Details</h2>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-6 text-gray-600">
            <Select 
              label="Select Yacht" 
              placeholder="Choose a yacht"
              value={selectedYacht}
              onChange={(e) => setSelectedYacht(e.target.value)}
            >
              {yachts.map((yacht) => {
                return (
                  <SelectItem key={yacht.id} textValue={yacht.id}>
                  {yacht.name} - {yacht.type} (Capacity: {yacht.capacity})
                </SelectItem>)
              })}
            </Select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <Input
                type="date"
                label="Start Date"
                placeholder="Select start date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                startContent={<CalendarIcon className="w-5 h-5 text-default-400" />}
              />
              <Input
                type="date"
                label="End Date"
                placeholder="Select end date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                startContent={<CalendarIcon className="w-5 h-5 text-default-400" />}
              />
            </div>


            <Divider />

            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="tel"
              label="Phone Number"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <Textarea
              label="Special Requests"
              placeholder="Any special requests or requirements?"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            />

            <Checkbox
              isSelected={agreeTerms}
              onValueChange={setAgreeTerms}
            >
              <span className='text-blue-600'>I agree to the terms and conditions</span>
            </Checkbox>

            <div className="text-right">
              <Button color="primary" type="submit" size="lg">
                Submit Booking Request
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}
