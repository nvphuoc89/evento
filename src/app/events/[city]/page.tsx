import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import React, { Suspense } from "react";
import CardLoading from "./CardLoading";
import { captializeFirstLetter } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city.toLowerCase();

  return {
    title: formatEventCity(city),
  };
}

function formatEventCity(city: string) {
  return city === "all"
    ? "All Events"
    : `Events in ${captializeFirstLetter(city)}`;
}

export default async function EventsPage({ params }: Props) {
  const city = params.city.toLowerCase();
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">{formatEventCity(city)}</H1>
      <Suspense fallback={<CardLoading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
