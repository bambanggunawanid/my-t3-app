import { SignIn } from "@clerk/nextjs";

export default function Signin() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900">
      <div className="m-5">
        <SignIn afterSignInUrl={"/"} />
      </div>
    </div>
  );
}
