import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Linkedin,
  Twitter,
  Youtube,
  MessageSquareText,
  HardHat,
  Compass,
  Factory,
  Cog,
  ClipboardCheck,
  Headset,
  Users,
  Building2,
  Globe,
  Layers,
} from "lucide-react";

import logo from "@/assets/logo 1.png";
import heroVideo from "@/assets/hero-video.mp4";
import hero from "@/assets/hero-plant.jpg";
import fabrication from "@/assets/fabrication.jpg";
import piping from "@/assets/piping.jpg";
import engineering from "@/assets/engineering.jpg";
import site from "@/assets/site.jpg";
import structural from "@/assets/structural.jpg";
import evaporator from "@/assets/evaporator.jpg";
import technicians from "@/assets/technicians.jpg";
import water from "@/assets/water.jpg";
import manufacturings from "@/assets/manufacturings.png";
import craneLift from "@/assets/crane-lift.jpg";
import goldRibbonPipes from "@/assets/gold-ribbon-pipes.png";
import indPower from "@/assets/ind-power.jpg";
import indWater from "@/assets/ind-water.jpg";
import indEthanol from "@/assets/ind-ethanol.jpg";
import indChemical from "@/assets/ind-chemical.jpg";
import indOilGas from "@/assets/ind-oilgas.jpg";
import indWaterTreat from "@/assets/ind-water-treat.jpg";
import indFood from "@/assets/ind-food.jpg";
import indEvaporation from "@/assets/ind-evaporation.jpg";

