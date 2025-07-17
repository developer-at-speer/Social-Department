"use client";
// src/app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <SignIn
          path="/sign-in"
          appearance={{
            elements: {
              formButtonPrimary: "bg-yellow-400 text-black hover:bg-yellow-500",
              card: "bg-white",
              headerTitle: "text-gray-900",
              headerSubtitle: "text-gray-600",
              formFieldLabel: "text-gray-700",
              formFieldInput: "border-gray-300 text-gray-900",
              footerActionLink: "text-purple-600 hover:text-purple-800",
              socialButtonsBlockButton: "border-gray-300 hover:bg-gray-100",
              socialButtonsBlockButtonText: "text-gray-700",
              dividerText: "text-gray-500",
              formFieldInputShowPasswordButton: "text-gray-500",
            },
          }}
          routing="path"
          signUpUrl="/sign-up"
        />
      </div>
    </div>
  );
}
