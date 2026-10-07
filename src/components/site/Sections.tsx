import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Plus, Minus } from "lucide-react";
import hero from "@/assets/hero-plant.jpg";
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
        if (e.isIntersecting) {
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
      <span className="h-px w-8 bg-primary" />
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
        <a href="#top" className="font-display text-[0.8rem] font-extrabold uppercase leading-tight tracking-[0.14em] text-navy sm:text-sm">
          Lexus India
          <span className="block text-[0.62rem] font-semibold tracking-[0.24em] text-steel-blue">Engineering Solutions</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="link-underline pb-1 text-sm font-medium text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary !px-4 !py-3 text-[0.7rem]">
          Start a project
        </a>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */
export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[94vh] flex-col overflow-hidden bg-navy text-navy-foreground">
      <img
        src={hero}
        alt="Distillation columns and process piping at an industrial plant at sunset"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="slow-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-x relative flex flex-1 flex-col justify-center pb-12 pt-32">
        <Label light>Lexus India Engineering Solutions</Label>
        <h1 className="headline mt-6 max-w-5xl text-[2.6rem] sm:text-6xl lg:text-[5.5rem]">
          Engineering complexity.
          <br />
          <span className="text-navy-foreground/75">Built for real-world execution.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-navy-foreground/85 sm:text-lg">
          Engineering, fabrication and project execution solutions for process industries — from plant design and
          equipment manufacturing to site execution and commissioning.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">
            Start a project <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#capabilities" className="btn-outline">
            Explore capabilities
          </a>
        </div>
      </div>
      <div className="relative border-t border-navy-foreground/20 bg-overlay/40 backdrop-blur-sm">
        <ul className="container-x grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {["Engineering", "Fabrication", "EPC", "Site Execution", "Plant Support"].map((t, i) => (
            <li
              key={t}
              className="eyebrow flex items-center gap-3 border-navy-foreground/15 py-5 text-navy-foreground/85 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
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
    <section id="about" className="py-24 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <Label>01 — Who we are</Label>
          <h2 className="headline mt-6 text-4xl text-navy sm:text-5xl lg:text-6xl">
            Engineering capability.
            <br />
            <span className="text-steel-blue">Execution that connects it.</span>
          </h2>
          <div className="mt-10 max-w-lg border-l-2 border-primary pl-6">
            <p className="text-lg leading-relaxed">
              Lexus India Engineering Solutions combines engineering design, equipment fabrication, EPC execution and
              site services to support complex process-industry projects across multiple stages of the project.
            </p>
            <p className="eyebrow mt-6 text-muted-foreground">Also referred to as 3A-Engg. Solution</p>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={150}>
          <figure>
            <div className="overflow-hidden">
              <img
                src={fabrication}
                alt="Stainless steel process column shell being welded in a fabrication workshop"
                width={1600}
                height={1104}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:aspect-[5/6]"
              />
            </div>
            <figcaption className="eyebrow mt-4 flex justify-between border-t border-border pt-4 text-muted-foreground">
              <span>Fabrication / Working facility</span>
              <span>MIDC, Bhosari, Pune</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- lifecycle ---------- */
const STAGES = [
  ["Understand", "Requirements & technical assessment"],
  ["Engineer", "Basic & detailed engineering"],
  ["Design", "Equipment, piping & plant design"],
  ["Build", "Equipment fabrication"],
  ["Execute", "Installation & erection"],
  ["Commission", "Testing & commissioning"],
  ["Support", "Troubleshooting & modernization"],
];

export function Lifecycle() {
  return (
    <section className="border-y border-border bg-paper py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="headline text-4xl text-navy sm:text-5xl lg:text-6xl">
            From requirement
            <br />
            to commissioning.
          </h2>
          <p className="eyebrow text-steel-blue">Project lifecycle / 07 stages</p>
        </Reveal>
        <ol className="relative mt-20 grid gap-0 lg:grid-cols-7">
          <span aria-hidden className="absolute left-[7px] top-0 h-full w-px bg-steel lg:left-0 lg:top-[7px] lg:h-px lg:w-full" />
          {STAGES.map(([t, d], i) => (
            <li key={t} className="relative pb-10 pl-10 lg:pb-0 lg:pl-0 lg:pr-6 lg:pt-12">
              <span aria-hidden className="absolute left-0 top-1 h-[15px] w-[15px] border-2 border-primary bg-paper lg:top-0" />
              <Reveal delay={i * 80}>
                <span className="font-display text-5xl font-extrabold text-steel lg:text-6xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- capabilities ---------- */
const CAPS = [
  { t: "Engineering & Design", d: "Basic and detailed engineering, 3D plant layout, piping design, mechanical, civil and structural engineering.", img: engineering, alt: "Engineer reviewing a 3D process plant model" },
  { t: "Equipment & Fabrication", d: "Industrial equipment fabrication including columns, evaporators, tanks, condensers, reboilers, vessels and dryers.", img: fabrication, alt: "Process vessel under fabrication" },
  { t: "EPC & Turnkey Projects", d: "Project engineering and management, installation, erection and commissioning.", img: hero, alt: "Completed process plant with distillation columns" },
  { t: "Site Execution", d: "Equipment installation, piping and structural fabrication, electrical and instrumentation support, and MCC installation.", img: site, alt: "Crane lifting a process vessel onto a steel structure on site" },
  { t: "Plant Troubleshooting & Modernization", d: "Mechanical troubleshooting, plant modernization and performance improvement for existing facilities.", img: piping, alt: "Industrial process piping and valves" },
  { t: "Technical Manpower", d: "Technical manpower for project execution, installation and commissioning.", img: technicians, alt: "Technicians installing MCC panels and instrumentation cabling" },
];

export function Capabilities() {
  const [active, setActive] = useState(0);
  return (
    <section id="capabilities" className="py-24 lg:py-36">
      <div className="container-x">
        <Reveal className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Label>02 — Capabilities</Label>
            <h2 className="headline mt-6 text-4xl text-navy sm:text-5xl lg:text-7xl">
              From engineering
              <br />
              to industrial execution.
            </h2>
          </div>
          <p className="max-w-sm self-end text-lg text-muted-foreground lg:col-span-4">
            Integrated capability for demanding process-industry projects.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <ul className="border-t border-navy lg:col-span-6">
            {CAPS.map((c, i) => {
              const on = active === i;
              return (
                <li key={c.t} className="border-b border-border">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-expanded={on}
                    className="group flex w-full items-start gap-6 py-7 text-left"
                  >
                    <span className={`font-display text-sm font-bold transition-colors ${on ? "text-primary" : "text-steel-blue"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className={`block font-display text-xl font-extrabold uppercase tracking-tight transition-colors sm:text-2xl ${on ? "text-navy" : "text-foreground/55"}`}>
                        {c.t}
                      </span>
                      <span className={`grid transition-all duration-500 ${on ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <span className="overflow-hidden text-base leading-relaxed text-muted-foreground">
                          {c.d}
                          <img src={c.img} alt={c.alt} loading="lazy" className="mt-5 aspect-[16/10] w-full object-cover lg:hidden" />
                        </span>
                      </span>
                    </span>
                    <span className="pt-1 text-steel-blue lg:hidden">{on ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}</span>
                    <ArrowUpRight className={`hidden h-6 w-6 transition-all lg:block ${on ? "text-primary" : "-translate-x-2 text-transparent"}`} />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="relative hidden lg:col-span-6 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden bg-navy">
              {CAPS.map((c, i) => (
                <img
                  key={c.t}
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
                />
              ))}
              <div className="absolute bottom-0 left-0 bg-navy px-6 py-4">
                <p className="eyebrow text-navy-foreground">
                  <span className="text-primary">{String(active + 1).padStart(2, "0")}</span> / {CAPS[active].t}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- industries ---------- */
const INDUSTRIES = [
  { t: "Ethanol & Distillery", d: "Distillation · Process plants", img: hero },
  { t: "Chemical & Process", d: "Process equipment · Plant systems", img: piping },
  { t: "Oil & Gas", d: "Process facilities · Infrastructure", img: site },
  { t: "Water & Wastewater", d: "Treatment · Plant infrastructure", img: water },
  { t: "Food & Allied", d: "Process systems · Equipment", img: evaporator },
  { t: "Evaporation & Drying", d: "Evaporators · Dryers", img: fabrication },
];

export function Industries() {
  const [active, setActive] = useState(0);
  return (
    <section id="industries" className="bg-navy py-24 text-navy-foreground lg:py-36">
      <div className="container-x">
        <Reveal>
          <Label light>03 — Industries</Label>
          <h2 className="headline mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-7xl">
            Engineering for
            <br />
            process-intensive industries.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="grid grid-cols-5 grid-rows-[auto] gap-3 lg:col-span-7">
            <div className="relative col-span-5 aspect-[16/11] overflow-hidden sm:col-span-3 sm:row-span-2 sm:aspect-auto sm:min-h-[520px]">
              {INDUSTRIES.map((ind, i) => (
                <img
                  key={ind.t}
                  src={ind.img}
                  alt={`${ind.t} industrial facility`}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${active === i ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              <p className="eyebrow absolute left-0 top-0 bg-primary px-4 py-3 text-primary-foreground">
                {String(active + 1).padStart(2, "0")} — {INDUSTRIES[active].t}
              </p>
            </div>
            <img src={evaporator} alt="Stainless steel evaporator system" loading="lazy" className="col-span-2 hidden h-full min-h-[250px] w-full object-cover sm:block" />
            <img src={water} alt="Water treatment clarifier tanks" loading="lazy" className="col-span-2 hidden h-full min-h-[250px] w-full object-cover sm:block" />
          </div>
          <ul className="border-t border-navy-foreground/25 lg:col-span-5">
            {INDUSTRIES.map((ind, i) => (
              <li key={ind.t}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="flex w-full items-baseline gap-5 border-b border-navy-foreground/15 py-5 text-left"
                >
                  <span className={`font-display text-sm font-bold ${active === i ? "text-primary" : "text-navy-foreground/50"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className={`block font-display text-xl font-extrabold uppercase tracking-tight transition-colors sm:text-2xl ${active === i ? "text-navy-foreground" : "text-navy-foreground/55"}`}>
                      {ind.t}
                    </span>
                    <span className="mt-1 block text-sm text-navy-foreground/60">{ind.d}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- manufacturing ---------- */
const EQUIP = ["Distillation columns", "Evaporators", "Storage tanks", "Condensers", "Reboilers", "Pressure / Jacketed vessels", "Dryers"];

export function Manufacturing() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <img src={fabrication} alt="In-house fabrication of a large stainless steel process vessel" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-x relative grid min-h-[100vh] gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="flex flex-col justify-center lg:col-span-7">
          <Label light>04 — Manufacturing</Label>
          <h2 className="headline mt-6 text-5xl sm:text-6xl lg:text-8xl">
            Where engineering
            <br />
            becomes equipment.
          </h2>
          <p className="mt-8 max-w-md text-lg text-navy-foreground/85">
            In-house industrial fabrication capability for process equipment built around project requirements.
          </p>
        </Reveal>
        <Reveal className="flex flex-col justify-end lg:col-span-4 lg:col-start-9" delay={150}>
          <p className="eyebrow text-primary">Equipment range</p>
          <ul className="mt-4 border-t border-navy-foreground/30">
            {EQUIP.map((e) => (
              <li key={e} className="flex items-center justify-between border-b border-navy-foreground/20 py-3.5 font-display text-sm font-bold uppercase tracking-[0.12em]">
                {e}
                <span className="h-1.5 w-1.5 bg-primary" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <div className="relative border-t border-navy-foreground/20">
        <p className="container-x eyebrow flex justify-between py-5 text-navy-foreground/75">
          <span>Fabrication / Working facility</span>
          <span>MIDC, Bhosari, Pune</span>
        </p>
      </div>
    </section>
  );
}

/* ---------- engineering & design ---------- */
const SPECS = [
  ["3D Plant Engineering", "PDMS · PDS · SP3D · CAD"],
  ["Piping Engineering", "Plant layouts · Routing · Piping design"],
  ["Mechanical Engineering", "Equipment · Process systems"],
  ["Civil & Structural", "Plant infrastructure"],
];

export function EngineeringDesign() {
  return (
    <section className="py-24 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <img src={engineering} alt="Engineer reviewing a 3D plant piping model with engineering drawings" loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </Reveal>
        <Reveal className="flex flex-col justify-center lg:col-span-5" delay={120}>
          <Label>05 — Engineering & Design</Label>
          <h2 className="headline mt-6 text-4xl text-navy sm:text-5xl">
            Precision before
            <br />
            the first pipe is installed.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Technical design that connects plant intent to equipment, piping and infrastructure.
          </p>
        </Reveal>
        <div className="grid border-t border-navy sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
          {SPECS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 80} className="border-b border-border py-8 sm:pr-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
              <p className="font-display text-xs font-bold text-primary">E.{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-display text-xl font-extrabold uppercase tracking-tight text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </Reveal>
          ))}
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
            <Label light>06 — Why Lexus</Label>
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
              <span className="font-display text-8xl font-extrabold leading-none text-primary">{l}</span>
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
      if (!e.isIntersecting) return;
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
    <section id="projects" className="bg-paper">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[760px]">
          <img src={site} alt="Process vessel being lifted into place at an overseas project site" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <p className="eyebrow absolute bottom-0 left-0 bg-navy px-5 py-4 text-navy-foreground">Case / Overseas site execution</p>
        </div>
        <div className="flex items-center px-6 py-20 lg:px-20">
          <Reveal className="max-w-xl">
            <Label>07 — Project experience</Label>
            <div className="mt-10 flex items-end gap-5 border-b border-border pb-8">
              <span className="font-display text-[7rem] font-extrabold leading-[0.8] tracking-tighter text-primary sm:text-[10rem]">
                <CountUp to={25} />+
              </span>
              <span className="eyebrow pb-3 text-navy">Personnel
                <br />onsite</span>
            </div>
            <h2 className="headline mt-10 text-4xl text-navy sm:text-5xl">
              Proven when
              <br />
              conditions get tough.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              During the Iraq War, the company maintained an onsite team of 25 people and remained committed to completing
              the project target.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- who we serve ---------- */
const SERVE = ["Plant Owners", "EPC Contractors", "Engineering Companies", "OEMs", "Industrial Project Teams"];

export function WhoWeServe() {
  return (
    <section className="py-24 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <Label>08 — Who we serve</Label>
          <h2 className="headline mt-6 text-4xl text-navy sm:text-5xl">
            Supporting the teams
            <br />
            behind industrial projects.
          </h2>
          <ul className="mt-12 border-t border-navy">
            {SERVE.map((s, i) => (
              <li key={s} className="group flex items-baseline gap-6 border-b border-border py-6">
                <span className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-navy transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8" delay={150}>
          <img src={technicians} alt="Technicians working on electrical and instrumentation systems at a plant" loading="lazy" className="h-full min-h-[420px] w-full object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden text-navy-foreground">
      <img src={piping} alt="Industrial process piping at a plant" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="scrim absolute inset-0" />
      <div className="container-x relative py-32 lg:py-44">
        <Reveal className="max-w-4xl">
          <Label light>09 — Start a project</Label>
          <h2 className="headline mt-6 text-5xl sm:text-6xl lg:text-8xl">
            Have a complex project?
            <br />
            <span className="text-primary">Let's engineer it.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-navy-foreground/85">
            Share your project requirement with our team and let's discuss the right engineering, fabrication or execution
            approach.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#footer" className="btn-primary">
              Contact our team <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#capabilities" className="btn-outline">
              Explore capabilities
            </a>
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
          <p className="font-display text-2xl font-extrabold uppercase leading-tight tracking-tight">
            Lexus India
            <br />
            Engineering Solutions
          </p>
          <p className="mt-4 text-navy-foreground/70">Engineering & Technology Solutions</p>
          <p className="eyebrow mt-6 text-navy-foreground/50">Also referred to as 3A-Engg. Solution</p>
        </div>
        <nav aria-label="Footer" className="lg:col-span-3">
          <p className="eyebrow text-primary">Navigate</p>
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
          <p className="eyebrow text-primary">Locations</p>
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