const NAV: { label: string; href?: string }[] = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Industries", href: "/#industries" },
  { label: "Projects", href: "/#projects" },
  { label: "About Us" },
  { label: "Contact", href: "/#contact" },
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
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE4D9]/90"
          : "bg-[#FAF8F5]/90 backdrop-blur-xs border-b border-[#EAE4D9]/40"
      }`}
    >
      <div className="container-x flex h-18 sm:h-20 items-center justify-between gap-6">
        {/* Logo */}
        <a href="/#top" className="flex items-center gap-3 group">
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
              key={n.label}
              href={n.href || "#"}
              onClick={(e) => {
                if (!n.href || n.href === "#") {
                  e.preventDefault();
                }
              }}
              className="text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-[#7a0d11] transition-colors link-underline pb-1 cursor-pointer"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <a
          href="/#contact"
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
      {/* Background Industrial Plant Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
        <div className="max-w-2xl">
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
              href="/#capabilities"
              className="group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_12px_rgba(212,175,55,0.26),0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.52),0_4px_14px_rgba(0,0,0,0.45)] text-white px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200 hover:translate-x-0.5"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
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
    <section id="about" className="relative overflow-hidden bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#EAE4D9]/80">
      {/* Subtle warm champagne ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(212,175,55,0.035)_0%,transparent_70%)]"
      />

      <div className="container-x relative z-10">
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
                href="/#capabilities"
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
              <div className="absolute -bottom-6 left-[-10px] sm:-bottom-8 sm:left-[-24px] z-20 w-[44%] max-w-[240px] sm:max-w-[280px] overflow-hidden border-4 border-[#FAF8F5] bg-slate-900 shadow-2xl rounded-xs">
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
  {
    num: "01",
    title: "UNDERSTAND",
    desc: "Analyse needs, goals and project scope.",
    icon: MessageSquareText,
  },
  {
    num: "02",
    title: "ENGINEER",
    desc: "Develop detailed engineering solutions.",
    icon: HardHat,
  },
  {
    num: "03",
    title: "DESIGN",
    desc: "Create optimal, safe and cost-effective designs.",
    icon: Compass,
  },
  {
    num: "04",
    title: "BUILD",
    desc: "Procure, fabricate and construct.",
    icon: Factory,
  },
  {
    num: "05",
    title: "EXECUTE",
    desc: "Test, integrate and ensure performance.",
    icon: Cog,
  },
  {
    num: "06",
    title: "COMMISSION",
    desc: "Start operations with full validation.",
    icon: ClipboardCheck,
  },
  {
    num: "07",
    title: "SUPPORT",
    desc: "Ongoing service for long-term success.",
    icon: Headset,
  },
];

export function Lifecycle() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const activeIndex = hovered !== null ? hovered : selected;

  return (
    <section id="lifecycle" className="relative overflow-hidden border-b border-[#EAE4D9]/80 bg-[#FAF8F5] py-20 lg:py-28">
      {/* Subtle Warm Champagne Ambient Radial Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_15%,rgba(212,175,55,0.06)_0%,transparent_75%)]"
      />

      {/* Elegant Curved Technical Linework Inspired by Circular Lexus India Motif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none opacity-60"
      >
        <svg
          viewBox="0 0 1600 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="lcGoldArcsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c59b27" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#d4af37" stopOpacity="0.22" />
              <stop offset="85%" stopColor="#c59b27" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <g stroke="url(#lcGoldArcsGrad)">
            <circle cx="800" cy="-120" r="520" strokeWidth="1.2" strokeDasharray="6 4" strokeOpacity="0.55" />
            <circle cx="800" cy="-120" r="680" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="800" cy="-120" r="840" strokeWidth="0.8" strokeOpacity="0.25" />
            <path d="M-80 480 C360 380, 800 420, 1680 320" strokeWidth="1.2" strokeOpacity="0.45" />
          </g>
        </svg>
      </div>

      <div className="container-x relative z-10">
        {/* Upper Portion: Editorial Headline + Narrative Description */}
        <Reveal>
          <div className="max-w-2xl">
            <SectionEyebrow>PROJECT LIFECYCLE</SectionEyebrow>

            <h2 className="headline mt-4 text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.02] text-foreground">
              FROM REQUIREMENT TO
              <br />
              <span className="text-[#7a0d11]">COMMISSIONING.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#556070] font-normal max-w-xl">
              We follow a structured project lifecycle to ensure efficiency, quality and successful delivery — from concept to commissioning.
            </p>
          </div>
        </Reveal>

        {/* 7-Step Interactive Lifecycle Connected Pipeline */}
        <Reveal className="mt-16 sm:mt-20 pt-4" delay={120}>
          <div
            className="overflow-x-auto pb-6 scrollbar-none"
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-start justify-between min-w-[860px] lg:min-w-full">
              {LIFECYCLE_STAGES.map((stage, idx) => {
                const IconComponent = stage.icon;
                const isLast = idx === LIFECYCLE_STAGES.length - 1;
                const isActive = activeIndex === idx;
                const isPassed = activeIndex !== null && idx < activeIndex;

                return (
                  <div key={stage.num} className="flex items-center flex-1 last:flex-initial">
                    {/* Stage Interactive Button Node */}
                    <button
                      type="button"
                      onMouseEnter={() => setHovered(idx)}
                      onClick={() => setSelected(selected === idx ? null : idx)}
                      aria-pressed={selected === idx}
                      className="flex flex-col items-center text-center group flex-1 max-w-[155px] px-1 cursor-pointer select-none transition-transform duration-300 focus:outline-none"
                    >
                      {/* Medallion Icon Circle with Smooth Glow and Color Transition */}
                      <div className="relative flex items-center justify-center h-20 sm:h-24">
                        <div
                          className={`relative flex items-center justify-center rounded-full transition-all duration-400 ease-out ${
                            isActive
                              ? "h-16 w-16 sm:h-20 sm:w-20 bg-[#7a0d11] border-2 border-[#f0d078] shadow-[0_0_24px_rgba(122,13,17,0.38),0_4px_16px_rgba(212,175,55,0.32)] ring-4 ring-[#7a0d11]/25 scale-108"
                              : "h-14 w-14 sm:h-16 sm:w-16 bg-white border-2 border-[#d4af37] shadow-[0_4px_14px_rgba(212,175,55,0.18)] group-hover:border-[#c59b27] group-hover:shadow-[0_6px_18px_rgba(212,175,55,0.28)] group-hover:scale-105"
                          }`}
                        >
                          <IconComponent
                            className={`transition-all duration-300 stroke-[1.8] ${
                              isActive
                                ? "h-7 w-7 sm:h-8 sm:w-8 text-white scale-105"
                                : "h-6 w-6 sm:h-7 sm:w-7 text-[#7a0d11] group-hover:scale-105"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Gold / Burgundy Number */}
                      <span
                        className={`font-display font-black text-base sm:text-lg leading-none mt-2 transition-all duration-300 ${
                          isActive
                            ? "text-[#7a0d11] scale-110 drop-shadow-[0_1px_4px_rgba(122,13,17,0.2)]"
                            : "text-[#c59b27] group-hover:text-[#b0871d]"
                        }`}
                      >
                        {stage.num}
                      </span>

                      {/* Title */}
                      <h3
                        className={`font-display font-black text-xs sm:text-sm uppercase tracking-wider mt-1.5 leading-tight transition-colors duration-300 ${
                          isActive ? "text-[#7a0d11]" : "text-foreground group-hover:text-[#7a0d11]"
                        }`}
                      >
                        {stage.title}
                      </h3>

                      {/* Small Description */}
                      <p className="text-[0.68rem] sm:text-[0.74rem] text-[#64748b] font-medium leading-snug mt-1.5 max-w-[130px]">
                        {stage.desc}
                      </p>
                    </button>

                    {/* Connector Line with Progress Effect and Burgundy Arrow Badge */}
                    {!isLast && (
                      <div className="flex items-center justify-center flex-1 max-w-[60px] sm:max-w-[80px] -mt-16 sm:-mt-20 px-1">
                        <div className="relative w-full flex items-center justify-center">
                          {/* Background Inactive Gold Line with Subtle Continuous Pulse */}
                          <div className="h-0.5 w-full bg-[#d4af37]/45" />

                          {/* Active / Passed Animated Progress Line */}
                          <div
                            className={`absolute inset-y-0 left-0 h-0.5 transition-all duration-500 ease-out bg-gradient-to-r from-[#c59b27] via-[#7a0d11] to-[#c59b27] ${
                              isPassed || (isActive && idx === 0)
                                ? "w-full opacity-100 shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                                : "w-0 opacity-0"
                            }`}
                          />

                          {/* Small Circular Burgundy Arrow Badge */}
                          <div
                            className={`relative h-4 w-4 sm:h-5 sm:w-5 rounded-full text-white flex items-center justify-center transition-all duration-300 shadow-xs ${
                              isPassed || isActive
                                ? "bg-[#7a0d11] ring-2 ring-[#f0d078]/90 scale-110 shadow-[0_0_10px_rgba(122,13,17,0.35)]"
                                : "bg-[#7a0d11]"
                            }`}
                          >
                            <ChevronRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 stroke-[3]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
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
    <section id="capabilities" className="relative overflow-hidden bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#EAE4D9]/80">
      {/* Subtle warm champagne ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_30%,rgba(212,175,55,0.035)_0%,transparent_65%)]"
      />

      <div className="container-x relative z-10">
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
                href="/#projects"
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
      {/* Golden industrial plant silhouette on right */}
      <img src={hero} alt="" className="industries-plant-silhouette" />

      {/* Subtle warm golden ambient sunlight glow over right plant towers */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] bg-[radial-gradient(circle_at_80%_25%,rgba(255,220,130,0.38)_0%,rgba(225,145,55,0.18)_42%,transparent_75%)] mix-blend-screen" />

      {/* Flowing Golden Ribbon Curves matching reference aesthetic */}
      <svg
        viewBox="0 0 1600 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="h-full w-full opacity-85"
      >
        <defs>
          <linearGradient id="indGoldWaveGrad" x1="0%" y1="100%" x2="100%" y2="20%">
            <stop offset="0%" stopColor="#f0d078" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#d4af37" stopOpacity="0.65" />
            <stop offset="55%" stopColor="#c59b27" stopOpacity="0.35" />
            <stop offset="85%" stopColor="#b24e2b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="indGoldWaveGlow" x1="0%" y1="100%" x2="80%" y2="40%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.14" />
            <stop offset="45%" stopColor="#d4af37" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Soft Gold Ribbon Underlay */}
        <path
          d="M-40 460 C120 380, 240 480, 460 560 C700 640, 1000 610, 1640 430 L1640 750 L-40 750 Z"
          fill="url(#indGoldWaveGlow)"
        />

        {/* Dynamic Sweeping Curve Light Strands */}
        <g stroke="url(#indGoldWaveGrad)">
          <path d="M-50 360 C110 300, 230 420, 460 520 C690 620, 990 600, 1640 400" strokeWidth="1.8" />
          <path d="M-50 400 C120 340, 250 450, 490 540 C730 630, 1030 610, 1640 420" strokeWidth="1.2" strokeOpacity="0.75" />
          <path d="M-50 330 C90 270, 210 390, 430 500 C650 600, 950 580, 1640 380" strokeWidth="0.9" strokeOpacity="0.45" />
        </g>
      </svg>
    </div>
  );
}

