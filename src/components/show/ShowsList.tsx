"use client";

import { api } from "~/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Loader2, X } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

export function ShowsList() {
  const { data: shows, isPending } = api.show.list.useQuery();

  const utils = api.useUtils();

  const { mutate: removeShow, isPending: isRemovingShow } =
    api.show.remove.useMutation({
      onSuccess: () => {
        utils.show.list
          .invalidate()
          .then(() => {
            toast.success("Show removed successfully!");
          })
          .catch(() => {
            toast.error("Failed to remove show");
          });
      },
    });

  return (
    <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Shows you have added</CardTitle>
      </CardHeader>
      <CardContent>
        {isPending ? (
          <div className="flex justify-center">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        ) : (
          <ul className="space-y-2">
            {shows?.shows.map((show) => (
              <li key={show.id} className="flex justify-between">
                {show.name}
                <Button
                  variant="destructive"
                  size="icon"
                  className="size-6 cursor-pointer"
                  disabled={isRemovingShow}
                  onClick={() => removeShow({ id: show.id })}
                >
                  <X className="size-4" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
