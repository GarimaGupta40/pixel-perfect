import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Check, Linkedin, Twitter, Youtube } from "lucide-react";

import logo from "@/assets/logo 1.png";
import heroVideo from "@/assets/hero-video.mp4";
import hero from "@/assets/hero-plant.jpg";
import fabrication from "@/assets/fabrication.jpg";
import piping from "@/assets/piping.jpg";
import engineering from "@/assets/engineering.jpg";
import site from "@/assets/site.jpg";
import evaporator from "@/assets/evaporator.jpg";
import technicians from "@/assets/technicians.jpg";
import water from "@/assets/water.jpg";
import manufacturings from "@/assets/manufacturings.png";
import craneLift from "@/assets/crane-lift.jpg";
import goldRibbonPipes from "@/assets/gold-ribbon-pipes.jpg";
import indPower from "@/assets/ind-power.jpg";
import indWater from "@/assets/ind-water.jpg";
import indEthanol from "@/assets/ind-ethanol.jpg";
import indChemical from "@/assets/ind-chemical.jpg";
import indOilGas from "@/assets/ind-oilgas.jpg";
import indWaterTreat from "@/assets/ind-water-treat.jpg";
import indFood from "@/assets/ind-food.jpg";
import indEvaporation from "@/assets/ind-evaporation.jpg";

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

function SectionEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-2.5 ${light ? "text-[#e5be58]" : "text-[#c59b27]"}`}>
      <span className={`h-px w-5 sm:w-6 ${light ? "bg-[#e5be58]" : "bg-[#c59b27]"}`} />
      {children}
    </p>
  );
}

/* ---------- 00. NAVBAR ---------- */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-border/80" : "bg-white"
      }`}
    >
      <div className="container-x flex h-18 sm:h-20 items-center justify-between gap-6">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Lexus India Engineering Solutions"
            className="h-[60px] sm:h-[70px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        {/* Center Nav Links */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:gap-10 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-[#7a0d11] transition-colors link-underline pb-1"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_10px_rgba(212,175,55,0.22),0_2px_6px_rgba(0,0,0,0.35)] hover:shadow-[0_0_18px_rgba(212,175,55,0.48),0_4px_12px_rgba(0,0,0,0.4)] text-white px-5 sm:px-6 py-2.5 sm:py-3 font-display text-[0.72rem] font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200 active:scale-[0.98]"
        >
          <span>Start A Project</span>
          <ArrowRight className="h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------- 01. HERO SECTION ---------- */
export function Hero() {
  const heroItems = [
    { num: "01", label: "ENGINEERING" },
    { num: "02", label: "FABRICATION" },
    { num: "03", label: "EPC" },
    { num: "04", label: "SITE EXECUTION" },
    { num: "05", label: "PLANT SUPPORT" },
  ];

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#0c0d11] text-white pt-20">
      {/* Background Industrial Plant Video / Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={hero}
          className="h-full w-full object-cover object-center scale-[1.02] contrast-[1.06] brightness-[0.95]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Deep neutral shadow gradient on left for crisp white-text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d11]/94 via-[#0c0d11]/72 via-48% to-transparent" />
        {/* Subtle top and bottom neutral vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d11]/90 via-transparent to-[#0c0d11]/40" />
        {/* Subtle warm golden / amber cinematic glow over the plant's light areas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_78%_38%,rgba(218,165,32,0.18)_0%,rgba(197,155,39,0.06)_45%,transparent_70%)] mix-blend-screen"
        />
      </div>

      {/* Main Text Content */}
      <div className="container-x relative z-10 flex flex-1 flex-col justify-center py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <SectionEyebrow light>ENGINEERING SOLUTIONS FOR A BETTER TOMORROW</SectionEyebrow>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.8rem] leading-[1.04] tracking-tight uppercase text-white mt-6 sm:mt-7">
            ENGINEERING
            <br />
            COMPLEXITY.
            <br />
            BUILT FOR <span className="text-[#d4af37]">EXECUTION.</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-white/85 font-medium">
            Integrated engineering, fabrication and execution for process plants.
          </p>

          <div className="mt-8 sm:mt-10">
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_12px_rgba(212,175,55,0.26),0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.52),0_4px_14px_rgba(0,0,0,0.45)] text-white px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200 hover:translate-x-0.5"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Bottom 5-Column Strip */}
      <div className="relative z-10 border-t border-white/15 bg-[#0c0d11]/90 backdrop-blur-md">
        <ul className="container-x grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {heroItems.map((item, i) => (
            <li
              key={item.label}
              className={`flex items-center gap-3 py-4 text-xs font-bold tracking-wider text-white/90 uppercase ${
                i !== 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""
              }`}
            >
              <span className="text-[#c59b27] font-extrabold">{item.num}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 02. WHO WE ARE ---------- */
