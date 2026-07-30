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
