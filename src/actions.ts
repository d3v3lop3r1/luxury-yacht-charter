"use server"
import { Resend } from "resend"
import EmailTemplate from "./components/ui/email-template"
//import SubscriptionTemplate from "./components/ui/subscription-template"
import BookingTemplate from "./components/ui/booking-template"
//import { render } from "@react-email/render"
interface State {
  error: string | null
  success: boolean
}

// Send Email
export const sendEmail = async (prevState: State, formData: FormData) => {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "Zlatna Luka <support@zlatnaluka.rs>",
      to: email,
      bcc: "info@zlatnaluka.rs",
      subject: "Message to Zlatna Luka Luxury Yachting",
      react: EmailTemplate({ name, email, message })
    })
    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error as Error).message,
      success: false
    }
  }
}

// Send Booking
export const sendBooking = async (prevState: State, formData: FormData) => {
  console.log("sendBooking fuction start")
  const yacht = formData.get("yacht") as string
  const startdate = formData.get("startdate") as string
  const enddate = formData.get("enddate") as string
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const request = formData.get("request") as string
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "Zlatna Luka <support@zlatnaluka.rs>",
      to: email,
      bcc: "info@zlatnaluka.rs",
      subject: "Booking request from site",
      react: BookingTemplate({ yacht, startdate, enddate, name, email, phone, request })
    })
    console.log(name)
    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error as Error).message,
      success: false
    }
  }
}

// Send Subscription
export const sendSubscription = async (prevState: State, formData: FormData) => {
  const email = formData.get("email") as string
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: "Zlatna Luka <support@zlatnaluka.rs>",
    //   to: email,
    //   subject: "New Subscription",
    //   react: SubscriptionTemplate({ email })
    // })
    resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: 'cfc4f049-f3cd-4614-9adb-03f89dd677af'
    });
    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error as Error).message,
      success: false
    }
  }
}