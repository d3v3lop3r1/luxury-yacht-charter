'use client'
import React from 'react'
import { 
  Card, 
  CardBody, 
  CardHeader,
  Image,
  Divider,
  Button
} from "@nextui-org/react"
import { UsersIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/24/outline'

const AboutUs = () => {
  const teamMembers = [
    { name: "Péter Novák", role: "Founder & CEO", image: "../images/placeholder.svg?height=200&width=200" },
    { name: "Jane Smith", role: "Chief Operations Officer", image: "/images/placeholder.svg?height=200&width=200" },
    { name: "Mike Johnson", role: "Head of Customer Experience", image: "/images/placeholder.svg?height=200&width=200" },
  ]

  return (
    <div className="mx-auto px-10 py-14 bg-blue-800">
      <h1 className="text-4xl font-bold mb-8 text-center">About Zlata Luka Luxury Yachting</h1>

      <Card className="mb-8">
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                    <h2 className="text-2xl font-semibold text-gray-400 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Luxury Yacht Charters has been providing unforgettable experiences on the Adriatic Sea most beautiful waters. Our passion for the sea and commitment to excellence have made us a leader in the luxury yacht charter industry.
              </p>
              <p className="text-gray-700">
                With a fleet of meticulously maintained yachts and a team of experienced professionals, we offer bespoke charter experiences tailored to our clients desires. From intimate getaways to lavish celebrations, we ensure every voyage is nothing short of extraordinary.
              </p>
            </div>
            <Image
              src="images/hero.webp"
              alt="Luxury yacht at sea"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </CardBody>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-gray-400">Our Values</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <TrophyIcon className="w-12 h-12 text-blue-500 mb-4" />
              
              <h3 className="text-xl font-semibold mb-2 text-gray-500">Excellence</h3>
              <p className="text-gray-700">We strive for excellence in every aspect of our service, from our yachts to our customer care.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <UsersIcon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-500">Personalization</h3>
              <p className="text-gray-700">We tailor each charter experience to meet the unique desires of our clients.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <GlobeAltIcon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-500">Sustainability</h3>
              <p className="text-gray-700">We are committed to responsible practices that protect the marine environments we cherish.</p>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-gray-400">Our Team</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardBody>
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1 text-gray-600">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Experience Luxury on the Sea?</h2>
        <Button color="primary" size="lg" as="a" href="/booking">
          Book Your Charter Now
        </Button>
      </div>
    </div>
  )
}

export default AboutUs