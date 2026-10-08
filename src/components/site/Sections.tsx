import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "@/assets/logo 1.png";
import heroVideo from "@/assets/hero-video.mp4";
import hero from "@/assets/hero-plant.jpg";
import manufacturing from "@/assets/manufacturing.png";
import fabrication from "@/assets/fabrication.jpg";
import engineering from "@/assets/engineering.jpg";
import site from "@/assets/site.jpg";
import evaporator from "@/assets/evaporator.jpg";
import piping from "@/assets/piping.jpg";
import water from "@/assets/water.jpg";
import technicians from "@/assets/technicians.jpg";

const NAV = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ---------- helpers ---------- */
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Label({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${light ? "text-navy-foreground/80" : "text-steel-blue"}`}>
      <span className="h-px w-8 bg-gold" />
      {children}
    </p>
  );
}

/* ---------- navbar ---------- */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-background/85 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Lexus India Engineering Solutions"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="link-underline pb-1 text-sm font-medium text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-[2px] bg-primary px-4 py-3 font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-navy-foreground shadow-sm transition-all duration-200 hover:bg-primary-hover active:scale-[0.99]"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */
export function Hero() {
  return (
    <section id="top" className="relative flex h-screen min-h-screen lg:h-[100dvh] lg:min-h-[100dvh] flex-col justify-between overflow-hidden bg-navy text-navy-foreground">
      {/* Background Industrial Plant Video with Poster Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={hero}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Subtle Dark Gradient Wash (Left-focused for text contrast, leaving right image clear) */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 via-45% to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />

      {/* Compact, Spacious Left Text Block */}
      <div className="container-x relative flex flex-1 flex-col justify-center pb-8 pt-20 sm:pt-24 lg:pt-28">
        <Reveal className="max-w-2xl">
          <Label light>Lexus India Engineering Solutions</Label>

          {/* Compact 2-line Headline */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-tight uppercase text-navy-foreground mt-5 sm:mt-6">
            ENGINEERING COMPLEXITY.
            <br />
            <span className="text-navy-foreground/80">BUILT FOR EXECUTION.</span>
          </h1>

          {/* Short Supporting Line */}
          <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-navy-foreground/85 font-medium">
            Integrated engineering, fabrication and execution for process plants.
          </p>

          {/* Hero CTA Button */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2.5 rounded-[2px] border border-navy-foreground/40 bg-paper/5 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.14em] text-navy-foreground backdrop-blur-xs transition-all duration-200 hover:bg-paper hover:text-navy active:scale-[0.99]"
            >
              Explore capabilities
            </a>
          </div>
        </Reveal>
      </div>

      {/* Bottom Capabilities Bar */}
      <div className="relative border-t border-navy-foreground/15 bg-navy/60 backdrop-blur-sm">
        <ul className="container-x grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {["Engineering", "Fabrication", "EPC", "Site Execution", "Plant Support"].map((t, i) => (
            <li
              key={t}
              className="eyebrow flex items-center gap-3 border-navy-foreground/15 py-4 text-navy-foreground/85 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="text-gold">{String(i + 1).padStart(2, "0")}</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- intro ---------- */
export function Intro() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 lg:py-28 border-b border-border">
      <div className="container-x">
        {/* Main Headline + Asymmetric Image Composition */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Typography & Narrative */}
          <Reveal className="lg:col-span-5 lg:pt-4">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-6 bg-gold" />
              <span className="eyebrow text-xs font-bold tracking-[0.24em] text-steel-blue uppercase">
                01 — WHO WE ARE
              </span>
            </div>

            <h2 className="headline mt-6 text-4xl sm:text-5xl lg:text-[4.15rem] xl:text-[4.75rem] font-black tracking-[-0.03em] leading-[0.94] text-navy">
              ENGINEERING
              <br />
              CAPABILITY.
              <br />
              <span className="text-primary">EXECUTION</span>
              <br />
              THAT CONNECTS IT.
            </h2>

            <div className="mt-8 border-l-2 border-primary pl-5">
              <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                Lexus India Engineering Solutions combines engineering design, equipment fabrication,
                EPC execution and site services to support complex process-industry projects across
                multiple stages of the project lifecycle.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Editorial Asymmetric Image Cluster */}
          <Reveal className="relative lg:col-span-7" delay={150}>
            {/* Subtle Oversized "01" Watermark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -top-10 select-none font-display text-[10rem] font-black leading-none text-navy/[0.035] sm:text-[13rem] lg:-right-6 lg:-top-14 lg:text-[16rem]"
              style={{ WebkitTextStroke: "1.5px var(--outline-ink)" }}
            >
              01
            </span>

            {/* Image Composition Container */}
            <div className="relative ml-auto w-full pb-10 sm:pb-12 lg:w-[94%]">
              {/* Subtle Industrial Orange Top-Left Corner Accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-3 z-10 h-16 w-16 border-l-2 border-t-2 border-gold sm:-left-4 sm:-top-4 sm:h-20 sm:w-20"
              />

              {/* Main Primary Fabrication Image */}
              <div className="relative overflow-hidden bg-navy shadow-sm">
                <img
                  src={fabrication}
                  alt="Stainless steel process vessel welding in fabrication facility"
                  width={1600}
                  height={1104}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Overlapping Dark Navy Information Panel */}
              <div className="absolute -top-3 right-0 z-20 bg-navy p-4 text-navy-foreground shadow-xl sm:-top-5 sm:right-0 sm:p-6 lg:-top-5 lg:-right-4 lg:p-6 max-w-[230px] sm:max-w-[260px]">
                <span className="block h-[2px] w-7 bg-gold mb-3" />
                <p className="font-display text-xs sm:text-[0.82rem] font-bold tracking-widest uppercase text-navy-foreground leading-tight">
                  FABRICATION /
                  <br />
                  WORKING FACILITY
                </p>
                <p className="eyebrow mt-3 text-[0.65rem] tracking-[0.2em] text-gold-light">
                  MIDC, BHOSARI, PUNE
                </p>
              </div>

              {/* Secondary Overlapping Process-Plant Image */}
              <div className="absolute -bottom-6 left-[-10px] z-20 w-[46%] max-w-[240px] sm:-bottom-8 sm:left-[-24px] sm:w-[42%] sm:max-w-[280px] lg:-bottom-10 lg:left-[-36px] overflow-hidden border-4 border-background bg-navy shadow-xl">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 z-10 h-6 w-6 border-l border-t border-gold"
                />
                <img
                  src={piping}
                  alt="Industrial process plant piping and distillation columns"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              {/* Orange connecting step accent line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 left-[40%] h-[2px] w-12 bg-gold/75 hidden sm:block"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Lifecycle Blueprint Background Graphic ---------- */
function LifecycleBlueprint({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Coordinate Crosshairs & Radar Target */}
      <circle cx="280" cy="110" r="75" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 4" opacity="0.25" />
      <circle cx="280" cy="110" r="45" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      <circle cx="280" cy="110" r="20" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.3" />
      <line x1="160" y1="110" x2="400" y2="110" stroke="currentColor" strokeWidth="0.6" strokeDasharray="6 3" opacity="0.25" />
      <line x1="280" y1="10" x2="280" y2="230" stroke="currentColor" strokeWidth="0.6" strokeDasharray="6 3" opacity="0.25" />

      {/* Industrial Distillation Columns / Plant Structure */}
      {/* Tall Column 1 */}
      <rect x="330" y="30" width="34" height="270" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path d="M330 30 C330 16 364 16 364 30" stroke="currentColor" strokeWidth="1" opacity="0.35" fill="none" />
      {[60, 90, 120, 150, 180, 210, 240, 270].map((y) => (
        <line key={y} x1="330" y1={y} x2="364" y2={y} stroke="currentColor" strokeWidth="0.65" opacity="0.25" />
      ))}
      <line x1="324" y1="30" x2="324" y2="300" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      <line x1="368" y1="50" x2="368" y2="300" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />

      {/* Medium Column 2 */}
      <rect x="260" y="80" width="28" height="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M260 80 C260 68 288 68 288 80" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
      {[110, 140, 170, 200, 230, 260].map((y) => (
        <line key={y} x1="260" y1={y} x2="288" y2={y} stroke="currentColor" strokeWidth="0.65" opacity="0.2" />
      ))}

      {/* Interconnecting Piping & Structural Trusses */}
      <line x1="288" y1="120" x2="330" y2="120" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      <line x1="288" y1="180" x2="330" y2="180" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      <line x1="230" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="0.75" opacity="0.25" />
      <line x1="180" y1="280" x2="400" y2="280" stroke="currentColor" strokeWidth="1" opacity="0.35" />
    </svg>
  );
}

/* ---------- lifecycle ---------- */
const LIFECYCLE_STAGES = [
  { num: "01", label: "UNDERSTAND" },
  { num: "02", label: "ENGINEER" },
  { num: "03", label: "DESIGN" },
  { num: "04", label: "BUILD" },
  { num: "05", label: "EXECUTE" },
  { num: "06", label: "COMMISSION" },
  { num: "07", label: "SUPPORT" },
];

export function Lifecycle() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-20 lg:py-28">
      {/* Background Blueprint Illustration */}
      <LifecycleBlueprint className="absolute right-0 top-0 h-full w-[380px] sm:w-[480px] lg:w-[600px] text-steel-blue/30 opacity-70" />

      {/* Top Right Orange Technical Registration Marker */}
      <div className="absolute right-6 top-6 hidden sm:block">
        <span className="inline-block h-2 w-2 border border-gold bg-gold/20" />
      </div>

      <div className="container-x relative z-10">
        <Reveal>
          {/* Header Area */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-6 bg-gold" />
                <span className="eyebrow text-xs font-bold tracking-[0.24em] text-steel-blue uppercase">
                  PROJECT LIFECYCLE
                </span>
              </div>
              <h2 className="headline mt-5 text-3xl sm:text-5xl lg:text-[3.8rem] font-black tracking-tight leading-[0.96] text-navy">
                FROM REQUIREMENT
                <br />
                TO COMMISSIONING<span className="text-gold">.</span>
              </h2>
            </div>

            {/* Top Right Counter */}
            <div className="flex items-center gap-5 sm:self-end">
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl font-light text-gold/60 leading-none">
                  07
                </span>
                <span className="eyebrow text-[0.62rem] font-bold tracking-[0.26em] text-steel-blue mt-1">
                  STAGES
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 7-Stage Horizontal Interactive Timeline */}
        <Reveal className="relative mt-16 pt-6 sm:mt-24 sm:pt-8" delay={150}>
          <div className="relative">
            {/* The Background Rail Line (runs between center of first and last node) */}
            <div className="absolute top-[17px] left-[7.14%] right-[7.14%] h-[2px] bg-steel/80 z-0">
              {/* Active Red Progress Line */}
              <div
                className="h-full bg-primary transition-all duration-300 ease-out"
                style={{ width: `${(active / (LIFECYCLE_STAGES.length - 1)) * 100}%` }}
              />
            </div>

            {/* The 7 Interactive Stage Nodes */}
            <div className="relative z-10 flex justify-between gap-2 overflow-x-auto pb-4 sm:overflow-visible scrollbar-none">
              {LIFECYCLE_STAGES.map((s, i) => {
                const isActive = active === i;
                const isPast = active > i;

                return (
                  <button
                    key={s.num}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    aria-label={`Stage ${s.num}: ${s.label}`}
                    className="group relative flex flex-1 min-w-[85px] flex-col items-center text-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary transition-transform duration-200"
                  >
                    {/* Top Node Indicator on Rail */}
                    <div className="relative flex h-9 w-9 items-center justify-center">
                      {isActive ? (
                        <div className="relative flex items-center justify-center">
                          <span className="absolute h-7 w-7 rounded-full bg-primary/20 ring-1 ring-primary/40 animate-pulse" />
                          <span className="relative h-3 w-3 rounded-full bg-primary shadow-sm" />
                        </div>
                      ) : isPast ? (
                        <span className="h-3.5 w-3.5 rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-110" />
                      ) : (
                        <span className="h-3.5 w-3.5 rounded-full border-2 border-steel-blue/40 bg-background transition-all duration-300 group-hover:border-steel-blue group-hover:scale-110" />
                      )}
                    </div>

                    {/* Stage Number & Stage Label */}
                    <div className="mt-4 flex flex-col items-center">
                      <span
                        className={`font-display text-xl sm:text-2xl font-black transition-colors duration-300 ${
                          isActive
                            ? "text-primary"
                            : "text-gold/65 group-hover:text-gold"
                        }`}
                      >
                        {s.num}
                      </span>
                      <span
                        className={`font-display text-[0.68rem] sm:text-xs font-extrabold uppercase tracking-wider transition-colors duration-300 mt-1 ${
                          isActive
                            ? "text-navy"
                            : "text-navy/60 group-hover:text-navy"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Capabilities CAD Blueprint Background Graphic ---------- */
function CapabilitiesCadBlueprint({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Grid lines */}
      <line x1="0" y1="170" x2="380" y2="170" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <line x1="280" y1="0" x2="280" y2="200" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <line x1="40" y1="0" x2="40" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />

      {/* Centerlines */}
      <line x1="30" y1="100" x2="360" y2="100" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8 4 2 4" opacity="0.35" />

      {/* Main Shell (cylindrical body) */}
      <rect x="70" y="60" width="240" height="80" stroke="currentColor" strokeWidth="1.1" opacity="0.75" />

      {/* Dished End Caps */}
      <path d="M70 60 C48 60 48 140 70 140" stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.75" />
      <path d="M310 60 C332 60 332 140 310 140" stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.75" />

      {/* Flange welds */}
      <line x1="70" y1="54" x2="70" y2="146" stroke="currentColor" strokeWidth="1" opacity="0.65" />
      <line x1="310" y1="54" x2="310" y2="146" stroke="currentColor" strokeWidth="1" opacity="0.65" />

      {/* Top Nozzles */}
      <rect x="110" y="38" width="28" height="22" stroke="currentColor" strokeWidth="1" opacity="0.75" />
      <line x1="104" y1="38" x2="144" y2="38" stroke="currentColor" strokeWidth="1.4" opacity="0.8" />

      <rect x="240" y="38" width="28" height="22" stroke="currentColor" strokeWidth="1" opacity="0.75" />
      <line x1="234" y1="38" x2="274" y2="38" stroke="currentColor" strokeWidth="1.4" opacity="0.8" />

      {/* Bottom Saddles / Supports */}
      <path d="M100 140 L95 170 L155 170 L150 140 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.75" />
      <path d="M230 140 L225 170 L285 170 L280 140 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.75" />

      {/* Internal Tube Bundle Lines */}
      <line x1="85" y1="75" x2="295" y2="75" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.3" />
      <line x1="85" y1="88" x2="295" y2="88" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.3" />
      <line x1="85" y1="112" x2="295" y2="112" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.3" />
      <line x1="85" y1="125" x2="295" y2="125" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.3" />
    </svg>
  );
}

/* ---------- capabilities ---------- */
const CAPABILITIES_DATA = [
  {
    num: "01",
    t: "ENGINEERING & DESIGN",
    d: "Basic and detailed engineering, 3D plant layout, piping design, mechanical, civil and structural engineering.",
    img: engineering,
    subImg: hero,
    alt: "Engineer reviewing process plant 3D design",
  },
  {
    num: "02",
    t: "EQUIPMENT & FABRICATION",
    d: "Industrial equipment fabrication including columns, evaporators, tanks, condensers, reboilers, vessels and dryers.",
    img: fabrication,
    subImg: piping,
    alt: "Stainless steel vessel welding and fabrication facility",
  },
  {
    num: "03",
    t: "EPC & TURNKEY PROJECTS",
    d: "Comprehensive turnkey project engineering, procurement, management, installation, erection and commissioning.",
    img: hero,
    subImg: site,
    alt: "Process plant EPC turnkey project execution",
  },
  {
    num: "04",
    t: "SITE EXECUTION",
    d: "Equipment installation, piping and structural fabrication, electrical and instrumentation support, and heavy erection.",
    img: site,
    subImg: technicians,
    alt: "Industrial site equipment erection and installation",
  },
  {
    num: "05",
    t: "PLANT TROUBLESHOOTING & MODERNIZATION",
    d: "Mechanical troubleshooting, plant modernization, process debottlenecking and performance improvement.",
    img: piping,
    subImg: evaporator,
    alt: "Process piping and plant modernization",
  },
  {
    num: "06",
    t: "TECHNICAL MANPOWER",
    d: "Specialized technical manpower and supervisory personnel for project execution, installation and commissioning.",
    img: technicians,
    subImg: engineering,
    alt: "Technical manpower and commissioning engineers",
  },
];

export function Capabilities() {
  const [active, setActive] = useState(1); // Default to 02 Equipment & Fabrication
  const activeCap = CAPABILITIES_DATA[active] ?? CAPABILITIES_DATA[0]!;

  const handlePrev = () => {
    setActive((prev) => (prev > 0 ? prev - 1 : CAPABILITIES_DATA.length - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev < CAPABILITIES_DATA.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="capabilities" className="relative overflow-hidden bg-background py-20 lg:py-28 border-b border-border">
      {/* Background CAD Blueprint Graphic */}
      <CapabilitiesCadBlueprint className="absolute right-0 bottom-6 h-64 w-80 sm:w-96 text-steel-blue/20 opacity-80" />

      {/* Orange Technical Registration Marker */}
      <div className="absolute right-[22%] bottom-[90px] hidden lg:block z-0 pointer-events-none">
        <span className="inline-block h-2 w-2 border border-gold bg-gold" />
      </div>

      <div className="container-x relative z-10">
        {/* Top Layout: Left Headline + Center Image Cluster + Right Dark Navy Panel */}
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading & Lead */}
          <Reveal className="lg:col-span-4 lg:pt-4">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-6 bg-gold" />
              <span className="eyebrow text-xs font-bold tracking-[0.24em] text-steel-blue uppercase">
                02 — CAPABILITIES
              </span>
            </div>

            <h2 className="headline mt-6 text-3xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.15rem] font-black tracking-[-0.03em] leading-[0.94] text-navy">
              FROM ENGINEERING
              <br />
              TO INDUSTRIAL
              <br />
              <span className="text-primary">EXECUTION.</span>
            </h2>

            <div className="mt-8">
              <span className="block h-[2px] w-6 bg-gold mb-4" />
              <p className="max-w-xs text-base sm:text-[1.05rem] leading-relaxed text-muted-foreground font-normal">
                Integrated capability for demanding process-industry projects.
              </p>
            </div>
          </Reveal>

          {/* Center & Right Column: Image Cluster with Overlapping Dark Navy Active Panel */}
          <Reveal className="relative lg:col-span-8" delay={150}>
            <div className="relative flex flex-col lg:flex-row items-start">
              {/* Image Cluster Container */}
              <div className="relative w-full lg:w-[73%] pb-4 sm:pb-6">
                {/* Subtle Industrial Orange Top-Left Corner Accent */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-3 -top-3 z-10 h-16 w-16 border-l-2 border-t-2 border-gold sm:-left-4 sm:-top-4 sm:h-20 sm:w-20"
                />

                {/* Primary Large Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.32/1] w-full overflow-hidden bg-navy shadow-md">
                  {CAPABILITIES_DATA.map((c, i) => (
                    <img
                      key={c.num}
                      src={c.img}
                      alt={c.alt}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                        active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                      }`}
                    />
                  ))}
                </div>

                {/* Secondary Overlapping Vertical Process-Plant Image */}
                <div className="absolute -bottom-4 left-[-12px] z-20 w-[42%] max-w-[200px] sm:-bottom-6 sm:left-[-24px] sm:w-[38%] sm:max-w-[240px] lg:-bottom-6 lg:left-[-36px] overflow-hidden border-4 border-background bg-navy shadow-2xl">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 z-10 h-6 w-6 border-l border-t border-gold"
                  />
                  <div className="relative aspect-[3/4] w-full">
                    {CAPABILITIES_DATA.map((c, i) => (
                      <img
                        key={c.num}
                        src={c.subImg}
                        alt={c.alt}
                        loading="lazy"
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                          active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Orange connecting step accent line */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-4 left-[38%] h-[2px] w-10 bg-gold/75 hidden sm:block"
                />
              </div>

              {/* Right Overlapping Dark Navy Active Capability Panel (Compact Height) */}
              <div className="relative z-30 w-full lg:w-[35%] lg:-ml-12 lg:-mt-4 bg-navy p-5 sm:p-6 text-navy-foreground shadow-2xl overflow-hidden flex flex-col justify-start">
                {/* Large Background Outlined Number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1 right-3 font-display text-7xl sm:text-8xl font-black leading-none select-none text-navy-foreground/[0.04]"
                  style={{ WebkitTextStroke: "1px var(--outline-light)" }}
                >
                  {activeCap.num}
                </span>

                <div className="relative z-10">
                  {/* Top Orange Accent Line */}
                  <span className="block h-[2px] w-7 bg-gold mb-3" />

                  {/* Active Capability Title */}
                  <h3 className="font-display text-base sm:text-lg font-black uppercase text-navy-foreground tracking-tight leading-snug">
                    {activeCap.t}
                  </h3>

                  {/* Active Capability Short Description */}
                  <p className="mt-3 text-xs sm:text-[0.8rem] leading-relaxed text-navy-foreground/75 font-normal">
                    {activeCap.d}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="relative z-10 mt-5 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous capability"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 text-navy-foreground transition-all hover:bg-paper/20 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next capability"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-navy-foreground shadow-lg transition-all hover:bg-primary-hover active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-foreground"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Interactive Navigation: All 6 Capabilities with Exact Reference Curved Wave Line */}
        <Reveal className="relative mt-20 pt-6 sm:mt-24 sm:pt-8" delay={200}>
          <div className="relative">
            {/* Elegant SVG Connecting Path matching the reference */}
            <div className="absolute inset-x-0 top-0 h-[46px] pointer-events-none hidden sm:block z-0">
              {(() => {
                const xs = [83.33, 250, 416.67, 583.33, 750, 916.67];
                const yBase = 28;
                const yPeak = 8;
                const ys = xs.map((_, i) => (i === active ? yPeak : yBase));

                // Generate full path (inactive light grey)
                let fullPathD = `M ${xs[0]} ${ys[0]}`;
                for (let i = 0; i < xs.length - 1; i++) {
                  const x0 = xs[i];
                  const y0 = ys[i];
                  const x1 = xs[i + 1];
                  const y1 = ys[i + 1];
                  if (x0 === undefined || x1 === undefined || y0 === undefined || y1 === undefined) continue;
                  if (y0 === y1) {
                    fullPathD += ` L ${x1} ${y1}`;
                  } else {
                    const dx = (x1 - x0) * 0.45;
                    fullPathD += ` C ${x0 + dx} ${y0}, ${x1 - dx} ${y1}, ${x1} ${y1}`;
                  }
                }

                // Generate active sub-path (industrial orange up to active point)
                let activePathD = `M ${xs[0]} ${ys[0]}`;
                for (let i = 0; i < active; i++) {
                  const x0 = xs[i];
                  const y0 = ys[i];
                  const x1 = xs[i + 1];
                  const y1 = ys[i + 1];
                  if (x0 === undefined || x1 === undefined || y0 === undefined || y1 === undefined) continue;
                  if (y0 === y1) {
                    activePathD += ` L ${x1} ${y1}`;
                  } else {
                    const dx = (x1 - x0) * 0.45;
                    activePathD += ` C ${x0 + dx} ${y0}, ${x1 - dx} ${y1}, ${x1} ${y1}`;
                  }
                }

                return (
                  <svg
                    viewBox="0 0 1000 46"
                    preserveAspectRatio="none"
                    className="h-full w-full overflow-visible"
                  >
                    {/* Background light grey full connecting path */}
                    <path
                      d={fullPathD}
                      fill="none"
                      stroke="var(--steel)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="transition-all duration-500 ease-out"
                    />

                    {/* Active red path leading up to the active point */}
                    {active > 0 && (
                      <path
                        d={activePathD}
                        fill="none"
                        stroke="var(--primary)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="transition-all duration-500 ease-out"
                      />
                    )}
                  </svg>
                );
              })()}
            </div>

            {/* 6 Interactive Stage Buttons */}
            <div className="relative z-10 flex justify-between gap-3 overflow-x-auto pb-4 sm:overflow-visible scrollbar-none">
              {CAPABILITIES_DATA.map((c, i) => {
                const isActive = active === i;
                const isPast = active > i;
                const dotTop = isActive ? 8 : 28;

                return (
                  <button
                    key={c.num}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    aria-label={`Capability ${c.num}: ${c.t}`}
                    className="group relative flex flex-1 min-w-[110px] flex-col items-center text-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary transition-transform duration-200"
                  >
                    {/* Node Indicator sitting on the path */}
                    <div className="relative h-[46px] w-full flex items-center justify-center">
                      <div
                        className="absolute flex items-center justify-center transition-all duration-500 ease-out"
                        style={{ top: `${dotTop}px`, transform: "translateY(-50%)" }}
                      >
                        {isActive ? (
                          <div className="relative flex items-center justify-center">
                            <span className="absolute h-9 w-9 rounded-full bg-primary/20 ring-1 ring-primary/40 animate-pulse" />
                            <span className="relative h-4 w-4 rounded-full bg-primary shadow-sm" />
                          </div>
                        ) : isPast ? (
                          <span className="h-4 w-4 rounded-full border-2 border-primary/80 bg-background transition-all duration-300 group-hover:scale-110" />
                        ) : (
                          <span className="h-4 w-4 rounded-full border border-steel bg-background transition-all duration-300 group-hover:border-gold group-hover:scale-110" />
                        )}
                      </div>
                    </div>

                    {/* Number & Capability Title matching reference */}
                    <div className="mt-2 flex flex-col items-center">
                      <span
                        className={`font-display font-black transition-colors duration-300 ${
                          isActive
                            ? "text-3xl text-primary"
                            : "text-xl text-gold/65 group-hover:text-gold"
                        }`}
                      >
                        {c.num}
                      </span>
                      <span
                        className={`font-display uppercase tracking-wider transition-colors duration-300 mt-1 max-w-[130px] leading-snug ${
                          isActive
                            ? "text-xs font-black text-navy"
                            : "text-[0.68rem] sm:text-xs font-bold text-steel-blue group-hover:text-navy"
                        }`}
                      >
                        {c.t}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Industries Icons & Blueprint Graphic ---------- */
function IndustriesBlueprint({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <circle cx="120" cy="100" r="60" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.2" />
      <circle cx="120" cy="100" r="40" stroke="currentColor" strokeWidth="0.6" opacity="0.18" />
      <circle cx="120" cy="100" r="15" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.25" />
      <line x1="20" y1="100" x2="260" y2="100" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      <line x1="120" y1="10" x2="120" y2="190" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      <text x="175" y="94" fill="currentColor" opacity="0.35" fontSize="8.5" fontFamily="monospace" letterSpacing="0.1em">
        Ø 3200 MM
      </text>
      <line x1="175" y1="60" x2="280" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.18" />
      <line x1="240" y1="20" x2="240" y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.18" />
    </svg>
  );
}

function IndDistilleryIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="6" y="8" width="8" height="20" rx="1" />
      <line x1="6" y1="14" x2="14" y2="14" />
      <line x1="6" y1="20" x2="14" y2="20" />
      <path d="M10 8V4h8v6h6v18" />
      <rect x="20" y="10" width="8" height="18" rx="1" />
      <line x1="20" y1="16" x2="28" y2="16" />
      <line x1="20" y1="22" x2="28" y2="22" />
    </svg>
  );
}

function IndChemicalIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 8 C8 5 16 5 16 8 V26 H8 Z" />
      <path d="M18 12 C18 9 26 9 26 12 V26 H18 Z" />
      <line x1="12" y1="5" x2="12" y2="3" />
      <line x1="22" y1="9" x2="22" y2="7" />
      <line x1="4" y1="26" x2="28" y2="26" />
    </svg>
  );
}

function IndOilGasIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 26 L12 12 L18 26" />
      <line x1="9" y1="19" x2="15" y2="19" />
      <path d="M8 12 L26 8 L22 14" />
      <path d="M26 8 L28 18" />
      <line x1="4" y1="26" x2="28" y2="26" />
      <circle cx="22" cy="18" r="2" />
    </svg>
  );
}

function IndWaterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="16" cy="18" rx="12" ry="6" />
      <path d="M4 18 V22 C4 25.3 9.4 28 16 28 C22.6 28 28 25.3 28 22 V18" />
      <path d="M16 8 C16 8 13 12 13 14 C13 15.65 14.35 17 16 17 C17.65 17 19 15.65 19 14 C19 12 16 8 16 8 Z" />
    </svg>
  );
}

function IndFoodIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="6" y="10" width="10" height="12" rx="1" />
      <path d="M8 10 V6 h6 v4" />
      <path d="M18 14 h8 v8 h-8 z" />
      <path d="M22 8 v6" />
      <line x1="4" y1="26" x2="28" y2="26" />
      <circle cx="9" cy="26" r="1.5" />
      <circle cx="15" cy="26" r="1.5" />
      <circle cx="21" cy="26" r="1.5" />
    </svg>
  );
}

function IndEvaporationIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="8" y="10" width="16" height="12" rx="2" />
      <path d="M8 12 C5 12 5 20 8 20" />
      <path d="M24 12 C27 12 27 20 24 20" />
      <path d="M12 22 L10 26 M20 22 L22 26" />
      <path d="M12 7 C12 5 14 5 14 3 M16 7 C16 5 18 5 18 3 M20 7 C20 5 22 5 22 3" />
    </svg>
  );
}

