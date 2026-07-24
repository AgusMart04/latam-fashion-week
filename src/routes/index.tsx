import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Countdown,
  About,
  Pillars,
  Experience,
  WhyParticipate,
  Metrics,
  Timeline,
  Tickets,
  Applications,
  SmartForm,
  Sponsors,
  Organizers,
  FAQ,
  Contact,
} from "../components/sections";
import { LatamMap } from "../components/LatamMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LATAMFW 2026 — Latinoamérica Fashion Week Argentina" },
      {
        name: "description",
          content:
          "LATAMFW 2026. Moda, cultura y negocios conectando a América Latina. 8–13 de septiembre, Corrientes, Argentina.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Countdown />
      <About />
      <Pillars />
      <Experience />
      <WhyParticipate />
      <Metrics />
      <Timeline />
      <Tickets />
      <Applications />
      <SmartForm />
      <Sponsors />
      <LatamMap />
      <Organizers />
      <FAQ />
      <Contact />
    </main>
  );
}
