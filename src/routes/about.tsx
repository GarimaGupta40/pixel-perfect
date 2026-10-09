import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Lightbulb,
  Eye,
  Users,
  Factory,
  Sparkles,
  Building2,
  MapPin,
  Target,
  TrendingUp,
  Globe2,
  Globe,
  CheckCircle2,
  UserCheck,
  Briefcase,
  Compass,
  Cog,
} from "lucide-react";
import { Navbar, Footer } from "@/components/site/Sections";

// Image Assets
import aboutHeroSunset from "@/assets/about-hero-sunset.jpg";
import aboutWhoEngineers from "@/assets/about-who-engineers.jpg";
import techniciansImg from "@/assets/technicians.jpg";
import craneLiftImg from "@/assets/crane-lift.jpg";

const TITLE = "About Us | Lexus India Engineering Solutions, Pune";
const DESC =
  "Engineering Today | Sustaining Tomorrow. Lexus India Engineering Solutions is a premier Pune-based engineering firm and process plant contractor delivering single-source EPC execution.";

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

/* ---------- REVEAL ANIMATION HELPER ---------- */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
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
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionEyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`eyebrow flex items-center gap-2.5 ${
        light ? "text-[#e5be58]" : "text-[#c59b27]"
      }`}
    >
      <span
        className={`h-px w-6 sm:w-8 ${
          light ? "bg-[#e5be58]" : "bg-[#c59b27]"
        }`}
      />
      {children}
    </p>
  );
}

