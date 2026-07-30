import { createFileRoute } from "@tanstack/react-router";
import { LiveStream } from "../components/LiveStream";

export const Route = createFileRoute("/directo")({
  head: () => ({
    meta: [
      { title: "Transmisión en Vivo — LATAMFW 2026" },
      {
        name: "description",
        content:
          "Seguí la transmisión en vivo de Latinoamérica Fashion Week Argentina 2026. Seis días de desfiles, conferencias y eventos desde Corrientes.",
      },
      { property: "og:title", content: "Transmisión en Vivo — LATAMFW 2026" },
      {
        property: "og:description",
        content:
          "Seguí la transmisión en vivo de Latinoamérica Fashion Week Argentina 2026. Seis días de desfiles, conferencias y eventos desde Corrientes.",
      },
      { property: "og:image", content: "/og-directo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Transmisión en Vivo — LATAMFW 2026" },
      { name: "twitter:image", content: "/og-directo.jpg" },
    ],
  }),
  component: DirectoPage,
});

function DirectoPage() {
  return (
    <main>
      <LiveStream />
    </main>
  );
}
