import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./sections";

/* ---- constants ---- */

const STREAM_DATE = new Date("2026-09-08T19:00:00-03:00").getTime();
const STORAGE_KEY = "latamfw_stream_access";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 horas
const CSV_URL = "/entradas.csv";
const isLiveDay = Date.now() >= STREAM_DATE;

/* ---- countdown ---- */

function useStreamCountdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  if (now === null) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, live: false };
  }
  const diff = Math.max(0, STREAM_DATE - now);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    live: diff === 0,
  };
}

/* ---- data ---- */

const SCHEDULE = [
  {
    day: "Día 01",
    date: "Septiembre",
    title: "Bienvenida",
    events: ["Inauguración Oficial", "Recepción de Delegaciones", "Apertura del Evento"],
  },
  {
    day: "Día 02",
    date: "Septiembre",
    title: "Fitting",
    events: ["Fitting Day", "Pruebas de Vestuario", "Coordinación de Producción"],
  },
  {
    day: "Día 03",
    date: "Septiembre",
    title: "Seminario",
    events: ["Seminario de Moda y Medios", "Conferencias Magistrales", "Networking Internacional"],
  },
  {
    day: "Día 04",
    date: "Septiembre",
    title: "Innovación",
    events: ["Jornada de Finanzas e Innovación", "Tecnología y Moda", "Mesa Redonda"],
  },
  {
    day: "Día 05",
    date: "Septiembre",
    title: "Desfile Día 1",
    events: ["Desfiles Oficiales", "After LATAMFW", "Clausura Parcial"],
  },
  {
    day: "Día 06",
    date: "Septiembre",
    title: "Desfile Día 2",
    events: ["Desfiles Internacionales", "Ceremonia de Cierre", "Gala Final"],
  },
];

/* ---- csv parser ---- */

function parseCSV(text: string): Map<string, string> {
  const buyers = new Map<string, string>();
  const lines = text.split("\n");
  if (lines.length < 2) return buyers;

  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const emailIdx = headers.findIndex((h) => h === "mail");
  const purchaseIdIdx = headers.findIndex((h) => h === "id de compra");

  if (emailIdx === -1 || purchaseIdIdx === -1) return buyers;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const cols = line.split(",");
    const email = (cols[emailIdx] || "").trim().toLowerCase();
    const purchaseId = (cols[purchaseIdIdx] || "").trim();

    if (email && purchaseId) {
      buyers.set(email, purchaseId);
    }
  }

  return buyers;
}

/* ---- component ---- */

