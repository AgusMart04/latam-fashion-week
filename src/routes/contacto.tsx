import { createFileRoute } from "@tanstack/react-router";
import { SmartForm, FAQ, Contact } from "../components/sections";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — LATAMFW 2026" },
      {
        name: "description",
        content:
          "Contáctanos para entradas, empresas, postulaciones o consultas generales sobre LATAMFW 2026.",
      },
      { property: "og:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <main className="pt-20">
      <SmartForm />
      <FAQ />
      <Contact />
    </main>
  );
}
