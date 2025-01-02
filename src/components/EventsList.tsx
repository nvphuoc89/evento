import EventCard from "./EventCard";
import { getEvents } from "@/lib/utils";

export default async function EventsList({ city }: { city: string }) {
  const events = await getEvents(city);
  return (
    <section className="max-w-[1100px] flex flex-wrap justify-center gap-10 px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
