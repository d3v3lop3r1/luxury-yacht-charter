"use client"
import { sendEmail } from "@/actions"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { 
    Card, 
    CardBody, 
    CardHeader, 
    Input, 
    Button,
    Textarea 
  } from "@nextui-org/react"
import { EnvelopeIcon } from '@heroicons/react/24/outline'



export default function EmailForm() {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false
  })
  useEffect(() => {
    if (sendEmailState.success) {
      alert("Email sent!")
    }
    if (sendEmailState.error) {
      alert("Error sending email!")
    }
  }, [sendEmailState])
  return (
    <Card>
      <CardHeader className="flex gap-3">
          <EnvelopeIcon className="w-6 h-6 text-primary" />
          <p className="text-md text-gray-700">Send a message</p>
      </CardHeader>
      <CardBody>
          <form action={sendEmailAction} className="space-y-4">
              <Input type="text" label="Name" id="name" name="name" />
              <Input type="email" label="Email" id="email" name="email" />
              <Textarea name="message" label="Message" placeholder="Enter your message" className="" id="message" cols={30} rows={10}></Textarea>
              <Button type="submit">Send</Button>
          </form>
      </CardBody>
    </Card>
  )
}