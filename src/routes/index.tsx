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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LATAMFW 2026 — Latinoamérica Fashion Week Argentina" },
      {
        name: "description",
        content:
          "LATAMFW 2026. Moda, cultura y negocios conectando a América Latina. 26–28 de septiembre, Corrientes, Argentina.",
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
      <Organizers />
      <FAQ />
      <Contact />
    </main>
  );
}
