import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import { useLocation } from "@tanstack/react-router";
import { useMediaQuery } from "@/hooks/use-media-query";

import heroImg from "@/assets/hero.jpg";
import pillar1 from "@/assets/pillar-1.jpg";
import pillar2 from "@/assets/pillar-2.jpg";
import pillar3 from "@/assets/pillar-3.jpg";
import applyDesigner from "@/assets/apply-designer.jpg";
import applyModel from "@/assets/apply-model.jpg";
import applyMakeup from "@/assets/apply-makeup.jpg";
import applyStylist from "@/assets/apply-stylist.jpg";
import applyPhoto from "@/assets/apply-photo.jpg";
import applyShop from "@/assets/apply-shop.jpg";
import applySponsor from "@/assets/apply-sponsor.jpg";
import expRunway from "@/assets/exp-runway.jpg";
import expShowroom from "@/assets/exp-showroom.jpg";
import expTalks from "@/assets/exp-talks.jpg";
import expNetworking from "@/assets/exp-networking.jpg";
import expCulture from "@/assets/exp-culture.jpg";
import expMedia from "@/assets/exp-media.jpg";
import expTour from "@/assets/exp-tour.jpg";
import expImmersive from "@/assets/exp-immersive.jpg";
import applyExhibitors from "@/assets/apply-exhibitors.jpg";
import whyVisitors from "@/assets/why-visitors.jpg";
import whySponsors from "@/assets/why-sponsors.jpg";
import cnfwLogo from "@/assets/logos/CNFW-LOGO.png";
import sambrizziLogo from "@/assets/logos/SAMBRIZZI-LOGO.png";
import conamLogo from "@/assets/logos/CONAM-LOGO.png";
import agustinWebLogo from "@/assets/logos/mi-logo.png";
import fundacionIntegrarLogo from "@/assets/logos/fundacion-integrar.png";
import guajoLogo from "@/assets/logos/guajo.png";
import guajoProduccionesLogo from "@/assets/logos/guajo-producciones.png";
import centralticketLogo from "@/assets/logos/centralticket.png";
import tampaLogo from "@/assets/logos/tampa.png";

/* ---------------------------------------------------- helpers */

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs tracking-widest text-graphite">{number}</span>
      <span className="gold-rule" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}

/* ---------------------------------------------------- hero */

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-carbon"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 will-change-transform">
        <img
          src={heroImg}
          alt="Modelo desfilando en pasarela editorial de alta costura"
          className={`h-full w-full object-cover ${isDesktop ? "kenburns" : "kenburns-soft"}`}
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/45 via-carbon/25 to-carbon/85" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-28 sm:pt-36 lg:px-16 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 text-ivory/85"
        >
          <span className="gold-rule" />
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.32em]">
            Edición I · Argentina
          </span>
        </motion.div>

        <div className="max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[14vw] leading-[0.88] tracking-[-0.02em] text-ivory sm:text-[10vw] lg:text-[8.5rem] xl:text-[10rem]"
          >
            Latino<span className="italic text-ivory">américa</span>
            <br />
            Fashion Week
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="max-w-md text-ivory/85">
              <p className="font-display text-xl italic leading-snug sm:text-3xl">
                Moda, cultura y negocios conectando a América Latina.
              </p>
            </div>
            <div className="flex items-baseline gap-3 text-ivory sm:flex-col sm:items-end sm:gap-1 sm:text-right">
              <span className="whitespace-nowrap font-display text-xl sm:text-4xl">
                8 · 9 · 10 · 11 · 12 · 13
              </span>
              <span className="text-xs uppercase tracking-[0.22em] text-ivory/80 sm:text-sm">
                Sept 2026 — Corrientes
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8"
          >
            <a
              href="/#entradas"
              className="btn-primary bg-ivory text-carbon border-ivory hover:bg-gold hover:border-gold"
            >
              Comprar Entradas
            </a>
            <a href="#form" className="btn-ghost hidden sm:inline-flex">
              Ser Empresa
            </a>
            <a href="#postulaciones" className="btn-ghost">
              Postularse
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- countdown */

const TARGET_DATE = new Date("2026-09-08T19:00:00-03:00").getTime();

function useCountdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  if (now === null) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ready: false };
  }
  const diff = Math.max(0, TARGET_DATE - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, ready: true };
}

