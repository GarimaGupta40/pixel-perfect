import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Navbar, Footer } from "@/components/site/Sections";
import heroImg from "@/assets/hero-plant.jpg";
import fabrication from "@/assets/fabrication.jpg";
import engineering from "@/assets/engineering.jpg";
import evaporator from "@/assets/evaporator.jpg";
import site from "@/assets/site.jpg";
import technicians from "@/assets/technicians.jpg";

const TITLE = "About Us | Lexus India Engineering Solutions, Pune";
const DESC =
  "Pune-based engineering and technical solutions for process industries — design, fabrication, equipment manufacturing, site execution and commissioning.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

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
      { threshold: 0.12 },
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
    <p className={`eyebrow flex items-center gap-3 ${light ? "text-gold-light" : "text-gold"}`}>
      <span className={`h-px w-8 ${light ? "bg-gold-light" : "bg-gold"}`} />
      {children}
    </p>
  );
}

const INDUSTRIES = [
  "Chemical",
  "Oil & Gas",
  "Food",
  "Distillery",
  "Ethanol",
  "Evaporation",
  "Dryers",
  "Water & Wastewater Treatment",
  "Allied Process Industries",
];

const SERVICE_GROUPS = [
  {
    no: "01",
    title: "Engineering",
    items: [
      "Project Management",
      "Mechanical Design",
      "Basic & Detailed Engineering",
      "Plant & Piping Layouts",
      "3D Piping & Isometrics",
    ],
  },
  {
    no: "02",
    title: "Manufacturing",
    items: ["Equipment Manufacturing", "Fabrication & Erection"],
  },
  {
    no: "03",
    title: "Execution",
    items: ["Installation", "Electrical & Instrumentation Work", "Site Execution", "Commissioning"],
  },
];

const EQUIPMENT = [
  "Distillation Columns",
  "Evaporators",
  "Dryers",
  "Storage Tanks",
  "Condensers",
  "Reboilers",
  "Pressure / Jacketed Vessels",
];