/* ---------- industries ---------- */
const INDUSTRIES_DATA = [
  {
    num: "01",
    t: "ETHANOL & DISTILLERY",
    d: "Distillation · Process plants",
    mainImg: hero,
    subImg1: piping,
    subImg2: water,
    Icon: IndDistilleryIcon,
    alt: "Distillery and ethanol distillation plant",
  },
  {
    num: "02",
    t: "CHEMICAL & PROCESS",
    d: "Process equipment · Plant systems",
    mainImg: piping,
    subImg1: fabrication,
    subImg2: site,
    Icon: IndChemicalIcon,
    alt: "Chemical processing piping and systems",
  },
  {
    num: "03",
    t: "OIL & GAS",
    d: "Process facilities · Infrastructure",
    mainImg: site,
    subImg1: hero,
    subImg2: piping,
    Icon: IndOilGasIcon,
    alt: "Oil and gas processing facility",
  },
  {
    num: "04",
    t: "WATER & WASTEWATER",
    d: "Treatment · Plant infrastructure",
    mainImg: water,
    subImg1: piping,
    subImg2: evaporator,
    Icon: IndWaterIcon,
    alt: "Water and wastewater treatment infrastructure",
  },
  {
    num: "05",
    t: "FOOD & ALLIED",
    d: "Process systems · Equipment",
    mainImg: evaporator,
    subImg1: fabrication,
    subImg2: engineering,
    Icon: IndFoodIcon,
    alt: "Food and allied process equipment",
  },
  {
    num: "06",
    t: "EVAPORATION & DRYING",
    d: "Evaporators · Dryers",
    mainImg: fabrication,
    subImg1: piping,
    subImg2: water,
    Icon: IndEvaporationIcon,
    alt: "Industrial evaporator and drying vessel fabrication",
  },
];

