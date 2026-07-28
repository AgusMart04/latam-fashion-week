import { createFileRoute } from "@tanstack/react-router";
import { Experience, WhyParticipate, Metrics, Timeline } from "../components/sections";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "Experiencia — LATAMFW 2026" },
      {
        name: "description",
        content:
          "Vive la experiencia LATAMFW: ocho territorios de moda, por qué participar, métricas del encuentro y cronograma de seis días.",
      },
    ],
  }),
  component: ExperienciaPage,
});

function ExperienciaPage() {
  return (
    <main className="pt-20">
      <Experience />
      <WhyParticipate />
      <Metrics />
      <Timeline />
    </main>
  );
}
