import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

export default function CardLoading() {
  return (
    <div className="animate-pulse flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
