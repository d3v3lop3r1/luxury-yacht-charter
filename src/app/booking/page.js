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
import getYachts from "@/components/api/getYachts"


const BookingPage = () => {
  const [selectedYacht, setSelectedYacht] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [guests, setGuests] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { 
      selectedYacht, startDate, endDate, guests, name, email, phone, specialRequests, agreeTerms 
    })
    // You could also add validation here before submitting
  }

  const calculateTotalPrice = () => {
    const yacht = yachts.find(y => y.id === selectedYacht)
    if (!yacht || !startDate || !endDate) return 0
    const days = (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 3600 * 24)
    return yacht.price * days
  }

  return (
    <div className="container booking-page mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Book Your Luxury Yacht Charter</h1>
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex justify-center">
          <h2 className="text-2xl font-semibold">Booking Details</h2>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Select 
              label="Select Yacht" 
              placeholder="Choose a yacht"
              value={selectedYacht}
              onChange={(e) => setSelectedYacht(e.target.value)}
            >
              {yachts.map((yacht) => (
                <SelectItem key={yacht.id} textValue={yacht.id}>
                  {yacht.name} - {yacht.type} (Capacity: {yacht.capacity})
                </SelectItem>
              ))}
            </Select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <Input
              type="number"
              label="Number of Guests"
              placeholder="Enter number of guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />

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
              I agree to the terms and conditions
            </Checkbox>

            <div className="text-right">
              <p className="text-xl font-bold mb-2">Total Price: ${calculateTotalPrice()}</p>
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

export default BookingPage