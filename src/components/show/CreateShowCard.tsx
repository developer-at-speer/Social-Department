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

export function CreateShowCard() {
  const [showName, setShowName] = useState("");

  const {
    mutate: createShow,
    error: createShowError,
    isError,
    isPending,
  } = api.show.create.useMutation();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new show</CardTitle>
        <CardDescription>
          Create a new show to start creating campaigns and episodes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Show name"
          value={showName}
          onChange={(e) => setShowName(e.target.value)}
        />
        <Button
          onClick={() => createShow({ name: showName })}
          disabled={isPending}
        >
          {isPending ? "Creating..." : "Create Show"}
        </Button>
        {isError && <ErrorMessage error={createShowError.message} />}
      </CardContent>
    </Card>
  );
}