export function LiveStream() {
  const { days, hours, minutes, seconds, live } = useStreamCountdown();
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [authError, setAuthError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [buyers, setBuyers] = useState<Map<string, string>>(new Map());
  const [csvError, setCsvError] = useState(false);
  const [csvLoading, setCsvLoading] = useState(true);

  useEffect(() => {
    fetch(CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error("CSV not found");
        return res.text();
      })
      .then((text) => {
        setBuyers(parseCSV(text));
        setCsvLoading(false);
      })
      .catch(() => {
        setCsvError(true);
        setCsvLoading(false);
      });
  }, []);

  useEffect(() => {
    if (buyers.size === 0) return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        const elapsed = Date.now() - data.timestamp;
        const storedPurchaseId = buyers.get(data.email?.toLowerCase());
        if (
          storedPurchaseId &&
          storedPurchaseId === data.purchaseId &&
          elapsed < SESSION_DURATION
        ) {
          setUnlocked(true);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      // localStorage unavailable or corrupted
    }
  }, [buyers]);

  const handleAuth = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setAuthError(false);

      setTimeout(() => {
        const normalizedEmail = email.trim().toLowerCase();
        const expectedPurchaseId = buyers.get(normalizedEmail);

        if (expectedPurchaseId && expectedPurchaseId === ticketId.trim()) {
          try {
            localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify({
                email: normalizedEmail,
                purchaseId: ticketId.trim(),
                timestamp: Date.now(),
              }),
            );
          } catch {
            // localStorage unavailable
          }
          setUnlocked(true);
        } else {
          setAuthError(true);
        }
        setLoading(false);
      }, 600);
    },
    [email, ticketId, buyers],
  );

  const handleLogout = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setUnlocked(false);
    setEmail("");
    setTicketId("");
  }, []);

  const cells = [
    { v: days, l: "Días" },
    { v: hours, l: "Horas" },
    { v: minutes, l: "Minutos" },
    { v: seconds, l: "Segundos" },
  ];

  const showPlayer = isLiveDay || unlocked;

  return (
    <>
      {/* ---- 1. Hero ---- */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-carbon">
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt=""
            className={`h-full w-full object-cover kenburns-soft transition-opacity duration-700 ${heroLoaded ? "opacity-40" : "opacity-0"}`}
            width={1920}
            height={1280}
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon/60 via-carbon/40 to-carbon/90" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <Reveal>
            <div className="flex items-center gap-4 text-ivory/85">
              <span className="gold-rule" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.32em]">
                LATAMFW 2026 · Edición I
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-[12vw] leading-[0.88] tracking-[-0.02em] text-ivory sm:text-[10vw] lg:text-[7rem]">
              Transmisión
              <br />
              en <span className="italic text-ivory">Vivo</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70 sm:text-xl">
              Vive cada momento de Latinoamérica Fashion Week Argentina desde cualquier parte del
              mundo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- 2. Reproductor YouTube + Acceso ---- */}
      <section className="bg-carbon py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <Reveal>
            {/* Player + Overlay grid */}
            <div
              className={`relative w-full border border-white/10 bg-graphite ${showPlayer ? "" : "min-h-[420px] sm:min-h-[480px]"}`}
              style={showPlayer ? { aspectRatio: "16 / 9" } : undefined}
            >
              {/* Player */}
              {showPlayer ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/aQNwMJzDB0s?controls=1&modestbranding=1&rel=0&disablekb=1"
                  title="LATAMFW 2026 — Transmisión en Vivo"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 bg-graphite" />
              )}

              {/* Overlay de acceso */}
              <AnimatePresence>
                {!showPlayer && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-carbon/70 backdrop-blur-2xl"
                  >
                    <div className="w-full max-w-xs px-4 text-center sm:max-w-sm sm:px-6">
                      {/* Candado */}
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 sm:mb-6 sm:h-16 sm:w-16">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="h-5 w-5 text-gold sm:h-7 sm:w-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                          />
                        </svg>
                      </div>

                      <h3 className="font-display text-xl text-ivory sm:text-3xl">
                        Acceso al <span className="italic text-gold">Directo</span>
                      </h3>
                      <p className="mt-1 text-xs text-ivory/50 sm:mt-2 sm:text-sm">
                        Ingrese sus credenciales para acceder a la transmisión en vivo.
                      </p>

                      {csvError && (
                        <p className="mt-2 text-xs text-red-400">
                          Error al cargar datos. Intente recargar la página.
                        </p>
                      )}

                      <form onSubmit={handleAuth} className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
                        <div>
                          <label htmlFor="stream-email" className="sr-only">
                            Email de compra
                          </label>
                          <input
                            id="stream-email"
                            type="text"
                            placeholder="Email con el que compró"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setAuthError(false);
                            }}
                            disabled={csvLoading}
                            className={`w-full rounded-none border bg-white/5 px-3 py-2.5 text-sm text-ivory placeholder-ivory/30 outline-none transition-colors focus:border-gold sm:px-4 sm:py-3 ${
                              authError ? "border-red-500" : "border-white/15"
                            }`}
                          />
                        </div>
                        <div className="relative">
                          <label htmlFor="stream-ticket" className="sr-only">
                            ID de compra
                          </label>
                          <input
                            id="stream-ticket"
                            type={showTicket ? "text" : "password"}
                            placeholder="ID de compra"
                            autoComplete="off"
                            value={ticketId}
                            onChange={(e) => {
                              setTicketId(e.target.value);
                              setAuthError(false);
                            }}
                            disabled={csvLoading}
                            className={`w-full border bg-white/5 px-3 py-2.5 pr-10 text-sm text-ivory placeholder-ivory/30 outline-none transition-colors focus:border-gold sm:px-4 sm:py-3 ${
                              authError ? "border-red-500" : "border-white/15"
                            }`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowTicket(!showTicket)}
                            aria-label={
                              showTicket ? "Ocultar ID de compra" : "Mostrar ID de compra"
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory/40 transition-colors hover:text-ivory/70 sm:right-3"
                            tabIndex={-1}
                          >
                            {showTicket ? (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="h-4 w-4 sm:h-5 sm:w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            ) : (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="h-4 w-4 sm:h-5 sm:w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                              </svg>
                            )}
                          </button>
                        </div>

                        {authError && (
                          <p className="text-xs text-red-400">
                            Email o ID de compra incorrectos. Intente nuevamente.
                          </p>
                        )}

                        <button
                          type="submit"
                          disabled={loading || csvLoading || !email || !ticketId}
                          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          {loading ? "Accediendo..." : csvLoading ? "Cargando datos..." : "Acceder"}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-center gap-6 text-center">
              <p className="eyebrow text-ivory/60">Siga nuestras redes</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://youtube.com/@latamfashionweekargentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
                <a
                  href="https://www.instagram.com/latinoamericafashionweekarg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@latamfashionweek.arg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.38-6.22V9.4a8.16 8.16 0 0 0 4.84 1.58V7.53a4.85 4.85 0 0 1-1-.84z" />
                  </svg>
                  TikTok
                </a>
              </div>

              {unlocked && !isLiveDay && (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-2 text-xs text-ivory/30 underline decoration-ivory/20 underline-offset-2 transition-colors hover:text-ivory/60"
                >
                  Cerrar sesión
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- 3. Cuenta regresiva ---- */}
      {!live && (
        <section className="border-y border-border bg-ivory py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="eyebrow">Faltan</span>
                <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Los Shows <span className="italic text-gold">comienzan pronto</span>.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {cells.map((c) => (
                <div
                  key={c.l}
                  className="flex flex-col items-center gap-2 bg-ivory px-4 py-8 sm:px-0 sm:py-12"
                >
                  <span className="font-display text-6xl tabular-nums text-carbon sm:text-7xl lg:text-8xl">
                    {String(c.v).padStart(2, "0")}
                  </span>
                  <span className="eyebrow">{c.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- 4. Calendario de transmisiones ---- */}
      <section className="bg-muted/40 py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="eyebrow">Calendario</span>
              <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Seis días de <span className="italic text-gold">cobertura en vivo</span>.
              </h2>
              <p className="mt-2 max-w-xl text-base text-graphite sm:text-lg">
                Cada jornada será transmitida en tiempo real por nuestro canal de YouTube.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {SCHEDULE.map((d, i) => (
              <Reveal key={d.day} delay={(i % 3) * 0.08}>
                <div className="group border-t border-border bg-background p-6 transition-colors hover:border-gold/40 sm:p-8">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-graphite">
                      {d.day}
                    </span>
                    <span className="text-sm text-graphite">{d.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl italic text-gold sm:text-3xl">
                    {d.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {d.events.map((e) => (
                      <li
                        key={e}
                        className="flex items-baseline gap-3 text-sm text-carbon sm:text-base"
                      >
                        <span className="h-px w-4 flex-shrink-0 bg-gold" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 5. CTA final ---- */}
      <section className="bg-carbon py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
              ¿No tiene acceso <span className="italic text-gold">al directo</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-ivory/60 sm:text-lg">
              Adquiera su entrada y acceda a la transmisión en vivo de los seis días del evento.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <a
                href="https://centralticket.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-ivory text-carbon border-ivory hover:bg-gold hover:border-gold"
              >
                Comprar Entradas
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
