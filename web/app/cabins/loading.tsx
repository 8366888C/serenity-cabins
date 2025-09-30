import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center space-x-6">
      <Loader className="size-20 animate-spin stroke-blue-300"></Loader>;
      <h1 className="text-2xl text-slate-300">
        Cabins <span className="text-blue-300">→</span>
      </h1>
    </div>
  );
}
