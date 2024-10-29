"use client"
import { sendSubscription } from "@/actions"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { 
    Card, 
    CardBody, 
    CardHeader, 
    Input, 
    Button
  } from "@nextui-org/react"
import { EnvelopeIcon } from '@heroicons/react/24/outline'



export default function SubscriptionForm() {
  const [sendSubscriptionState, sendSubscriptionAction] = useFormState(sendSubscription, {
    error: null,
    success: false
  })
  useEffect(() => {
    if (sendSubscriptionState.success) {
      alert("Subscrition sent!")
    }
    if (sendSubscriptionState.error) {
      alert("Error sending subscrition!")
    }
  }, [sendSubscriptionState])
  return (
    
    <div className="container mx-auto px-2 py-2">
      <h3 className="text-xl font-bold mb-8 text-center">Subscribe to Our Newsletter</h3>
        <Card className="max-w-md mx-auto">
            <CardHeader className="flex gap-3">
                <EnvelopeIcon className="w-6 h-6 text-primary" />
                <p className="text-md text-gray-700">Stay Updated</p>
            </CardHeader>
            <CardBody>
                <form action={sendSubscriptionAction} className="space-y-1">
                    <Input type="email" label="Email" id="email" name="email" />
                    <Button color="primary" type="submit">Send</Button>
                </form>
            </CardBody>
        </Card>
    </div>
    
  )
}