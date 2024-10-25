import React, { useState } from 'react'
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Input, 
  Button, 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  useDisclosure
} from "@nextui-org/react"
import { EnvelopeIcon } from '@heroicons/react/24/outline'

const SubscribePage = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/src/components/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        onOpen() // Open the success modal
        setEmail('')
      } else {
        setError(data.error || 'An error occurred. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.',err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-xl font-bold mb-8 text-center">Subscribe to Our Newsletter</h3>
      <Card className="max-w-md mx-auto">
        <CardHeader className="flex gap-3">
          <EnvelopeIcon className="w-6 h-6 text-primary" />
          <p className="text-md">Stay Updated</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button 
              type="submit" 
              color="primary" 
              isLoading={isLoading}
              className="w-full"
            >
              Subscribe
            </Button>
          </form>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Subscription Successful</ModalHeader>
          <ModalBody>
            <p>Thank you for subscribing to our newsletter!</p>
            <p>We ve sent a confirmation email to your inbox. Please check and confirm your subscription.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default SubscribePage