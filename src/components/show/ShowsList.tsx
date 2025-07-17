"use client";

import { api } from "~/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function ShowsList() {
  const { data: shows } = api.show.list.useQuery();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shows</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {shows?.shows.map((show) => (
            <li key={show.id}>{show.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