const VALUES = [
  { name: "Integrity", line: "Doing what we say, the way we said it." },
  { name: "Expertise", line: "Engineering knowledge applied with care." },
  { name: "Innovations", line: "Better ways to design, build and execute." },
  { name: "Transparency", line: "Clear communication at every stage." },
  { name: "Teamwork", line: "Engineers, fabricators and site crews as one." },
];

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. HERO — split editorial */}
        <section className="relative pt-28 sm:pt-32 bg-background overflow-hidden">
          <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-14 items-end pb-16 lg:pb-24">
            <div className="lg:col-span-6">
              <Reveal>
                <Label>About Us</Label>
                <h1 className="headline mt-6 text-[2.6rem] sm:text-6xl xl:text-7xl text-foreground">
                  Engineering Expertise.
                  <span className="block text-primary">Built on Trust.</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Lexus India Engineering Solutions is a Pune-based company providing engineering and
                  technical solutions for process industries — from design and fabrication to site
                  execution and commissioning.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">Also referred to as 3A-Engg. Solution.</p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
                  <div>
                    <p className="eyebrow text-gold">Head Office</p>
                    <p className="mt-1 font-display font-bold text-foreground">Shivaji Nagar, Pune</p>
                  </div>
                  <div>
                    <p className="eyebrow text-gold">Works</p>
                    <p className="mt-1 font-display font-bold text-foreground">MIDC Bhosari, Pune</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 relative">
              <Reveal delay={150}>
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-gold" />
                  <img
                    src={heroImg}
                    alt="Process plant with columns and piping"
                    className="relative w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground px-6 py-5 max-w-[16rem]">
                    <p className="eyebrow text-gold-light">Pune, India</p>
                    <p className="mt-2 font-display font-bold uppercase leading-tight">
                      Engineering for process industries
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. WHO WE ARE */}
        <section className="bg-paper border-y border-border py-20 lg:py-28">
          <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Label>Who We Are</Label>
                <h2 className="headline mt-6 text-4xl sm:text-5xl text-foreground">
                  Rooted in process <span className="text-primary">industry</span> experience.
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <img
                  src={technicians}
                  alt="Engineers reviewing work on site"
                  className="mt-10 w-full aspect-[4/3] object-cover"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-16">
              <Reveal>
                <p className="text-xl sm:text-2xl leading-relaxed text-foreground font-display font-semibold">
                  We bring together engineering, fabrication and project execution for plants where
                  precision, reliability and safe operation matter.
                </p>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl">
                  Our team has industrial experience across a broad range of process sectors, supporting
                  clients through design, equipment manufacturing, installation and commissioning —
                  with work spanning:
                </p>
              </Reveal>
              <Reveal delay={120}>
                <ul className="mt-10 grid sm:grid-cols-2 border-t border-border">
                  {INDUSTRIES.map((ind, i) => (
                    <li
                      key={ind}
                      className="group flex items-baseline gap-5 border-b border-border py-4 sm:odd:pr-8 transition-colors"
                    >
                      <span className="font-display text-sm font-bold text-gold tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display font-bold uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
                        {ind}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. CAPABILITIES — dark */}
        <section className="relative bg-navy text-navy-foreground py-20 lg:py-28 overflow-hidden">
          <img
            src={fabrication}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="container-x relative">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <Reveal className="lg:col-span-7">
                <Label light>Engineering & Manufacturing Capabilities</Label>
                <h2 className="headline mt-6 text-4xl sm:text-5xl lg:text-6xl">
                  From drawing board <span className="text-gold-light">to commissioning.</span>
                </h2>
              </Reveal>
              <Reveal className="lg:col-span-5" delay={100}>
                <p className="text-base leading-relaxed text-navy-foreground/75">
                  A single team covering engineering, manufacturing and site execution — keeping
                  responsibility clear and delivery coordinated.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid md:grid-cols-3 border-t border-navy-foreground/15">
              {SERVICE_GROUPS.map((g, i) => (
                <Reveal key={g.title} delay={i * 120}>
                  <div className="h-full py-10 md:px-8 md:first:pl-0 border-b md:border-b-0 md:border-r last:border-r-0 border-navy-foreground/15">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-2xl font-extrabold uppercase">{g.title}</h3>
                      <span className="font-display text-sm font-bold text-gold-light">{g.no}</span>
                    </div>
                    <span className="mt-4 block h-0.5 w-10 bg-primary" />
                    <ul className="mt-6 space-y-3">
                      {g.items.map((it) => (
                        <li key={it} className="flex gap-3 text-navy-foreground/85">
                          <span className="mt-2.5 h-1 w-1 shrink-0 bg-gold-light" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center">
              <Reveal className="lg:col-span-5">
                <img src={evaporator} alt="Process equipment" className="w-full aspect-[4/3] object-cover" />
              </Reveal>
              <Reveal className="lg:col-span-7" delay={120}>
                <p className="eyebrow text-gold-light">Equipment We Manufacture</p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {EQUIPMENT.map((e) => (
                    <li
                      key={e}
                      className="border border-navy-foreground/20 px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wide hover:border-gold-light hover:text-gold-light transition-colors"
                    >
                      {e}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-navy-foreground/60">
                  Manufactured at our works in MIDC Bhosari, Pune.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 4. IRAQ */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container-x grid lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-7 relative min-h-[320px]">
              <img src={site} alt="Project site execution" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="lg:col-span-5 bg-primary text-primary-foreground p-8 sm:p-12 lg:p-14">
              <Reveal>
                <Label light>Project Experience — Iraq</Label>
                <h2 className="headline mt-6 text-3xl sm:text-4xl xl:text-5xl">
                  Commitment That Holds Under Pressure.
                </h2>
                <div className="mt-10 flex items-end gap-4 border-y border-primary-foreground/20 py-6">
                  <span className="font-display text-7xl sm:text-8xl font-extrabold leading-none text-gold-light">
                    25
                  </span>
                  <span className="pb-2 eyebrow text-primary-foreground/90">Team members onsite</span>
                </div>
                <p className="mt-8 leading-relaxed text-primary-foreground/85">
                  During the Iraq War, 25 of our team members remained onsite and continued working
                  toward project targets despite difficult circumstances.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 5. VALUES */}
        <section className="bg-paper border-t border-border py-20 lg:py-28">
          <div className="container-x">
            <Reveal>
              <Label>Our Core Values</Label>
              <h2 className="headline mt-6 text-4xl sm:text-5xl text-foreground max-w-3xl">
                What guides <span className="text-primary">every project.</span>
              </h2>
            </Reveal>
            <ol className="mt-14 border-t border-foreground/15">
              {VALUES.map((v, i) => (
                <Reveal key={v.name} delay={i * 80}>
                  <li className="group grid grid-cols-12 items-center gap-4 border-b border-foreground/15 py-6 sm:py-8">
                    <span className="col-span-2 sm:col-span-1 font-display text-sm font-bold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 sm:col-span-5 font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {v.name}
                    </span>
                    <span className="col-span-12 sm:col-span-6 text-muted-foreground sm:text-right">{v.line}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <div className="mt-20 relative overflow-hidden bg-navy text-navy-foreground">
                <img src={engineering} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 p-10 sm:p-14">
                  <h3 className="headline text-3xl sm:text-5xl">
                    Engineering for a <span className="text-gold-light">Better Tomorrow</span>
                  </h3>
                  <a href="/#contact" className="btn-primary shrink-0">
                    Start a Project <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
