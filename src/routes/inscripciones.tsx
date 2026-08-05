import { createFileRoute } from "@tanstack/react-router";
import { SmartForm } from "../components/sections";
import latamLogo from "@/assets/logos/LATAMFW-LOGO-01.png";

export const Route = createFileRoute("/inscripciones")({
  head: () => ({
    meta: [
      { title: "Inscripciones — LATAMFW 2026" },
      {
        name: "description",
        content:
          "Inscribite en LATAMFW 2026. Completa el formulario para participar como modelo, diseñador, expositor o patrocinador.",
      },
      { property: "og:image", content: "https://latam-fashion-week-demo.vercel.app/og-inscripciones.jpg" },
      { name: "twitter:image", content: "https://latam-fashion-week-demo.vercel.app/og-inscripciones.jpg" },
    ],
  }),
  component: InscripcionesPage,
});

function InscripcionesPage() {
  return (
    <main className="min-h-screen bg-background pt-8 pb-16">
      <div className="flex justify-center mb-8">
        <img src={latamLogo} alt="LATAMFW" className="h-10 w-auto" />
      </div>

      <SmartForm />

      <div className="mt-12 text-center text-xs text-graphite">
        © 2026 Latinoamérica Fashion Week Argentina
      </div>
    </main>
  );
}
