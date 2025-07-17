// src/app/user-profile/[[...user-profile]]/page.tsx
import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="flex justify-center">
      <UserProfile path="/user-profile" routing="path" />
    </div>
  );
}
