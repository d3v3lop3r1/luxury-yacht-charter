import { Html, Heading, Text } from "@react-email/components"
const BookingTemplate = ({
    yacht,
    startdate,
    enddate,
    name,
    email,
    phone,
    request
}: {
    yacht: string
    startdate: string
    enddate: string
    name: string
    email: string
    phone: string
    request: string
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">Booking request</Heading>
      <Text>You just submitted a booking form. Here are the details:</Text>
      <Text>Yacht: {yacht}</Text>
      <Text>Start Date: {startdate}</Text>
      <Text>End Date: {enddate}</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Message: {request}</Text>
    </Html>
  )
}
export default BookingTemplate