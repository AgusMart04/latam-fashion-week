import { createFileRoute } from "@tanstack/react-router";
import { Countdown, About, Pillars } from "../components/sections";

export const Route = createFileRoute("/evento")({
  head: () => ({
    meta: [
      { title: "Evento — LATAMFW 2026" },
      {
        name: "description",
        content:
          "Descubre el evento LATAMFW 2026: cuenta regresiva, sobre el evento y los tres pilares que sostienen la edición.",
      },
      { property: "og:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: EventoPage,
});

function EventoPage() {
  return (
    <main className="pt-20">
      <Countdown />
      <About />
      <Pillars />
    </main>
  );
}
