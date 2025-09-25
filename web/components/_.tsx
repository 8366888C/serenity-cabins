"use client";

import Link from "next/link";
import { useState } from "react";

interface SidebarProps {
  withToggle?: boolean; // if true → show toggle button
}

export default function Sidebar({ withToggle = false }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (only if withToggle is true) */}
      {withToggle && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 left-6 z-50 rounded-lg bg-slate-800/50 px-4 py-2 text-slate-200 transition hover:bg-blue-500"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-slate-900/95 shadow-xl transition-transform duration-300 ease-in-out ${withToggle ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"} z-40 select-none`}
      >
        <div className="mt-24 flex flex-col px-6 text-lg font-light text-slate-400">
          <Link
            href="/account"
            className="bg-slate-800/30 px-3 py-2 transition-all duration-100 ease-in-out hover:translate-x-1 hover:bg-blue-400 hover:font-normal hover:text-slate-100 active:translate-x-0.5 active:bg-blue-500"
          >
            Home
          </Link>
          <Link
            href="/account/reservations"
            className="bg-slate-800/30 px-3 py-2 transition-all duration-100 ease-in-out hover:translate-x-1 hover:bg-blue-400 hover:font-normal hover:text-slate-100 active:translate-x-0.5 active:bg-blue-500"
          >
            Reservation
          </Link>
          <Link
            href="/account/profile"
            className="bg-slate-800/30 px-3 py-2 transition-all duration-100 ease-in-out hover:translate-x-1 hover:bg-blue-400 hover:font-normal hover:text-slate-100 active:translate-x-0.5 active:bg-blue-500"
          >
            Guest Profile
          </Link>
          <Link
            href="/account"
            className="bg-slate-800/30 px-3 py-2 transition-all duration-100 ease-in-out hover:translate-x-1 hover:bg-blue-400 hover:font-normal hover:text-slate-100 active:translate-x-0.5 active:bg-blue-500"
          >
            Sign out
          </Link>
        </div>
      </div>

      {/* Optional backdrop when sidebar is open */}
      {withToggle && isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
