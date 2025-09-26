"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface SidebarProps {
  toggle: boolean;
}

export default function Sidebar({ toggle = true }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {toggle ? (
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="absolute top-57 left-12 z-49"
        >
          {isOpen ? (
            <ArrowLeftIcon className="size-7 rounded-lg bg-blue-300 stroke-slate-700 px-1 py-1 transition-all duration-100 ease-in-out hover:bg-blue-400 hover:stroke-slate-200 active:size-6" />
          ) : (
            <ArrowRightIcon className="size-7 rounded-lg bg-blue-300 stroke-slate-700 px-1 py-1 transition-all duration-100 ease-in-out hover:bg-blue-400 hover:stroke-slate-200 active:size-6" />
          )}
        </button>
      ) : null}
      <div
        className={`${toggle ? (isOpen ? "absolute top-0 left-0 z-48 h-full w-full translate-x-0 bg-slate-800/50 py-100" : "absolute top-0 left-0 z-48 h-full w-full -translate-x-full bg-slate-800/50 py-100") : "mt-60 h-screen w-120 bg-slate-800/30"} backdrop-blur-sm transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col text-center text-xl font-light text-slate-400 select-none">
          <Link
            href="/account"
            className="bg-slate-800/80 py-2 transition-all duration-100 ease-in-out hover:translate-y-1 hover:bg-blue-400 hover:font-normal hover:text-slate-100 active:translate-y-0.5 active:bg-blue-500"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Home
          </Link>
          <Link
            href="/account/reservations"
            className="bg-slate-800/80 py-2 transition-all duration-100 ease-in-out hover:translate-y-1 hover:bg-blue-400 hover:font-normal hover:text-slate-100 active:translate-y-0.5 active:bg-blue-500"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Reservation
          </Link>
          <Link
            href="/account/profile"
            className="bg-slate-800/80 py-2 transition-all duration-100 ease-in-out hover:translate-y-1 hover:bg-blue-400 hover:font-normal hover:text-slate-100 active:translate-y-0.5 active:bg-blue-500"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Guest Profile
          </Link>
          <Link
            href="/account"
            className="bg-slate-800/80 py-2 transition-all duration-100 ease-in-out hover:translate-y-1 hover:bg-red-400 hover:font-normal hover:text-slate-100 active:translate-y-0.5 active:bg-red-500"
          >
            Sign out
          </Link>
        </div>
      </div>
    </>
  );
}