export function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden py-20 lg:py-28 text-white"
    >
      {/* Subtle Premium Background Effect */}
      <IndustriesAestheticBackground />

      <div className="container-x relative z-10">
        <Reveal>
          <SectionEyebrow light>INDUSTRIES WE SERVE</SectionEyebrow>

          <h2 className="headline mt-5 max-w-3xl text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[0.96] text-white">
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
                  <h3 className="font-display text-[0.72rem] sm:text-xs font-extrabold uppercase tracking-wider text-white leading-tight">
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
/* ---------- 05b. ENGINEERING CAPABILITY ---------- */
const CAPABILITY_PILLS = [
  {
    num: "01",
    title: "3D Plant Engineering",
    desc: "PDMS · PDS · SP3D · CAD",
    icon: Layers,
    img: engineering,
    imgAlt: "3D Plant Engineering scale model and CAD layout",
  },
  {
    num: "02",
    title: "Piping Engineering",
    desc: "Layouts · Drawings · Isometrics",
    icon: Compass,
    img: piping,
    imgAlt: "Piping Engineering isometric spools and heat exchanger piping",
  },
  {
    num: "03",
    title: "Mechanical Engineering",
    desc: "Equipment Design · Fabrication Drawings",
    icon: Cog,
    img: fabrication,
    imgAlt: "Mechanical Engineering vessel equipment design and fabrication",
  },
  {
    num: "04",
    title: "Layout & Structural",
    desc: "Plant Layout · Civil / Structural",
    icon: Building2,
    img: structural,
    imgAlt: "Industrial structural steel construction and layout",
  },
];