export function AboutPage() {
  // 5 Foundational Pillars (Core Values)
  const coreValues = [
    {
      num: "01",
      name: "Integrity",
      tagline: "Trust & Reputation",
      desc: "Built on trust, word-of-mouth reputation, and transparent operations across all contractual commitments.",
      icon: ShieldCheck,
    },
    {
      num: "02",
      name: "Expertise",
      tagline: "Deep Process Knowledge",
      desc: "Multi-disciplinary technical teams with deep industrial experience in high-complexity process engineering.",
      icon: Award,
    },
    {
      num: "03",
      name: "Innovations",
      tagline: "Advanced Engineering Tools",
      desc: "Utilizing cutting-edge 3D modeling, FEA analysis, and modern technical tools to optimize plant efficiency.",
      icon: Lightbulb,
    },
    {
      num: "04",
      name: "Transparency",
      tagline: "Open & Clear Collaboration",
      desc: "Open collaboration across all engineering design, shop fabrication, and turnkey project management phases.",
      icon: Eye,
    },
    {
      num: "05",
      name: "Teamwork",
      tagline: "End-to-End Execution",
      desc: "Dedicated field teams committed to seeing every plant installation through to final on-site commissioning.",
      icon: Users,
    },
  ];

  // Leadership Team
  const leadership = [
    {
      name: "Rohan Bhosale",
      role: "Director",
      focus: "Engineering Leadership & Turnkey EPC Execution",
      desc: "Guiding complex process facility design, plant thermodynamics, and single-source industrial execution from concept to commissioning.",
      icon: UserCheck,
    },
    {
      name: "Dipali R. Bhosale",
      role: "Manager - Business Development",
      focus: "Strategic Partnerships & Client Relations",
      desc: "Leading enterprise partnerships, international tenders, and client relationship management across high-stakes process industries.",
      icon: Briefcase,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-foreground selection:bg-[#7a0d11] selection:text-white font-sans">
      <Navbar />

      <main className="pt-18 sm:pt-20">
        {/* ===================================================================
            SECTION 1: HERO — HEADLINE & BRAND MISSION
            Headline: “ENGINEERING TODAY | SUSTAINING TOMORROW”
            Slogan: “ENGINEERING. EXECUTION. RELIABILITY.”
            Layout: Full-bleed sunset refinery with cinematic gradient + 3-col burgundy bottom bar
            =================================================================== */}
        <section className="relative flex h-[calc(100vh-4.5rem)] sm:h-[calc(100vh-5rem)] min-h-[520px] max-h-[920px] flex-col justify-between overflow-hidden bg-[#0c0d11] text-white">
          {/* Full-Bleed Background Refinery Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src={aboutHeroSunset}
              alt="Lexus India sunset industrial refinery and process plant"
              className="h-full w-full object-cover object-[72%_center] lg:object-center filter contrast-[1.08] brightness-[0.96]"
            />
            {/* Dark Cinematic Gradient for High Text Legibility on Left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d11]/95 via-[#0c0d11]/80 via-48% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d11]/90 via-transparent to-[#0c0d11]/40" />
          </div>

          {/* Main Hero Content */}
          <div className="container-x relative z-10 flex flex-1 flex-col justify-center py-6 sm:py-8 lg:py-10">
            <div className="max-w-2xl">
              {/* Eyebrow: Brand Slogan */}
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 sm:w-8 bg-[#d4af37]" />
                  <span className="font-display text-xs sm:text-[0.78rem] font-black uppercase tracking-[0.22em] text-[#d4af37]">
                    ENGINEERING. EXECUTION. RELIABILITY.
                  </span>
                </div>
              </Reveal>

              {/* Headline: Tagline */}
              <Reveal delay={80}>
                <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[3.2rem] xl:text-[3.8rem] leading-[1.04] tracking-tight uppercase text-white mt-4 sm:mt-5">
                  ENGINEERING TODAY |<br />
                  SUSTAINING <span className="text-[#e5be58]">TOMORROW.</span>
                </h1>
              </Reveal>

              {/* Mission Paragraph */}
              <Reveal delay={150}>
                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-xl">
                  At <strong className="text-white font-bold">Lexus India Engineering Solutions</strong> (also operating as 3A-Engg. Solution), we deliver comprehensive engineering, fabrication, and EPC solutions for complex process industries worldwide.
                </p>
              </Reveal>

              {/* Primary CTA Buttons */}
              <Reveal delay={220}>
                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#who-we-are"
                    className="group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_12px_rgba(212,175,55,0.26),0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.52),0_4px_14px_rgba(0,0,0,0.45)] text-white px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200 hover:translate-x-0.5 active:scale-[0.98]"
                  >
                    <span>OUR STORY &amp; CAPABILITIES</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200"
                  >
                    <span>START A PROJECT</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom 3-Column Burgundy Strip */}
          <div className="relative z-10 bg-[#3b0407] border-t border-[#d4af37]/35 text-white shadow-2xl">
            <div className="container-x">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 py-0.5 sm:py-0">
                
                {/* Column 1: Pune, India */}
                <div className="flex items-center gap-3.5 py-3 sm:py-3.5 md:px-6">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-[#d4af37] text-[#e5be58] bg-[#2d0305]">
                    <MapPin className="h-4 w-4 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block font-display text-[0.66rem] font-bold uppercase tracking-wider text-[#e5be58]">
                      HEADQUARTERS
                    </span>
                    <span className="font-display text-xs sm:text-[0.82rem] font-bold uppercase tracking-wider text-white">
                      PUNE, MAHARASHTRA
                    </span>
                  </div>
                </div>

                {/* Column 2: In-House Fabrication */}
                <div className="flex items-center gap-3.5 py-3 sm:py-3.5 md:px-6">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-[#d4af37] text-[#e5be58] bg-[#2d0305]">
                    <Factory className="h-4 w-4 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block font-display text-[0.66rem] font-bold uppercase tracking-wider text-[#e5be58]">
                      IN-HOUSE FABRICATION
                    </span>
                    <span className="font-display text-xs sm:text-[0.82rem] font-bold uppercase tracking-wider text-white">
                      MIDC, BHOSARI, PUNE
                    </span>
                  </div>
                </div>

                {/* Column 3: Global EPC Solutions */}
                <div className="flex items-center gap-3.5 py-3 sm:py-3.5 md:px-6">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-[#d4af37] text-[#e5be58] bg-[#2d0305]">
                    <Globe2 className="h-4 w-4 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block font-display text-[0.66rem] font-bold uppercase tracking-wider text-[#e5be58]">
                      TURNKEY EXECUTION
                    </span>
                    <span className="font-display text-xs sm:text-[0.82rem] font-bold uppercase tracking-wider text-white">
                      GLOBAL EPC DELIVERY
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: 01 — WHO WE ARE (Company Profile, Leadership & In-House Facility)
            =================================================================== */}
        <section
          id="who-we-are"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#EAE4D9]"
        >
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
              
              {/* ---------------- LEFT IMAGE COMPOSITION (5 cols) ---------------- */}
              <div className="lg:col-span-5 xl:col-span-5 relative">
                <Reveal>
                  <div className="relative pb-14 sm:pb-16 lg:pb-14 pr-4 sm:pr-8 lg:pr-6">
                    
                    {/* Burgundy Geometric Accent Backdrop */}
                    <div 
                      aria-hidden="true" 
                      className="absolute -top-3 -left-3 w-36 h-36 bg-[#520609] rounded-xs z-0 border-t-2 border-l-2 border-[#d4af37] hidden sm:block select-none"
                    />

                    {/* Main Visual: Large Refinery Photograph */}
                    <div className="relative z-10 rounded-xs overflow-hidden border border-[#d4af37]/80 shadow-[0_12px_36px_rgba(0,0,0,0.12)] bg-[#1e0507]">
                      <img
                        src={aboutHeroSunset}
                        alt="Lexus India Industrial Refinery & Distillation Plant"
                        className="w-full h-[280px] sm:h-[340px] lg:h-[380px] object-cover object-[65%_center]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#300305]/30 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Secondary Overlapping Inset: Engineer Photograph */}
                    <div className="absolute -bottom-2 right-0 sm:right-2 z-20 w-[60%] sm:w-[54%] rounded-xs overflow-hidden border-2 border-[#FAF8F5] ring-1 ring-[#d4af37] shadow-[0_16px_36px_rgba(0,0,0,0.22)] bg-[#120305] group">
                      <img
                        src={aboutWhoEngineers}
                        alt="Process Engineers Reviewing Plant Blueprints On-Site"
                        className="w-full h-[145px] sm:h-[180px] lg:h-[195px] object-cover object-[48%_30%] transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom-Left Statement Badge */}
                    <div className="absolute bottom-2 left-2 z-20 bg-[#4a060b] text-white py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-xs border-t-2 border-l-2 border-[#d4af37] shadow-lg max-w-[160px] sm:max-w-[180px]">
                      <div className="h-[2px] w-5 bg-[#d4af37] mb-1.5" />
                      <p className="font-display text-[0.62rem] sm:text-[0.66rem] font-bold uppercase tracking-[0.14em] leading-tight text-[#e5be58]">
                        PRECISION MANUFACTURING<br />
                        <span className="text-white">&amp; SITE EXECUTION</span>
                      </p>
                    </div>

                  </div>
                </Reveal>
              </div>

              {/* ---------------- RIGHT CONTENT & NARRATIVE (7 cols) ---------------- */}
              <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
                <div className="max-w-xl">
                  {/* Eyebrow: 01 —— WHO WE ARE */}
                  <Reveal>
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-base sm:text-lg font-bold text-[#c59b27]">
                        01
                      </span>
                      <span className="h-[1.5px] w-8 sm:w-10 bg-[#c59b27]" />
                      <span className="font-display text-xs sm:text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#520609]">
                        WHO WE ARE
                      </span>
                    </div>
                  </Reveal>

                  {/* Refined Headline */}
                  <Reveal delay={80}>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.9rem] font-bold tracking-tight text-[#18181b] leading-[1.14] mt-3 sm:mt-4">
                      Engineering Knowledge.<br />
                      <span className="text-[#520609]">Single-Source Execution.</span>
                    </h2>
                  </Reveal>

                  {/* Exact Company Profile Paragraphs */}
                  <Reveal delay={140}>
                    <div className="mt-5 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      <p>
                        Headquartered in <strong className="text-foreground font-semibold">Pune, Maharashtra</strong>, <strong className="text-foreground font-semibold">Lexus India Engineering Solutions</strong> (also operating as 3A-Engg. Solution) is a trusted engineering firm and process plant contractor delivering comprehensive EPC solutions worldwide.
                      </p>
                      <p>
                        Led by experienced industry leaders, including <strong className="text-[#520609] font-semibold">Rohan Bhosale (Director)</strong> and <strong className="text-[#520609] font-semibold">Dipali R. Bhosale (Manager - Business Development)</strong>, our team provides single-source engineering execution—guiding process facilities from initial concept through detailed 3D design to site commissioning.
                      </p>
                      <p>
                        With our dedicated <strong className="text-foreground font-semibold">in-house fabrication facility in MIDC, Bhosari, Pune</strong>, we combine engineering precision with hands-on manufacturing to build high-performance industrial equipment and turnkey plants.
                      </p>
                    </div>
                  </Reveal>

                  {/* 3 Core Highlights */}
                  <Reveal delay={200}>
                    <div className="mt-8 pt-6 border-t border-[#EAE4D9] grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      <div className="flex flex-col items-start bg-white p-3.5 rounded-xs border border-[#EAE4D9]">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] mb-2 border border-[#d4af37]/60">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <h3 className="font-display text-[0.74rem] font-bold uppercase tracking-wider text-[#18181b]">
                          Pune Headquarters
                        </h3>
                        <p className="text-[0.72rem] text-slate-600 mt-1">
                          Central engineering &amp; project management office.
                        </p>
                      </div>

                      <div className="flex flex-col items-start bg-white p-3.5 rounded-xs border border-[#EAE4D9]">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] mb-2 border border-[#d4af37]/60">
                          <Factory className="h-4 w-4" />
                        </div>
                        <h3 className="font-display text-[0.74rem] font-bold uppercase tracking-wider text-[#18181b]">
                          MIDC Bhosari Facility
                        </h3>
                        <p className="text-[0.72rem] text-slate-600 mt-1">
                          In-house precision manufacturing &amp; testing.
                        </p>
                      </div>

                      <div className="flex flex-col items-start bg-white p-3.5 rounded-xs border border-[#EAE4D9]">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] mb-2 border border-[#d4af37]/60">
                          <Globe2 className="h-4 w-4" />
                        </div>
                        <h3 className="font-display text-[0.74rem] font-bold uppercase tracking-wider text-[#18181b]">
                          Global EPC Delivery
                        </h3>
                        <p className="text-[0.72rem] text-slate-600 mt-1">
                          International turnkey site execution.
                        </p>
                      </div>

                    </div>
                  </Reveal>

                </div>
              </div>

            </div>

            {/* ---------------- LEADERSHIP SECTION ---------------- */}
            <div className="mt-16 sm:mt-20 pt-12 border-t border-[#EAE4D9]/80">
              <Reveal>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#c59b27]/30 pb-4">
                  <div>
                    <SectionEyebrow>Executive Management</SectionEyebrow>
                    <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#4a060b] mt-2">
                      Leadership Team
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                    Guided by proven industry professionals with deep process engineering expertise and client commitment.
                  </p>
                </div>
              </Reveal>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {leadership.map((leader, idx) => {
                  const Icon = leader.icon;
                  return (
                    <Reveal key={leader.name} delay={idx * 100}>
                      <div className="group relative overflow-hidden rounded-xs border border-[#EAE4D9] bg-white p-6 sm:p-7 transition-all duration-300 hover:border-[#c59b27] hover:shadow-[0_10px_28px_rgba(82,6,9,0.08)] flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 shadow-xs">
                              <Icon className="h-6 w-6 stroke-[1.8]" />
                            </div>
                            <span className="font-display text-[0.68rem] font-bold uppercase tracking-wider text-[#c59b27] border border-[#c59b27]/30 px-2.5 py-0.5 rounded-xs bg-[#FAF8F5]">
                              Executive Profile
                            </span>
                          </div>

                          <h4 className="font-display text-xl font-bold uppercase text-[#18181b] mt-5 group-hover:text-[#520609] transition-colors">
                            {leader.name}
                          </h4>

                          <div className="font-display text-xs font-bold uppercase tracking-wider text-[#520609] mt-0.5">
                            {leader.role}
                          </div>

                          <div className="mt-1 text-xs font-semibold text-[#c59b27]">
                            {leader.focus}
                          </div>

                          <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {leader.desc}
                          </p>
                        </div>

                        <div className="mt-6 pt-3.5 border-t border-[#EAE4D9]/80 flex items-center justify-between text-xs text-slate-500 font-medium">
                          <span>Lexus India Engineering Solutions</span>
                          <span className="text-[#520609] font-bold">Pune, India</span>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================================
            SECTION 3: MISSION, VISION & GROWTH (CIRCULAR INFOGRAPHIC LAYOUT)
            =================================================================== */}
        <section
          id="mission-vision"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#EAE4D9]"
        >
          {/* Subtle Faint Industrial Watermark in Background */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] overflow-hidden select-none">
            <img
              src={craneLiftImg}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover filter grayscale mix-blend-multiply"
            />
          </div>

          <div className="container-x relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <Reveal>
                <div className="flex items-center justify-center gap-3">
                  <span className="h-[1.5px] w-8 sm:w-14 bg-[#c59b27]" />
                  <span className="font-display text-xs sm:text-[0.78rem] font-black uppercase tracking-[0.24em] text-[#7a0d11]">
                    OUR STRATEGIC DIRECTION
                  </span>
                  <span className="h-[1.5px] w-8 sm:w-14 bg-[#c59b27]" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] font-bold tracking-tight text-[#18181b] mt-3 sm:mt-4 leading-tight">
                  Mission, Vision &amp;{" "}
                  <span className="text-[#8b0000]">Growth</span>
                </h2>
                <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                  Our strategic orientation unites high-reliability execution with forward-looking engineering innovations to build for tomorrow.
                </p>
              </Reveal>
            </div>

            {/* Main Interactive Radial Infographic */}
            <div className="relative max-w-6xl mx-auto">
              {/* Top Row: Mission (Left) + Circular Focal Image (Center) + Vision (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                
                {/* ---------------- LEFT: OUR MISSION ---------------- */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <Reveal delay={0}>
                    <div className="relative text-left">
                      {/* Top Badge & Eyebrow */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#520609] text-[#e5be58] border-2 border-[#d4af37] shadow-md">
                          <Target className="h-5 w-5 stroke-[1.9]" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-[0.72rem] font-black uppercase tracking-[0.2em] text-[#7a0d11]">
                            OUR MISSION
                          </span>
                          <span className="h-px w-8 sm:w-12 bg-[#c59b27]" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18181b] leading-tight mb-4">
                        Execution<br />
                        <span className="text-[#18181b]">in Tough Theatres.</span>
                      </h3>

                      {/* Narrative */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                        To provide reliable and consistent engineering solutions for complex process industries — even in the most demanding environments — with a focus on safety, quality and long-term performance.
                      </p>

                      {/* Footer Tags */}
                      <div className="font-display text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#7a0d11] flex flex-wrap items-center gap-x-2.5 gap-y-1">
                        <span>RELIABLE</span>
                        <span className="text-[#c59b27]">|</span>
                        <span>SAFE</span>
                        <span className="text-[#c59b27]">|</span>
                        <span>QUALITY DRIVEN</span>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* ---------------- CENTER: CIRCULAR FOCAL IMAGE WITH ORBIT ---------------- */}
                <div className="lg:col-span-4 flex justify-center py-4 sm:py-6">
                  <Reveal delay={100}>
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] flex items-center justify-center">
                      
                      {/* Concentric Golden Outer Orbit Ring */}
                      <div className="absolute inset-0 rounded-full border border-[#c59b27]/40 pointer-events-none" />
                      <div className="absolute -inset-3 rounded-full border border-dashed border-[#c59b27]/30 pointer-events-none" />

                      {/* Orbit Connecting Nodes */}
                      {/* Left Node (9 o'clock) */}
                      <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#520609] border-2 border-[#d4af37] ring-4 ring-[#FAF8F5] shadow-sm z-20" />
                      
                      {/* Top Node (12 o'clock) */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c59b27] border-2 border-[#520609] ring-2 ring-[#FAF8F5] shadow-xs z-20" />
                      
                      {/* Right Node (3 o'clock) */}
                      <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#c59b27] border-2 border-[#520609] ring-4 ring-[#FAF8F5] shadow-sm z-20" />
                      
                      {/* Bottom Node (6 o'clock) */}
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#520609] border-2 border-[#d4af37] ring-4 ring-[#FAF8F5] shadow-sm z-20" />

                      {/* Main Circular Photograph */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#FAF8F5] shadow-[0_16px_40px_rgba(82,6,9,0.18)] bg-[#120305]">
                        <img
                          src={aboutHeroSunset}
                          alt="Lexus India illuminated sunset refinery towers"
                          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2c0305]/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* ---------------- RIGHT: OUR VISION ---------------- */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <Reveal delay={150}>
                    <div className="relative text-left">
                      {/* Top Badge & Eyebrow */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c59b27] text-white border-2 border-[#520609] shadow-md">
                          <Eye className="h-5 w-5 stroke-[1.9]" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-[0.72rem] font-black uppercase tracking-[0.2em] text-[#7a0d11]">
                            OUR VISION
                          </span>
                          <span className="h-px w-8 sm:w-12 bg-[#c59b27]" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18181b] leading-tight mb-4">
                        Global Expansion<br />
                        <span className="text-[#b8860b]">&amp; High Reliability.</span>
                      </h3>

                      {/* Narrative */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                        To be a trusted engineering partner delivering world-class process solutions across global markets, known for innovation, reliability and sustainable growth.
                      </p>

                      {/* Footer Tags */}
                      <div className="font-display text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#7a0d11] flex flex-wrap items-center gap-x-2.5 gap-y-1">
                        <span>INNOVATION</span>
                        <span className="text-[#c59b27]">|</span>
                        <span>GLOBAL PRESENCE</span>
                        <span className="text-[#c59b27]">|</span>
                        <span>SUSTAINABLE IMPACT</span>
                      </div>
                    </div>
                  </Reveal>
                </div>

              </div>

              {/* ---------------- BOTTOM: OUR GROWTH CONCEPT ---------------- */}
              <div className="mt-12 sm:mt-16 pt-8 border-t border-[#EAE4D9]/60 max-w-3xl mx-auto text-center">
                <Reveal delay={200}>
                  <div className="flex flex-col items-center">
                    {/* Centered Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#520609] text-[#e5be58] border-2 border-[#d4af37] shadow-md">
                        <TrendingUp className="h-5 w-5 stroke-[1.9]" />
                      </div>
                      <span className="font-display text-[0.72rem] font-black uppercase tracking-[0.2em] text-[#7a0d11]">
                        OUR GROWTH CONCEPT
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-[#18181b] mb-4">
                      Building for{" "}
                      <span className="text-[#8b0000]">Tomorrow.</span>
                    </h3>

                    {/* Narrative */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto mb-6">
                      Guided by a long-term vision, we continue to strengthen our capabilities, expand into new markets and embrace advanced technologies to create lasting value for our clients and communities.
                    </p>

                    {/* Footer Tags */}
                    <div className="font-display text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#7a0d11] flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1">
                      <span>PEOPLE</span>
                      <span className="text-[#c59b27]">|</span>
                      <span>TECHNOLOGY</span>
                      <span className="text-[#c59b27]">|</span>
                      <span>EXPANSION</span>
                      <span className="text-[#c59b27]">|</span>
                      <span>LONG-TERM VALUE</span>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: OUR CORE VALUES (5 Foundational Pillars)
            =================================================================== */}
        <section
          id="values"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#EAE4D9]/80"
        >
          <div className="container-x">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <Reveal>
                <div className="flex justify-center">
                  <SectionEyebrow>03 — Guiding Principles</SectionEyebrow>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-black uppercase tracking-tight text-foreground mt-3">
                  Our Core Values
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Our culture and operating standards are built on five fundamental pillars that define how we design, fabricate, and deliver every project.
                </p>
              </Reveal>
            </div>

            {/* 5 Value Cards in a Responsive Grid */}
            <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <Reveal key={val.name} delay={idx * 60}>
                    <div className="group relative flex flex-col justify-between rounded-xs border border-[#EAE4D9] bg-white p-6 transition-all duration-300 hover:border-[#c59b27] hover:shadow-[0_10px_28px_rgba(82,6,9,0.08)] hover:-translate-y-1 h-full">
                      <div>
                        {/* Top Bar with Icon & Number */}
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xs bg-[#520609]/10 border border-[#c59b27]/40 text-[#7a0d11] transition-all duration-300 group-hover:bg-[#520609] group-hover:text-[#e5be58]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="font-display text-lg font-black text-slate-300 group-hover:text-[#c59b27] transition-colors">
                            {val.num}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-lg font-black uppercase tracking-tight text-foreground mt-4 group-hover:text-[#7a0d11] transition-colors">
                          {val.name}
                        </h3>

                        {/* Tagline */}
                        <div className="mt-1 inline-block font-display text-[0.68rem] font-bold uppercase tracking-wider text-[#c59b27] border-b border-[#c59b27]/30 pb-0.5">
                          {val.tagline}
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-xs text-slate-600 leading-relaxed font-normal">
                          {val.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#EAE4D9]/80 flex items-center justify-between text-[0.68rem] text-[#7a0d11] font-bold">
                        <span>Pillar 0{idx + 1}</span>
                        <Sparkles className="h-3.5 w-3.5 text-[#c59b27]" />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: OUR PROGRESS — COMMITMENT IN ACTION
            =================================================================== */}
        <section
          id="iraq-experience"
          className="relative overflow-hidden py-14 sm:py-18 lg:py-20 text-white"
          style={{
            background:
              "linear-gradient(135deg, #1e0305 0%, #120204 50%, #080102 100%)",
          }}
        >
          {/* Subtle Industrial Refinery Watermark Silhouette */}
          <div className="pointer-events-none absolute inset-0 opacity-20 overflow-hidden select-none">
            <img
              src={aboutHeroSunset}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#120204] via-[#120204]/90 to-[#120204]/80" />
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="container-x relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-4">
                <Reveal>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="h-[1.5px] w-6 bg-[#d4af37]" />
                    <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#e5be58]">
                      OUR PROGRESS
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white leading-tight">
                    Commitment<br />
                    <span className="text-[#e5be58]">in Action.</span>
                  </h2>
                </Reveal>
              </div>

              {/* Right Column: 4 Stat Pillars with vertical dividers */}
              <div className="lg:col-span-8">
                <Reveal delay={100}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15 border-y sm:border-y-0 sm:border-l border-white/15">
                    
                    {/* Stat 1: 25+ */}
                    <div className="flex flex-col items-center text-center p-4 sm:px-5">
                      <div className="flex h-10 w-10 items-center justify-center text-white/90 mb-3">
                        <Users className="h-6 w-6 stroke-[1.6]" />
                      </div>
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-[#e5be58]">
                        25+
                      </div>
                      <div className="text-[0.72rem] text-slate-300 font-medium mt-1 leading-tight">
                        Years of<br />Industry Experience
                      </div>
                    </div>

                    {/* Stat 2: 100% */}
                    <div className="flex flex-col items-center text-center p-4 sm:px-5">
                      <div className="flex h-10 w-10 items-center justify-center text-white/90 mb-3">
                        <Cog className="h-6 w-6 stroke-[1.6]" />
                      </div>
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-[#e5be58]">
                        100%
                      </div>
                      <div className="text-[0.72rem] text-slate-300 font-medium mt-1 leading-tight">
                        Client-Centric<br />Approach
                      </div>
                    </div>

                    {/* Stat 3: Reliability */}
                    <div className="flex flex-col items-center text-center p-4 sm:px-5">
                      <div className="flex h-10 w-10 items-center justify-center text-white/90 mb-3">
                        <ShieldCheck className="h-6 w-6 stroke-[1.6]" />
                      </div>
                      <div className="font-serif text-xl sm:text-2xl font-bold text-[#e5be58] mt-1">
                        Reliability
                      </div>
                      <div className="text-[0.72rem] text-slate-300 font-medium mt-1 leading-tight">
                        Proven Engineering<br />Execution
                      </div>
                    </div>

                    {/* Stat 4: Global */}
                    <div className="flex flex-col items-center text-center p-4 sm:px-5">
                      <div className="flex h-10 w-10 items-center justify-center text-white/90 mb-3">
                        <Globe className="h-6 w-6 stroke-[1.6]" />
                      </div>
                      <div className="font-serif text-xl sm:text-2xl font-bold text-[#e5be58] mt-1">
                        Global
                      </div>
                      <div className="text-[0.72rem] text-slate-300 font-medium mt-1 leading-tight">
                        Expanding<br />Opportunities
                      </div>
                    </div>

                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: FINAL CALL TO ACTION BANNER
            =================================================================== */}
        <section className="relative overflow-hidden bg-[#FAF8F5] py-14 sm:py-16 lg:py-20 border-b border-[#EAE4D9]/80">
          <div className="container-x">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-xs border-2 border-[#d4af37]/80 p-8 sm:p-12 lg:p-14 text-white shadow-[0_16px_40px_rgba(82,6,9,0.25)]"
                style={{
                  background:
                    "linear-gradient(110deg, #400407 0%, #5c070a 35%, #7a0d11 65%, #400407 100%)",
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#d4af37]/20 blur-3xl"
                />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                  <div className="max-w-2xl">
                    <span className="inline-block font-display text-xs font-black uppercase tracking-[0.22em] text-[#e5be58] border-b border-[#e5be58]/40 pb-1">
                      Building For Tomorrow Through Today’s Innovations
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mt-3 leading-tight">
                      Let’s Engineer Your Next Process Facility
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-white/85 max-w-xl font-normal">
                      Connect with our engineering team in Pune to discuss feasibility, 3D piping design, equipment fabrication in Bhosari, or full turnkey execution.
                    </p>
                  </div>

                  <div className="shrink-0">
                    <a
                      href="/contact"
                      className="group inline-flex items-center gap-3 bg-[#FAF8F5] hover:bg-white text-[#520609] hover:text-[#400407] border-2 border-[#d4af37] px-7 sm:px-9 py-4 font-display text-xs sm:text-sm font-black uppercase tracking-[0.18em] rounded-xs shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Start A Project</span>
                      <ArrowRight className="h-4 w-4 text-[#7a0d11] transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