export function Industries() {
  const [active, setActive] = useState(5); // Default to 06 Evaporation & Drying
  const current = INDUSTRIES_DATA[active] ?? INDUSTRIES_DATA[0]!;

  const handlePrev = () => {
    setActive((prev) => (prev > 0 ? prev - 1 : INDUSTRIES_DATA.length - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev < INDUSTRIES_DATA.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="industries" className="relative overflow-hidden bg-navy py-20 lg:py-28 text-navy-foreground border-b border-navy-foreground/15">
      {/* Background Engineering Blueprint Detail */}
      <IndustriesBlueprint className="absolute left-[38%] top-6 hidden h-52 w-72 text-steel-blue/40 opacity-70 lg:block" />

      <div className="container-x relative z-10">
        {/* Top Header */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-6 bg-gold" />
            <span className="eyebrow text-xs font-bold tracking-[0.24em] text-gold uppercase">
              03 — INDUSTRIES
            </span>
          </div>

          <h2 className="headline mt-5 max-w-4xl text-3xl sm:text-5xl lg:text-[3.8rem] font-black tracking-tight leading-[0.96] text-navy-foreground">
            ENGINEERING FOR
            <br />
            PROCESS-INTENSIVE
            <br />
            <span className="text-gold">INDUSTRIES.</span>
          </h2>
        </Reveal>

        {/* Main Content Grid: Left 3-Image Showcase + Right 6-Industry Interactive List */}
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: 3-Image Showcase with Bottom Navigation Bar */}
          <Reveal className="relative lg:col-span-7" delay={100}>
            {/* Subtle Industrial Orange Corner Bracket */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-3 z-20 h-16 w-16 border-l-2 border-t-2 border-gold sm:-left-4 sm:-top-4 sm:h-20 sm:w-20"
            />

            {/* Left Orange Border Accent on Featured Image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-[14px] top-6 bottom-6 w-[2px] bg-gold hidden sm:block z-20"
            />

            {/* 3-Image Showcase Container */}
            <div className="grid grid-cols-12 gap-3 sm:gap-3.5">
              {/* Primary Large Image */}
              <div className="relative col-span-8 aspect-[16/11] overflow-hidden bg-navy-dark shadow-xl">
                {INDUSTRIES_DATA.map((ind, i) => (
                  <img
                    key={ind.num}
                    src={ind.mainImg}
                    alt={`${ind.t} main facility`}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* 2 Smaller Supporting Images Stacked Vertically */}
              <div className="col-span-4 flex flex-col gap-3 sm:gap-3.5">
                {/* Sub Image 1 */}
                <div className="relative aspect-[4/3] flex-1 overflow-hidden bg-navy-dark shadow-md">
                  {INDUSTRIES_DATA.map((ind, i) => (
                    <img
                      key={ind.num}
                      src={ind.subImg1}
                      alt={`${ind.t} detail 1`}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                        active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                      }`}
                    />
                  ))}
                </div>

                {/* Sub Image 2 */}
                <div className="relative aspect-[4/3] flex-1 overflow-hidden bg-navy-dark shadow-md">
                  {INDUSTRIES_DATA.map((ind, i) => (
                    <img
                      key={ind.num}
                      src={ind.subImg2}
                      alt={`${ind.t} detail 2`}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                        active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar below images: Counter + Title + Navigation Buttons */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-navy-foreground/15 pt-4">
              <div className="flex items-center gap-4">
                {/* Counter */}
                <p className="font-mono text-sm tracking-widest text-navy-foreground/50">
                  <span className="font-bold text-gold">{current.num}</span> / 06
                </p>

                <span className="h-4 w-px bg-navy-foreground/20" />

                {/* Active Title & Short Subtitle */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-4 bg-gold" />
                    <h3 className="font-display text-sm sm:text-base font-black uppercase text-navy-foreground tracking-wider">
                      {current.t}
                    </h3>
                  </div>
                  <p className="mt-0.5 text-xs text-navy-foreground/60">{current.d}</p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                {/* Orange registration dot */}
                <span className="inline-block h-1.5 w-1.5 bg-gold mr-1 hidden sm:inline-block" />

                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous industry"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 text-navy-foreground transition-all hover:bg-paper/20 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next industry"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-navy-foreground shadow-lg transition-all hover:bg-primary-hover active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-foreground"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 6-Industry Interactive Navigation List with Vertical Rail */}
          <Reveal className="relative lg:col-span-5" delay={200}>
            <div className="relative pl-7 sm:pl-9">
              {/* Vertical Background Line */}
              <div className="absolute left-[7px] sm:left-[9px] top-6 bottom-6 w-px bg-navy-foreground/15 z-0" />

              {/* Vertical Orange Active Segment */}
              <div
                className="absolute left-[7px] sm:left-[9px] w-px bg-gold transition-all duration-300 z-0"
                style={{
                  top: `${(active / (INDUSTRIES_DATA.length - 1)) * 75 + 12}%`,
                  height: "28px",
                }}
              />

              {/* 6 Industry Interactive Rows */}
              <ul className="space-y-2">
                {INDUSTRIES_DATA.map((ind, i) => {
                  const isActive = active === i;
                  const Icon = ind.Icon;

                  return (
                    <li key={ind.num}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        onClick={() => setActive(i)}
                        aria-pressed={isActive}
                        className={`group relative flex w-full items-center justify-between gap-4 py-4 sm:py-4.5 text-left border-b border-navy-foreground/10 transition-colors duration-200 cursor-pointer ${
                          isActive ? "border-gold/40" : "hover:border-navy-foreground/20"
                        }`}
                      >
                        {/* Node Indicator on Rail */}
                        <span
                          className={`absolute left-[-24px] sm:left-[-30px] flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "h-4 w-4 rounded-full border-2 border-primary bg-primary ring-2 ring-gold/30"
                              : "h-3 w-3 rounded-full border border-navy-foreground/30 bg-navy group-hover:border-navy-foreground/60"
                          }`}
                        />

                        {/* Number & Labels */}
                        <div className="flex items-baseline gap-4 sm:gap-5">
                          <span
                            className={`font-display text-sm sm:text-base font-bold transition-colors duration-300 ${
                              isActive ? "text-gold" : "text-navy-foreground/40 group-hover:text-gold"
                            }`}
                          >
                            {ind.num}
                          </span>

                          <div>
                            <span
                              className={`block font-display text-sm sm:text-[0.98rem] font-black uppercase tracking-wider transition-colors duration-300 ${
                                isActive ? "text-navy-foreground" : "text-navy-foreground/75 group-hover:text-navy-foreground"
                              }`}
                            >
                              {ind.t}
                            </span>
                            <span className="mt-0.5 block text-xs text-navy-foreground/50 transition-colors group-hover:text-gold">
                              {ind.d}
                            </span>
                          </div>
                        </div>

                        {/* Line Icon */}
                        <div className="shrink-0 pl-2">
                          <Icon
                            className={`h-7 w-7 transition-colors duration-300 ${
                              isActive ? "text-gold" : "text-navy-foreground/30 group-hover:text-gold"
                            }`}
                          />
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- manufacturing ---------- */
const MANUFACTURING_EQUIP = [
  { num: "01", name: "DISTILLATION COLUMNS" },
  { num: "02", name: "EVAPORATORS" },
  { num: "03", name: "STORAGE TANKS" },
  { num: "04", name: "CONDENSERS" },
  { num: "05", name: "REBOILERS" },
  { num: "06", name: "PRESSURE / JACKETED VESSELS" },
  { num: "07", name: "DRYERS" },
];

export function Manufacturing() {
  return (
    <section className="overflow-hidden bg-paper py-20 lg:py-28 border-b border-border">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left Column: Heading, Narrative, and 7 Equipment List */}
          <Reveal className="lg:col-span-5 xl:col-span-4">
            {/* 04 — MANUFACTURING */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-6 bg-gold" />
              <span className="font-display text-[11px] sm:text-xs font-bold tracking-[0.22em] text-steel-blue uppercase">
                04 — MANUFACTURING
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[0.98] tracking-tight text-navy uppercase mt-6 sm:mt-8">
              WHERE ENGINEERING
              <br />
              BECOMES EQUIPMENT<span className="text-gold">.</span>
            </h2>

            {/* Narrative Description */}
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-steel-blue font-medium max-w-md">
              In-house industrial fabrication capability for process equipment built around project requirements.
            </p>

            {/* Structured 7-Equipment List */}
            <ul className="mt-8 border-t border-border/80">
              {MANUFACTURING_EQUIP.map((item) => (
                <li
                  key={item.num}
                  className="group flex items-center gap-4 border-b border-border/70 py-3 sm:py-3.5 transition-all duration-200 hover:bg-foreground/[0.02]"
                >
                  <span className="font-display text-xs sm:text-sm font-black text-gold">
                    {item.num}
                  </span>
                  <span className="font-display text-xs sm:text-[0.82rem] font-extrabold uppercase tracking-wider text-navy transition-colors group-hover:text-gold">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right Column: Manufacturing Graphic Image (Enlarged and Seamlessly Blended) */}
          <Reveal className="relative lg:col-span-7 xl:col-span-8 flex items-center justify-center" delay={150}>
            <div className="relative w-full lg:scale-105 xl:scale-110 transition-transform duration-500">
              <img
                src={manufacturing}
                alt="Process equipment manufacturing and fabrication diagram with equipment callouts"
                loading="lazy"
                className="manufacturing-theme w-full h-auto object-contain mix-blend-multiply transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- why ---------- */
const WHY = [
  ["A", "Engineering Depth", "Integrated engineering capabilities."],
  ["B", "Fabrication Capability", "In-house industrial equipment fabrication."],
  ["C", "Execution Experience", "Installation, erection and commissioning."],
  ["D", "Reliability", "Commitment to timelines and demanding project environments."],
];

export function Why() {
  return (
    <section className="bg-navy py-24 text-navy-foreground lg:py-36">
      <div className="container-x">
        <Reveal className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Label light>05 — Why Lexus</Label>
            <h2 className="headline mt-6 text-4xl sm:text-5xl lg:text-7xl">
              Built for projects
              <br />
              where execution matters.
            </h2>
          </div>
          <p className="max-w-sm self-end text-lg text-navy-foreground/70 lg:col-span-4">
            A connected engineering and execution approach for complex project environments.
          </p>
        </Reveal>
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([l, t, d], i) => (
            <Reveal key={l} delay={i * 100} className="border-t border-navy-foreground/20 py-10 sm:pr-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-0 lg:first:border-l-0 lg:first:pl-0">
              <span className="font-display text-8xl font-extrabold leading-none text-gold">{l}</span>
              <h3 className="mt-8 font-display text-xl font-extrabold uppercase tracking-tight">{t}</h3>
              <p className="mt-3 text-navy-foreground/70">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- project experience ---------- */
function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1400);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      setN(0);
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}</span>;
}

export function ProjectExperience() {
  return (
    <section id="projects" className="relative group overflow-hidden bg-paper min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center">
      {/* Background cinematic project photograph */}
      <img
        src={site}
        alt="Process vessel being lifted into place at an overseas project site during challenging conditions"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[center_right] sm:object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
      />

      {/* Warm off-white integrated content wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/95 via-40% sm:via-45% md:via-50% lg:via-[48%] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-paper/80 via-transparent to-transparent sm:hidden" />

      {/* Content Container */}
      <div className="container-x relative z-10 py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-xl">
          {/* 06 — PROJECT EXPERIENCE */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-6 bg-gold" />
            <span className="font-display text-[11px] sm:text-xs font-bold tracking-[0.22em] text-steel-blue uppercase">
              06 — PROJECT EXPERIENCE
            </span>
          </div>

          {/* 25+ PERSONNEL ONSITE with single thin orange accent line */}
          <div className="mt-8 sm:mt-10 border-l-[3px] border-gold pl-4 sm:pl-5">
            <div className="font-display text-6xl sm:text-7xl lg:text-[5.75rem] font-black tracking-tight text-gold leading-none">
              25+
            </div>
            <div className="font-display text-xs sm:text-sm font-extrabold tracking-[0.22em] text-navy uppercase mt-2.5">
              PERSONNEL
              <br />
              ONSITE
            </div>
          </div>

          {/* Headline */}
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.02] tracking-tight text-navy uppercase mt-8 sm:mt-10">
            PROVEN WHEN
            <br />
            CONDITIONS
            <br />
            GET TOUGH<span className="text-gold">.</span>
          </h2>

          {/* Project description */}
          <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed text-steel-blue font-medium">
            During the Iraq War, the company maintained an onsite team of 25 people and remained committed to completing
            the project target.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- who we serve ---------- */
const SERVE_CARDS = [
  {
    num: "01",
    title: "PLANT OWNERS",
    desc: "Support for new projects, expansions and long-term asset performance.",
  },
  {
    num: "02",
    title: "EPC CONTRACTORS",
    desc: "Reliable execution support for complex, large-scale projects.",
  },
  {
    num: "03",
    title: "ENGINEERING COMPANIES",
    desc: "Collaborating on detailed engineering and specialized equipment solutions.",
  },
  {
    num: "04",
    title: "OEMS",
    desc: "Manufacturing and supply support for process equipment and systems.",
  },
  {
    num: "05",
    title: "INDUSTRIAL PROJECT TEAMS",
    desc: "On-ground support to keep projects on track in challenging environments.",
  },
];

export function WhoWeServe() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
        {/* Left Column */}
        <Reveal className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-6 bg-gold" />
            <span className="font-display text-[11px] sm:text-xs font-bold tracking-[0.22em] text-steel-blue uppercase">
              07 — WHO WE SERVE
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.05] tracking-tight text-navy uppercase mt-6 sm:mt-8">
            SUPPORTING
            <br />
            THE TEAMS
            <br />
            BEHIND INDUSTRIAL
            <br />
            PROJECTS<span className="text-gold">.</span>
          </h2>

          <div className="w-8 h-[2px] bg-gold mt-6 mb-6" />

          <p className="text-sm sm:text-base leading-relaxed text-steel-blue font-medium max-w-sm">
            We work with key stakeholders across the industrial ecosystem, delivering engineered solutions that help
            projects move from concept to commissioning.
          </p>
        </Reveal>

        {/* Right Card Grid */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {SERVE_CARDS.slice(0, 3).map((card, i) => (
              <Reveal
                key={card.num}
                delay={i * 70}
                className="group border border-border/80 bg-paper/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-gold/60 hover:bg-paper min-h-[220px]"
              >
                <div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-[3px] h-10 bg-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-display text-xs font-bold text-gold tracking-wider block">
                        {card.num}
                      </span>
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-navy uppercase leading-snug mt-1.5">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-xs sm:text-sm text-steel-blue font-medium leading-relaxed">
                  {card.desc}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Bottom Row: 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVE_CARDS.slice(3, 5).map((card, i) => (
              <Reveal
                key={card.num}
                delay={210 + i * 70}
                className="group border border-border/80 bg-paper/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-gold/60 hover:bg-paper min-h-[200px]"
              >
                <div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-[3px] h-10 bg-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-display text-xs font-bold text-gold tracking-wider block">
                        {card.num}
                      </span>
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-navy uppercase leading-snug mt-1.5">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-xs sm:text-sm text-steel-blue font-medium leading-relaxed">
                  {card.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
export function FinalCta() {
  return (
    <section id="contact" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-border/80 bg-paper shadow-xs">
            <div className="grid lg:grid-cols-12 min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] items-stretch">
              {/* Left Content Area */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative z-10 bg-paper">
                {/* 08 — START A PROJECT */}
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-6 bg-gold" />
                  <span className="font-display text-[11px] sm:text-xs font-bold tracking-[0.22em] text-steel-blue uppercase">
                    08 — START A PROJECT
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-[2.65rem] leading-[1.08] tracking-tight uppercase mt-6 sm:mt-8">
                  <span className="text-navy block">HAVE A COMPLEX PROJECT?</span>
                  <span className="text-primary block mt-1">LET'S ENGINEER IT.</span>
                </h2>

                {/* Supporting Text */}
                <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed text-steel-blue font-medium max-w-lg">
                  Share your project requirement with our team and discuss the right engineering, fabrication or execution
                  approach.
                </p>

                {/* CTAs */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#footer"
                    className="bg-primary text-navy-foreground font-display text-xs font-extrabold uppercase tracking-[0.14em] px-6 py-3.5 hover:bg-primary-hover transition-all duration-200 inline-flex items-center justify-center text-center"
                  >
                    CONTACT OUR TEAM
                  </a>
                  <a
                    href="#capabilities"
                    className="border border-navy text-navy font-display text-xs font-extrabold uppercase tracking-[0.14em] px-6 py-3.5 hover:bg-navy hover:text-navy-foreground transition-all duration-200 bg-transparent inline-flex items-center justify-center text-center"
                  >
                    EXPLORE CAPABILITIES
                  </a>
                </div>
              </div>

              {/* Right Image with Diagonal Accent Cut */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-muted">
                <img
                  src={piping}
                  alt="Industrial plant piping and process structure"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                />

                {/* Diagonal Industrial Accent Shard & Line for Desktop */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    {/* Left white cutout to produce exact angle */}
                    <polygon points="0,0 20,0 0,100" fill="var(--paper)" />
                    {/* Orange accent shard */}
                    <polygon points="17,45 28,45 16,74 5,74" fill="var(--gold)" opacity="0.9" />
                    {/* Orange angled thin line */}
                    <line x1="16" y1="34" x2="28" y2="52" stroke="var(--gold)" strokeWidth="0.8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
export function Footer() {
  return (
    <footer id="footer" className="bg-navy text-navy-foreground">
      <div className="container-x grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src={logo}
            alt="Lexus India Engineering Solutions"
            className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-95 mb-5"
          />
          <p className="font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-navy-foreground">
            Lexus India Engineering Solutions
          </p>
          <p className="mt-3 text-navy-foreground/70 text-sm">Engineering & Technology Solutions</p>
          <p className="eyebrow mt-4 text-navy-foreground/50 text-xs">Also referred to as 3A-Engg. Solution</p>
        </div>
        <nav aria-label="Footer" className="lg:col-span-3">
          <p className="eyebrow text-gold">Navigate</p>
          <ul className="mt-5 space-y-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="link-underline pb-0.5 text-navy-foreground/85">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="not-italic lg:col-span-4">
          <p className="eyebrow text-gold">Locations</p>
          <div className="mt-5 border-t border-navy-foreground/20 py-4">
            <p className="eyebrow text-navy-foreground/50">Registered Office</p>
            <p className="mt-2">Shivaji Nagar, Pune, Maharashtra</p>
          </div>
          <div className="border-t border-navy-foreground/20 py-4">
            <p className="eyebrow text-navy-foreground/50">Factory / Working Office</p>
            <p className="mt-2">MIDC, Bhosari, Pune, Maharashtra</p>
          </div>
        </address>
      </div>
      <div className="border-t border-navy-foreground/15">
        <p className="container-x py-6 text-sm text-navy-foreground/50">
          © {new Date().getFullYear()} Lexus India Engineering Solutions
        </p>
      </div>
    </footer>
  );
}
