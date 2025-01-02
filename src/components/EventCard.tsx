"use client";

import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const MotionLink = motion.create(Link);

export default function EventCard({ event }: { event: EventoEvent }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      className="flex-1 basis-80 h-[380px] max-w-[500px] state-effects"
      href={`/event/${event.slug}`}
      passHref
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{ scale: 0.8, opacity: 0.3 }}
    >
      <section className="w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        ></Image>
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <div
          className="absolute flex flex-col items-center left-[12px] top-[12px] h-[45px] w-[45px]
       bg-black/30 rounded-md"
        >
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleString("default", { day: "2-digit" })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleString("default", { month: "short" })}
          </p>
        </div>
      </section>
    </MotionLink>
  );
}
