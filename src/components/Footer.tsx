import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import latamLogo from "@/assets/logos/LATAMFW-LOGO-01.png";
import cnfwLogo from "@/assets/logos/CNFW-LOGO.png";
import sambrizziLogo from "@/assets/logos/SAMBRIZZI-LOGO.png";
import conamLogo from "@/assets/logos/CONAM-LOGO.png";
import agustinWebLogo from "@/assets/logos/mi-logo.png";
import fundacionIntegrarLogo from "@/assets/logos/fundacion-integrar.png";
import guajoLogo from "@/assets/logos/guajo.png";
import guajoProduccionesLogo from "@/assets/logos/guajo-producciones.png";
import centralticketLogo from "@/assets/logos/centralticket.png";
import tampaLogo from "@/assets/logos/tampa.png";

const NAV_LINKS = [
  { to: "/evento", label: "Evento" },
  { to: "/experiencia", label: "Experiencia" },
  { to: "/entradas", label: "Entradas" },
  { to: "/postulaciones", label: "Postulaciones" },
  { to: "/contacto", label: "Contacto" },
];

export function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="border-t border-border bg-carbon py-20 text-ivory">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={latamLogo}
              alt="LATAMFW — Latinoamérica Fashion Week"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-6 max-w-sm text-ivory/70">
              Latinoamérica Fashion Week — Argentina 2026. Moda, cultura y negocios conectando a
              América Latina.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="gold-rule" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-ivory/60">
                Septiembre 2026 · Corrientes, AR
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <div className="eyebrow text-ivory/60">Navegación</div>
              <ul className="mt-6 space-y-3 text-sm">
                {NAV_LINKS.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="link-underline text-ivory/85">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow text-ivory/60">Redes</div>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/latinoamericafashionweekarg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ivory/85"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@latamfashionweek.arg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ivory/85"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@LatamFashionWeekArgentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ivory/85"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="eyebrow text-ivory/60">Producción General</div>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <img
                  src={sambrizziLogo}
                  alt="Sambrizzi Producción"
                  className="h-10 w-auto object-contain brightness-0 invert opacity-70"
                />
                <img
                  src={guajoProduccionesLogo}
                  alt="Guajo Producciones"
                  className="h-10 w-auto object-contain brightness-0 invert opacity-70"
                />
              </div>
            </div>
            <div>
              <div className="eyebrow text-ivory/60">Respaldo</div>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <img
                  src={cnfwLogo}
                  alt="CNFW Brasil"
                  className="h-10 w-auto object-contain brightness-0 invert opacity-70"
                />
                <img
                  src={conamLogo}
                  alt="CONAM"
                  className="h-10 w-auto object-contain brightness-0 invert opacity-70"
                />
              </div>
            </div>
            <div>
              <div className="eyebrow text-ivory/60">Oficiales</div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <img
                  src={tampaLogo}
                  alt="Fiesta Clausura Oficial"
                  className="h-8 w-auto object-contain brightness-0 invert opacity-60"
                />
                <img
                  src={guajoLogo}
                  alt="Sede Oficial"
                  className="h-8 w-auto object-contain brightness-0 invert opacity-60"
                />
                <img
                  src={centralticketLogo}
                  alt="Ticketera Oficial"
                  className="h-8 w-auto object-contain brightness-0 invert opacity-60"
                />
              </div>
            </div>
            <div>
              <div className="eyebrow text-ivory/60">Acompañan</div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <img
                  src={agustinWebLogo}
                  alt="Agustin Web Studio"
                  className="h-8 w-auto object-contain brightness-0 invert opacity-60"
                />
                <img
                  src={fundacionIntegrarLogo}
                  alt="Fundación Integrar"
                  className="h-8 w-auto object-contain brightness-0 invert opacity-60"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-8 text-xs uppercase tracking-[0.24em] text-ivory/50 sm:flex-row sm:items-center">
          <div>© {year} LATAMFW. Todos los derechos reservados.</div>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacidad" className="transition-colors hover:text-ivory">
              Privacidad
            </Link>
            <Link to="/politica-cookies" className="transition-colors hover:text-ivory">
              Cookies
            </Link>
            <Link to="/aviso-legal" className="transition-colors hover:text-ivory">
              Aviso Legal
            </Link>
            <Link to="/terminos-y-condiciones" className="transition-colors hover:text-ivory">
              Términos
            </Link>
            <span>latamfwargentina@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
