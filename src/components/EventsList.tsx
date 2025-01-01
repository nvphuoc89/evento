import { EventoEvent } from "@/lib/types";
import EventCard from "./EventCard";
import { sleep } from "@/lib/utils";

export default async function EventsList({ city }: { city: string }) {
  await sleep(2000);
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();
  return (
    <section className="max-w-[1100px] flex flex-wrap justify-center gap-10 px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
