import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import latamLogo from "@/assets/logos/LATAMFW-LOGO-01.png";

const NAV_LINKS = [
  { to: "/evento", label: "Evento" },
  { to: "/experiencia", label: "Experiencia" },
  { to: "/entradas", label: "Entradas" },
  { to: "/postulaciones", label: "Postulaciones" },
  { to: "/contacto", label: "Contacto" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const router = useRouter();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.navigate({ to: "/" });
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-12">
          <a href="/" onClick={scrollToTop} className="flex items-center">
            <img
              src={latamLogo}
              alt="LATAMFW"
              className={`h-8 w-auto ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </a>
          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`link-underline text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                  pathname === l.to ? "text-gold" : scrolled ? "text-carbon" : "text-ivory"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/entradas"
            className={`hidden lg:inline-flex items-center justify-center gap-2 px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] border transition-all duration-500 ${
              scrolled
                ? "border-carbon text-carbon hover:bg-carbon hover:text-ivory"
                : "border-ivory/60 text-ivory hover:bg-ivory hover:text-carbon"
            }`}
          >
            Comprar Entradas
          </Link>

          {/* Hamburger button */}
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
            className={`relative z-[60] lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${
              open ? "text-ivory" : scrolled ? "text-carbon" : "text-ivory"
            }`}
          >
            <span
              className={`block h-px w-6 bg-current transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-current transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "-translate-y-[3.5px] -rotate-45 !w-6" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile panel — outside header for proper z-index */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[55] bg-carbon/40 backdrop-blur-sm lg:hidden"
            />

            {/* Side panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-[55] w-[min(85vw,380px)] bg-background border-l border-border/60 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full px-8 pt-28 pb-10">
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((l, i) => (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.06,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        to={l.to}
                        className={`block py-3 text-sm font-medium uppercase tracking-[0.22em] border-b border-border/40 transition-colors ${
                          pathname === l.to ? "text-gold" : "text-carbon hover:text-gold"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + NAV_LINKS.length * 0.06 + 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-auto"
                >
                  <Link to="/entradas" className="btn-primary block text-center">
                    Comprar Entradas
                  </Link>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="gold-rule" />
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-graphite/60">
                      Septiembre 2026 · Corrientes, AR
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