export function Intro() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 lg:py-28 border-b border-border/80">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Typography & Narrative */}
          <Reveal className="lg:col-span-5">
            <SectionEyebrow>WHO WE ARE</SectionEyebrow>

            <h2 className="headline mt-5 text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[0.96] text-foreground">
              ENGINEERING
              <br />
              CAPABILITY.
              <br />
              <span className="text-[#7a0d11]">EXECUTION</span>
              <br />
              THAT CONNECTS IT.
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-md">
              Lexus India Engineering Solutions delivers end-to-end engineering, fabrication and execution for process
              plants across industries. We combine technical expertise, operational excellence and a commitment to
              long-term value.
            </p>

            <div className="mt-8">
              <a
                href="#capabilities"
                className="group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_10px_rgba(212,175,55,0.22),0_2px_6px_rgba(0,0,0,0.35)] hover:shadow-[0_0_18px_rgba(212,175,55,0.48),0_4px_12px_rgba(0,0,0,0.4)] text-white px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200"
              >
                <span>Our Capabilities</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Right Column: Framed Image Composition with Red Card */}
          <Reveal className="relative lg:col-span-7" delay={150}>
            <div className="relative ml-auto w-full lg:w-[94%] pb-8 sm:pb-10">
              {/* Red Top-Left Framing Corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-3 z-10 h-14 w-14 border-l-2 border-t-2 border-[#7a0d11] sm:-left-4 sm:-top-4 sm:h-20 sm:w-20"
              />

              {/* Red Bottom-Right Framing Corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -bottom-3 z-10 h-14 w-14 border-r-2 border-b-2 border-[#7a0d11] sm:-right-4 sm:-bottom-4 sm:h-20 sm:w-20"
              />

              {/* Main Primary Fabrication Image */}
              <div className="relative overflow-hidden bg-slate-900 shadow-lg rounded-xs">
                <img
                  src={fabrication}
                  alt="Stainless steel vessel fabrication and welding"
                  className="aspect-[16/10] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Overlapping Deep Crimson Card on Top Right */}
              <div className="absolute -top-4 right-0 sm:-top-6 sm:-right-4 z-20 bg-[#7a0d11] p-4 sm:p-5 text-white shadow-xl max-w-[210px] sm:max-w-[240px] rounded-xs">
                <p className="font-display text-[0.76rem] sm:text-xs font-black tracking-widest uppercase text-white leading-snug">
                  INTEGRATED SOLUTIONS
                  <br />
                  FOR PROCESS
                  <br />
                  INDUSTRIES
                </p>
              </div>

              {/* Secondary Overlapping Piping Image on Bottom Left */}
              <div className="absolute -bottom-6 left-[-10px] sm:-bottom-8 sm:left-[-24px] z-20 w-[44%] max-w-[240px] sm:max-w-[280px] overflow-hidden border-4 border-white bg-slate-900 shadow-2xl rounded-xs">
                <img
                  src={piping}
                  alt="Industrial plant piping and process structure"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 03. PROJECT LIFECYCLE ---------- */
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
  const [active, setActive] = useState(3); // Default to 04 BUILD like reference

  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-[#fbfbfc] py-20 lg:py-28">
      <div className="container-x relative z-10">
        <Reveal>
          <SectionEyebrow>PROJECT LIFECYCLE</SectionEyebrow>

          <h2 className="headline mt-5 text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[0.96] text-foreground">
            FROM REQUIREMENT
            <br />
            TO <span className="text-[#7a0d11]">COMMISSIONING.</span>
          </h2>
        </Reveal>

        {/* 7-Stage Horizontal Connected Timeline */}
        <Reveal className="relative mt-16 pt-6 sm:mt-20 sm:pt-8" delay={150}>
          <div className="relative">
            {/* The Horizontal Rail Line */}
            <div className="absolute top-[17px] left-[7.14%] right-[7.14%] h-[2px] bg-slate-200 z-0">
              <div
                className="h-full bg-[#7a0d11] transition-all duration-300 ease-out"
                style={{ width: `${(active / (LIFECYCLE_STAGES.length - 1)) * 100}%` }}
              />
            </div>

            {/* 7 Interactive Stage Nodes */}
            <div className="relative z-10 flex justify-between gap-2 overflow-x-auto pb-4 sm:overflow-visible scrollbar-none">
              {LIFECYCLE_STAGES.map((s, i) => {
                const isActive = active === i;
                const isPast = active > i;

                return (
                  <button
                    key={s.num}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group relative flex flex-1 min-w-[85px] flex-col items-center text-center cursor-pointer transition-transform duration-200"
                  >
                    {/* Circle Node Indicator */}
                    <div className="relative flex h-9 w-9 items-center justify-center">
                      {isActive ? (
                        <div className="relative flex items-center justify-center">
                          <span className="absolute h-8 w-8 rounded-full bg-[#7a0d11]/20 ring-1 ring-[#7a0d11]/40 animate-pulse-subtle" />
                          <span className="relative h-3.5 w-3.5 rounded-full bg-[#7a0d11] shadow-sm" />
                        </div>
                      ) : isPast ? (
                        <span className="h-3 w-3 rounded-full border-2 border-[#7a0d11] bg-white transition-all duration-300 group-hover:scale-110" />
                      ) : (
                        <span className="h-3 w-3 rounded-full border-2 border-slate-300 bg-white transition-all duration-300 group-hover:border-slate-500 group-hover:scale-110" />
                      )}
                    </div>

                    {/* Stage Number & Stage Label */}
                    <div className="mt-3 flex flex-col items-center">
                      <span
                        className={`font-display text-lg sm:text-xl font-black transition-colors duration-300 ${
                          isActive ? "text-[#7a0d11]" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        {s.num}
                      </span>
                      <span
                        className={`font-display text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-300 mt-1 ${
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
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

/* ---------- 04. OUR EXPERTISE / CAPABILITIES ---------- */
const EXPERTISE_SLIDES = [
  {
    title: "EQUIPMENT FABRICATION",
    desc: "High-quality fabrication of process equipment to global standards, delivering reliability and performance.",
    colImg: site,
    crewImg: technicians,
    tankImg: evaporator,
  },
  {
    title: "EPC & TURNKEY EXECUTION",
    desc: "Comprehensive engineering, procurement and construction management with end-to-end site commissioning.",
    colImg: hero,
    crewImg: engineering,
    tankImg: piping,
  },
  {
    title: "PROCESS PIPING & STRUCTURES",
    desc: "Precision layout, pre-fabrication and heavy structural installation engineered for demanding environments.",
    colImg: piping,
    crewImg: technicians,
    tankImg: water,
  },
];

export function Capabilities() {
  const [slide, setSlide] = useState(0);
  const current = EXPERTISE_SLIDES[slide] ?? EXPERTISE_SLIDES[0]!;

  const handlePrev = () => {
    setSlide((prev) => (prev > 0 ? prev - 1 : EXPERTISE_SLIDES.length - 1));
  };
  const handleNext = () => {
    setSlide((prev) => (prev < EXPERTISE_SLIDES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="capabilities" className="relative overflow-hidden bg-white py-20 lg:py-28 border-b border-border/80">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Narrative */}
          <Reveal className="lg:col-span-5">
            <SectionEyebrow>OUR EXPERTISE</SectionEyebrow>

            <h2 className="headline mt-5 text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[0.96] text-foreground">
              FROM ENGINEERING
              <br />
              DRAWINGS
              <br />
              TO <span className="text-[#7a0d11]">PLANT EXECUTION.</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-md">
              We deliver complete EPC solutions for a wide range of process industries, ensuring precision, safety and
              performance.
            </p>

            <div className="mt-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_10px_rgba(212,175,55,0.22),0_2px_6px_rgba(0,0,0,0.35)] hover:shadow-[0_0_18px_rgba(212,175,55,0.48),0_4px_12px_rgba(0,0,0,0.4)] text-white px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Right Column: 3-Image Composition with Red Corner Accents & Red Card */}
          <Reveal className="relative lg:col-span-7" delay={150}>
            <div className="relative ml-auto w-full lg:w-[96%]">
              {/* Red Top-Left Corner Accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-3 z-10 h-14 w-14 border-l-2 border-t-2 border-[#7a0d11] sm:-left-4 sm:-top-4 sm:h-20 sm:w-20"
              />

              {/* Red Bottom-Right Corner Accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -bottom-3 z-10 h-14 w-14 border-r-2 border-b-2 border-[#7a0d11] sm:-right-4 sm:-bottom-4 sm:h-20 sm:w-20"
              />

              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                {/* Left Large Vertical Image */}
                <div className="col-span-6 overflow-hidden bg-slate-900 shadow-md rounded-xs">
                  <img
                    src={current.colImg}
                    alt="Process plant distillation columns"
                    className="h-full w-full object-cover min-h-[340px] sm:min-h-[420px] transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                {/* Right Stack: Red Card / Photo / Photo */}
                <div className="col-span-6 flex flex-col gap-3 sm:gap-4">
                  {/* Top Right Solid Red Card with Title, Text, Carousel Controls */}
                  <div className="bg-[#7a0d11] p-5 sm:p-6 text-white shadow-lg rounded-xs flex flex-col justify-between min-h-[170px]">
                    <div>
                      <h3 className="font-display text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                        {current.title}
                      </h3>
                      <p className="mt-2 text-[0.74rem] sm:text-xs leading-relaxed text-white/85 font-normal">
                        {current.desc}
                      </p>
                    </div>

                    {/* Left/Right Arrow Carousel Buttons */}
                    <div className="mt-4 flex items-center justify-end gap-2.5">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous slide"
                        className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/25 hover:bg-black/40 text-white transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next slide"
                        className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#c59b27] hover:bg-[#b0871d] text-white transition-colors cursor-pointer"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Two Bottom Photos side-by-side or stacked */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 flex-1">
                    <div className="overflow-hidden bg-slate-900 shadow-sm rounded-xs">
                      <img
                        src={current.crewImg}
                        alt="Site execution engineers"
                        className="h-full w-full object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden bg-slate-900 shadow-sm rounded-xs">
                      <img
                        src={current.tankImg}
                        alt="Industrial storage vessel"
                        className="h-full w-full object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 05. INDUSTRIES WE SERVE ---------- */
const INDUSTRIES_CARDS = [
  {
    title: "Ethanol & Distillery",
    img: indEthanol,
  },
  {
    title: "Chemical & Process Plants",
    img: indChemical,
  },
  {
    title: "Oil & Gas",
    img: indOilGas,
  },
  {
    title: "Water & Wastewater",
    img: indWaterTreat,
  },
  {
    title: "Food & Allied Industries",
    img: indFood,
  },
  {
    title: "Evaporation & Drying",
    img: indEvaporation,
  },
];

/* ---------- Industries Background Aesthetic Graphic ---------- */
function IndustriesAestheticBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      <img src={hero} alt="" className="industries-plant-silhouette" />

      {/* SVG Fine Flowing Waves & Technical Drafting Lines */}
      <svg
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-90"
      >
        <defs>
          <linearGradient id="indGoldFlow" x1="0%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="var(--industries-gold)" stopOpacity="0.45" />
            <stop offset="40%" stopColor="var(--industries-gold)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--industries-crimson)" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="indCrimsonFlow" x1="100%" y1="0%" x2="20%" y2="80%">
            <stop offset="0%" stopColor="var(--industries-gold)" stopOpacity="0.35" />
            <stop offset="35%" stopColor="var(--industries-gold)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--industries-crimson)" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Sweeping Top-Right Diagonal Curve Strands */}
        <g stroke="url(#indCrimsonFlow)" strokeWidth="1.2">
          <path d="M1000 -60 C1180 160, 1380 320, 1660 480" />
          <path d="M1060 -60 C1230 140, 1430 300, 1660 430" />
          <path d="M1120 -60 C1280 120, 1480 270, 1680 380" strokeOpacity="0.8" />
          <path d="M940 -60 C1120 180, 1320 350, 1620 530" strokeOpacity="0.6" />
          <path d="M1200 -60 C1350 100, 1530 230, 1700 320" strokeOpacity="0.4" />
        </g>

        {/* Flowing Bottom-Left Gold Ribbon Curves */}
        <g stroke="url(#indGoldFlow)" strokeWidth="1.2">
          <path d="M-80 920 C180 840, 280 720, 240 540 C200 380, 80 320, 20 160" />
          <path d="M-100 860 C150 790, 240 680, 200 510 C160 350, 50 300, 0 140" strokeOpacity="0.75" />
          <path d="M-60 970 C220 880, 320 750, 270 570 C220 400, 100 340, 40 180" strokeOpacity="0.5" />
          <path d="M-120 800 C110 740, 190 640, 160 480 C130 320, 30 270, -10 120" strokeOpacity="0.35" />
        </g>

        {/* Fine Architectural & Drafting Coordinate Elements */}
        <g stroke="var(--primary-foreground)" strokeOpacity="0.04" strokeWidth="0.75">
          <line x1="0" y1="140" x2="1600" y2="140" strokeDasharray="4 6" />
          <line x1="0" y1="760" x2="1600" y2="760" strokeDasharray="4 6" />
          <circle cx="1380" cy="140" r="180" strokeDasharray="4 4" />
          <circle cx="1380" cy="140" r="320" strokeDasharray="6 8" />
        </g>
      </svg>
    </div>
  );
}

export function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden py-20 lg:py-28 text-primary-foreground"
    >
      {/* Subtle Premium Background Effect */}
      <IndustriesAestheticBackground />

      <div className="container-x relative z-10">
        <Reveal>
          <SectionEyebrow light>INDUSTRIES WE SERVE</SectionEyebrow>

          <h2 className="headline mt-5 max-w-3xl text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[0.96] text-primary-foreground">
            BUILT FOR
            <br />
            PROCESS-INTENSIVE
            <br />
            <span className="industries-highlight">INDUSTRIES.</span>
          </h2>
        </Reveal>

        {/* 6 Industry Image Cards */}
        <Reveal className="mt-14" delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {INDUSTRIES_CARDS.map((item) => (
              <div
                key={item.title}
                className="industries-card group relative aspect-[3/4.2] overflow-hidden rounded-xs border transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Dark Gradient Overlay */}
                <div className="industries-card-shade absolute inset-0" />

                {/* Card Title at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <h3 className="font-display text-[0.72rem] sm:text-xs font-extrabold uppercase tracking-wider text-primary-foreground leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 06. WHERE ENGINEERING BECOMES EQUIPMENT (OUR EQUIPMENT) ---------- */
const EQUIPMENT_BULLETS = [
  "DISTILLATION COLUMNS",
  "HEAT EXCHANGERS",
  "PRESSURE VESSELS",
  "STORAGE TANKS",
  "REACTION VESSELS",
  "SKIDS & PACKAGES",
  "AND MORE",
];

export function Manufacturing() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 border-b border-border/80">
      {/* Background Industrial Plant Silhouette on Right */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-[45%] max-w-[600px] z-0 overflow-hidden hidden lg:block select-none">
        <img
          src={piping}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right opacity-[0.14] filter sepia-[0.35] brightness-[1.08] [mask-image:linear-gradient(to_left,black_20%,transparent_90%)]"
        />
      </div>

      {/* Subtle Gold Swirl Curves in Bottom Left Background */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 bottom-0 h-[320px] w-[550px] z-0 overflow-hidden select-none opacity-60">
        <svg
          viewBox="0 0 550 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="equipGoldWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c59b27" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#e5be58" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#7a0d11" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <g stroke="url(#equipGoldWave)" strokeWidth="1.2">
            <path d="M-50 240 C120 260, 240 300, 460 320" />
            <path d="M-50 200 C140 220, 260 270, 490 320" strokeOpacity="0.7" />
            <path d="M-50 160 C160 190, 280 240, 520 320" strokeOpacity="0.4" />
          </g>
        </svg>
      </div>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left Column: Heading + Narrative + Checkmark List */}
          <Reveal className="lg:col-span-4 xl:col-span-4">
            <SectionEyebrow>OUR EQUIPMENT</SectionEyebrow>

            <h2 className="headline mt-5 text-3xl sm:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[0.96] text-foreground">
              WHERE
              <br />
              ENGINEERING
              <br />
              BECOMES
              <br />
              <span className="text-[#7a0d11]">EQUIPMENT.</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-md">
              High-performance process equipment designed and delivered for a wide range of industries, with precision,
              safety and reliability.
            </p>

            <ul className="mt-8 space-y-3.5">
              {EQUIPMENT_BULLETS.map((item) => (
                <li key={item} className="flex items-center gap-3.5 group">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7a0d11] text-white shadow-xs">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span className="font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground group-hover:text-[#7a0d11] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right Column: Enlarged Seamless Infographic */}
          <Reveal className="relative lg:col-span-8 xl:col-span-8 flex items-center justify-center" delay={150}>
            <div className="relative w-full flex items-center justify-center lg:scale-105 xl:scale-110 transition-transform duration-500">
              <img
                src={manufacturings}
                alt="Process equipment infographic showing distillation columns, evaporators, storage tanks, distillery columns, condensers, pressure/jacketed vessels, and dryers around a central heat exchanger"
                className="w-full h-auto object-contain mix-blend-multiply transition-transform duration-700 hover:scale-[1.015]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 07. PROVEN WHEN CONDITIONS GET TOUGH (25+ YEARS EXPERIENCE) ---------- */
export function ProjectExperience() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#fbfbfc] py-20 lg:py-28 border-b border-border/80">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: 25+ Experience Banner & Headline */}
          <Reveal className="lg:col-span-5">
            {/* 25+ Years with Vertical Gold Bar */}
            <div className="flex items-start gap-4">
              <div className="w-1.5 self-stretch bg-[#c59b27] rounded-xs" />
              <div>
                <div className="font-display text-5xl sm:text-6xl lg:text-[4.75rem] font-black tracking-tight text-[#c59b27] leading-none">
                  25+
                </div>
                <div className="font-display text-xs font-black uppercase tracking-[0.2em] text-foreground/80 mt-2">
                  YEARS OF EXPERIENCE
                </div>
              </div>
            </div>

            <h2 className="headline mt-8 text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight leading-[1.02] text-foreground">
              PROVEN WHEN
              <br />
              CONDITIONS
              <br />
              GET TOUGH.
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-md">
              Trusted for our technical depth, execution excellence and ability to deliver in complex and challenging
              environments across industries.
            </p>
          </Reveal>

          {/* Right Column: Industrial Crane Lifting Huge Vessel Photo */}
          <Reveal className="relative lg:col-span-7" delay={150}>
            <div className="relative overflow-hidden rounded-xs shadow-xl border border-border/80 bg-slate-900">
              <img
                src={craneLift}
                alt="Heavy crane lifting large process pressure vessel into steel structure"
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 08. SUPPORTING THE TEAMS BEHIND INDUSTRIAL PROJECTS ---------- */
const STAKEHOLDERS = [
  {
    title: "PLANT OWNERS",
    desc: "Secure, efficient and reliable process plants tailored to your business needs.",
  },
  {
    title: "EPC CONTRACTORS",
    desc: "A trusted partner with engineering and execution expertise at every stage.",
  },
  {
    title: "ENGINEERING COMPANIES",
    desc: "Collaborative execution with technical depth and manufacturing capability.",
  },
  {
    title: "OEMS",
    desc: "Fabrication and equipment manufacturing support.",
  },
  {
    title: "INDUSTRIAL PROJECT TEAMS",
    desc: "Responsive and dependable support to keep projects on track.",
  },
];

export function WhoWeServe() {
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-border/80">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
        {/* Left Column: Heading & Narrative */}
        <Reveal className="lg:col-span-4">
          <h2 className="headline text-3xl sm:text-4xl lg:text-[2.65rem] font-black tracking-tight leading-[1.04] text-foreground">
            <span className="text-[#7a0d11]">SUPPORTING</span>
            <br />
            THE TEAMS
            <br />
            BEHIND
            <br />
            INDUSTRIAL
            <br />
            PROJECTS.
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground font-normal max-w-sm">
            We work with all key stakeholders across the project lifecycle, ensuring seamless collaboration and
            successful delivery from concept to commissioning and beyond.
          </p>
        </Reveal>

        {/* Right Stakeholder Cards Grid with Circular Gold Icons */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {STAKEHOLDERS.slice(0, 3).map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="group border border-border/80 bg-[#fbfbfc] p-6 flex flex-col justify-between rounded-xs transition-all duration-300 hover:border-[#c59b27]/60 hover:bg-white shadow-xs hover:shadow-md min-h-[190px]"
              >
                <div>
                  {/* Gold/Bronze Circular Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6edd9] border border-[#c59b27]/40 text-[#c59b27] font-display font-black text-sm mb-4">
                    {item.title[0]}
                  </div>

                  <h3 className="font-display font-black text-sm uppercase tracking-wider text-foreground group-hover:text-[#7a0d11] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground font-normal">{item.desc}</p>
              </Reveal>
            ))}
          </div>

          {/* Bottom Row: 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STAKEHOLDERS.slice(3, 5).map((item, i) => (
              <Reveal
                key={item.title}
                delay={240 + i * 80}
                className="group border border-border/80 bg-[#fbfbfc] p-6 flex flex-col justify-between rounded-xs transition-all duration-300 hover:border-[#c59b27]/60 hover:bg-white shadow-xs hover:shadow-md min-h-[180px]"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6edd9] border border-[#c59b27]/40 text-[#c59b27] font-display font-black text-sm mb-4">
                    {item.title[0]}
                  </div>

                  <h3 className="font-display font-black text-sm uppercase tracking-wider text-foreground group-hover:text-[#7a0d11] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground font-normal">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 09. PRE-FOOTER CTA (HAVE A COMPLEX PROJECT?) ---------- */
export function FinalCta() {
  return (
    <section id="contact" className="bg-[#fbfbfc] py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-xs border border-border/80 bg-white shadow-md">
            <div className="grid lg:grid-cols-12 min-h-[360px] items-stretch">
              {/* Left Content Area */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative z-10">
                {/* Gold Vertical Left Accent Bar */}
                <div className="flex items-start gap-3.5">
                  <div className="w-1.5 self-stretch bg-[#c59b27] rounded-xs" />
                  <div>
                    <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-[2.4rem] leading-[1.08] tracking-tight uppercase">
                      <span className="text-foreground block">HAVE A COMPLEX PROJECT?</span>
                      <span className="text-[#7a0d11] block mt-1">LET'S ENGINEER IT.</span>
                    </h2>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-lg pl-5">
                  Partner with Lexus India Engineering Solutions for end-to-end engineering, fabrication and execution
                  support.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4 pl-5">
                  <a
                    href="#footer"
                    className="group inline-flex items-center gap-2 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_10px_rgba(212,175,55,0.22),0_2px_6px_rgba(0,0,0,0.35)] hover:shadow-[0_0_18px_rgba(212,175,55,0.48),0_4px_12px_rgba(0,0,0,0.4)] text-white px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200"
                  >
                    <span>Start A Project</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href="#capabilities"
                    className="inline-flex items-center gap-2 border border-foreground/30 hover:border-[#c59b27] text-foreground px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200 hover:text-[#7a0d11]"
                  >
                    <span>Discuss A Solution</span>
                  </a>
                </div>
              </div>

              {/* Right Image: Golden Swirl & Piping */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-slate-100">
                <img
                  src={goldRibbonPipes}
                  alt="Golden engineered ribbon and industrial process piping"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 10. FOOTER ---------- */
export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#faf9f6] text-foreground border-t border-border/70">
      {/* Background Industrial Plant Silhouette on Right */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-[45%] max-w-[550px] z-0 overflow-hidden hidden md:block">
        <img
          src={piping}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right opacity-[0.28] filter sepia-[0.35] brightness-[1.08] [mask-image:linear-gradient(to_left,black_25%,transparent_95%)]"
        />
      </div>

      {/* Flowing Golden Ribbon Curves in Bottom-Left Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute left-0 bottom-0 h-[260px] w-[500px] opacity-75"
        >
          <defs>
            <linearGradient id="footerGoldWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c59b27" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#e5be58" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7a0d11" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="footerRibbonFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c59b27" stopOpacity="0.12" />
              <stop offset="60%" stopColor="#c59b27" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#7a0d11" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Filled Ribbon Wave */}
          <path
            d="M-40 220 C100 240, 200 320, 360 400 L-40 400 Z"
            fill="url(#footerRibbonFill)"
          />

          {/* Gold Flowing Lines */}
          <g stroke="url(#footerGoldWave)" strokeWidth="1.3">
            <path d="M-60 180 C120 210, 220 300, 380 400" />
            <path d="M-60 210 C140 240, 240 320, 410 400" />
            <path d="M-60 240 C160 270, 260 340, 440 400" strokeOpacity="0.7" />
            <path d="M-60 150 C100 180, 200 280, 350 400" strokeOpacity="0.4" />
          </g>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container-x relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 items-start">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-5">
            <a href="#top" className="inline-block group">
              <img
                src={logo}
                alt="Lexus India Engineering Solutions"
                className="h-[62px] sm:h-[72px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </a>
            <div className="mt-5 space-y-1 text-xs sm:text-[0.82rem] font-medium text-slate-700 leading-relaxed">
              <p>Engineering solutions for a better tomorrow.</p>
              <p className="text-slate-600">Integrated Engineering | Fabrication | EPC | Plant Support</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 lg:border-l lg:border-slate-200/80 lg:pl-10">
            <h3 className="font-display text-xs sm:text-[0.82rem] font-black uppercase tracking-[0.18em] text-[#7a0d11]">
              QUICK LINKS
            </h3>
            <span className="block h-[2px] w-7 bg-[#c59b27] mt-2 mb-4" />
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-xs sm:text-[0.82rem] font-medium text-slate-700 hover:text-[#7a0d11] transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="lg:col-span-4 lg:border-l lg:border-slate-200/80 lg:pl-10">
            <h3 className="font-display text-xs sm:text-[0.82rem] font-black uppercase tracking-[0.18em] text-[#7a0d11]">
              FOLLOW US
            </h3>
            <span className="block h-[2px] w-7 bg-[#c59b27] mt-2 mb-4" />
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c59b27]/80 bg-white text-slate-700 hover:border-[#7a0d11] hover:text-[#7a0d11] hover:bg-[#7a0d11]/5 shadow-xs transition-all"
              >
                <Linkedin className="h-4 w-4 stroke-[1.8]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c59b27]/80 bg-white text-slate-700 hover:border-[#7a0d11] hover:text-[#7a0d11] hover:bg-[#7a0d11]/5 shadow-xs transition-all"
              >
                <Twitter className="h-4 w-4 stroke-[1.8]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c59b27]/80 bg-white text-slate-700 hover:border-[#7a0d11] hover:text-[#7a0d11] hover:bg-[#7a0d11]/5 shadow-xs transition-all"
              >
                <Youtube className="h-4 w-4 stroke-[1.8]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Maroon Bottom Bar */}
      <div
        className="relative z-10 py-4 sm:py-4.5 text-white"
        style={{
          background: "linear-gradient(90deg, #580609 0%, #750c10 50%, #4e0508 100%)",
        }}
      >
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[0.78rem] text-white/90">
          <p>© {new Date().getFullYear()} Lexus India Engineering Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#top" className="text-white/90 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/40">|</span>
            <a href="#top" className="text-white/90 hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
