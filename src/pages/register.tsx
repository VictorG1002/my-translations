import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp routing="hash" appearance={{
        layout: {
          logoLinkUrl: "/",
          logoImageUrl: "/logo.svg",
          
        },
        elements: {
          headerTitle: 'hidden',
        },
        variables: {
          colorPrimary: "#3ECF8E",
        },
      }} signInUrl="/login" />
    </div>
  )
}