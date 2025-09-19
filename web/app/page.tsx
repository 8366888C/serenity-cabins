"use client";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-5 items-center">
      <h1 className="mx-6 my-6 text-2xl font-bold cursor-default">
        Hello{" "}
        <span
          className="hover:text-red-500 active:text-xl transition-all duration-100 ease-in-out"
          onClick={() => {
            setCount(0);
          }}
        >
          W
        </span>
        orld
      </h1>
      <button
        className="px-6 py-1 bg-red-500 text-slate-100 font-extrabold hover:bg-red-600 active:text-sm transition-all duration-100 ease-in-out rounded-full"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
