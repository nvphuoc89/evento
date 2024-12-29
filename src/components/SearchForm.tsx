"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchForm() {
  const [searchText, setsearchText] = useState("");
  const router = useRouter();
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleOnSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none
           ring-accent/50 focus:ring-2 focus:bg-white/10 transition"
        type="text"
        placeholder="Search events in any city ..."
        spellCheck={false}
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
      />
    </form>
  );
}
