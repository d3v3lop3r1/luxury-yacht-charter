"use client"
import { sendEmail } from "@/actions"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { Toaster, toaster } from "@/components/ui/toaster"

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
      toaster.create({
        title: "Message sent successfully",
        type: "success"
      })
      document.getElementById("emailForm").reset();
    }
    if (sendEmailState.error) {
      toaster.create({
        title: "Message not sent",
        type: "error"
      })
    }
  }, [sendEmailState])
  return (
    <Card>
      <CardHeader className="flex gap-3">
          <EnvelopeIcon className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold text-gray-600">Send a message</h2>
      </CardHeader>
      <CardBody>
        <Toaster />
          <form action={sendEmailAction} className="space-y-4" id="emailForm">
              <Input type="text" label="Name" id="name" name="name" />
              <Input type="email" label="Email" id="email" name="email" />
              <Textarea name="message" label="Message" placeholder="Enter your message" className="" id="message" cols={30} rows={10}></Textarea>
              <Button color="primary" type="submit">Send</Button>
          </form>
      </CardBody>
    </Card>
  )
}