interface ErrorMessageProps {
  error: Error | string | undefined;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) {
    return null;
  }

  return (
    <p className="text-red-600">
      {error instanceof Error ? error.message : error}
    </p>
  );
}
