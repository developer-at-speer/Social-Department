// src/app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-700">
      <div className="w-full max-w-md">
        <SignUp 
          routing="path"
          signInUrl="/sign-in"
        />
      </div>
    </div>
  );
}