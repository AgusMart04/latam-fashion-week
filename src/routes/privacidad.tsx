import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — LATAMFW 2026" },
      {
        name: "description",
        content:
          "Conoce cómo Latinoamérica Fashion Week Argentina recopila, usa y protege tus datos personales.",
      },
      { property: "og:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://latam-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <main className="pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <h1 className="font-display text-4xl tracking-tight text-carbon lg:text-5xl">
          Política de Privacidad
        </h1>
        <p className="mt-4 text-sm text-graphite">Última actualización: agosto 2026</p>

        <div className="prose mt-10 space-y-8 text-base leading-relaxed text-graphite">
          {/* 1 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">
              1. Responsable del tratamiento
            </h2>
            <p>
              El responsable del tratamiento de tus datos personales es:
            </p>
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

          {/* 2 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">
              2. Información que recolectamos
            </h2>
            <p>
              En el marco de Latinoamérica Fashion Week Argentina 2026 (en adelante, «LATAMFW»),
              recolectamos la siguiente información personal cuando completás formularios en nuestro
              sitio:
            </p>

            <h3 className="mt-6 font-medium text-carbon">Datos comunes a todos los formularios</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Nombre completo *</li>
              <li>Dirección de correo electrónico *</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Entradas</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Categoría de interés (General, VIP, Front Row) *</li>
              <li>Cantidad de entradas</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Sponsor / Empresa</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Empresa *</li>
              <li>Cargo</li>
              <li>Sitio web</li>
              <li>Mensaje</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Diseñador</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Marca / Estudio *</li>
              <li>País</li>
              <li>Instagram</li>
              <li>Portfolio (URL)</li>
              <li>Descripción de la colección</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Modelo</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Edad *</li>
              <li>Altura (cm) *</li>
              <li>País *</li>
              <li>Instagram</li>
              <li>Portfolio (URL)</li>
              <li>Experiencia</li>
              <li>Formulario + Ficha Médica completado (archivo PDF o DOCX) *</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Maquillaje / Peinado</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Especialidad *</li>
              <li>Instagram</li>
              <li>Portfolio (URL)</li>
              <li>Experiencia</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Stylist</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Instagram</li>
              <li>Portfolio (URL)</li>
              <li>Experiencia</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Fotógrafo / Videógrafo</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Equipo propio *</li>
              <li>Instagram</li>
              <li>Portfolio (URL)</li>
              <li>Experiencia</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Showroom / Marca propia</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Nombre de la marca *</li>
              <li>Categoría *</li>
              <li>País *</li>
              <li>Instagram</li>
              <li>Sitio web</li>
              <li>Descripción de la marca</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Exhibidor</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Nombre de la marca / empresa *</li>
              <li>Categoría de producto *</li>
              <li>País *</li>
              <li>Instagram</li>
              <li>Sitio web</li>
              <li>Descripción de lo que exhibiría</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Prensa / Medios</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Medio *</li>
              <li>País *</li>
              <li>Sitio web</li>
              <li>Mensaje</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Comprador / Distribuidor</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Empresa *</li>
              <li>País *</li>
              <li>Tipo de negocio *</li>
              <li>Intereses comerciales</li>
            </ul>

            <h3 className="mt-6 font-medium text-carbon">Contacto general</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Mensaje *</li>
            </ul>

            <p className="mt-6 text-xs text-graphite/70">
              Los campos marcados con * son obligatorios. Los campos opcionales solo se completan si
              el usuario decide proporcionar esa información.
            </p>

            <p className="mt-4">
              También se recopilan datos de uso de forma automática: páginas visitadas, tiempo de
              permanencia, dispositivo y navegador, mediante herramientas de analítica web.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">3. Base legal del tratamiento</h2>
            <p>Tratamos tus datos personales sobre las siguientes bases legales:</p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Tu consentimiento al completar un formulario.</li>
              <li>La ejecución de servicios solicitados (por ejemplo, la compra de entradas).</li>
              <li>
                Nuestro interés legítimo para mejorar el funcionamiento del sitio mediante
                estadísticas anónimas.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">4. Uso de la información</h2>
            <p>Los datos personales se utilizan exclusivamente para:</p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Responder consultas y solicitudes de información</li>
              <li>Gestionar postulaciones de diseñadores, modelos y empresas</li>
              <li>Procesar la venta y entrega de entradas</li>
              <li>Enviar información sobre el evento y actividades relacionadas</li>
              <li>Mejorar la experiencia de navegación en el sitio</li>
              <li>Generar estadísticas agregadas de uso del sitio</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">
              5. Documentos y datos médicos
            </h2>
            <p>
              Los documentos enviados (fichas médicas, portafolios) serán
              utilizados exclusivamente para evaluar la participación en el evento y no serán
              compartidos públicamente sin autorización.
            </p>
            <p className="mt-3">
              La documentación médica (ficha médica) puede contener datos relativos a la salud, que
              constituyen una categoría especial de datos personales. Esta información será utilizada
              exclusivamente para evaluar la aptitud y seguridad de la participación en el evento.
              Solo será accesible por el personal autorizado y será eliminada cuando deje de ser
              necesaria.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">6. Tiempo de conservación</h2>
            <p>
              Conservaremos tus datos únicamente durante el tiempo necesario para cumplir con la
              finalidad para la que fueron recopilados o mientras exista una obligación legal:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                <strong>Formularios generales:</strong> hasta 24 meses desde la última interacción.
              </li>
              <li>
                <strong>Postulaciones:</strong> hasta finalizar la edición del evento.
              </li>
              <li>
                <strong>Documentos médicos:</strong> hasta finalizar la participación del modelo en
                el evento.
              </li>
              <li>
                <strong>Compras de entradas:</strong> según las obligaciones fiscales aplicables.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">7. Cookies y tecnologías de rastreo</h2>
            <p>
              Utilizamos cookies y tecnologías similares para analizar el tráfico del sitio y
              mejorar tu experiencia. Podés consultar nuestra{" "}
              <a href="/politica-cookies" className="underline transition-colors hover:text-gold">
                Política de Cookies
              </a>{" "}
              para más detalles.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">
              8. Transferencias internacionales
            </h2>
            <p>
              Algunos de nuestros proveedores de servicios (Google, Vercel) pueden almacenar o
              procesar información fuera de tu país de residencia. En esos casos utilizan mecanismos
              de protección adecuados conforme a la normativa aplicable.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">9. Servicios de terceros</h2>
            <p>Utilizamos los siguientes servicios de terceros que pueden recolectar información:</p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                <strong>Google Analytics</strong> — para análisis de tráfico web.{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-gold"
                >
                  Política de Privacidad de Google
                </a>
              </li>
              <li>
                <strong>Vercel Analytics</strong> — para métricas de rendimiento del sitio.{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-gold"
                >
                  Política de Privacidad de Vercel Analytics
                </a>
              </li>
              <li>
                <strong>Google Apps Script y Google Sheets</strong> — utilizados para procesar
                formularios, almacenar información y automatizar procesos relacionados con el evento.
              </li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">10. Almacenamiento y seguridad</h2>
            <p>
              Los datos se almacenan en servidores seguros. Se aplican medidas técnicas y
              organizativas razonables para proteger la información contra acceso no autorizado,
              pérdida o alteración. Sin embargo, ningún método de transmisión por Internet es 100%
              seguro.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">11. Derechos del usuario</h2>
            <p>Puedes ejercer los siguientes derechos:</p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Acceso a tus datos personales</li>
              <li>Rectificación de datos inexactos</li>
              <li>Eliminación de tus datos personales</li>
              <li>Oposición al tratamiento</li>
              <li>Limitación del tratamiento</li>
              <li>Portabilidad de tus datos</li>
              <li>Retirar el consentimiento en cualquier momento</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, escribinos a{" "}
              <a
                href="mailto:latamfwargentina@gmail.com"
                className="underline transition-colors hover:text-gold"
              >
                latamfwargentina@gmail.com
              </a>
              .
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">12. Menores de edad</h2>
            <p>
              El sitio no está dirigido a menores de edad. Cuando sea necesario conforme a la
              legislación aplicable, los menores deberán contar con la autorización de sus padres o
              representantes legales para proporcionar datos personales.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">13. Cambios en esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier
              momento. Los cambios se publicarán en esta página con la fecha de la última
              actualización.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="font-display text-2xl text-carbon">14. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, contactanos a través de{" "}
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
