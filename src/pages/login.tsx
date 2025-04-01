import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn routing="hash" appearance={{
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
      }}
      afterSignOutUrl={"/"}
      />
    </div>
  );
}
