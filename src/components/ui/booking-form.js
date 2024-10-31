'use client'
import { sendBooking } from "@/actions"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { useForm, Form } from "react-hook-form";
import { Toaster, toaster } from "@/components/ui/toaster"
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
    SelectItem,
    Spinner
  } from "@nextui-org/react"
  
import { EnvelopeIcon, CalendarIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import firebaseConfig from '@/firebaseConfig';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { DevTool } from "@hookform/devtools";

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
  

export default function BookingForm() {
  const { register, control, trigger, formState: { errors } } = useForm({
    mode: "onChange"
  });
  const [sendBookingState, sendBookingAction] = useFormState(sendBooking, {
    error: null,
    success: false
  },errors)


  const [selectedYacht, setSelectedYacht] = useState(new Set([]))
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [yachts, setYachts] = useState()

  
  useEffect(() => {
    if (sendBookingState.success) {
      toaster.create({
        title: "Booking request sent successfully",
        type: "success"
      })
      setSelectedYacht('')
      setStartDate('')
      setEndDate('')
      setName('')
      setEmail('')
      setPhone('')
      setSpecialRequests('')
      setAgreeTerms(false)

    }
    if (sendBookingState.error) {
      toaster.create({
        title: "Booking request sending fail",
        type: "error"
      })
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
  if (!yachts) return (
    <div className="py-56 px-4 md:px-6 bg-blue-600">
      <div className="flex flex-col items-center space-y-4 text-center">
        <Spinner label="Loading..." color="warning" size="lg" />
      </div>
    </div>)
  return (
    <div className="booking-page mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Book Your Luxury Yacht</h1>
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex justify-center">
          <h2 className="text-2xl font-semibold text-default-400">Booking Details</h2>
        </CardHeader>
        <CardBody>
          <Toaster />
          <form action={sendBookingAction} control={control} className="space-y-6 text-gray-600">
            <Select 
            {...register("yacht", { required: "Yacht is required" })}
              isRequired
              label="Select Yacht" 
              placeholder="Choose a yacht"
              name="yacht"
              id="yacht"
              items={yachts}
              //value={selectedYacht}
              selectedKeys={selectedYacht}
              onSelectionChange={setSelectedYacht}
            >
            {(yacht) => <SelectItem key={yacht.id} textValue={yacht.name} className=" text-gray-600">{yacht.name} - {yacht.model} - {yacht.cabins} cabins</SelectItem>}
            </Select>
            {errors.yacht && <Error message={errors.yacht.message} />}


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <Input
                {...register("startdate", { required: "Start date is required" })}
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
                {errors.startdate && <Error message={errors.startdate.message} />}
              </div>
              <div>
                <Input
                {...register("enddate", { required: "End date is required", valueAsDate: true })}
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
                {errors.enddate && <Error message={errors.enddate.message} />}
              </div>

            </div>
            <Divider />
            <Input
            {...register("name", { required: 'Name required', minLength: {value: 2, message: 'Min 2 char'} })}
              isRequired
              type="text"
              label="Full Name"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <Error message={errors.name.message} />}

            <Input
            {...register("email", { required: "Email required" })}
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
            {errors.email && <Error message={errors.email.message} />}

            <Input
            {...register("phone", { required: false })}
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
            {...register("request", { required: false })}
              type="text"
              label="Special Requests"
              name="request"
              id="request"
              placeholder="Any special requests or requirements?"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            />
            <Checkbox
            {...register("terms", { required: "Please agree the terms" })}
              isSelected={agreeTerms}
              onValueChange={setAgreeTerms}
              name="terms"
              id="terms"
            >
            <span className='text-blue-600'>I agree to the terms and conditions</span>
            </Checkbox>
            <span className="p-3">{errors.terms && <Error message={errors.terms.message} />}</span>

            <div className="text-right">
              <Button onClick={() => {trigger(["name", "email"])}} color="primary" type="submit" size="lg">
                Submit Booking Request
              </Button>
            </div>
          </form>
          <DevTool control={control} /> {/* set up the dev tool */}
        </CardBody>
      </Card>
    </div>
    
  )
}
function Error({ message }) {
  return (
      <span className="bg-red-50 text-red-600 text-sm">
          {message}
      </span>
  );
}