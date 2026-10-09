import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Factory,
  CheckCircle2,
  Users,
  Building2,
  Layers,
  Sparkles,
  Compass,
  HardHat,
  Cog,
  FileCheck,
  ChevronRight,
  Flame,
  Droplets,
  Boxes,
  Waves,
  Utensils,
  Cpu,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { Navbar, Footer } from "@/components/site/Sections";

// Images from src/assets
import indEthanol from "@/assets/ind-ethanol.jpg";
import indChemical from "@/assets/ind-chemical.jpg";
import indOilGas from "@/assets/ind-oilgas.jpg";
import indWaterTreat from "@/assets/ind-water-treat.jpg";
import indFood from "@/assets/ind-food.jpg";
import indEvaporation from "@/assets/ind-evaporation.jpg";
import refinerySunset from "@/assets/refinery-sunset-panorama.png";
import aboutHeroSunset from "@/assets/about-hero-sunset.jpg";

const TITLE = "Industries & Process Sectors We Serve | Lexus India Engineering Solutions";
const DESC =
  "Custom engineering & EPC solutions for complex process industries: Bio-Ethanol, Chemical, Oil & Gas, Water & Wastewater, Food & Beverage, and Evaporation & Drying Systems.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESC,
  provider: {
    "@type": "Organization",
    name: "Lexus India Engineering Solutions",
    alternateName: "3A-Engg. Solution",
  },
};

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: IndustriesPage,
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

