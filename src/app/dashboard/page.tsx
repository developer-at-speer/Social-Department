// src/app/dashboard/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { ShowsList } from "~/components/show/ShowsList";
import { CreateShowCard } from "~/components/show/CreateShowCard";

export default async function DashboardPage() {
  const user = await currentUser();

  // If user is not authenticated, redirect to sign-in
  if (!user) {
    redirect("/sign-in");
  }

  // Get user initials for the avatar fallback
  const getInitials = (name?: string | null) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const userInitials = getInitials(
    (user.firstName ?? user.lastName)
      ? `${user.firstName} ${user.lastName}`
      : (user.username ?? user.emailAddresses[0]?.emailAddress),
  );

  return (
    <>
      <div className="mb-6 flex items-center">
        <Avatar className="mr-4 h-12 w-12">
          <AvatarImage src={user.imageUrl} alt={user.username ?? "User"} />
          <AvatarFallback className="bg-yellow-400 text-black">
            {userInitials}
          </AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle>
              Welcome,{" "}
              {user.firstName ??
                user.username ??
                user.emailAddresses[0]?.emailAddress}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200">
              This is your dashboard. It&apos;s a protected page that only
              authenticated users can access.
            </p>
          </CardContent>
        </Card>
        <div />
        <CreateShowCard />
        <ShowsList />
      </div>
    </>
  );
}
