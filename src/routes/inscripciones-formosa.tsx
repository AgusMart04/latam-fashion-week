import { createFileRoute } from "@tanstack/react-router";
import { SmartForm } from "../components/sections";
import latamLogo from "@/assets/logos/LATAMFW-LOGO-01.png";

const FORMOSA_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyS03z5nCVTcHVEJxOtZQaQ-RBeImim1T2QnH4dS-Ird0HkXg3DEuhjJcdNuFENS9oL3w/exec";

export const Route = createFileRoute("/inscripciones-formosa")({
  head: () => ({
    meta: [
      { title: "Inscripciones — LATAMFW Formosa 2026" },
      {
        name: "description",
        content:
          "Inscríbase en LATAMFW Formosa 2026. Completa el formulario para participar como modelo, diseñador, expositor o patrocinador.",
      },
      { property: "og:image", content: "https://latam-fashion-week-demo.vercel.app/og-inscripciones-formosa.jpg" },
      { name: "twitter:image", content: "https://latam-fashion-week-demo.vercel.app/og-inscripciones-formosa.jpg" },
    ],
  }),
  component: InscripcionesFormosaPage,
});

function InscripcionesFormosaPage() {
  return (
    <main className="min-h-screen bg-background pt-8 pb-16">
      <div className="flex flex-col items-center mb-8">
        <img src={latamLogo} alt="LATAMFW" className="h-10 w-auto" />
        <span className="mt-4 inline-block border-2 border-gold bg-gold/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          Formosa 2026
        </span>
      </div>

      <SmartForm scriptUrl={FORMOSA_SCRIPT_URL} />

      <div className="mt-12 text-center text-xs text-graphite">
        © 2026 Latinoamérica Fashion Week Formosa
      </div>
    </main>
  );
}
