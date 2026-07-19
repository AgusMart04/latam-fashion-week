import { createFileRoute } from "@tanstack/react-router";
import { Tickets } from "../components/sections";

export const Route = createFileRoute("/entradas")({
  head: () => ({
    meta: [
      { title: "Entradas — LATAMFW 2026" },
      {
        name: "description",
        content: "Conocé las categorías de entradas para LATAMFW 2026: General, VIP y Front Row.",
      },
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
