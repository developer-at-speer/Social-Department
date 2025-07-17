// src/app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <SignUp routing="path" signInUrl="/sign-in" />
      </div>
    </div>
  );
}
