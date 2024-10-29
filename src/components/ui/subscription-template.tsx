import { Html, Heading, Text } from "@react-email/components"
const SubscriptionTemplate = ({
  email
}: {
  email: string
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Subscription</Heading>
      <Text>New subscripted member. Here are the details:</Text>
      <Text>Email: {email}</Text>
    </Html>
  )
}
export default SubscriptionTemplate