import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    window.location.reload();
  }

  function handleReject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-4 backdrop-blur-md sm:p-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-graphite">
          Utilizamos cookies para mejorar tu experiencia y analizar el tráfico del sitio. Al
          continuar navegando, aceptás el uso de cookies.{" "}
          <Link to="/privacidad" className="underline transition-colors hover:text-gold">
            Política de privacidad
          </Link>{" "}
          ·{" "}
          <Link to="/politica-cookies" className="underline transition-colors hover:text-gold">
            Política de cookies
          </Link>{" "}
          ·{" "}
          <Link to="/aviso-legal" className="underline transition-colors hover:text-gold">
            Aviso legal
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleReject}
            className="cursor-pointer border border-border px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-graphite transition-colors hover:border-gold/40"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="cursor-pointer bg-gold px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-ivory transition-colors hover:bg-gold/90"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
