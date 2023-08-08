import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Signin() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-900">
      <div className="m-5">
        <SignIn afterSignInUrl={"/"}  />
      </div>
    </div>
  );
}
