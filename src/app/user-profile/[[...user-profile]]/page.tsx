// src/app/user-profile/[[...user-profile]]/page.tsx
import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-700 py-10">
      <div className="w-full max-w-4xl">
        <UserProfile 
          path="/user-profile"
          routing="path"
        />
      </div>
    </div>
  );
}