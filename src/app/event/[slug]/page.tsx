import H1 from "@/components/H1";
import { sleep } from "@/lib/utils";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  await sleep(3000);
  const { slug } = params;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();
  return (
    <main>
      <section
        className="relative overflow-hidden 
      flex items-center justify-center py-14 md:py-20"
      >
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          fill
          sizes="(max-width: 1280) 100vw, 1280px"
          alt="Event image"
          quality={50}
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16 ">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>

            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span>{event.organizerName}</span>
            </p>

            <button
              className="bg-white/30  text-lg capitalize 
             w-[95vw] sm:w-full py-2 mt-5 lg:mt-auto
             rounded-md border-white/10 border-2
             state-effects"
            >
              Get ticket
            </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
      {children}
    </p>
  );
}
