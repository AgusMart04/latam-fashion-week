import { useEffect, useState, type ComponentType } from "react";
import type { DivIcon } from "leaflet";
import { Reveal } from "./sections";
import { useMediaQuery } from "@/hooks/use-media-query";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MapComponents = {
  MapContainer: ComponentType<any>;
  TileLayer: ComponentType<any>;
  Marker: ComponentType<any>;
  Popup: ComponentType<{ children?: React.ReactNode }>;
  goldIcon: DivIcon;
};

// EDITABLE: add/remove/edit map markers here
export const VENUES = [
  {
    id: "corrientes-capital",
    name: "Corrientes Capital",
    type: "Sede del Evento",
    coords: [-27.469, -58.831] as [number, number],
    description: "Ciudad sede de la primera edición de LATAM Fashion Week Argentina.",
  },
];

const DARK_TILES = "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png";
const LABEL_TILES = "https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png";

export function LatamMap() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [Comp, setComp] = useState<MapComponents | null>(null);
  const [mapZoom, setMapZoom] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? 12 : 13
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setMapZoom(e.matches ? 12 : 13);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const [rl, L] = await Promise.all([
        import("react-leaflet"),
        import("leaflet"),
      ]);
      // @ts-ignore
      await import("leaflet/dist/leaflet.css");

      const goldIcon = L.divIcon({
        className: "latamfw-marker",
        html: `<div class="latamfw-marker-dot"></div><div class="latamfw-marker-ring"></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      if (mounted) setComp({ ...rl, goldIcon });
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="mapa" className="relative bg-carbon py-20 lg:py-40 overflow-hidden z-0">
      <style>{`
        .latamfw-marker { position: relative; }
        .latamfw-marker-dot {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 10px; height: 10px; background: oklch(0.72 0.11 78); border-radius: 50%;
          box-shadow: 0 0 0 1px oklch(0.72 0.11 78 / 0.4), 0 0 12px oklch(0.72 0.11 78 / 0.6);
          z-index: 2;
        }
        .latamfw-marker-ring {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 28px; height: 28px; border: 1px solid oklch(0.72 0.11 78 / 0.4); border-radius: 50%;
          animation: latamfwPulse 2.6s ease-out infinite;
        }
        @keyframes latamfwPulse {
          0% { transform: translate(-50%,-50%) scale(0.6); opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(2.2); opacity: 0; }
        }
        .leaflet-container { background: oklch(0.22 0.006 70); font-family: var(--font-sans); }
        .leaflet-popup-content-wrapper {
          background: oklch(0.22 0.006 70 / 0.92);
          backdrop-filter: blur(20px);
          color: oklch(0.975 0.008 85);
          border: 1px solid oklch(1 0 0 / 0.12);
          border-radius: 2px;
          box-shadow: 0 24px 60px oklch(0 0 0 / 0.6);
          padding: 4px;
        }
        .leaflet-popup-content { margin: 16px 18px; min-width: 220px; }
        .leaflet-popup-tip { background: oklch(0.22 0.006 70); border: 1px solid oklch(1 0 0 / 0.12); }
        .leaflet-popup-close-button { color: oklch(0.72 0.11 78) !important; font-size: 18px !important; padding: 8px !important; }
        .leaflet-control-zoom a {
          background: oklch(0.22 0.006 70 / 0.8) !important;
          color: oklch(0.72 0.11 78) !important;
          border: 1px solid oklch(1 0 0 / 0.1) !important;
          backdrop-filter: blur(12px);
        }
        .leaflet-control-attribution {
          background: oklch(0.22 0.006 70 / 0.6) !important;
          color: oklch(0.42 0.008 70) !important;
          font-size: 9px !important;
        }
        .leaflet-control-attribution a { color: oklch(0.72 0.11 78) !important; }
        #mapa .leaflet-container { z-index: 0; }
      `}</style>

      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel number="15" label="Ubicaciones" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl text-ivory">
              Sedes y <span className="italic text-gold">puntos clave</span>.
            </h2>
            <p className="max-w-md text-ivory/70">
              La ciudad entera se convierte en escenario. Una constelación de
              localizaciones que componen la experiencia.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 border border-border overflow-hidden">
          <div className="aspect-[4/3] md:aspect-[21/10] w-full bg-carbon relative">
            {Comp ? (
              <Comp.MapContainer
                center={[-27.470, -58.828]}
                zoom={mapZoom}
                scrollWheelZoom={false}
                dragging={true}
                touchZoom={false}
                doubleClickZoom={false}
                keyboard={false}
                zoomControl={false}
                style={{ height: "100%", width: "100%" }}
              >
                <Comp.TileLayer url={DARK_TILES} attribution='&copy; OpenStreetMap, CARTO' />
                <Comp.TileLayer url={LABEL_TILES} />
                {VENUES.map((v) => (
                  <Comp.Marker key={v.id} position={v.coords} icon={Comp.goldIcon}>
                    <Comp.Popup>
                      <div className="text-[10px] uppercase tracking-[0.32em] text-gold mb-2">
                        {v.type}
                      </div>
                      <div className="font-display text-xl italic text-ivory mb-2">
                        {v.name}
                      </div>
                      <div className="text-xs text-ivory/70 leading-relaxed">
                        {v.description}
                      </div>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ", Corrientes, Argentina")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-[10px] uppercase tracking-[0.32em] text-gold/70 border border-gold/30 px-4 py-2 hover:bg-gold/10 transition-colors"
                      >
                        Abrir en Google Maps →
                      </a>
                    </Comp.Popup>
                  </Comp.Marker>
                ))}
              </Comp.MapContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.32em] text-ivory/50">
                Cargando mapa…
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px border border-border bg-border">
          {VENUES.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ", Corrientes, Argentina")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-carbon p-5 h-full transition-colors hover:bg-ivory/5"
              >
                <div className="text-[9px] uppercase tracking-[0.32em] text-gold">
                  {v.type}
                </div>
                <div className="mt-2 font-display text-base italic text-ivory">
                  {v.name}
                </div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-gold transition-colors">
                  Abrir en Maps →
                </div>
              </a>
            </Reveal>
          ))}
          {Array.from({ length: isDesktop ? 4 : 5 }).map((_, i) => (
            <Reveal key={`placeholder-${i}`} delay={(VENUES.length + i) * 0.08}>
              <div className="bg-carbon p-5 h-full flex flex-col justify-center items-center text-center min-h-[120px] border-t border-border">
                <div className="text-[9px] uppercase tracking-[0.32em] text-ivory/30">
                  Próximamente
                </div>
                <div className="mt-2 font-display text-sm italic text-ivory/20">
                  Nueva ubicación
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs tracking-widest text-ivory/70">{number}</span>
      <span className="h-px w-12 bg-gold" />
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-ivory/70">{label}</span>
    </div>
  );
}
