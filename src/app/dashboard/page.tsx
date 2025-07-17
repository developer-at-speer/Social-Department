// src/app/dashboard/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Header } from "~/components/landing-page/Header";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

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
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const userInitials = getInitials(user.firstName && user.lastName 
    ? `${user.firstName} ${user.lastName}` 
    : user.username || user.emailAddresses[0]?.emailAddress);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-purple-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={user.imageUrl} alt={user.username || "User"} />
            <AvatarFallback className="bg-yellow-400 text-black">{userInitials}</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle>Welcome, {user.firstName || user.username || user.emailAddresses[0]?.emailAddress}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                This is your dashboard. It's a protected page that only authenticated users can access.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}