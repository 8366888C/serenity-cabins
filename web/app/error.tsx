"use client";

export default function Error({
  error,
}: {
  error: Error;
  reset: () => { object: object };
}) {
  return (
    <main className="mt-20 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold text-slate-300">
        Something went wrong!
      </h1>
      <p className="text-blue-200">{error.message}</p>
    </main>
  );
}
