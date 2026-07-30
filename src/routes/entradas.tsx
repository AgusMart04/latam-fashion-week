import { createFileRoute } from "@tanstack/react-router";
import { Tickets } from "../components/sections";

export const Route = createFileRoute("/entradas")({
  head: () => ({
    meta: [
      { title: "Entradas — LATAMFW 2026" },
      {
        name: "description",
        content: "Conoce las categorías de entradas para LATAMFW 2026: General, VIP y Front Row.",
      },
      { property: "og:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: EntradasPage,
});

function EntradasPage() {
  return (
    <main className="pt-20">
      <Tickets />
    </main>
  );
}