export function Countdown() {
  const { days, hours, minutes, seconds, ready } = useCountdown();
  const cells = [
    { v: days, l: "Días" },
    { v: hours, l: "Horas" },
    { v: minutes, l: "Minutos" },
    { v: seconds, l: "Segundos" },
  ];
  return (
    <section id="countdown" className="border-y border-border bg-ivory py-16 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <SectionLabel number="01" label="Cuenta regresiva" />
            <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              La cuenta regresiva <span className="italic text-gold">ya comenzó</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
          {cells.map((c, i) => (
            <Reveal key={c.l} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-3 bg-background px-4 py-8 sm:py-14">
                <span className="font-display text-6xl tabular-nums text-carbon sm:text-7xl lg:text-8xl">
                  {ready ? String(c.v).padStart(2, "0") : "—"}
                </span>
                <span className="eyebrow">{c.l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- about */

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="evento" className="py-20 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel number="02" label="Sobre el evento" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Un manifiesto <br />
              <span className="italic text-gold">latinoamericano</span>
              <br /> de moda.
            </h2>
          </Reveal>
        </div>
        <div className="space-y-8 text-lg leading-relaxed text-graphite lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.15}>
            <p className="font-display text-2xl italic leading-relaxed text-carbon sm:text-3xl">
              LATAMFW nació para reescribir la manera en que América Latina se muestra al mundo.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className={`${!expanded ? "line-clamp-3 lg:line-clamp-none" : ""}`}>
              <p>
                Un encuentro internacional que reúne diseñadores, expositores y disertantes de la
                industria en un mismo escenario. Seis días donde la pasarela se convierte en
                territorio de conversación cultural, negocios y estética contemporánea.
              </p>
              <Reveal delay={0.35}>
                <p className="mt-8">
                  Corrientes reúne condiciones únicas para convertirse en una sede estratégica del
                  circuito internacional LATAMFW. Su ubicación privilegiada dentro del Mercosur, su
                  cercanía con Paraguay y Brasil, su crecimiento turístico y su riqueza cultural la
                  convierten en un escenario ideal para impulsar la internacionalización de la moda
                  latinoamericana.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mt-8">
                  LATAMFW llega para posicionar al nordeste argentino como un destino de referencia
                  para la moda, la creatividad y los negocios internacionales.
                </p>
              </Reveal>
              <Reveal delay={0.45}>
                <p className="mt-8">
                  LATAMFW integra una red de países comprometidos con el crecimiento de la industria
                  creativa regional. Argentina, Brasil, Paraguay, Bolivia y Perú impulsan
                  conjuntamente esta plataforma que promueve el intercambio comercial, cultural y
                  profesional entre los principales actores del sector.
                </p>
              </Reveal>
            </div>
          </Reveal>
          <Reveal delay={0.45}>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="link-underline mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold lg:hidden"
            >
              {expanded ? "← Menos información" : "Más información →"}
            </button>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="flex items-center gap-4 pt-4 text-carbon">
              <span className="gold-rule" />
              <span className="font-mono text-xs uppercase tracking-[0.3em]">
                Edición I · Argentina 2026
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.3}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mt-16 lg:mt-24">
          <div className="border border-border bg-muted/40 p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="gold-rule" />
              <span className="font-mono text-xs uppercase tracking-[0.32em] text-gold">
                Calendario Internacional LATAMFW 2026
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { code: "pe", country: "Perú", city: "Lima / Cusco", dates: "1 – 6 Sep" },
                {
                  code: "ar",
                  country: "Argentina",
                  city: "Corrientes",
                  dates: "8 – 13 Sep",
                  active: true,
                },
                { code: "br", country: "Brasil", city: "Florianópolis", dates: "21 – 26 Sep" },
                { code: "py", country: "Paraguay", city: "Asunción", dates: "28 – 30 Sep" },
                { code: "bo", country: "Bolivia", city: "Santa Cruz", dates: "3 – 4 Nov" },
              ].map((item) => (
                <div
                  key={item.country}
                  className={`flex items-start gap-4 border-t border-border pt-5 ${
                    item.active ? "border-gold" : ""
                  }`}
                >
                  <img
                    src={`https://flagcdn.com/w40/${item.code}.png`}
                    alt={`Bandera de ${item.country}`}
                    className="w-8 h-6 object-cover rounded-sm shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-display text-lg text-carbon">{item.country}</div>
                    <div className="text-xs text-graphite mt-0.5">{item.city}</div>
                    <div
                      className={`text-xs mt-1 font-medium ${item.active ? "text-gold" : "text-graphite"}`}
                    >
                      {item.dates}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------------------------------------------- pillars */

const PILLARS = [
  {
    n: "I",
    title: "Diversidad Cultural",
    text: "Miradas, cuerpos y tradiciones que conviven en una misma pasarela.",
    img: pillar1,
  },
  {
    n: "II",
    title: "Fuerza Creativa",
    text: "Diseñadores emergentes y consagrados que definen la estética contemporánea de la región.",
    img: pillar2,
  },
  {
    n: "III",
    title: "Conexión Internacional",
    text: "Prensa, buyers y casas globales bajo un mismo cielo latinoamericano.",
    img: pillar3,
  },
];

export function Pillars() {
  return (
    <section className="border-t border-border bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel number="03" label="Pilares" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Tres fuerzas que sostienen la <span className="italic text-gold">edición</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <article className="group">
                <div className="relative overflow-hidden bg-carbon">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={1600}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon/70 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-50" />
                  <span className="absolute left-6 top-6 font-display text-2xl italic text-ivory">
                    {p.n}
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-3xl">{p.title}</h3>
                  <p className="mt-3 text-graphite">{p.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- experience */

const EXPERIENCE = [
  {
    title: "Desfiles Oficiales",
    desc: "Pasarelas de alto nivel con producción profesional y coreografía especializada.",
    img: expRunway,
    big: true,
  },
  {
    title: "Showroom Comercial",
    desc: "Espacio B2B con buyers de la región y del exterior.",
    img: expShowroom,
  },
  {
    title: "Jornadas Educativas",
    desc: "Conferencias y paneles con líderes de la industria sobre tendencias y negocio.",
    img: expTalks,
  },
  {
    title: "Activaciones Culturales",
    desc: "Intervenciones artísticas dentro y fuera del venue.",
    img: expCulture,
  },
  {
    title: "Networking",
    desc: "Encuentros privados para prensa, industria y empresas.",
    img: expNetworking,
  },
  {
    title: "Producción Audiovisual",
    desc: "Cobertura de nivel editorial para cada colección.",
    img: expMedia,
  },
  { title: "Media Tour", desc: "Recorridos con prensa nacional e internacional.", img: expTour },
  {
    title: "Experiencias Inmersivas",
    desc: "Instalaciones sensoriales que reinterpretan la moda.",
    img: expImmersive,
  },
];

function ExpCard({ item }: { item: (typeof EXPERIENCE)[number] }) {
  return (
    <article className="group relative overflow-hidden bg-carbon">
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        width={1400}
        height={1000}
        className="aspect-[4/5] w-full object-cover opacity-90 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-ivory lg:p-8">
        <h3 className="font-display text-2xl leading-tight lg:text-3xl">{item.title}</h3>
        <p className="mt-3 max-h-0 overflow-hidden text-sm text-ivory/80 opacity-0 transition-all duration-700 group-hover:max-h-32 group-hover:opacity-100">
          {item.desc}
        </p>
      </div>
    </article>
  );
}

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onTrackScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / EXPERIENCE.length;
    const center = el.scrollLeft + el.clientWidth / 2;
    const idx = Math.min(EXPERIENCE.length - 1, Math.max(0, Math.floor(center / cardWidth)));
    setActive(idx);
  };

  return (
    <section id="experiencia" className="py-20 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel number="04" label="Experiencia LATAMFW" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                Ocho territorios <br />
                <span className="italic text-gold">bajo una misma edición</span>.
              </h2>
            </Reveal>
          </div>
          <div className="text-graphite lg:col-span-6 lg:col-start-7 lg:pt-16">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed">
                LATAMFW reúne una programación de experiencias pensadas para descubrir la moda desde
                todos sus ángulos: la pasarela, el backstage, el showroom comercial y la
                conversación cultural.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Mobile: horizontal scroll-snap carousel */}
        <div className="mt-12 lg:hidden">
          <div
            ref={trackRef}
            onScroll={onTrackScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {EXPERIENCE.map((e, i) => (
              <article
                key={e.title}
                className={`snap-start shrink-0 basis-[78%] overflow-hidden transition-all duration-500 ease-out sm:basis-[55%] ${
                  active === i ? "scale-100 opacity-100" : "scale-[0.95] opacity-70"
                }`}
              >
                <div className="relative aspect-[4/5] w-full">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl leading-tight text-ivory">{e.title}</h3>
                    <p className="mt-2 text-sm text-ivory/70">{e.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            {EXPERIENCE.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === i ? "w-6 bg-gold" : "w-1.5 bg-gold/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="mt-16 hidden grid-cols-4 gap-6 lg:grid">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.title} delay={(i % 4) * 0.08}>
              <ExpCard item={e} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- why participate */

const WHY = [
  {
    tag: "Visitantes",
    title: "Vivir la moda latinoamericana.",
    text: "Acceso a desfiles, activaciones culturales y una experiencia editorial única en la región.",
    cta: "Comprar Entradas",
    href: "#entradas",
    img: whyVisitors,
  },
  {
    tag: "Diseñadores, expositores y disertantes",
    title: "Presentar colecciones frente al mundo.",
    text: "Un escenario internacional con buyers, prensa y referentes creativos observando cada propuesta.",
    cta: "Postularme",
    href: "#form",
    img: pillar2,
  },
  {
    tag: "Empresas",
    title: "Asocia tu marca a un circuito internacional.",
    text: "Formar parte de uno de los principales encuentros de moda de América Latina.",
    cta: "Ser Empresa",
    href: "#form",
    img: whySponsors,
  },
];

export function WhyParticipate() {
  const { pathname } = useLocation();
  return (
    <section className="border-t border-border bg-carbon py-20 text-ivory lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-4 text-ivory/70">
            <span className="font-mono text-xs tracking-widest">05</span>
            <span className="gold-rule" />
            <span className="eyebrow text-ivory/70">¿Por qué participar?</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Cada perfil encuentra <span className="italic text-gold">su lugar</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.tag} delay={i * 0.12}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={w.img}
                    alt={w.tag}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover grayscale transition-all duration-[1400ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-6 flex flex-1 flex-col">
                  <span className="eyebrow text-ivory/60">{w.tag}</span>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-ivory">{w.title}</h3>
                  <p className="mt-4 text-ivory/70">{w.text}</p>
                  <a
                    href={w.href === "#form" && pathname !== "/" ? "/#form" : w.href}
                    className="link-underline mt-auto inline-flex self-start pt-6 text-xs uppercase tracking-[0.28em] text-gold"
                  >
                    {w.cta} →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- metrics */

const METRICS = [
  { n: 10, suffix: "+", label: "Diseñadores" },
  { n: 10, label: "Expositores" },
  { n: 120, suffix: "+", label: "Profesionales" },
  { n: 800, suffix: "+", label: "Asistentes / día" },
  { n: 6, label: "Días" },
  { n: 0, label: "Transmisión en Vivo", text: "Global", isLive: true },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const duration = 1800;
            const animate = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);
  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("es-AR")}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel number="06" label="Métricas" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            La escala del <span className="italic text-gold">encuentro</span>.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-16 sm:gap-x-8 sm:gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={(i % 4) * 0.08}>
              <div className="border-t border-border pt-4 sm:pt-6">
                {m.isLive ? (
                  <div className="flex items-center gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 flex-shrink-0 text-red-600 sm:h-10 sm:w-10"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <div className="font-display text-3xl leading-tight text-carbon sm:text-5xl">
                      {m.text}
                    </div>
                  </div>
                ) : (
                  <div className="font-display text-5xl leading-none text-carbon sm:text-7xl">
                    <AnimatedNumber value={m.n} suffix={m.suffix} />
                  </div>
                )}
                <div className="eyebrow mt-3 sm:mt-4">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- timeline */

const DAYS = [
  {
    day: "Día 01",
    date: "8 Sept",
    title: "Bienvenida",
    events: ["Bienvenida Oficial", "Recepción de Delegaciones", "Networking"],
  },
  {
    day: "Día 02",
    date: "9 Sept",
    title: "Fitting",
    events: ["Fitting Day", "Pruebas de Vestuario", "Coordinación de Producción"],
  },
  {
    day: "Día 03",
    date: "10 Sept",
    title: "Seminario",
    events: ["Seminario de Moda y Medios", "Conferencias", "Networking"],
  },
  {
    day: "Día 04",
    date: "11 Sept",
    title: "Innovación",
    events: ["Jornada de Finanzas e Innovación", "Tecnología y Negocio", "Networking"],
  },
  {
    day: "Día 05",
    date: "12 Sept",
    title: "Desfile Día 1",
    events: ["Desfiles Oficiales", "After LATAMFW"],
  },
  {
    day: "Día 06",
    date: "13 Sept",
    title: "Desfile Día 2",
    events: ["Desfiles Internacionales", "Ceremonia de Cierre"],
  },
];

export function Timeline() {
  return (
    <section className="border-t border-border bg-muted/40 py-20 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel number="07" label="Cronograma" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Seis días <span className="italic text-gold">al ritmo de la moda</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-0 sm:mt-16">
          {DAYS.map((d, i) => (
            <Reveal key={d.day} delay={i * 0.1}>
              <div className="group border-t border-border py-6 transition-colors hover:bg-background sm:py-8 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-14">
                <div className="flex items-baseline gap-3 sm:block lg:col-span-3">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-graphite">
                    {d.day}
                  </div>
                  <div className="font-display text-3xl sm:mt-2 sm:text-4xl lg:text-4xl">
                    {d.date}
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 lg:col-span-3">
                  <div className="font-display text-2xl italic text-gold sm:text-3xl">
                    {d.title}
                  </div>
                </div>
                <ul className="mt-3 grid grid-cols-1 gap-y-2 text-carbon sm:mt-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3 lg:col-span-6 lg:mt-0">
                  {d.events.map((e) => (
                    <li key={e} className="flex items-baseline gap-3 text-sm sm:text-lg">
                      <span className="h-px w-4 bg-gold" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- tickets */

const TICKETS = [
  {
    name: "General",
    desc: "Acceso a desfiles y activaciones culturales.",
    perks: ["Acceso general 6 días", "Activaciones abiertas"],
  },
  {
    name: "VIP",
    desc: "Experiencia premium con áreas exclusivas.",
    perks: ["Acceso VIP", "Lounge exclusivo", "Welcome kit"],
    featured: true,
  },
  {
    name: "Front Row",
    desc: "La mejor ubicación en cada desfile.",
    perks: ["First row en runways", "Networking privado", "Kit editorial"],
  },
];

const TICKET_URL = "https://centralticket.net";

export function Tickets() {
  const [selected, setSelected] = useState(1);

  return (
    <section id="entradas" className="py-20 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel number="08" label="Entradas" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                Se parte de esta <br />
                <span className="italic text-gold">gran</span> edición.
              </h2>
            </Reveal>
          </div>
          <div className="text-graphite lg:col-span-6 lg:col-start-7 lg:pt-20">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed">
                Las categorías estarán disponibles próximamente. Regístrate ahora y sé el primero en
                acceder al calendario de venta y beneficios de pre-lanzamiento.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Mobile: tab selector + single card */}
        <div className="mt-12 lg:hidden">
          <div className="flex gap-2">
            {TICKETS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setSelected(i)}
                className={`flex-1 border py-3 text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                  selected === i
                    ? "border-carbon bg-carbon text-ivory"
                    : "border-border bg-background text-graphite hover:border-carbon"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={selected}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`mt-4 flex flex-col justify-between border p-6 ${
                TICKETS[selected].featured
                  ? "border-carbon bg-carbon text-ivory"
                  : "border-border bg-background"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`eyebrow ${TICKETS[selected].featured ? "text-ivory/60" : ""}`}>
                    {TICKETS[selected].featured ? "Recomendado" : "Categoría"}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                    Próximamente
                  </span>
                </div>
                <h3 className="mt-5 font-display text-4xl">{TICKETS[selected].name}</h3>
                <p
                  className={`mt-3 text-base ${
                    TICKETS[selected].featured ? "text-ivory/70" : "text-graphite"
                  }`}
                >
                  {TICKETS[selected].desc}
                </p>
                <ul
                  className={`mt-6 space-y-2 text-sm ${
                    TICKETS[selected].featured ? "text-ivory/80" : "text-carbon"
                  }`}
                >
                  {TICKETS[selected].perks.map((p) => (
                    <li key={p} className="flex items-baseline gap-3">
                      <span className="h-px w-4 bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled="true"
                onClick={(e) => e.preventDefault()}
                className={`mt-8 inline-flex items-center justify-center gap-2 border px-5 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-colors ${
                  TICKETS[selected].featured
                    ? "border-ivory/60 text-ivory cursor-not-allowed opacity-70"
                    : "border-carbon text-carbon cursor-not-allowed opacity-70"
                }`}
              >
                Próximamente
              </a>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="mt-16 hidden gap-6 lg:grid lg:grid-cols-3">
          {TICKETS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <article
                className={`flex h-full flex-col justify-between border p-8 transition-all duration-500 lg:p-10 ${
                  t.featured
                    ? "border-carbon bg-carbon text-ivory"
                    : "border-border bg-background hover:border-carbon"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`eyebrow ${t.featured ? "text-ivory/60" : ""}`}>
                      {t.featured ? "Recomendado" : "Categoría"}
                    </span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                      Próximamente
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-5xl">{t.name}</h3>
                  <p className={`mt-4 text-base ${t.featured ? "text-ivory/70" : "text-graphite"}`}>
                    {t.desc}
                  </p>
                  <ul
                    className={`mt-8 space-y-3 text-sm ${t.featured ? "text-ivory/80" : "text-carbon"}`}
                  >
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-baseline gap-3">
                        <span className="h-px w-4 bg-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={TICKET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled="true"
                  onClick={(e) => e.preventDefault()}
                  className={`mt-10 inline-flex items-center justify-center gap-2 border px-5 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-colors ${
                    t.featured
                      ? "border-ivory/60 text-ivory cursor-not-allowed opacity-70"
                      : "border-carbon text-carbon cursor-not-allowed opacity-70"
                  }`}
                >
                  Próximamente
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-10 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-graphite">Venta oficial en</p>
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              CentralTicket
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- applications */

const APPLICATIONS = [
  {
    tag: "Diseñadores",
    desc: "Presenta tu colección frente a buyers, prensa y casas internacionales.",
    detail: "Colecciones seleccionadas por curaduría. Obtén visibilidad regional y global.",
    img: applyDesigner,
    formValue: "designer",
  },
  {
    tag: "Modelos",
    desc: "Forma parte del casting oficial de LATAMFW.",
    detail: "Casting internacional con dirección artística premium.",
    img: applyModel,
    formValue: "model",
  },
  {
    tag: "Makeup Artist Team",
    desc: "Sé parte del equipo backstage de la edición.",
    detail: "Trabaja junto a directores creativos y equipos internacionales.",
    img: applyMakeup,
    formValue: "makeup",
  },
  {
    tag: "Hair Stylist Team",
    desc: "Aporta tu mirada al styling de la pasarela.",
    detail: "Coordinación con diseñadores y dirección artística.",
    img: applyStylist,
    formValue: "stylist",
  },
  {
    tag: "Fotógrafos y Videógrafos",
    desc: "Captura la esencia de cada desfile y activación.",
    detail: "Cobertura editorial con acceso backstage y vestuario.",
    img: applyPhoto,
    formValue: "photo",
  },
  {
    tag: "Marcas de Ropa",
    desc: "Exhibe y vende tu marca en el showroom oficial.",
    detail: "Espacio curado con buyers nacionales e internacionales.",
    img: applyShop,
    formValue: "shop",
  },
  {
    tag: "Expositores",
    desc: "Exhibe tu marca o producto en el showroom oficial.",
    detail: "Espacio B2B con buyers de la región y del exterior.",
    img: applyExhibitors,
    formValue: "exhibitor",
  },
  {
    tag: "Empresas",
    desc: "Asocia tu marca a la moda latinoamericana.",
    detail: "Visibilidad internacional en cada punto de contacto del evento.",
    img: applySponsor,
    formValue: "sponsor",
  },
];

function ApplicationCard({ a, index }: { a: (typeof APPLICATIONS)[number]; index: number }) {
  const { pathname } = useLocation();
  const isPostulaciones = pathname === "/postulaciones";
  return (
    <Reveal delay={index * 0.1} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
      <article className="group relative overflow-hidden bg-carbon">
        <img
          src={a.img}
          alt={a.tag}
          loading="lazy"
          width={1000}
          height={1400}
          className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-ivory lg:p-8">
          <h3 className="font-display text-3xl">{a.tag}</h3>
          <p className="mt-2 text-sm text-ivory/80">{a.desc}</p>
          <p className="mt-3 max-h-40 overflow-hidden text-sm text-ivory/70 transition-all duration-700 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100">
            {a.detail}
          </p>
          <a
            href={isPostulaciones ? "#form" : "/#form"}
            className="link-underline mt-5 inline-flex text-xs uppercase tracking-[0.28em] text-gold animate-pulse-gold lg:animate-none"
          >
            Postularme →
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function Applications() {
  return (
    <section id="postulaciones" className="border-t border-border bg-muted/40 py-20 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel number="09" label="Postulaciones" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Súmate a la edición <span className="italic text-gold">2026</span>.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {APPLICATIONS.map((a, i) => (
            <ApplicationCard key={a.tag} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- smart form */

type Purpose =
  | ""
  | "tickets"
  | "sponsor"
  | "designer"
  | "model"
  | "makeup"
  | "stylist"
  | "photo"
  | "shop"
  | "exhibitor"
  | "press"
  | "buyer"
  | "other";

const PURPOSE_OPTIONS: { value: Purpose; label: string }[] = [
  { value: "tickets", label: "Comprar Entradas" },
  { value: "sponsor", label: "Ser Empresa" },
  { value: "designer", label: "Postularme como Diseñador" },
  { value: "model", label: "Postularme como Modelo" },
  { value: "makeup", label: "Postularme como Maquillador" },
  { value: "stylist", label: "Postularme como Estilista" },
  { value: "photo", label: "Postularme como Fotógrafo" },
  { value: "shop", label: "Postular mi Marca de Ropa" },
  { value: "exhibitor", label: "Postularme como Expositor" },
  { value: "press", label: "Prensa" },
  { value: "buyer", label: "Buyer Profesional" },
  { value: "other", label: "Otro" },
];

function Field({
  label,
  name,
  type = "text",
  as,
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
  required?: boolean;
  maxLength?: number;
}) {
  const id = `f-${name}`;
  return (
    <label htmlFor={id} className="block">
      <span className="eyebrow mb-2 block">
        {label}
        {required && " *"}
      </span>
      {as === "textarea" ? (
        <div>
          <textarea
            id={id}
            name={name}
            rows={4}
            required={required}
            maxLength={maxLength}
            className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-carbon outline-none transition-colors focus:border-carbon"
          />
          {maxLength && (
            <span className="block pt-1 text-right text-[0.65rem] text-graphite">
              Máx. {maxLength} caracteres
            </span>
          )}
        </div>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          maxLength={maxLength}
          className="w-full border-b border-border bg-transparent px-0 py-3 text-carbon outline-none transition-colors focus:border-carbon"
        />
      )}
    </label>
  );
}

function DynamicFields({
  purpose,
  onContractFile,
  onFormFile,
  contractFile,
  formFile,
  contractAccepted,
  onContractAccepted,
}: {
  purpose: Purpose;
  onContractFile?: (f: File | null) => void;
  onFormFile?: (f: File | null) => void;
  contractFile?: File | null;
  formFile?: File | null;
  contractAccepted?: boolean;
  onContractAccepted?: (v: boolean) => void;
}) {
  const base = (
    <>
      <Field label="Nombre completo" name="name" required />
      <Field label="Email" name="email" type="email" required />
    </>
  );

  const ALLOWED_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const MAX_SIZE = 10 * 1024 * 1024;

  function validateFile(file: File): string | null {
    if (!ALLOWED_TYPES.includes(file.type)) return "Solo se aceptan archivos PDF o DOCX";
    if (file.size > MAX_SIZE) return "El archivo no puede superar 10MB";
    return null;
  }

  const map: Record<Exclude<Purpose, "">, ReactNode> = {
    tickets: (
      <>
        {base}
        <Field label="Cantidad de entradas" name="qty" type="number" />
        <label htmlFor="f-category" className="block">
          <span className="eyebrow mb-2 block">Categoría de interés *</span>
          <select
            id="f-category"
            name="category"
            required
            className="w-full border-b border-border bg-transparent px-0 py-3 text-carbon outline-none transition-colors focus:border-carbon"
          >
            <option value="">Seleccionar...</option>
            <option value="General">General</option>
            <option value="VIP">VIP</option>
            <option value="Front Row">Front Row</option>
          </select>
        </label>
      </>
    ),
    sponsor: (
      <>
        {base}
        <Field label="Empresa" name="company" required maxLength={100} />
        <Field label="Cargo" name="role" maxLength={80} />
        <Field label="Sitio web" name="website" type="url" />
        <Field label="Mensaje" name="message" as="textarea" maxLength={300} />
      </>
    ),
    designer: (
      <>
        {base}
        <Field label="Marca / Estudio" name="brand" required maxLength={100} />
        <Field label="País" name="country" maxLength={60} />
        <Field label="Instagram" name="ig" maxLength={50} />
        <Field label="Portfolio (URL)" name="portfolio" type="url" />
        <Field
          label="Descripción de la colección"
          name="collection"
          as="textarea"
          maxLength={400}
        />
      </>
    ),
    model: (
      <>
        {base}
        <Field label="Edad" name="age" type="number" required />
        <Field label="Altura (cm)" name="height" type="number" required />
        <Field label="País" name="country" maxLength={60} required />
        <Field label="Instagram" name="ig" maxLength={50} />
        <Field label="Portfolio (URL)" name="portfolio" type="url" />
        <Field label="Experiencia" name="exp" as="textarea" maxLength={300} />

        <div className="sm:col-span-2 border-t border-border pt-8 mt-4 space-y-6">
          <div>
            <div className="eyebrow mb-3">Documentos requeridos</div>
            <p className="text-sm text-graphite leading-relaxed">
              Para completar tu postulación es necesario descargar los siguientes documentos,
              completarlos y subirlos firmados.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="/docs/modelos/CONTRATO DE CONFIDENCIALIDAD MODELOS.docx"
              download
              className="inline-flex items-center gap-2 border border-border px-4 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-carbon hover:border-carbon transition-colors"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Descargar Contrato de Confidencialidad
            </a>
            <a
              href="/docs/modelos/FORMULARIO + FICHA MEDICA LATAMFW.docx"
              download
              className="inline-flex items-center gap-2 border border-border px-4 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-carbon hover:border-carbon transition-colors"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Descargar Formulario + Ficha Médica
            </a>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="contractAccepted"
              checked={contractAccepted || false}
              onChange={(e) => onContractAccepted?.(e.target.checked)}
              required
              className="mt-1 h-4 w-4 accent-gold"
            />
            <span className="text-sm text-graphite">
              Leí y acepto el <strong className="text-carbon">contrato de confidencialidad</strong>.
            </span>
          </label>

          <div>
            <label className="eyebrow mb-2 block">Contrato de Confidencialidad firmado *</label>
            <input
              type="file"
              name="contractFile"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                if (file) {
                  const err = validateFile(file);
                  if (err) {
                    alert(err);
                    e.target.value = "";
                    return;
                  }
                }
                onContractFile?.(file);
              }}
              className="w-full text-sm text-graphite file:mr-4 file:py-2 file:px-4 file:border file:border-border file:text-[0.7rem] file:uppercase file:tracking-[0.2em] file:text-carbon file:hover:border-carbon file:transition-colors file:bg-transparent"
            />
            {contractFile && (
              <span className="mt-1 block text-xs text-graphite">{contractFile.name}</span>
            )}
          </div>

          <div>
            <label className="eyebrow mb-2 block">Formulario + Ficha Médica completado *</label>
            <input
              type="file"
              name="formFile"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                if (file) {
                  const err = validateFile(file);
                  if (err) {
                    alert(err);
                    e.target.value = "";
                    return;
                  }
                }
                onFormFile?.(file);
              }}
              className="w-full text-sm text-graphite file:mr-4 file:py-2 file:px-4 file:border file:border-border file:text-[0.7rem] file:uppercase file:tracking-[0.2em] file:text-carbon file:hover:border-carbon file:transition-colors file:bg-transparent"
            />
            {formFile && <span className="mt-1 block text-xs text-graphite">{formFile.name}</span>}
          </div>
        </div>
      </>
    ),
    makeup: (
      <>
        {base}
        <Field label="Instagram" name="ig" maxLength={50} />
        <Field label="Portfolio (URL)" name="portfolio" type="url" />
        <Field label="Especialidad" name="specialty" maxLength={100} required />
        <Field label="Experiencia" name="exp" as="textarea" maxLength={300} />
      </>
    ),
    stylist: (
      <>
        {base}
        <Field label="Instagram" name="ig" maxLength={50} />
        <Field label="Portfolio (URL)" name="portfolio" type="url" />
        <Field label="Experiencia" name="exp" as="textarea" maxLength={300} />
      </>
    ),
    photo: (
      <>
        {base}
        <Field label="Instagram" name="ig" maxLength={50} />
        <Field label="Portfolio (URL)" name="portfolio" type="url" />
        <Field label="Equipo propio" name="equipment" maxLength={150} required />
        <Field label="Experiencia" name="exp" as="textarea" maxLength={300} />
      </>
    ),
    shop: (
      <>
        {base}
        <Field label="Nombre de la marca" name="brand" required maxLength={100} />
        <Field label="Categoría" name="category" maxLength={80} required />
        <Field label="País" name="country" maxLength={60} required />
        <Field label="Instagram" name="ig" maxLength={50} />
        <Field label="Sitio web" name="website" type="url" />
        <Field label="Descripción de la marca" name="message" as="textarea" maxLength={400} />
      </>
    ),
    exhibitor: (
      <>
        {base}
        <Field label="Nombre de la marca / empresa" name="brand" required maxLength={100} />
        <Field label="Categoría de producto" name="category" maxLength={80} required />
        <Field label="País" name="country" maxLength={60} required />
        <Field label="Instagram" name="ig" maxLength={50} />
        <Field label="Sitio web" name="website" type="url" />
        <Field
          label="Descripción de lo que exhibiría"
          name="message"
          as="textarea"
          maxLength={400}
        />
      </>
    ),
    press: (
      <>
        {base}
        <Field label="Medio" name="media" required maxLength={100} />
        <Field label="País" name="country" maxLength={60} required />
        <Field label="Sitio web" name="website" type="url" />
        <Field label="Mensaje" name="message" as="textarea" maxLength={300} />
      </>
    ),
    buyer: (
      <>
        {base}
        <Field label="Empresa" name="company" required maxLength={100} />
        <Field label="País" name="country" maxLength={60} required />
        <Field label="Tipo de negocio" name="btype" maxLength={100} required />
        <Field label="Intereses comerciales" name="interests" as="textarea" maxLength={400} />
      </>
    ),
    other: (
      <>
        {base}
        <Field label="Mensaje" name="message" as="textarea" required maxLength={500} />
      </>
    ),
  };

  return <>{purpose ? map[purpose] : null}</>;
}

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwVcU5dCxgMl9oCF575KXgs4V7NXgeHIE22QJVC-BxStdbH8kAnzN5u_EZ9eLrfHwfL/exec";

export function SmartForm() {
  const [purpose, setPurpose] = useState<Purpose>("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [contractFile, setContractFile] = useState<File | null>(null);
  const [formFile, setFormFile] = useState<File | null>(null);
  const [contractAccepted, setContractAccepted] = useState(false);

  useEffect(() => {
    setContractFile(null);
    setFormFile(null);
    setContractAccepted(false);
    setError(false);
  }, [purpose]);

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1] || "");
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const label = PURPOSE_OPTIONS.find((o) => o.value === purpose)?.label ?? "";
    data.purposeLabel = label;
    setSubmitting(true);

    try {
      if (purpose === "model") {
        if (contractFile) data.contractFileBase64 = await fileToBase64(contractFile);
        data.contractFileName = contractFile?.name || "";
        if (formFile) data.formFileBase64 = await fileToBase64(formFile);
        data.formFileName = formFile?.name || "";
      }

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="form" className="py-20 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel number="10" label="Formulario" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                Un solo <br />
                <span className="italic text-gold">formulario</span>. <br />
                Varios caminos.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-graphite">
                Indícanos el motivo de tu contacto. El campo que elijas estará adaptado a tu perfil.
                Cada mensaje llega directamente al equipo de LATAMFW.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-10">
                <fieldset className="space-y-4">
                  <legend className="eyebrow mb-4">
                    Seleccione el área correspondiente a su perfil
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {PURPOSE_OPTIONS.map((o) => {
                      const active = purpose === o.value;
                      return (
                        <button
                          key={o.value}
                          type="button"
                          onClick={() => setPurpose(o.value)}
                          className={`border px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] transition-all ${
                            active
                              ? "border-carbon bg-carbon text-ivory"
                              : "border-border text-carbon hover:border-carbon"
                          }`}
                        >
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <input type="hidden" name="purpose" value={purpose} />
                <AnimatePresence mode="wait">
                  {purpose && (
                    <motion.div
                      key={purpose}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="grid gap-8 sm:grid-cols-2"
                    >
                      <DynamicFields
                        purpose={purpose}
                        onContractFile={setContractFile}
                        onFormFile={setFormFile}
                        contractFile={contractFile}
                        formFile={formFile}
                        contractAccepted={contractAccepted}
                        onContractAccepted={setContractAccepted}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {purpose && !submitted && (
                  <>
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary disabled:opacity-50"
                      >
                        {submitting ? "Procesando..." : "Enviar mensaje"}
                      </button>
                    </div>
                    <p className="text-[0.65rem] leading-relaxed text-graphite">
                      Solo te contactaremos a través de nuestros medios oficiales. Nunca
                      compartiremos tu información con terceros.
                    </p>
                  </>
                )}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6 border-t border-gold pt-6"
                  >
                    <p className="font-display text-2xl italic text-carbon">
                      Gracias. Tu mensaje fue recibido — te contactaremos pronto.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setPurpose("");
                      }}
                      className="text-xs uppercase tracking-[0.2em] text-gold underline-offset-4 hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6 border-t border-red-400 pt-6"
                  >
                    <p className="font-display text-2xl italic text-red-600">
                      Hubo un error al enviar. Intenta de nuevo o contáctanos por email.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setError(false);
                        setPurpose("");
                      }}
                      className="text-xs uppercase tracking-[0.2em] text-gold underline-offset-4 hover:underline"
                    >
                      Reintentar
                    </button>
                  </motion.div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- sponsors */

const SPONSOR_TIERS = [
  { label: "Empresa Principal", count: 1 },
  { label: "Luxury Partners", count: 3 },
  { label: "Official Partners", count: 4 },
  { label: "Media Partners", count: 5 },
  { label: "Supporting Partners", count: 6 },
];

export function Sponsors() {
  const [open, setOpen] = useState<number | null>(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="border-t border-border bg-muted/40 py-20 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel number="11" label="Empresas" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Las marcas que <span className="italic text-gold">habitan</span> la edición.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-0 border-t border-border lg:space-y-8">
          {SPONSOR_TIERS.map((tier, i) => {
            const isOpen = isDesktop || open === i;
            return (
              <Reveal key={tier.label} delay={i * 0.08}>
                <div className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 py-5 text-left transition-colors hover:text-gold lg:cursor-default lg:py-0 lg:hover:text-carbon"
                  >
                    <span className="gold-rule" />
                    <span className="eyebrow flex-1">{tier.label}</span>
                    <span
                      className={`font-mono text-xl transition-transform duration-500 lg:hidden ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isDesktop ? (
                    <div
                      className="grid gap-4 pb-6 lg:pb-0"
                      style={{
                        gridTemplateColumns: `repeat(auto-fill, minmax(${tier.count === 1 ? "260" : "180"}px, 1fr))`,
                      }}
                    >
                      {Array.from({ length: tier.count }).map((_, j) => (
                        <div
                          key={j}
                          className="flex aspect-[5/2] items-center justify-center border border-border bg-background text-xs uppercase tracking-[0.24em] text-graphite/60"
                        >
                          Próximamente
                        </div>
                      ))}
                    </div>
                  ) : (
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div
                            className="mt-6 grid gap-4 pb-6"
                            style={{
                              gridTemplateColumns: `repeat(auto-fill, minmax(${tier.count === 1 ? "260" : "180"}px, 1fr))`,
                            }}
                          >
                            {Array.from({ length: tier.count }).map((_, j) => (
                              <div
                                key={j}
                                className="flex aspect-[5/2] items-center justify-center border border-border bg-background text-xs uppercase tracking-[0.24em] text-graphite/60"
                              >
                                Próximamente
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- organizers */

export function Organizers() {
  const production = [
    { name: "Sambrizzi Producción", role: "Producción general y ejecutivo internacional", logo: sambrizziLogo },
    { name: "Guajo Producciones", role: "Producción y dirección local", logo: guajoProduccionesLogo },
  ];
  const respaldo = [
    { name: "CNFW Brasil", role: "Respaldo oficial del evento", logo: cnfwLogo },
    { name: "CONAM", role: "Respaldo oficial del evento", logo: conamLogo },
  ];
  const oficiales = [
    { name: "Fiesta Clausura Oficial", logo: tampaLogo },
    { name: "Sede Oficial", logo: guajoLogo },
    { name: "Ticketera Oficial", logo: centralticketLogo },
  ];
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Producción General */}
        <Reveal>
          <SectionLabel number="13" label="Producción General" />
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {production.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.1}>
              <div className="border border-border p-10 lg:p-14">
                <span className="eyebrow">Producción</span>
                <div className="mt-6 flex h-24 items-center">
                  <img src={o.logo} alt={o.name} className="max-h-24 w-auto object-contain" />
                </div>
                <div className="mt-4 text-graphite">{o.role}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Respaldo */}
        <Reveal className="mt-16">
          <SectionLabel number="14" label="Respaldo" />
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {respaldo.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.1}>
              <div className="border border-border p-10 lg:p-14">
                <span className="eyebrow">Respaldo</span>
                <div className="mt-6 flex h-24 items-center">
                  <img src={o.logo} alt={o.name} className="max-h-24 w-auto object-contain" />
                </div>
                <div className="mt-4 text-graphite">{o.role}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Oficiales destacados */}
        <Reveal className="mt-16">
          <SectionLabel number="15" label="Oficiales" />
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {oficiales.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.1}>
              <div className="border border-border bg-background p-10 text-center lg:p-14">
                <span className="eyebrow">{o.name}</span>
                <div className="mt-6 flex h-24 items-center justify-center">
                  <img src={o.logo} alt={o.name} className="max-h-24 w-auto object-contain" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- cnfw callout */

export function CnfwCallout() {
  return (
    <section className="pt-0 pb-12 lg:pt-2 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="border border-border bg-background p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-6">
                <img src={cnfwLogo} alt="CNFW Brasil" className="h-14 w-auto object-contain" />
                <span className="hidden h-12 w-px bg-border sm:block" />
                <div>
                  <p className="text-sm leading-relaxed text-graphite">
                    <span className="font-medium text-carbon">LATAMFW</span> se conecta con el{" "}
                    <span className="font-medium text-carbon">
                      Circuito Nacional de Fashion Week
                    </span>
                    , el ecosistema de moda más grande de América Latina.
                  </p>
                  <a
                    href="https://www.cnfw.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-2 inline-flex text-xs uppercase tracking-[0.28em] text-gold"
                  >
                    cnfw.com.br →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- collaborators */

export function Collaborators() {
  const collaborators = [
    { name: "Agustin Web Studio", role: "Desarrollo Web y Tecnología", logo: agustinWebLogo },
    {
      name: "Fundación Integrar",
      role: "Inclusión y Responsabilidad Social",
      logo: fundacionIntegrarLogo,
    },
  ];
  return (
    <section className="pt-0 pb-12 lg:pt-2 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="eyebrow text-graphite/60">Acompañan</span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {collaborators.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="border border-border bg-background p-6 text-center transition-colors hover:border-gold/40">
                <div className="flex h-16 items-center justify-center">
                  <img src={c.logo} alt={c.name} className="max-h-16 w-auto object-contain" />
                </div>
                <div className="mt-4 text-xs font-medium uppercase tracking-wider text-carbon">
                  {c.name}
                </div>
                <div className="mt-1 text-[11px] text-graphite/70">{c.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- faq */

const FAQS = [
  {
    q: "¿Cómo compro entradas?",
    a: "Las entradas estarán disponibles próximamente en CentralTicket. Regístrate en el formulario para recibir el aviso de apertura de venta.",
  },
  {
    q: "¿Cómo postulo como diseñador?",
    a: "Ingresa al formulario inteligente y selecciona 'Postularme como Diseñador'. La curaduría revisa cada propuesta y responde por email.",
  },
  {
    q: "¿Cómo postulo como modelo?",
    a: "El casting oficial se realiza a través del formulario. Necesitas portfolio, fotos actuales, medidas y experiencia previa.",
  },
  {
    q: "¿Cómo participar como empresa?",
    a: "Escríbenos desde el formulario seleccionando 'Ser Empresa'. Enviamos el media kit y las opciones de participación.",
  },
  {
    q: "¿Cuándo se anunciará el lugar?",
    a: "La sede oficial en Corrientes será anunciada próximamente. Suscríbete para recibir la noticia de primera mano.",
  },
  {
    q: "¿Cómo contactar al equipo?",
    a: "Vía formulario, email (latamfwargentina@gmail.com), Instagram (@latinoamericafashionweekarg) o los teléfonos oficiales en Argentina y Brasil.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-border bg-muted/40 py-20 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel number="14" label="FAQ" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Preguntas <span className="italic text-gold">frecuentes</span>.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold lg:py-8"
                  >
                    <span className="font-display text-2xl lg:text-3xl">{f.q}</span>
                    <span
                      className={`ml-4 shrink-0 font-mono text-2xl transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-8 text-lg leading-relaxed text-graphite">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- contact */

export function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel number="15" label="Contacto" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Hablemos.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
          {[
            {
              label: "Email",
              value: "latamfwargentina@gmail.com",
              href: "mailto:latamfwargentina@gmail.com",
              span: 3,
            },
            {
              label: "Instagram",
              value: "@latinoamericafashionweekarg",
              href: "https://instagram.com/latinoamericafashionweekarg",
              span: 3,
            },
            {
              label: "Argentina",
              value: "+54 9 3795 58-7617",
              href: "tel:+5493795587617",
              span: 2,
            },
            {
              label: "Argentina 2",
              value: "+54 9 2645 07-5888",
              href: "tel:+5492645075888",
              span: 2,
            },
            { label: "Brasil", value: "+55 11 95058-4800", href: "tel:+5511950584800", span: 2 },
          ].map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 0.1}
              className={c.span === 3 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <a
                href={c.href}
                className="group block border-t border-border pt-6 transition-colors hover:border-gold"
              >
                <span className="eyebrow">{c.label}</span>
                <div className="mt-4 font-display text-xl transition-colors group-hover:text-gold sm:text-2xl lg:text-4xl">
                  {c.value}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