export function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-18 sm:pt-20 bg-[#FAF8F5]">
        {/* ========================================================================= */}
        {/* 01. HERO SECTION (MATCHING ABOUT PAGE HERO DESIGN & PRESERVING CONTENT) */}
        {/* ========================================================================= */}
        <section className="relative flex h-[calc(100vh-4.5rem)] sm:h-[calc(100vh-5rem)] min-h-[520px] max-h-[920px] flex-col justify-between overflow-hidden bg-[#0c0d11] text-white">
          {/* Full-Bleed Background Refinery Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src={refinerySunset}
              alt="Lexus India custom engineering for complex process industries"
              className="h-full w-full object-cover object-[70%_center] lg:object-[60%_center] filter contrast-[1.08] brightness-[0.96]"
            />
            {/* Dark Cinematic Gradient for High Text Legibility on Left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d11]/95 via-[#0c0d11]/80 via-48% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d11]/90 via-transparent to-[#0c0d11]/40" />
          </div>

          {/* Main Hero Content */}
          <div className="container-x relative z-10 flex flex-1 flex-col justify-center py-6 sm:py-8 lg:py-10">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 sm:w-8 bg-[#d4af37]" />
                  <span className="font-display text-xs sm:text-[0.78rem] font-black uppercase tracking-[0.22em] text-[#d4af37]">
                    FROM CONCEPT TO COMMISSIONING
                  </span>
                </div>
              </Reveal>

              {/* Headline */}
              <Reveal delay={80}>
                <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[3.2rem] xl:text-[3.8rem] leading-[1.04] tracking-tight uppercase text-white mt-4 sm:mt-5">
                  CUSTOM ENGINEERING &amp;<br />
                  EPC SOLUTIONS FOR<br />
                  <span className="text-[#e5be58]">PROCESS INDUSTRIES.</span>
                </h1>
              </Reveal>

              {/* Description */}
              <Reveal delay={150}>
                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-xl">
                  From specialized equipment fabrication at our Bhosari MIDC facility to high-stakes site execution, <strong className="text-white font-semibold">Lexus India Engineering Solutions</strong> provides end-to-end engineering, 3D design, fabrication, and turnkey setup for core processing industries worldwide.
                </p>
              </Reveal>

              {/* Primary CTA Buttons */}
              <Reveal delay={220}>
                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#industry-01"
                    className="group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_12px_rgba(212,175,55,0.26),0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.52),0_4px_14px_rgba(0,0,0,0.45)] text-white px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200 hover:translate-x-0.5 active:scale-[0.98]"
                  >
                    <span>EXPLORE OUR INDUSTRIES</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200"
                  >
                    <span>REQUEST EPC CONSULTATION</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom 4-Column Burgundy Strip (Matching About Page) */}
          <div className="relative z-10 bg-[#3b0407] border-t border-[#d4af37]/35 text-white shadow-2xl">
            <div className="container-x">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 py-0.5 sm:py-0">
                
                {/* 01: 100% Code Compliant */}
                <div className="flex items-center gap-3.5 py-3 sm:py-3.5 md:px-5">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-[#d4af37] text-[#e5be58] bg-[#2d0305]">
                    <ShieldCheck className="h-4 w-4 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block font-display text-[0.64rem] sm:text-[0.66rem] font-bold uppercase tracking-wider text-[#e5be58]">
                      100% COMPLIANT
                    </span>
                    <span className="font-display text-xs sm:text-[0.8rem] font-bold uppercase tracking-wider text-white">
                      ASME / IBR CODES
                    </span>
                  </div>
                </div>

                {/* 02: 50+ Plants Commissioned */}
                <div className="flex items-center gap-3.5 py-3 sm:py-3.5 md:px-5">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-[#d4af37] text-[#e5be58] bg-[#2d0305]">
                    <HardHat className="h-4 w-4 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block font-display text-[0.64rem] sm:text-[0.66rem] font-bold uppercase tracking-wider text-[#e5be58]">
                      50+ COMMISSIONED
                    </span>
                    <span className="font-display text-xs sm:text-[0.8rem] font-bold uppercase tracking-wider text-white">
                      PLANTS &amp; SKIDS
                    </span>
                  </div>
                </div>

                {/* 03: 0-Defect Quality */}
                <div className="flex items-center gap-3.5 py-3 sm:py-3.5 md:px-5">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-[#d4af37] text-[#e5be58] bg-[#2d0305]">
                    <Award className="h-4 w-4 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block font-display text-[0.64rem] sm:text-[0.66rem] font-bold uppercase tracking-wider text-[#e5be58]">
                      0-DEFECT RATING
                    </span>
                    <span className="font-display text-xs sm:text-[0.8rem] font-bold uppercase tracking-wider text-white">
                      WELDED JOINTS
                    </span>
                  </div>
                </div>

                {/* 04: Single-Source EPC */}
                <div className="flex items-center gap-3.5 py-3 sm:py-3.5 md:px-5">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-[#d4af37] text-[#e5be58] bg-[#2d0305]">
                    <FileCheck className="h-4 w-4 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block font-display text-[0.64rem] sm:text-[0.66rem] font-bold uppercase tracking-wider text-[#e5be58]">
                      SINGLE-SOURCE
                    </span>
                    <span className="font-display text-xs sm:text-[0.8rem] font-bold uppercase tracking-wider text-white">
                      EPC UNDER 1 ROOF
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 02. INDUSTRY 01: ETHANOL & DISTILLERY */}
        {/* ========================================================================= */}
        <section
          id="industry-01"
          className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-[#EAE4D9]"
        >
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Image with Angled 01 Badge */}
              <div className="lg:col-span-5 relative">
                <Reveal>
                  <div className="relative rounded-xs overflow-hidden border border-[#EAE4D9] shadow-md bg-[#120305] group">
                    <img
                      src={indEthanol}
                      alt="Ethanol & Distillery Process Plant Execution"
                      className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Dark Burgundy Angled Badge */}
                    <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] bg-[#3b0407]/95 backdrop-blur-xs flex flex-col justify-center p-6 text-white border-l-2 border-[#d4af37]">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">
                        01
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#e5be58] leading-tight mb-2">
                        Ethanol &amp;<br />Distillery
                      </h3>
                      <p className="text-[0.72rem] text-slate-200 leading-snug font-light">
                        Sustainable fuel. Advanced processing. Cleaner future.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: Narrative & 3 Feature Columns */}
              <div className="lg:col-span-7">
                <Reveal delay={100}>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18181b] leading-snug mb-8">
                    Complete EPC and turnkey plant execution for bio-fuel and industrial alcohol production facilities.
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Workflow className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Solutions &amp; Turnkey Scope
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Full plant engineering, 3D piping design, site layout development, erection, and commissioning.
                      </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Factory className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Core Equipment Fabricated
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Distillation columns, multi-effect evaporators, condensers, reboilers, fermenters, and storage tanks.
                      </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Flame className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Key Focus
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Sustainable, high-yield ethanol processing and integration with Zero Liquid Discharge (ZLD) systems.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 03. INDUSTRY 02: CHEMICAL & ALLIED PROCESS INDUSTRIES */}
        {/* ========================================================================= */}
        <section
          id="industry-02"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 border-b border-[#EAE4D9]"
        >
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Narrative & 3 Feature Columns */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <Reveal>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18181b] leading-snug mb-8">
                    Engineering robust solutions for chemical and allied process industries.
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Layers className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Solutions &amp; Turnkey Scope
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        100% construction lines, basic &amp; detail engineering, civil/structural layout, 3D modeling using PDMS, PDS &amp; SP3D.
                      </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Wrench className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Core Equipment Fabricated
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Plant modernization, mechanical troubleshooting, and safety-compliant process piping installation.
                      </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Key Focus
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Reaction vessels, jacketed and pressure vessels, solvent recovery systems, heat exchangers, and storage tanks.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: Image with 02 Badge */}
              <div className="lg:col-span-5 order-1 lg:order-2 relative">
                <Reveal delay={100}>
                  <div className="relative rounded-xs overflow-hidden border border-[#EAE4D9] shadow-md bg-[#120305] group">
                    <img
                      src={indChemical}
                      alt="Chemical & Allied Process Industries"
                      className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Angled Right Side Badge */}
                    <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] bg-[#FCFBF8]/95 backdrop-blur-xs flex flex-col justify-center p-6 text-foreground border-l-2 border-[#c59b27]">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#520609] mb-1">
                        02
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181b] leading-tight mb-2">
                        Chemical &amp;<br />Allied Process<br />Industries
                      </h3>
                      <p className="text-[0.72rem] text-slate-600 leading-snug font-normal">
                        Precision engineering for complex chemistries.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 04. INDUSTRY 03: OIL & GAS / REFINERIES */}
        {/* ========================================================================= */}
        <section
          id="industry-03"
          className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-[#EAE4D9]"
        >
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Image with 03 Badge */}
              <div className="lg:col-span-5 relative">
                <Reveal>
                  <div className="relative rounded-xs overflow-hidden border border-[#EAE4D9] shadow-md bg-[#120305] group">
                    <img
                      src={indOilGas}
                      alt="Oil & Gas / Refineries"
                      className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Dark Burgundy Angled Badge on Left */}
                    <div className="absolute inset-y-0 left-0 w-[55%] sm:w-[50%] bg-[#3b0407]/95 backdrop-blur-xs flex flex-col justify-center p-6 text-white border-r-2 border-[#d4af37]">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">
                        03
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#e5be58] leading-tight mb-2">
                        Oil &amp; Gas /<br />Refineries
                      </h3>
                      <p className="text-[0.72rem] text-slate-200 leading-snug font-light">
                        Engineering for high-performance energy infrastructure.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: Narrative & 3 Feature Columns */}
              <div className="lg:col-span-7">
                <Reveal delay={100}>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18181b] leading-snug mb-8">
                    Heavy mechanical engineering, refinery line construction and site execution services in demanding environments.
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Solutions &amp; Turnkey Scope
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Complete refinery construction lines, structural steel fabrication, heavy equipment erection, and piping networks.
                      </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Cpu className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Onsite Execution &amp; Services
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Site erection, electrical/instrumentation cabling, MCC panel installation, and mechanical troubleshooting.
                      </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Field Proven Resilience
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Demonstrated capability to execute and complete high-stakes international assignments on schedule under harsh conditions.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 05. INDUSTRY 04: WATER & WASTEWATER TREATMENT */}
        {/* ========================================================================= */}
        <section
          id="industry-04"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 border-b border-[#EAE4D9]"
        >
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Narrative, 4 Pills & Scope */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <Reveal>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18181b] leading-snug mb-6">
                    Engineering water management systems for a cleaner and more sustainable tomorrow.
                  </h3>

                  {/* 4 System Type Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <div className="bg-white p-3 rounded-xs border border-[#EAE4D9] flex flex-col items-center text-center shadow-2xs">
                      <Droplets className="h-5 w-5 text-[#7a0d11] mb-1" />
                      <span className="font-display text-xs font-bold text-[#520609]">WTP</span>
                      <span className="text-[0.65rem] text-slate-500">Water Treatment Plants</span>
                    </div>

                    <div className="bg-white p-3 rounded-xs border border-[#EAE4D9] flex flex-col items-center text-center shadow-2xs">
                      <Waves className="h-5 w-5 text-[#7a0d11] mb-1" />
                      <span className="font-display text-xs font-bold text-[#520609]">ETP</span>
                      <span className="text-[0.65rem] text-slate-500">Effluent Treatment Plants</span>
                    </div>

                    <div className="bg-white p-3 rounded-xs border border-[#EAE4D9] flex flex-col items-center text-center shadow-2xs">
                      <ShieldCheck className="h-5 w-5 text-[#7a0d11] mb-1" />
                      <span className="font-display text-xs font-bold text-[#520609]">ZLD</span>
                      <span className="text-[0.65rem] text-slate-500">Zero Liquid Discharge</span>
                    </div>

                    <div className="bg-white p-3 rounded-xs border border-[#EAE4D9] flex flex-col items-center text-center shadow-2xs">
                      <Zap className="h-5 w-5 text-[#7a0d11] mb-1" />
                      <span className="font-display text-xs font-bold text-[#520609]">CPU</span>
                      <span className="text-[0.65rem] text-slate-500">Condensate Polishing</span>
                    </div>
                  </div>

                  {/* Scope Block */}
                  <div className="bg-white p-4 rounded-xs border-l-4 border-[#c59b27] border border-[#EAE4D9]">
                    <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#520609] block mb-1">
                      Execution Scope:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete EPC design, piping runs, pump &amp; valve installation, and site integration with main processing facilities.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Right: Image with 04 Badge */}
              <div className="lg:col-span-5 order-1 lg:order-2 relative">
                <Reveal delay={100}>
                  <div className="relative rounded-xs overflow-hidden border border-[#EAE4D9] shadow-md bg-[#120305] group">
                    <img
                      src={indWaterTreat}
                      alt="Water & Wastewater Treatment"
                      className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Angled Right Side Badge */}
                    <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] bg-[#FCFBF8]/95 backdrop-blur-xs flex flex-col justify-center p-6 text-foreground border-l-2 border-[#c59b27]">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#520609] mb-1">
                        04
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181b] leading-tight mb-2">
                        Water &amp;<br />Wastewater<br />Treatment
                      </h3>
                      <p className="text-[0.72rem] text-slate-600 leading-snug font-normal">
                        Sustainable solutions for responsible industries.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 06. INDUSTRY 05: FOOD & ALLIED PROCESS INDUSTRIES */}
        {/* ========================================================================= */}
        <section
          id="industry-05"
          className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-[#EAE4D9]"
        >
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Image with 05 Badge */}
              <div className="lg:col-span-5 relative">
                <Reveal>
                  <div className="relative rounded-xs overflow-hidden border border-[#EAE4D9] shadow-md bg-[#120305] group">
                    <img
                      src={indFood}
                      alt="Food & Allied Process Industries"
                      className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Dark Burgundy Angled Badge */}
                    <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] bg-[#3b0407]/95 backdrop-blur-xs flex flex-col justify-center p-6 text-white border-l-2 border-[#d4af37]">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">
                        05
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#e5be58] leading-tight mb-2">
                        Food &amp; Allied<br />Process Industries
                      </h3>
                      <p className="text-[0.72rem] text-slate-200 leading-snug font-light">
                        Hygienic processing. Reliable performance.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: Narrative & 2 Feature Columns */}
              <div className="lg:col-span-7">
                <Reveal delay={100}>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18181b] leading-snug mb-8">
                    Specialized engineering and fabrication for food, beverage, and agri-processing plants.
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Utensils className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Solutions &amp; Turnkey Scope
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Custom process plant layouts, sanitary piping design, equipment installation, and plant maintenance.
                      </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Boxes className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Core Equipment Fabricated
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Stainless steel storage tanks, process vessels, mixing units, heat exchangers, and thermal drying systems.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 07. INDUSTRY 06: EVAPORATION & DRYING SYSTEMS */}
        {/* ========================================================================= */}
        <section
          id="industry-06"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 border-b border-[#EAE4D9]"
        >
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Narrative & 2 Feature Columns */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <Reveal>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18181b] leading-snug mb-8">
                    Advanced thermal processing and drying equipment for maximum efficiency.
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Factory className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Core Equipment Fabricated
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Industrial evaporators, dryers, crystallizers, heat exchangers, and condenser units.
                      </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 mb-3 shadow-2xs">
                        <Boxes className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#18181b] mb-1.5">
                        Applications
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Concentrating effluents, solvent recovery, crystal separation, and moisture removal in chemical, food, and distillery operations.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: Image with 06 Badge */}
              <div className="lg:col-span-5 order-1 lg:order-2 relative">
                <Reveal delay={100}>
                  <div className="relative rounded-xs overflow-hidden border border-[#EAE4D9] shadow-md bg-[#120305] group">
                    <img
                      src={indEvaporation}
                      alt="Evaporation & Drying Systems"
                      className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Angled Right Side Badge */}
                    <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] bg-[#FCFBF8]/95 backdrop-blur-xs flex flex-col justify-center p-6 text-foreground border-l-2 border-[#c59b27]">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#520609] mb-1">
                        06
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181b] leading-tight mb-2">
                        Evaporation &amp;<br />Drying Systems
                      </h3>
                      <p className="text-[0.72rem] text-slate-600 leading-snug font-normal">
                        Innovative thermal solutions for diverse process needs.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 08. SECTION: WHY LEADING PROCESS PLANTS TRUST LEXUS INDIA */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#1e0204] text-white py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0 opacity-15 overflow-hidden select-none">
            <img
              src={aboutHeroSunset}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e0204] via-[#1e0204]/95 to-[#1e0204]" />
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="container-x relative z-10">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-px w-6 bg-[#c59b27]" />
                  <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#e5be58]">
                    WHY CHOOSE LEXUS INDIA
                  </span>
                  <span className="h-px w-6 bg-[#c59b27]" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-white leading-tight">
                  Why Leading Process Plants<br />
                  <span className="text-[#e5be58]">Trust Lexus India Engineering Solutions</span>
                </h2>
              </div>
            </Reveal>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1: In-House Manufacturing */}
              <Reveal delay={0} className="h-full">
                <div className="h-full flex flex-col items-center text-center p-6 sm:p-8 rounded-xs bg-[#2b0407]/80 border border-[#c59b27]/30 shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#520609] text-[#e5be58] border-2 border-[#d4af37] mb-5 shadow-md">
                    <Factory className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    In-House Manufacturing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Precision fabrication of critical vessels, columns, and exchangers in our Bhosari MIDC plant in Pune.
                  </p>
                </div>
              </Reveal>

              {/* Pillar 2: End-to-End 3D Modeling */}
              <Reveal delay={100} className="h-full">
                <div className="h-full flex flex-col items-center text-center p-6 sm:p-8 rounded-xs bg-[#2b0407]/80 border border-[#c59b27]/30 shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#520609] text-[#e5be58] border-2 border-[#d4af37] mb-5 shadow-md">
                    <Layers className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    End-to-End 3D Modeling
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Detailed plant design using SP3D, PDMS, PDS, and CAD to prevent field re-work.
                  </p>
                </div>
              </Reveal>

              {/* Pillar 3: All-Terrain Site Execution */}
              <Reveal delay={200} className="h-full">
                <div className="h-full flex flex-col items-center text-center p-6 sm:p-8 rounded-xs bg-[#2b0407]/80 border border-[#c59b27]/30 shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#520609] text-[#e5be58] border-2 border-[#d4af37] mb-5 shadow-md">
                    <HardHat className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    All-Terrain Site Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Dedicated field personnel for equipment erection, piping, and commissioning in any climate or environment.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
