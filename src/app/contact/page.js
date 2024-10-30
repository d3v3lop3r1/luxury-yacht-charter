'use client'
import { 
  Card, 
  CardBody, 
  CardHeader,
  Divider
} from "@nextui-org/react"
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import EmailForm from "@/components/ui/email-form"


const ContactPage = () => {

  return (
    <div className=" contact-us container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <EmailForm/>
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

    </div>
  )
}

export default ContactPage