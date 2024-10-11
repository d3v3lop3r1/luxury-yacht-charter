import React from 'react'
import Image from "next/image"


const Card = ({ className, children }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

const CardHeader = ({ className, children }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  )
}

const CardTitle = ({ className, children }) => {
  return (
    <h3 className={`text-xl text-gray-500 font-semibold mb-2 ${className}`}>
      {children}
    </h3>
  )
}

const CardContent = ({ className, children }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  )
}

const CardFooter = ({ className, children }) => {
  return (
    <div className={`px-6 py-4 bg-gray-50 ${className}`}>
      {children}
    </div>
  )
}

const CardImage = ({ src, alt, className }) => {
  return (
    <Image src={src} alt={alt} className={`w-full object-cover ${className}`} />
  )
}


export {Card, CardHeader, CardTitle, CardContent, CardFooter, CardImage}