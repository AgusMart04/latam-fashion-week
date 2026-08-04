import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — LATAMFW 2026" },
      {
        name: "description",
        content:
          "Aviso legal, propiedad intelectual y condiciones de uso del sitio de Latinoamérica Fashion Week Argentina 2026.",
      },
      { property: "og:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: AvisoLegalPage,
});

function AvisoLegalPage() {
  return (
    <main className="pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <h1 className="font-display text-4xl tracking-tight text-carbon lg:text-5xl">
          Aviso Legal
        </h1>
        <p className="mt-4 text-sm text-graphite">Última actualización: agosto 2026</p>

        <div className="prose mt-10 space-y-8 text-base leading-relaxed text-graphite">
          <section>
            <h2 className="font-display text-2xl text-carbon">1. Representación del sitio</h2>
            <p>El sitio web latinoamericafashionweekargentina.com es administrado y representado por el equipo organizador de Latinoamérica Fashion Week Argentina 2026.</p>
            <div className="mt-3 border border-border p-4">
              <p><strong>Denominación:</strong> Latinoamérica Fashion Week Argentina 2026</p>
              <p>
                <strong>Correo electrónico:{" "}
                  <a
                    href="mailto:latamfwargentina@gmail.com"
                    className="underline transition-colors hover:text-gold"
                  >
                    latamfwargentina@gmail.com
                  </a>
                </strong>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">2. Propiedad intelectual</h2>
            <p>
              Todos los contenidos del sitio, incluyendo textos, fotografías, gráficos,
              imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o
              digitales, son propiedad intelectual de LATAMFW o de terceros, sin que puedan
              entenderse cedidos al usuario por virtud de lo dispuesto en estas condiciones.
            </p>
            <p className="mt-3">
              Las marcas, nombres comerciales o signos distintivos son titularidad de LATAMFW o de
              terceros, sin que el acceso al sitio pueda atribuir ningún derecho sobre los mismos.
            </p>
            <p className="mt-3">
              Queda prohibida la utilización de los contenidos del sitio para entrenar modelos de
              inteligencia artificial, minería de datos o cualquier otro sistema automatizado sin
              autorización expresa del titular, salvo en los casos permitidos por la legislación
              aplicable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">3. Uso permitido</h2>
            <p>El usuario se compromete a utilizar el sitio de forma lícita y de acuerdo con las
              presentes condiciones. Queda prohibido:</p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Realizar cualquier uso que implique daño, perjuicio o deterioro del sitio.</li>
              <li>
                Intentar acceder, manipular o modificar contenidos sin autorización.
              </li>
              <li>
                Utilizar el sitio para transmitir información ofensiva, difamatoria o contraria a la
                ley.
              </li>
              <li>
                Reproducir, distribuir, comunicar públicamente o transformar los contenidos del sitio
                sin autorización expresa.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">4. Contenido de terceros</h2>
            <p>
              El sitio puede contener enlaces a sitios de terceros. LATAMFW no se hace responsable
              de las prácticas de privacidad, el contenido ni la disponibilidad de estos sitios
              externos. La inclusión de enlaces no implica aprobación ni respaldo del contenido
              enlazado.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">
              5. Limitación de responsabilidad
            </h2>
            <p>
              LATAMFW no garantiza la disponibilidad continua del sitio ni la ausencia de errores en
              su contenido. En ningún caso será responsable por daños directos o indirectos derivados
              del uso del sitio, incluyendo pero no limitado a pérdidas de datos, interrupciones de
              negocio o perjuicios económicos.
            </p>
            <p className="mt-3">
              El sitio se proporciona «tal cual» y «según disponibilidad», sin garantías de ningún
              tipo, ya sean expresas o implícitas.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">6. Exclusión de garantías</h2>
            <p>
              LATAMFW no se hace responsable, en ningún caso, de daños y perjuicios de cualquier
              naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los
              contenidos, falta de disponibilidad del sitio o la presencia de virus o programas
              maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas
              necesarias para evitarlo.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">7. Legislación aplicable</h2>
            <p>
              Las presentes condiciones se rigen por la legislación de la República Argentina. Para
              cualquier controversia derivada del uso del sitio, las partes se someten a los
              tribunales competentes de la ciudad de Corrientes, Argentina, con renuncia expresa a
              cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">8. Cambios en este aviso</h2>
            <p>
              Nos reservamos el derecho de modificar el presente aviso legal en cualquier momento.
              Los cambios se publicarán en esta página con la fecha de la última actualización.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">9. Contacto</h2>
            <p>
              Si tienes preguntas sobre este aviso legal, contactanos a través de{" "}
              <a
                href="mailto:latamfwargentina@gmail.com"
                className="underline transition-colors hover:text-gold"
              >
                latamfwargentina@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
