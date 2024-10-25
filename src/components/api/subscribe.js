import { NextResponse } from 'next/server'

// This would typically be in a separate file or environment variable
const MAILCHIMP_API_KEY = '29d9284e575f9ba1f173cfc84be7c62a-us22'
const MAILCHIMP_SERVER = 'your-mailchimp-server'
const MAILCHIMP_LIST_ID = 'your-mailchimp-list-id'

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Construct the data for the Mailchimp API
    const data = {
      email_address: email,
      status: 'subscribed',
    }

    // Make a request to the Mailchimp API
    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )

    if (response.status >= 400) {
      const responseData = await response.json()
      return NextResponse.json({ error: responseData.detail }, { status: response.status })
    }

    return NextResponse.json({ message: 'Subscription successful' }, { status: 200 })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}