export function EngineeringCapability() {
  return (
    <section
      id="engineering-capability"
      className="relative overflow-hidden bg-[#FAF8F5] pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24 border-b border-[#EAE4D9]/80"
    >
      {/* Top Transition: Subtle Gold & Maroon Flowing Architecture Connecting from Industries Section Above */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 z-0 overflow-hidden select-none"
      >
        <svg
          viewBox="0 0 1600 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="h-full w-full opacity-70"
        >
          <defs>
            <linearGradient id="capTopConnectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7a0d11" stopOpacity="0.25" />
              <stop offset="35%" stopColor="#d4af37" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#c59b27" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="capTopFill" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#0c121e" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 0 L 1600 0 L 1600 40 C 1250 80, 850 15, 450 65 C 200 95, 80 50, 0 40 Z" fill="url(#capTopFill)" />
          <path
            d="M 0 0 C 220 50, 480 75, 820 40 C 1160 5, 1420 45, 1600 15"
            stroke="url(#capTopConnectorGrad)"
            strokeWidth="1.2"
          />
          <path
            d="M 120 0 C 340 55, 600 80, 940 45 C 1280 10, 1480 35, 1600 25"
            stroke="url(#capTopConnectorGrad)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Ambient Warm Champagne Glow Behind the Composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_65%_55%_at_68%_28%,rgba(212,175,55,0.07)_0%,transparent_75%)]"
      />

      <div className="container-x relative z-10">
        {/* Top Portion: Integrated Editorial Header & Softly Blended Hero Industrial Visual */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Top Left: Heading & Narrative */}
          <Reveal className="lg:col-span-5 xl:col-span-5">
            {/* Eyebrow with gold dash */}
            <div className="flex items-center gap-3">
              <span className="font-display text-xs font-black uppercase tracking-[0.22em] text-[#c59b27]">
                OUR CAPABILITIES
              </span>
              <div className="h-0.5 w-8 bg-[#c59b27]/60" />
            </div>

            {/* Main Headline */}
            <h2 className="headline mt-4 text-3xl sm:text-5xl lg:text-[3.35rem] font-black tracking-[-0.03em] leading-[1.04] text-foreground">
              Engineering
              <br />
              Excellence Across
              <br />
              <span className="text-[#7a0d11]">Industries</span>
            </h2>

            {/* Paragraph Description */}
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#556070] font-normal max-w-md">
              From concept to execution, we turn ideas into reliable and efficient industrial solutions.
            </p>

            {/* Explore Capabilities Pill CTA */}
            <div className="mt-8">
              <a
                href="/#capabilities"
                className="group inline-flex items-center gap-3 bg-[#7a0d11] hover:bg-[#5e090c] text-white pl-6 pr-2.5 py-2.5 font-display text-xs font-bold uppercase tracking-[0.14em] rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Explore Capabilities</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#7a0d11] transition-transform duration-300 group-hover:translate-x-1 shadow-xs">
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
              </a>
            </div>
          </Reveal>

          {/* Top Right: Seamlessly Integrated Industrial Hero Composition with Soft Edge Blending */}
          <Reveal className="relative lg:col-span-7 xl:col-span-7" delay={120}>
            <div className="relative w-full aspect-[16/9.8] sm:aspect-[16/9.2] lg:aspect-[16/8.6] select-none flex items-center justify-end">
              {/* Fluid Decorative Accent Arcs Framing the Integrated Image */}
              <svg className="absolute inset-0 h-full w-full pointer-events-none z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="capGoldGradEditorial" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f0d078" stopOpacity="0.8" />
                    <stop offset="45%" stopColor="#d4af37" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#c59b27" stopOpacity="0.5" />
                  </linearGradient>
                </defs>

                {/* Soft Outer Golden Line Guide */}
                <path
                  d="M 12 0 C 4 18, -4 40, 2 64 C 7 84, 18 96, 32 100"
                  stroke="#c59b27"
                  strokeWidth="0.6"
                  strokeOpacity="0.35"
                  fill="none"
                />

                {/* Inner Highlight Gold Border along the composition edge */}
                <path
                  d="M 16 0 C 8 18, 0 40, 6 64 C 11 84, 22 96, 36 100"
                  stroke="url(#capGoldGradEditorial)"
                  strokeWidth="1.1"
                  fill="none"
                  style={{ filter: "drop-shadow(-2px 0 6px rgba(212,175,55,0.3))" }}
                />
              </svg>

              {/* Burgundy Accent Medallion Marker */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[7%] top-[14%] w-3 h-3 rounded-full bg-[#7a0d11] ring-2 ring-[#FAF8F5] shadow-sm z-30 hidden sm:block"
              />

              {/* Softly Blended Hero Industrial Photo with Feathered Edges onto Cream Canvas */}
              <div
                className="relative h-full w-full overflow-hidden rounded-2xl lg:rounded-r-3xl"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 95% 90% at 75% 50%, black 60%, rgba(0,0,0,0.7) 82%, transparent 100%), linear-gradient(to right, transparent 0%, black 14%, black 100%)",
                  maskImage:
                    "radial-gradient(ellipse 95% 90% at 75% 50%, black 60%, rgba(0,0,0,0.7) 82%, transparent 100%), linear-gradient(to right, transparent 0%, black 14%, black 100%)",
                }}
              >
                <img
                  src={hero}
                  alt="Industrial process plant towers illuminated at dusk"
                  className="h-full w-full object-cover object-center filter saturate-[1.1] contrast-[1.04] brightness-[1.02] transition-transform duration-700 hover:scale-[1.02]"
                />
                {/* Natural Warm Cream & Dark Tone Gradients Integrating into the Section Palette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Portion: 2×2 Dynamic Timeline-Connected Capability Cards */}
        <Reveal className="relative mt-14 sm:mt-18 pt-2" delay={160}>
          {/* Central Structural Anchor Connecting Top Hero & Cards (Desktop) */}
          <div className="hidden lg:flex absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[#EAE4D9] flex-col justify-around items-center pointer-events-none z-10">
            <div className="h-3.5 w-3.5 rounded-full bg-[#7a0d11] ring-4 ring-[#FAF8F5] shadow-xs" />
            <div className="h-3.5 w-3.5 rounded-full bg-[#7a0d11] ring-4 ring-[#FAF8F5] shadow-xs" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
            {CAPABILITY_PILLS.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.num}
                  className="group relative flex items-center bg-white border border-[#EAE4D9] hover:border-[#c59b27]/70 rounded-full p-2.5 sm:p-3.5 shadow-[0_6px_22px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_34px_rgba(122,13,17,0.1)] transition-all duration-300 gap-4 sm:gap-5"
                >
                  {/* Large Hero Industrial Image Frame (Main Visual Focus) */}
                  <div className="relative w-[145px] sm:w-[200px] lg:w-[225px] h-[98px] sm:h-[114px] lg:h-[120px] rounded-l-full rounded-r-3xl overflow-hidden bg-slate-900 flex-shrink-0 shadow-inner">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-1 -top-1 -bottom-1 w-5 border-l-4 border-[#7a0d11] rounded-l-full z-10"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1 -bottom-1 w-12 h-6 border-b-2 border-[#c59b27] rounded-bl-full z-10"
                    />
                    <img
                      src={item.img}
                      alt={item.imgAlt}
                      className="w-full h-full object-cover object-center filter saturate-[1.15] contrast-[1.05] brightness-[1.02] group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Matching Circular Icon Medallion */}
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#7a0d11] text-white flex-shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-5 w-5 stroke-[1.8]" />
                  </div>

                  {/* Content: Number + Title + Description */}
                  <div className="flex-1 min-w-0 pr-3 sm:pr-6">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-black text-xs sm:text-sm text-[#c59b27] tracking-wider leading-none">
                        {item.num}
                      </span>
                      <div className="h-px w-3 bg-[#c59b27]/40" />
                    </div>
                    <h3 className="font-display font-black text-sm sm:text-base lg:text-[1.02rem] text-foreground uppercase tracking-wide group-hover:text-[#7a0d11] transition-colors leading-snug mt-1 truncate">
                      {item.title}
                    </h3>
                    <p className="text-[0.68rem] sm:text-xs text-[#64748b] font-medium mt-0.5 truncate">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
    <section className="relative overflow-hidden bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#EAE4D9]/80">
      {/* Subtle warm champagne ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(212,175,55,0.03)_0%,transparent_70%)]"
      />
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
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.015]"
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
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#EAE4D9]/80 flex items-center min-h-[520px] lg:min-h-[580px]"
    >
      {/* Background Subtle Golden Ribbon / Wire Curves */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none opacity-45"
      >
        <svg
          viewBox="0 0 1600 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="projExpEchoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0d078" stopOpacity="0.4" />
              <stop offset="45%" stopColor="#d4af37" stopOpacity="0.25" />
              <stop offset="85%" stopColor="#c59b27" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M 520 0 C 440 140, 370 280, 420 440 C 460 560, 560 650, 720 700"
            stroke="url(#projExpEchoGrad)"
            strokeWidth="1.2"
          />
          <path
            d="M 480 0 C 400 140, 330 280, 380 440 C 420 560, 520 650, 680 700"
            stroke="url(#projExpEchoGrad)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Right Column Full-Height Curved Organic Photo Composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[60%] z-10 overflow-hidden hidden lg:block select-none"
      >
        {/* SVG Defs for Curved Mask and Dual Gold Border Overlay */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <clipPath id="craneCurveClip" clipPathUnits="objectBoundingBox">
              <path d="M 0.22 0 C 0.13 0.12, 0.01 0.26, 0.02 0.44 C 0.03 0.65, 0.14 0.85, 0.28 1 L 1 1 L 1 0 Z" />
            </clipPath>
            <linearGradient id="curveGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f0d078" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#c59b27" />
            </linearGradient>
          </defs>

          {/* Outer Parallel Champagne Line */}
          <path
            d="M 18.5 0 C 9.5 12, -2.5 26, -1.5 44 C -0.5 65, 10.5 85, 24.5 100"
            stroke="#c59b27"
            strokeWidth="0.6"
            strokeOpacity="0.55"
            fill="none"
          />

          {/* Inner Highlight Gold Border along image contour */}
          <path
            d="M 22 0 C 13 12, 1 26, 2 44 C 3 65, 14 85, 28 100"
            stroke="url(#curveGoldGrad)"
            strokeWidth="1.2"
            fill="none"
            style={{ filter: "drop-shadow(-2px 0 6px rgba(212,175,55,0.35))" }}
          />
        </svg>

        {/* Clipped Industrial Photograph */}
        <div
          className="relative h-full w-full bg-slate-900 shadow-2xl"
          style={{ clipPath: "url(#craneCurveClip)" }}
        >
          <img
            src={craneLift}
            alt="Heavy crane lifting huge process pressure vessel into steel structure"
            className="h-full w-full object-cover object-center filter contrast-[1.03] brightness-[1.01]"
          />
          {/* Subtle warm sunlight overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="container-x relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Content Area */}
          <Reveal className="lg:col-span-6 xl:col-span-5">
            {/* Eyebrow with gold accent */}
            <SectionEyebrow>PROJECT EXPERIENCE</SectionEyebrow>

            {/* Main Headline */}
            <h2 className="headline mt-4 sm:mt-5 text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-[-0.03em] leading-[1.02] text-foreground">
              PROVEN WHEN
              <br />
              CONDITIONS
              <br />
              <span className="text-[#7a0d11]">GET TOUGH.</span>
            </h2>

            {/* Supporting Description */}
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#556070] font-normal max-w-md">
              Trusted for our technical depth, execution excellence and ability to deliver in complex and challenging environments across industries.
            </p>

            {/* 3 Key Metrics Row with Golden Icons & Vertical Dividers */}
            <div className="mt-9 sm:mt-11 flex items-start gap-5 sm:gap-7 pt-2">
              {/* Stat 1: 25+ Years of Experience */}
              <div className="flex flex-col">
                <HardHat className="h-6 w-6 text-[#c59b27] stroke-[1.8]" />
                <span className="font-display font-black text-2xl sm:text-3xl lg:text-[2rem] text-[#7a0d11] leading-none mt-2.5">
                  25+
                </span>
                <span className="font-display font-bold text-[0.62rem] sm:text-[0.68rem] text-[#64748b] tracking-[0.14em] uppercase mt-1.5 leading-tight">
                  YEARS OF
                  <br />
                  EXPERIENCE
                </span>
              </div>

              {/* Vertical Divider 1 */}
              <div className="h-14 w-px bg-[#EAE4D9] self-center" />

              {/* Stat 2: 500+ Projects Delivered */}
              <div className="flex flex-col">
                <Cog className="h-6 w-6 text-[#c59b27] stroke-[1.8]" />
                <span className="font-display font-black text-2xl sm:text-3xl lg:text-[2rem] text-[#7a0d11] leading-none mt-2.5">
                  500+
                </span>
                <span className="font-display font-bold text-[0.62rem] sm:text-[0.68rem] text-[#64748b] tracking-[0.14em] uppercase mt-1.5 leading-tight">
                  PROJECTS
                  <br />
                  DELIVERED
                </span>
              </div>

              {/* Vertical Divider 2 */}
              <div className="h-14 w-px bg-[#EAE4D9] self-center" />

              {/* Stat 3: 100+ Trusted Clients */}
              <div className="flex flex-col">
                <Users className="h-6 w-6 text-[#c59b27] stroke-[1.8]" />
                <span className="font-display font-black text-2xl sm:text-3xl lg:text-[2rem] text-[#7a0d11] leading-none mt-2.5">
                  100+
                </span>
                <span className="font-display font-bold text-[0.62rem] sm:text-[0.68rem] text-[#64748b] tracking-[0.14em] uppercase mt-1.5 leading-tight">
                  TRUSTED
                  <br />
                  CLIENTS
                </span>
              </div>
            </div>
          </Reveal>

          {/* Mobile / Tablet Image View */}
          <Reveal className="lg:hidden mt-8" delay={120}>
            <div className="relative overflow-hidden rounded-xs shadow-lg border border-[#c59b27]/60 bg-slate-900">
              <img
                src={craneLift}
                alt="Heavy crane lifting large process pressure vessel into steel structure"
                className="w-full aspect-[16/10] object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-px -right-px z-20 h-10 w-10 bg-[#7a0d11] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 08. SUPPORTING THE TEAMS BEHIND INDUSTRIAL PROJECTS (OUR STAKEHOLDERS) ---------- */
const STAKEHOLDER_NODES = [
  {
    num: "01",
    title: "PLANT OWNERS",
    desc: "Secure, efficient and reliable process plants tailored to your business needs.",
    icon: Factory,
  },
  {
    num: "02",
    title: "EPC CONTRACTORS",
    desc: "A trusted partner with engineering and execution expertise at every stage.",
    icon: HardHat,
  },
  {
    num: "03",
    title: "ENGINEERING COMPANIES",
    desc: "Collaborative execution with technical depth and manufacturing capability.",
    icon: Users,
  },
  {
    num: "04",
    title: "OEMS",
    desc: "Fabrication and equipment manufacturing support.",
    icon: Cog,
  },
  {
    num: "05",
    title: "INDUSTRIAL PROJECT TEAMS",
    desc: "Responsive and dependable support to keep projects on track.",
    icon: Users,
  },
];

export function WhoWeServe() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="about" className="relative overflow-hidden bg-[#FAF8F5] py-12 sm:py-14 lg:py-16 border-b border-[#EAE4D9]/80">
      {/* Subtle Warm Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(212,175,55,0.04)_0%,transparent_70%)]"
      />

      {/* Very Faint Background Refinery Silhouettes on Far Edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-[260px] w-[28%] max-w-[340px] z-0 overflow-hidden select-none opacity-15 hidden xl:block"
      >
        <img
          src={hero}
          alt=""
          className="h-full w-full object-cover object-right-bottom filter sepia-[0.3] brightness-110 [mask-image:linear-gradient(to_left,black_20%,transparent_90%)]"
        />
      </div>

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Left Column: Heading & Narrative Description */}
          <Reveal className="lg:col-span-4 xl:col-span-4">
            <SectionEyebrow>OUR STAKEHOLDERS</SectionEyebrow>

            <h2 className="headline mt-5 text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-[-0.03em] leading-[1.02] text-foreground">
              <span className="text-[#7a0d11]">SUPPORTING</span>
              <br />
              THE TEAMS
              <br />
              BEHIND
              <br />
              INDUSTRIAL
              <br />
              PROJECTS<span className="text-[#7a0d11]">.</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#556070] font-normal max-w-sm">
              We work with all key stakeholders across the project lifecycle, ensuring seamless collaboration and
              successful delivery from concept to commissioning and beyond.
            </p>
          </Reveal>

          {/* Right Column: Semicircular Arc Visualization with Zero Overlaps */}
          <Reveal className="lg:col-span-8 xl:col-span-8" delay={120}>
            {/* Desktop View: Precision Coordinate-Driven Radial System */}
            <div
              className="hidden lg:block relative w-full max-w-[820px] mx-auto aspect-[820/490] select-none"
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Central Semicircular Arch Window (cx=410, cy=430, R=220, width=440, height=220) */}
              <div
                className="absolute left-[190px] top-[210px] w-[440px] h-[220px] rounded-t-full overflow-hidden border-2 border-[#c59b27] shadow-xl bg-slate-900 z-10 transition-transform duration-500 hover:scale-[1.01]"
              >
                <img
                  src={hero}
                  alt="Process plant distillation towers and piping structure at golden sunset"
                  className="w-full h-full object-cover object-center filter saturate-[1.15] contrast-[1.02] brightness-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Flat Gold Horizon Base Line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[60px] right-[60px] top-[430px] h-px bg-gradient-to-r from-transparent via-[#c59b27]/60 to-transparent z-10"
              />

              {/* Bottom Center Pivot Hinge Medallion */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[410px] top-[430px] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#c59b27] bg-[#FAF8F5] flex items-center justify-center z-20 shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-[#7a0d11]" />
              </div>

              {/* SVG Connector Arc and Leader Lines */}
              <svg
                viewBox="0 0 820 490"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              >
                <defs>
                  <linearGradient id="stakeholderArcGrad" x1="0%" y1="100%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c59b27" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#d4af37" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#c59b27" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="activeArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c59b27" />
                    <stop offset="50%" stopColor="#7a0d11" />
                    <stop offset="100%" stopColor="#c59b27" />
                  </linearGradient>
                </defs>

                {/* Outer Concentric Guide Arc */}
                <path
                  d="M 120 430 A 290 290 0 0 1 700 430"
                  stroke="#c59b27"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                  strokeOpacity="0.3"
                />

                {/* Main Continuous Semicircular Connecting Arc (R=270, from 180° to 0°) */}
                <path
                  d="M 140 430 A 270 270 0 0 1 680 430"
                  stroke="url(#stakeholderArcGrad)"
                  strokeWidth="1.8"
                />

                {/* Smooth Animated Active Glow Arc when a node is hovered */}
                <path
                  d="M 140 430 A 270 270 0 0 1 680 430"
                  stroke="url(#activeArcGrad)"
                  strokeWidth="2.5"
                  className={`transition-opacity duration-500 ease-out ${
                    hoveredIdx !== null ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(122,13,17,0.5))",
                  }}
                />

                {/* Thin Elegant Leader Lines Connecting Nodes to Text Blocks */}
                {/* Node 01 (150, 356) -> Text Block 01 (105, 356) */}
                <line
                  x1="150"
                  y1="356"
                  x2="110"
                  y2="356"
                  stroke={hoveredIdx === 0 ? "#7a0d11" : "#c59b27"}
                  strokeWidth={hoveredIdx === 0 ? "1.5" : "1"}
                  strokeDasharray={hoveredIdx === 0 ? "none" : "3 2"}
                  className="transition-colors duration-300"
                />

                {/* Node 02 (248, 214) -> Text Block 02 (200, 145) */}
                <path
                  d="M 248 214 L 210 145 L 185 145"
                  stroke={hoveredIdx === 1 ? "#7a0d11" : "#c59b27"}
                  strokeWidth={hoveredIdx === 1 ? "1.5" : "1"}
                  strokeDasharray={hoveredIdx === 1 ? "none" : "3 2"}
                  fill="none"
                  className="transition-colors duration-300"
                />

                {/* Node 03 (410, 160) -> Text Block 03 (410, 100) */}
                <line
                  x1="410"
                  y1="160"
                  x2="410"
                  y2="100"
                  stroke={hoveredIdx === 2 ? "#7a0d11" : "#c59b27"}
                  strokeWidth={hoveredIdx === 2 ? "1.5" : "1"}
                  strokeDasharray={hoveredIdx === 2 ? "none" : "3 2"}
                  className="transition-colors duration-300"
                />

                {/* Node 04 (572, 214) -> Text Block 04 (620, 145) */}
                <path
                  d="M 572 214 L 610 145 L 635 145"
                  stroke={hoveredIdx === 3 ? "#7a0d11" : "#c59b27"}
                  strokeWidth={hoveredIdx === 3 ? "1.5" : "1"}
                  strokeDasharray={hoveredIdx === 3 ? "none" : "3 2"}
                  fill="none"
                  className="transition-colors duration-300"
                />

                {/* Node 05 (670, 356) -> Text Block 05 (715, 356) */}
                <line
                  x1="670"
                  y1="356"
                  x2="710"
                  y2="356"
                  stroke={hoveredIdx === 4 ? "#7a0d11" : "#c59b27"}
                  strokeWidth={hoveredIdx === 4 ? "1.5" : "1"}
                  strokeDasharray={hoveredIdx === 4 ? "none" : "3 2"}
                  className="transition-colors duration-300"
                />
              </svg>

              {/* 5 Equidistant Numbered Interactive Nodes on the Arc */}
              {STAKEHOLDER_NODES.map((item, idx) => {
                const IconComp = item.icon;
                const isHovered = hoveredIdx === idx;

                // Exact trigonometric coordinates for the 5 points along R=270 arc (cx=410, cy=430)
                const positions = [
                  { left: "150px", top: "356px" }, // 01 Plant Owners (164°)
                  { left: "248px", top: "214px" }, // 02 EPC Contractors (127°)
                  { left: "410px", top: "160px" }, // 03 Engineering Companies (90° Apex)
                  { left: "572px", top: "214px" }, // 04 OEMs (53°)
                  { left: "670px", top: "356px" }, // 05 Industrial Project Teams (16°)
                ];

                const pos = positions[idx]!;

                return (
                  <button
                    key={item.num}
                    type="button"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onFocus={() => setHoveredIdx(idx)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer focus:outline-none group"
                    style={{ left: pos.left, top: pos.top }}
                    aria-label={`${item.num} ${item.title}`}
                  >
                    <div
                      className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
                        isHovered
                          ? "h-12 w-12 bg-[#7a0d11] border-2 border-[#f0d078] shadow-[0_0_22px_rgba(122,13,17,0.42),0_4px_14px_rgba(212,175,55,0.35)] scale-110"
                          : "h-10 w-10 bg-white border-2 border-[#d4af37] shadow-[0_2px_8px_rgba(0,0,0,0.08)] group-hover:scale-105 group-hover:border-[#c59b27]"
                      }`}
                    >
                      <IconComp
                        className={`transition-all duration-300 stroke-[1.8] ${
                          isHovered
                            ? "h-5 w-5 text-white scale-105"
                            : "h-4.5 w-4.5 text-[#7a0d11]"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}

              {/* 5 Well-Spaced Text Blocks with Zero Collisions */}
              {/* Text Block 01: Left Lateral Base (Positioned away from circle) */}
              <div
                onMouseEnter={() => setHoveredIdx(0)}
                className="absolute -left-7 sm:-left-9 lg:-left-10 top-[290px] w-[138px] flex flex-col text-right z-20 cursor-pointer group transition-transform duration-200 hover:-translate-x-0.5"
              >
                <span
                  className={`font-display font-black text-xs sm:text-sm transition-colors duration-300 ${
                    hoveredIdx === 0 ? "text-[#7a0d11]" : "text-[#c59b27]"
                  }`}
                >
                  01
                </span>
                <h3
                  className={`font-display font-black text-[0.82rem] sm:text-[0.9rem] uppercase tracking-wider mt-0.5 leading-tight transition-colors duration-300 ${
                    hoveredIdx === 0 ? "text-[#7a0d11]" : "text-foreground"
                  }`}
                >
                  {STAKEHOLDER_NODES[0]?.title}
                </h3>
                <p className="text-[0.7rem] sm:text-[0.74rem] text-[#64748b] font-medium leading-snug mt-1">
                  {STAKEHOLDER_NODES[0]?.desc}
                </p>
              </div>

              {/* Text Block 02: Upper Left */}
              <div
                onMouseEnter={() => setHoveredIdx(1)}
                className="absolute left-[15px] top-[65px] w-[180px] flex flex-col text-left z-20 cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span
                  className={`font-display font-black text-xs sm:text-sm transition-colors duration-300 ${
                    hoveredIdx === 1 ? "text-[#7a0d11]" : "text-[#c59b27]"
                  }`}
                >
                  02
                </span>
                <h3
                  className={`font-display font-black text-[0.82rem] sm:text-[0.9rem] uppercase tracking-wider mt-0.5 leading-tight transition-colors duration-300 ${
                    hoveredIdx === 1 ? "text-[#7a0d11]" : "text-foreground"
                  }`}
                >
                  {STAKEHOLDER_NODES[1]?.title}
                </h3>
                <p className="text-[0.7rem] sm:text-[0.74rem] text-[#64748b] font-medium leading-snug mt-1">
                  {STAKEHOLDER_NODES[1]?.desc}
                </p>
              </div>

              {/* Text Block 03: Top Apex Center */}
              <div
                onMouseEnter={() => setHoveredIdx(2)}
                className="absolute left-[295px] top-[5px] w-[230px] flex flex-col items-center text-center z-20 cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span
                  className={`font-display font-black text-xs sm:text-sm transition-colors duration-300 ${
                    hoveredIdx === 2 ? "text-[#7a0d11]" : "text-[#c59b27]"
                  }`}
                >
                  03
                </span>
                <h3
                  className={`font-display font-black text-[0.82rem] sm:text-[0.9rem] uppercase tracking-wider mt-0.5 leading-tight transition-colors duration-300 ${
                    hoveredIdx === 2 ? "text-[#7a0d11]" : "text-foreground"
                  }`}
                >
                  {STAKEHOLDER_NODES[2]?.title}
                </h3>
                <p className="text-[0.7rem] sm:text-[0.74rem] text-[#64748b] font-medium leading-snug mt-1 max-w-[200px]">
                  {STAKEHOLDER_NODES[2]?.desc}
                </p>
              </div>

              {/* Text Block 04: Upper Right */}
              <div
                onMouseEnter={() => setHoveredIdx(3)}
                className="absolute right-[15px] top-[65px] w-[180px] flex flex-col text-right z-20 cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span
                  className={`font-display font-black text-xs sm:text-sm transition-colors duration-300 ${
                    hoveredIdx === 3 ? "text-[#7a0d11]" : "text-[#c59b27]"
                  }`}
                >
                  04
                </span>
                <h3
                  className={`font-display font-black text-[0.82rem] sm:text-[0.9rem] uppercase tracking-wider mt-0.5 leading-tight transition-colors duration-300 ${
                    hoveredIdx === 3 ? "text-[#7a0d11]" : "text-foreground"
                  }`}
                >
                  {STAKEHOLDER_NODES[3]?.title}
                </h3>
                <p className="text-[0.7rem] sm:text-[0.74rem] text-[#64748b] font-medium leading-snug mt-1">
                  {STAKEHOLDER_NODES[3]?.desc}
                </p>
              </div>

              {/* Text Block 05: Right Lateral Base (Positioned away from circle) */}
              <div
                onMouseEnter={() => setHoveredIdx(4)}
                className="absolute -right-7 sm:-right-9 lg:-right-10 top-[290px] w-[138px] flex flex-col text-left z-20 cursor-pointer group transition-transform duration-200 hover:translate-x-0.5"
              >
                <span
                  className={`font-display font-black text-xs sm:text-sm transition-colors duration-300 ${
                    hoveredIdx === 4 ? "text-[#7a0d11]" : "text-[#c59b27]"
                  }`}
                >
                  05
                </span>
                <h3
                  className={`font-display font-black text-[0.82rem] sm:text-[0.9rem] uppercase tracking-wider mt-0.5 leading-tight transition-colors duration-300 ${
                    hoveredIdx === 4 ? "text-[#7a0d11]" : "text-foreground"
                  }`}
                >
                  {STAKEHOLDER_NODES[4]?.title}
                </h3>
                <p className="text-[0.7rem] sm:text-[0.74rem] text-[#64748b] font-medium leading-snug mt-1">
                  {STAKEHOLDER_NODES[4]?.desc}
                </p>
              </div>
            </div>

            {/* Mobile / Tablet View: Semi-Circular Arch Window + Responsive Stakeholder Grid */}
            <div className="lg:hidden mt-8 flex flex-col gap-8">
              {/* Semi-Circular Arch Image */}
              <div className="relative w-full max-w-[440px] aspect-[2/1] mx-auto rounded-t-full overflow-hidden border-2 border-[#c59b27] shadow-lg bg-slate-900">
                <img
                  src={hero}
                  alt="Process plant distillation towers at golden sunset"
                  className="w-full h-full object-cover object-center filter saturate-110"
                />
              </div>

              {/* 5 Stakeholder Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STAKEHOLDER_NODES.map((item, idx) => {
                  const IconComp = item.icon;
                  const isHovered = hoveredIdx === idx;
                  return (
                    <div
                      key={item.num}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className={`group border p-4 rounded-xs flex items-start gap-3 shadow-xs transition-all duration-300 ${
                        isHovered
                          ? "bg-white border-[#7a0d11] shadow-[0_4px_16px_rgba(122,13,17,0.12)] -translate-y-0.5"
                          : "bg-white/90 border-[#EAE4D9] hover:border-[#c59b27]/60"
                      }`}
                    >
                      <div
                        className={`h-11 w-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isHovered
                            ? "bg-[#7a0d11] text-white ring-2 ring-[#f0d078] scale-105"
                            : "bg-[#FAF8F5] border-2 border-[#d4af37] text-[#7a0d11]"
                        }`}
                      >
                        <IconComp className="h-5 w-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <span
                          className={`font-display font-black text-xs sm:text-sm block transition-colors ${
                            isHovered ? "text-[#7a0d11]" : "text-[#c59b27]"
                          }`}
                        >
                          {item.num}
                        </span>
                        <h3
                          className={`font-display font-black text-[0.82rem] sm:text-[0.9rem] uppercase tracking-wider mt-0.5 leading-snug transition-colors ${
                            isHovered ? "text-[#7a0d11]" : "text-foreground"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#64748b] font-medium leading-relaxed mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 09. PRE-FOOTER CTA (HAVE A COMPLEX PROJECT?) ---------- */
export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#FAF8F5] py-14 sm:py-18 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-xs shadow-2xl border border-[#d4af37]/35 min-h-[380px] lg:min-h-[420px]"
            style={{
              background:
                "radial-gradient(ellipse 80% 90% at 88% 35%, rgba(240, 185, 75, 0.45) 0%, rgba(185, 85, 25, 0.35) 45%, transparent 75%), linear-gradient(100deg, #2b0205 0%, #3e0509 22%, #560a10 40%, #721217 56%, #91221b 68%, #b23e24 78%, #cf6932 88%, #e08e45 96%, #e8a252 100%)",
            }}
          >
            {/* Background Engineering Line-Art (Bottom Left) */}
            <div aria-hidden="true" className="pointer-events-none absolute left-0 bottom-0 z-0 select-none opacity-30">
              <svg width="480" height="280" viewBox="0 0 480 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#d4af37" strokeWidth="0.8">
                  <path d="M-40 280 C60 220, 160 180, 480 200" strokeOpacity="0.6" />
                  <path d="M-40 280 C80 200, 200 150, 480 160" strokeOpacity="0.5" />
                  <path d="M-40 280 C100 180, 240 120, 480 120" strokeOpacity="0.4" />
                  <path d="M-40 280 C120 160, 280 90, 480 80" strokeOpacity="0.3" />
                  <path d="M-40 280 C140 140, 320 60, 480 40" strokeOpacity="0.2" />
                  <line x1="0" y1="240" x2="480" y2="240" strokeDasharray="3 4" strokeOpacity="0.3" />
                  <line x1="0" y1="180" x2="480" y2="180" strokeDasharray="3 4" strokeOpacity="0.2" />
                </g>
              </svg>
            </div>

            {/* Midground Distillation Towers Silhouette (Center-Right) */}
            <div className="pointer-events-none absolute right-[26%] top-0 bottom-0 w-[44%] z-0 hidden lg:block overflow-hidden select-none">
              <img
                src={hero}
                alt=""
                className="h-full w-full object-cover object-center filter contrast-125 brightness-110 sepia-[0.5] saturate-150 mix-blend-luminosity opacity-40 [mask-image:linear-gradient(to_right,transparent_0%,black_35%,black_75%,transparent_100%)]"
              />
            </div>

            {/* Right Visual: Gold Ribbon & Process Piping (Transparent Alpha PNG) */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-full lg:w-[50%] z-0 overflow-hidden select-none flex items-center justify-end">
              <img
                src={goldRibbonPipes}
                alt="Process plant piping with golden ribbon frame"
                className="h-full w-full object-cover object-left-top scale-[1.04]"
              />
              {/* Subtle top-right golden atmospheric glow */}
              <div className="absolute top-0 right-0 h-[220px] w-[280px] bg-[radial-gradient(circle_at_100%_0%,rgba(255,230,150,0.45)_0%,transparent_70%)] mix-blend-screen" />
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-xl lg:max-w-2xl flex flex-col justify-center min-h-[380px] lg:min-h-[420px]">
              <p className="eyebrow flex items-center gap-2.5 text-[#d4af37]">
                <span className="h-px w-5 sm:w-6 bg-[#d4af37]" />
                HAVE A COMPLEX PROJECT?
              </p>

              <h2 className="headline mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] font-black tracking-tight uppercase leading-[0.96] text-white">
                LET'S <span className="text-[#d4af37]">ENGINEER IT.</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/85 font-normal max-w-md">
                Partner with Lexus India Engineering Solutions for end-to-end engineering, fabrication and execution
                support.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#e5be58] via-[#d4af37] to-[#c59b27] hover:from-[#f0d078] hover:via-[#dfb845] hover:to-[#d4af37] text-[#1a0507] border border-[#f5de8e]/60 px-6 py-3.5 font-display text-xs font-black uppercase tracking-[0.16em] rounded-xs shadow-[0_0_16px_rgba(212,175,55,0.35),0_3px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_24px_rgba(212,175,55,0.55),0_4px_12px_rgba(0,0,0,0.35)] transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Start A Project</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#1a0507] transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="/#capabilities"
                  className="inline-flex items-center gap-2 bg-[#2b0407]/40 hover:bg-[#3d070b]/80 border border-[#d4af37]/60 hover:border-[#f0d078] text-white px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs shadow-xs transition-all duration-200"
                >
                  <span>Talk To A Solution</span>
                </a>
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
    <footer id="footer" className="relative overflow-hidden bg-[#FAF8F5] text-foreground border-t border-[#EAE4D9]/80">
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
            <a href="/#top" className="inline-block group">
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
          <div className="lg:col-span-3 lg:border-l lg:border-[#EAE4D9]/80 lg:pl-10">
            <h3 className="font-display text-xs sm:text-[0.82rem] font-black uppercase tracking-[0.18em] text-[#7a0d11]">
              QUICK LINKS
            </h3>
            <span className="block h-[2px] w-7 bg-[#c59b27] mt-2 mb-4" />
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href || "#"}
                    onClick={(e) => {
                      if (!n.href || n.href === "#") {
                        e.preventDefault();
                      }
                    }}
                    className="text-xs sm:text-[0.82rem] font-medium text-slate-700 hover:text-[#7a0d11] transition-colors cursor-pointer"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="lg:col-span-4 lg:border-l lg:border-[#EAE4D9]/80 lg:pl-10">
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c59b27]/80 bg-[#FDFCF9] text-slate-700 hover:border-[#7a0d11] hover:text-[#7a0d11] hover:bg-[#7a0d11]/5 shadow-xs transition-all"
              >
                <Linkedin className="h-4 w-4 stroke-[1.8]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c59b27]/80 bg-[#FDFCF9] text-slate-700 hover:border-[#7a0d11] hover:text-[#7a0d11] hover:bg-[#7a0d11]/5 shadow-xs transition-all"
              >
                <Twitter className="h-4 w-4 stroke-[1.8]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c59b27]/80 bg-[#FDFCF9] text-slate-700 hover:border-[#7a0d11] hover:text-[#7a0d11] hover:bg-[#7a0d11]/5 shadow-xs transition-all"
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
            <a href="/#top" className="text-white/90 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/40">|</span>
            <a href="/#top" className="text-white/90 hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
