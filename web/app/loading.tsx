import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader className="size-20 animate-spin stroke-blue-300"></Loader>;
    </div>
  );
}
