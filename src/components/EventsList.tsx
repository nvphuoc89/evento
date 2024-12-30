import { EventoEvent } from "@/lib/types";
import EventCard from "./EventCard";

export default function EventsList({ events }: { events: EventoEvent[] }) {
  return (
    <section className="max-w-[1100px] flex flex-wrap justify-center gap-10 px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
