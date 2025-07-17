"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { api } from "~/trpc/react";
import { ErrorMessage } from "../common/ErrorMessage";
import { toast } from "sonner";

export function CreateShowCard() {
  const [showName, setShowName] = useState("");

  const utils = api.useUtils();

  const {
    mutate: createShow,
    error: createShowError,
    isError,
    isPending,
  } = api.show.create.useMutation({
    onSuccess: () => {
      utils.show.list
        .invalidate()
        .then(() => {
          setShowName("");
          toast.success("Show created successfully!");
        })
        .catch(() => {
          toast.error("Failed to create show");
        });
    },
  });

  return (
    <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Create a new show</CardTitle>
        <CardDescription className="text-white/80">
          Create a new show to start creating campaigns and episodes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="space-y-3">
          <Input
            className="bg-white/60"
            placeholder="Show name"
            value={showName}
            onChange={(e) => setShowName(e.target.value)}
          />
          <Button
            className="cursor-pointer"
            onClick={() => createShow({ name: showName })}
            disabled={isPending}
          >
            {isPending ? "Creating..." : "Create Show"}
          </Button>
          {isError && <ErrorMessage error={createShowError.message} />}
        </section>
      </CardContent>
    </Card>
  );
}
