import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { EventoEvent } from "@/lib/types";
import { sleep } from "@/lib/utils";
import React, { Suspense } from "react";
import CardLoading from "./loading";
import Loading from "./loading";

export default async function EventsPage({
  params,
}: {
  params: { city: string };
}) {
  const city = params.city.toLowerCase();
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
