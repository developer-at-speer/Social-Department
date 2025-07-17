"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "../ui/sonner";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>{children}</TRPCReactProvider>
      <Toaster richColors />
    </ClerkProvider>
  );
}
