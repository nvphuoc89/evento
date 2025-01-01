import Skeleton from "@/components/Skeleton";
import React from "react";

export default function Loading() {
  return (
    <>
      <section
        className="animate-pulse flex flex-col items-center 
    w-[1280px] gap-4 py-14 md:py-20 bg-white/5"
      >
        <div className="flex gap-6 lg:gap-16">
          <Skeleton className="h-[201px] w-[300px] " />
          <div className="flex flex-col gap-4">
            <Skeleton />
            <Skeleton className="h-10" />
            <Skeleton />
          </div>
        </div>
      </section>

      <section className="animate-pulse flex flex-col items-center px-5 py-16">
        <Skeleton className="h-8 w-[400px] mb-12" />
        <Skeleton className="h-20 w-full max-w-4xl mx-auto" />
      </section>
    </>
  );
}
