import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const { email } = await request.json()
    console.log(email)
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Check if the email already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    })

    if (existingSubscriber) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 })
    }

    // Add the new subscriber
    await prisma.subscriber.create({
      data: { email },
    })

    // Fetch site information
    const siteInfo = await prisma.siteInfo.findFirst()

    if (!siteInfo) {
      return NextResponse.json({ error: 'Site information not found' }, { status: 500 })
    }

    // Prepare the response
    const response = {
      message: 'Subscription successful',
      siteInfo: {
        name: siteInfo.name,
        description: siteInfo.description,
        contactEmail: siteInfo.contactEmail,
        phoneNumber: siteInfo.phoneNumber,
      },
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function GET() {
  try {
    // Fetch site information
    const siteInfo = await prisma.siteInfo.findFirst()

    if (!siteInfo) {
      return NextResponse.json({ error: 'Site information not found' }, { status: 404 })
    }

    // Prepare the response
    const response = {
      siteInfo: {
        name: siteInfo.name,
        description: siteInfo.description,
        contactEmail: siteInfo.contactEmail,
        phoneNumber: siteInfo.phoneNumber,
      },
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.error('Fetch site info error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}