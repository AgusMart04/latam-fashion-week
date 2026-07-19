import { createFileRoute } from "@tanstack/react-router";
import { SmartForm, FAQ, Contact } from "../components/sections";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — LATAMFW 2026" },
      {
        name: "description",
        content:
          "Contactanos para entradas, sponsors, postulaciones o consultas generales sobre LATAMFW 2026.",
      },
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
