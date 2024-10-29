import { sendBooking } from "@/actions"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { 
    Input,
    Select,
    Textarea,
    Button,
    Checkbox,
    Divider,
    Card, 
    CardBody, 
    CardHeader,
    SelectItem
  } from "@nextui-org/react"
  
import { EnvelopeIcon, CalendarIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import firebaseConfig from '@/firebaseConfig';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

//import yachts from "@/components/api/db.json"
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// const yachts = [
//     { id: '1', name: 'Ocean Breeze', type: 'Sailing Yacht', capacity: 8, price: 5000 },
//     { id: '2', name: 'Sea Princess', type: 'Motor Yacht', capacity: 12, price: 8000 },
//     { id: '3', name: 'Wind Dancer', type: 'Catamaran', capacity: 10, price: 6000 },
//   ]
  
export default function BookingForm() {
  const [selectedYacht, setSelectedYacht] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [yachts, setYachts] = useState()

  
  const [sendBookingState, sendBookingAction] = useFormState(sendBooking, {
    error: null,
    success: false
  })
  useEffect(() => {
    if (sendBookingState.success) {
      alert("Booking request sent!")
    }
    if (sendBookingState.error) {
      alert("Error sending booking request!")
    }
  }, [sendBookingState])

  useEffect(() =>{
    async function fetchYachts(){
      const yachtCollection = collection(db, 'yachts')
      const results = await getDocs(yachtCollection)
      const yachtsData = results.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setYachts(yachtsData)
    }
    fetchYachts()
  }, [])
  if (!yachts) return <div>Loading...</div>

  return (
    <div className="booking-page mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Book Your Luxury Yacht</h1>
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex justify-center">
          <h2 className="text-2xl font-semibold text-default-400">Booking Details</h2>
        </CardHeader>
        <CardBody>
          <form action={sendBookingAction} className="space-y-6 text-gray-600">
            <Select 
              isRequired
              label="Select Yacht" 
              placeholder="Choose a yacht"
              name="yacht"
              id="yacht"
              textValue={selectedYacht}
              onChange={(e) => setSelectedYacht(e.target.value)}
            >
            {yachts.map((yacht) =>  {
              return ( 
                 <SelectItem key={yacht.id} textValue={yacht.name} className=" text-gray-600">
                       {yacht.name} - {yacht.type} (Capacity: {yacht.capacity})
                 </SelectItem>
              )
            })}
      
            </Select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <Input
                isRequired
                type="date"
                label="Start Date"
                name="startdate"
                id="startdate"
                placeholder="Select start date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                startContent={<CalendarIcon className="w-5 h-5 text-default-400" />}
              />
              <Input
                isRequired
                type="date"
                label="End Date"
                name="enddate"
                id="enddate"
                placeholder="Select end date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                startContent={<CalendarIcon className="w-5 h-5 text-default-400" />}
              />
            </div>
            <Divider />
            <Input
              isRequired
              type="text"
              label="Full Name"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              isRequired
              type="email"
              label="Email Address"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              startContent={<EnvelopeIcon className="w-5 h-5 text-default-400" />}
            />

            <Input
              type="tel"
              label="Phone Number"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              startContent={<PhoneIcon className="w-5 h-5 text-default-400" />}
            />

            <Textarea
              type="text"
              label="Special Requests"
              name="request"
              id="request"
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