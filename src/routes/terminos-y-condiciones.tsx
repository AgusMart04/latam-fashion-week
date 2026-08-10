import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — LATAMFW 2026" },
      {
        name: "description",
        content:
          "Términos y condiciones de uso del sitio, transmisión en vivo y servicios de Latinoamérica Fashion Week Argentina 2026.",
      },
      { property: "og:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: TerminosYCondicionesPage,
});

function TerminosYCondicionesPage() {
  return (
    <main className="pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <h1 className="font-display text-4xl tracking-tight text-carbon lg:text-5xl">
          Términos y Condiciones
        </h1>
        <p className="mt-4 text-sm text-graphite">Última actualización: agosto 2026</p>

        <div className="prose mt-10 space-y-8 text-base leading-relaxed text-graphite">
          {/* 1 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">1. Aceptación</h2>
            <p>
              Al acceder y utilizar el sitio latinoamericafashionweekargentina.com, el usuario
              acepta los presentes Términos y Condiciones. Si no está de acuerdo con alguno de
              estos términos, debe abstenerse de utilizar el sitio.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">2. Descripción del servicio</h2>
            <p>
              LATAMFW es una plataforma informativa y de difusión dedicada a Latinoamérica Fashion
              Week Argentina 2026. El sitio ofrece:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Información sobre el evento, su programa y actividades.</li>
              <li>Formularios de contacto, postulación y compra de entradas.</li>
              <li>Servicio de transmisión en vivo del evento.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">3. Transmisión en vivo</h2>
            <p>
              LATAMFW se esfuerza por garantizar la disponibilidad continua del servicio de
              transmisión en vivo. Sin embargo, el usuario reconoce que:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                La disponibilidad del servicio puede verse afectada por interrupciones técnicas,
                mantenimiento, causas de fuerza mayor o circunstancias fuera de nuestro control.
              </li>
              <li>
                No garantizamos la calidad, resolución o continuidad ininterrumpida de la
                transmisión.
              </li>
              <li>
                LATAMFW no será responsable por daños derivados de interrupciones, caídas o
                limitaciones en el servicio de transmisión.
              </li>
            </ul>
            <p className="mt-3">
              El acceso a la transmisión en vivo puede estar sujeto a restricciones geográficas
              y a la disponibilidad de ancho de banda del usuario.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">4. Grabación del evento</h2>
            <p>
              LATAMFW podrá grabar, fotografiar o transmitir fragmentos del evento con fines
              promocionales y de difusión. Al asistir o participar del evento o de la transmisión
              en vivo, el usuario acepta que su imagen, voz o participaciones podrán ser capturadas
              y utilizadas en:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Redes sociales oficiales de LATAMFW.</li>
              <li>Sitio web y plataformas de streaming.</li>
              <li>Materiales promocionales y de prensa.</li>
            </ul>
            <p className="mt-3">
              El usuario renuncia expresamente a reclamar derechos de imagen,.privacidad o
              compensación por dicha utilización, salvo que la legislación aplicable establezca
              lo contrario.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">5. Compra de entradas</h2>
            <p>
              La venta de entradas para Latinoamérica Fashion Week Argentina 2026 es gestionada
              exclusivamente por CentralTicket como tercero independiente. LATAMFW actúa únicamente
              como difusor del evento.
            </p>
            <p className="mt-3">
              LATAMFW no es responsable de:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>La disponibilidad, precios o errores en las entradas.</li>
              <li>Los procesos de pago, cobro o reembolso.</li>
              <li>Las políticas de cancelación o devolución de CentralTicket.</li>
              <li>Cualquier disputa entre el usuario y CentralTicket.</li>
            </ul>
            <p className="mt-3">
              Para consultas sobre compras, el usuario debe contactar directamente a CentralTicket.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">6. Postulaciones</h2>
            <p>
              El usuario es responsable de la información que proporciona a través de los
              formularios de postulación. LATAMFW no verifica la exactitud de los datos
              ingresados y no será responsable por información falsa, incompleta o inexacta.
            </p>
            <p className="mt-3">
              Al enviar una postulación, el usuario declara que:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>La información proporcionada es veraz y completa.</li>
              <li>Cuenta con los requisitos necesarios para participar.</li>
              <li>Autoriza a LATAMFW a utilizar su información para la gestión de su postulación.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">7. Conducta del usuario</h2>
            <p>
              El usuario se compromete a mantener un comportamiento respetuoso durante su
              participación en el evento o en el servicio de transmisión, incluyendo el chat
              de la transmisión.
            </p>
            <p className="mt-3">
              Queda prohibido:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Realizar comentarios ofensivos, difamatorios, discriminatorios o contrarios a la ley.</li>
              <li>Hacer spam o publicidad no autorizada.</li>
              <li>Suplantar la identidad de otra persona.</li>
              <li>Intentar interrumpir o sabotear la transmisión.</li>
            </ul>
            <p className="mt-3">
              LATAMFW se reserva el derecho de suspender el acceso a la transmisión y el chat
              sin previo aviso en caso de conducta inapropiada.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">8. Modificaciones y suspensión</h2>
            <p>
              LATAMFW se reserva el derecho de modificar, suspender o eliminar cualquier parte
              del sitio o del servicio de transmisión en cualquier momento, sin previo aviso
              y sin que ello genere derecho a compensación alguna.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">9. Fuerza mayor</h2>
            <p>
              LATAMFW no será responsable por el incumplimiento de sus obligaciones cuando
              dicho incumplimiento se deba a causas de fuerza mayor, incluyendo pero no
              limitado a: desastres naturales, actos gubernamentales, fallos de infraestructura
              de internet, cortes de energía eléctrica o cualquier otro evento fuera de
              nuestro control razonable.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
