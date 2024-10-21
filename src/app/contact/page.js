'use client'
import React, { useState } from 'react'
import { 
  Card, 
  CardBody, 
  CardHeader,
  Input,
  Textarea,
  Button,
  Divider
} from "@nextui-org/react"
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    // You could also add validation here before submitting
  }

  return (
    <div className=" contact-us container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-600">Send Us a Message</h2>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Textarea
                label="Message"
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button color="primary" type="submit">
                Send Message
              </Button>
            </form>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-600">Contact Information</h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <PhoneIcon className="w-6 h-6 mr-2 text-blue-500" />
                <p>+381 (659) 708-303</p>
              </div>
              <div className="flex items-center text-gray-600">
                <EnvelopeIcon className="w-6 h-6 mr-2 text-blue-500" />
                <p>zlatnalukadoo@gmail.com</p>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="w-6 h-6 mr-2 text-blue-500" />
                <p>Marka Oreškovića 3, Palić 458403, Subotica</p>
              </div>
            </div>

            <Divider className="my-4" />

            <div className='text-gray-600'>
              <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <Divider className="my-4" />

            <div className='text-gray-600'>
              <h3 className="text-xl font-semibold mb-2">Emergency Contact</h3>
              <p>For urgent matters outside of office hours:</p>
              <p>Emergency Hotline: +381 (659) 708-303</p>
            </div>
          </CardBody>
        </Card>
      </div>

      <Card className="mt-8 text-gray-600">
        <CardBody>
          <h2 className="text-2xl font-semibold mb-4">Visit Our Office</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204288.90168410135!2d19.50129606034412!3d46.17453974193813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743618eaa0b1717%3A0xac7ebb066c4dc72f!2zTWFya2EgT3JlxaFrb3ZpxIdhIDMsIFBhbGnEhyA0NTg0MDMsIFN6ZXJiaWE!5e0!3m2!1shu!2suk!4v1729546036884!5m2!1shu!2suk" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Office Location Map"
            ></iframe>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default ContactPage