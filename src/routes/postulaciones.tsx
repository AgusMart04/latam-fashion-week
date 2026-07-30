import { createFileRoute } from "@tanstack/react-router";
import { Applications, SmartForm } from "../components/sections";

export const Route = createFileRoute("/postulaciones")({
  head: () => ({
    meta: [
      { title: "Postulaciones — LATAMFW 2026" },
      {
        name: "description",
        content: "Postula para LATAMFW 2026: diseñadores, modelos, maquilladores y estilistas.",
      },
      { property: "og:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
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
