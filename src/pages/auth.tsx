import { SignIn } from "@clerk/nextjs";

export default function Auth() {
  return (
    <div className="flex justify-center items-center  h-screen">
      <SignIn />
    </div>
  );
}
