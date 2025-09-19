import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-row items-center justify-between px-6 py-6">
      <h1
        className="text-2xl font-extrabold text-slate-100"
        onClick={() => {
          setCount(0);
        }}
      >
        Hello World
      </h1>
      <button
        className="rounded-full bg-red-500 px-6 py-2 font-extrabold text-slate-800 transition-all duration-100 ease-in-out hover:text-slate-100 active:bg-red-600 active:text-sm"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
