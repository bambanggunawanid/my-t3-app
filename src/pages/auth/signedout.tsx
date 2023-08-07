import { SignedOut } from "@clerk/nextjs";

export default function Signout() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignedOut />
    </div>
  );
}
