import { createFileRoute } from "@tanstack/react-router";
import { Applications, SmartForm } from "../components/sections";

export const Route = createFileRoute("/postulaciones")({
  head: () => ({
    meta: [
      { title: "Postulaciones — LATAMFW 2026" },
      {
        name: "description",
        content: "Postulá para LATAMFW 2026: diseñadores, modelos, maquilladores y estilistas.",
      },
    ],
  }),
  component: PostulacionesPage,
});

function PostulacionesPage() {
  return (
    <main className="pt-20">
      <Applications />
      <div id="form">
        <SmartForm />
      </div>
    </main>
  );
}
