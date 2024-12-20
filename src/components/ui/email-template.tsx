import { Html, Heading, Text } from "@react-email/components"
const EmailTemplate = ({
  name,
  email,
  message
}: {
  name: string
  email: string
  message: string
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">Message to Zlatna Luka Luxury Yachting</Heading>
      <Text>You just submitted a message. Here are the details:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Message: {message}</Text>
    </Html>
  )
}
export default EmailTemplate