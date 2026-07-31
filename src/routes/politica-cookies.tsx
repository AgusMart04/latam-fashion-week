import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — LATAMFW 2026" },
      {
        name: "description",
        content:
          "Conocé qué cookies utiliza Latinoamérica Fashion Week Argentina y cómo puedes gestionarlas.",
      },
      { property: "og:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: PoliticaCookiesPage,
});

function PoliticaCookiesPage() {
  return (
    <main className="pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <h1 className="font-display text-4xl tracking-tight text-carbon lg:text-5xl">
          Política de Cookies
        </h1>
        <p className="mt-4 text-sm text-graphite">Última actualización: julio 2026</p>

        <div className="prose mt-10 space-y-8 text-base leading-relaxed text-graphite">
          <section>
            <h2 className="font-display text-2xl text-carbon">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
              visitás un sitio web. Sirven para mejorar la experiencia de navegación, recordar
              preferencias y analizar cómo se utiliza el sitio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">
              Cookies esenciales (no requieren consentimiento)
            </h2>
            <p>
              Estas cookies son necesarias para el funcionamiento básico del sitio y no pueden ser
              desactivadas.
            </p>

            <div className="mt-4 space-y-4">
              <div className="border border-border p-6">
                <h3 className="font-medium text-carbon">cookie-consent</h3>
                <p className="mt-2 text-sm">
                  Almacena tu preferencia de consentimiento de cookies para no volver a mostrarte el
                  aviso en cada visita. No contiene datos personales.
                </p>
                <p className="mt-1 text-xs text-graphite/70">
                  Duración: hasta que se elimine manualmente · Almacenamiento: Local Storage
                </p>
              </div>

              <div className="border border-border p-6">
                <h3 className="font-medium text-carbon">Sesión de transmisión en vivo</h3>
                <p className="mt-2 text-sm">
                  Utilizado en la sección de transmisión en vivo para persistir tu acceso durante la
                  sesión. Almacena un email y un identificador de acceso con expiración automática.
                </p>
                <p className="mt-1 text-xs text-graphite/70">
                  Duración: 24 horas · Almacenamiento: Local Storage
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">
              Cookies analíticas (requieren consentimiento)
            </h2>
            <p>
              Estas cookies nos permiten analizar el tráfico y comportamiento de los usuarios para
              mejorar el sitio. Solo se activan si aceptás su uso.
            </p>

            <div className="mt-4 space-y-4">
              <div className="border border-border p-6">
                <h3 className="font-medium text-carbon">Google Analytics (_ga, _gid, _gat)</h3>
                <p className="mt-2 text-sm">
                  Nos permiten analizar el tráfico del sitio web para mejorar el contenido y la
                  experiencia. Estas cookies recopilan información de forma anónima sobre cómo los
                  usuarios interactúan con el sitio.
                </p>
                <p className="mt-1 text-xs text-graphite/70">
                  Duración: hasta 2 años · Proveedor: Google ·{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gold"
                  >
                    Política de Privacidad de Google
                  </a>
                </p>
              </div>

              <div className="border border-border p-6">
                <h3 className="font-medium text-carbon">Vercel Analytics (__vercel_insights)</h3>
                <p className="mt-2 text-sm">
                  Recopila métricas anónimas de rendimiento del sitio, como tiempos de carga y
                  comportamiento de navegación, para ayudarnos a optimizar la infraestructura.
                </p>
                <p className="mt-1 text-xs text-graphite/70">
                  Duración: sesión · Proveedor: Vercel ·{" "}
                  <a
                    href="https://vercel.com/docs/analytics/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gold"
                  >
                    Política de Privacidad de Vercel Analytics
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">
              Tecnologías de almacenamiento local (Local Storage)
            </h2>
            <p>
              Además de cookies, utilizamos tecnologías de almacenamiento local (Local Storage) para
              guardar preferencias y datos de sesión. El Local Storage no constituye una cookie, aunque
              también permite almacenar información en el navegador.
            </p>
            <p className="mt-3">
              Utilizamos Local Storage para:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Almacenar el consentimiento de cookies (clave: cookie-consent).</li>
              <li>
                Mantener la sesión de transmisión en vivo (clave configurable, expira en 24 horas).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">Gestionar tus preferencias</h2>
            <p>
              Podés aceptar o rechazar las cookies a través del aviso que aparece al visitar el
              sitio por primera vez. Si rechazás las cookies de analítica, Google Analytics y Vercel
              Analytics no se cargarán.
            </p>
            <p className="mt-3">
              También podés configurar tu navegador para bloquear o eliminar cookies. Tené en cuenta
              que algunas funcionalidades del sitio podrían dejar de funcionar correctamente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">Cookies de terceros</h2>
            <p>
              Las cookies de Google Analytics y Vercel Analytics son gestionadas por sus respectivos
              proveedores. No controlamos directamente estas cookies, pero podés gestionarlas desde
              las herramientas que cada proveedor ofrece.
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-gold"
                >
                  Desactivar Google Analytics
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com/docs/analytics/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-gold"
                >
                  Política de Privacidad de Vercel Analytics
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">Cambios en esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de cookies en cualquier momento.
              Los cambios se publicarán en esta página con la fecha de la última actualización.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-carbon">Contacto</h2>
            <p>
              Si tenés preguntas sobre esta política de cookies, contactanos a través de{" "}
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
