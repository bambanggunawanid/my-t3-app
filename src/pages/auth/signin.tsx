import { SignIn } from "@clerk/nextjs";

export default function Signin() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn afterSignInUrl={"/"} />
    </div>
  );
}
