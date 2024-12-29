import H1 from "@/components/H1";
import { EventoEvent } from "@/lib/types";
import { log } from "console";

export default async function EventsPage({
  params,
}: {
  params: { city: string };
}) {
  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
}
