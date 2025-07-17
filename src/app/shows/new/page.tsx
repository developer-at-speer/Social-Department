import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { CreateShowCard } from "~/components/show/CreateShowCard";
import { ShowsList } from "~/components/show/ShowsList";

export default async function CreateShowPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col gap-4">
      <CreateShowCard />
      <ShowsList />
    </div>
  );
}
