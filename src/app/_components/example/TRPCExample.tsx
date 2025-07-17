"use client";

import { api } from "~/trpc/react";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="text-red-600">Error: {message}</p>;
}

export function TRPCExample() {
  const { data: exampleMessages, error: messagesError } =
    api.example.list.useQuery();

  const { data: secretMessages, error: secretMessagesError } =
    api.example.listSecret.useQuery();

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">TRPC Example</h1>
      <div>
        <h2 className="text-xl font-bold">Example Messages</h2>
        {messagesError ? (
          <ErrorMessage message={messagesError.message} />
        ) : (
          <ul className="pl-3">
            {exampleMessages?.messages.map((message) => (
              <li key={message.id}>{message.text}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2 className="text-xl font-bold">
          Secret Messages (must be logged in)
        </h2>
        {secretMessagesError ? (
          <ErrorMessage message={secretMessagesError.message} />
        ) : (
          <ul>
            {secretMessages?.messages.map((message) => (
              <li key={message.id}>{message.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
