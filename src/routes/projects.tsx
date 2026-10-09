import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
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
  Maximize2,
  X,
  Compass,
  HardHat,
  Cog,
  FileCheck,
  ChevronRight,
  ChevronLeft,
  Flame,
  MessageSquareText,
  Plus,
  ExternalLink,
  Phone,
} from "lucide-react";
import { Navbar, Footer } from "@/components/site/Sections";

// Images from src/assets/images
import certImg from "@/assets/images/certification.jpeg";
import strengthImg from "@/assets/images/our strength.jpeg";
import ourTeamImg from "@/assets/images/our-team.jpeg";
import teamImg from "@/assets/images/team.jpeg";
import proj1Img from "@/assets/images/project 1.jpeg";
import proj2Img from "@/assets/images/project 2.jpeg";
import proj3Img from "@/assets/images/project 3.jpeg";
import projCompletedImg from "@/assets/images/project completed.jpeg";
import projOngoingImg from "@/assets/images/project ongoing.jpeg";
import projStartedImg from "@/assets/images/project started.jpeg";
import refinerySunset from "@/assets/refinery-sunset-panorama.png";
import aboutHeroSunset from "@/assets/about-hero-sunset.jpg";

const TITLE = "Projects & Plant Execution | Lexus India Engineering Solutions";
const DESC =
  "From initial 3D modeling and code-certified shop fabrication at our MIDC Bhosari facility to heavy crane erection and turnkey commissioning—explore our industrial installations.";

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

export const Route = createFileRoute("/projects")({
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
  component: ProjectsPage,
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

/* ---------- MODAL DATA TYPE ---------- */
interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  image: string;
  location?: string;
  tags?: string[];
  points?: string[];
  description: string;
  specs?: { label: string; value: string }[];
}

export function ProjectsPage() {
  const [selectedItem, setSelectedItem] = useState<ProjectDetail | null>(null);

  // Close modal on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 3 Methodology Phases
  const methodologyPhases: ProjectDetail[] = [
    {
      id: "phase-1",
      title: "Project Mobilization & Initial Site Groundwork",
      category: "Phase 01 • Inception & Foundation",
      image: projStartedImg,
      description:
        "Every project begins with disciplined site engineering. We conduct comprehensive topographical audits, soil load calculations, civil anchor-bolt layouts, and regulatory mobilize plans before heavy equipment delivery.",
      points: [
        "Site topography & foundation civil audit",
        "Resource planning & HSE readiness",
        "Vendor and material mobilization",
        "Regulatory approvals & permits",
      ],
      specs: [
        { label: "Stage", value: "Phase 01 (Mobilization)" },
        { label: "Scope", value: "Civil / Structural Baseline" },
        { label: "Standard", value: "IS 456 / OSHA Standards" },
        { label: "Outcome", value: "Foundation Readiness Signoff" },
      ],
    },
    {
      id: "phase-2",
      title: "Onsite Fabrication & Structural Erection",
      category: "Phase 02 • Heavy Erection & Piping",
      image: projOngoingImg,
      description:
        "The core of multidisciplinary execution. Our crews execute precision tandem column lifts, multi-tier steelwork, ASME B31.3 piping pre-fabrication, and real-time NDT inspections on critical joints.",
      points: [
        "Precision structural and process equipment installation",
        "Piping, electrical & instrumentation integration",
        "Quality inspection at every stage",
        "ASME / IS code compliance",
      ],
      specs: [
        { label: "Stage", value: "Phase 02 (Active Construction)" },
        { label: "Welding Code", value: "ASME Sec IX / AWS D1.1" },
        { label: "Testing", value: "100% NDT Joint Integrity" },
        { label: "Rigging", value: "Tandem Crane Lifts" },
      ],
    },
    {
      id: "phase-3",
      title: "Testing, Commissioning & Final Handover",
      category: "Phase 03 • Commissioning & Handover",
      image: projCompletedImg,
      description:
        "Thorough validation of all plant systems. We conduct 1.5x design pressure hydrostatic tests, pneumatic line blowing, electrical/instrumentation loop checks, cold/hot commissioning, and comprehensive documentation handover.",
      points: [
        "Hydrostatic & pneumatic testing",
        "Control system integration & loop tuning",
        "Performance testing & validation",
        "Commercial run & documentation dossier",
      ],
      specs: [
        { label: "Stage", value: "Phase 03 (Handover)" },
        { label: "Test Pressure", value: "1.5x Design Pressure" },
        { label: "Loop Checks", value: "100% DCS/PLC Tuning" },
        { label: "Deliverable", value: "Ready for Commercial Production" },
      ],
    },
  ];

  // Featured Industrial Installations
  const featuredProjects: ProjectDetail[] = [
    {
      id: "proj-1",
      title: "Turnkey Industrial Process & Multi-Level Chemical Facility",
      category: "TURNKEY EPC PLANT",
      image: proj1Img,
      location: "Location: MIDC Bhosari, Pune",
      tags: ["Process Columns", "Reactors", "Steel Structure"],
      description:
        "Complete turnkey process facility incorporating high-capacity distillation columns, heavy-wall stainless-steel reactor vessels, multi-story structural steel frames, and explosion-proof field instrumentation.",
      points: [
        "Complete plant 3D modeling and detailed fabrication engineering",
        "Stainless steel (SS316L) and carbon steel vessel manufacturing",
        "Multi-story steel structure with heavy equipment walkways",
        "ASME B31.3 process piping & utility headers",
        "Full turnkey commissioning & client handover",
      ],
      specs: [
        { label: "Sector", value: "Chemical & Bio-Ethanol" },
        { label: "Materials", value: "SS316L / SS304 / CS" },
        { label: "Codes", value: "ASME Sec VIII / IBR / TEMA" },
        { label: "Delivery", value: "Turnkey Single-Source" },
      ],
    },
    {
      id: "proj-2",
      title: "Heavy Vertical Fractionation Column & High-Elevation Erection",
      category: "HEAVY FABRICATION",
      image: proj2Img,
      location: "Location: Pune, India",
      tags: ["Custom Fabrication", "Onsite Assembly"],
      description:
        "High-precision fabrication and tandem crane erection of heavy process fractionation columns. Engineered with internal vapor distribution trays, high wind-load stability, and external insulation cladding.",
      points: [
        "Heavy plate rolling and automated submerged arc welding (SAW)",
        "Internal fractionation tray support and downcomer alignment",
        "Tandem heavy crane lifting plan executed with zero incidents",
        "100% radiographic and ultrasonic weld inspection",
      ],
      specs: [
        { label: "Sector", value: "Separation & Petrochemical" },
        { label: "Inspection", value: "100% RT / UT Weld Signoff" },
        { label: "Assembly", value: "Vertical High-Tolerance Alignment" },
        { label: "Execution", value: "Zero Safety Incidents" },
      ],
    },
    {
      id: "proj-3",
      title: "High-Pressure Modular Process Skid & Plant Header Integration",
      category: "MODULAR SKIDS",
      image: proj3Img,
      location: "Location: India",
      tags: ["Skid Systems", "Piping", "Instrumentation"],
      description:
        "Pre-engineered high-pressure process skid pre-fabricated and factory tested at our MIDC Bhosari plant. Designed for plug-and-play field hookup to minimize plant downtime.",
      points: [
        "Structural base skid with vibration-dampening mounts",
        "Stainless steel header pre-fabrication with orbital welding",
        "Pre-wired junction boxes and automated control valves",
        "Factory Acceptance Testing (FAT) with calibrated hydrotesting",
      ],
      specs: [
        { label: "Sector", value: "Industrial Utilities & Water" },
        { label: "Piping Code", value: "ASME B31.3 High Pressure" },
        { label: "Testing", value: "Factory FAT Pre-Commissioned" },
        { label: "Timeline", value: "60% Faster Onsite Installation" },
      ],
    },
  ];

  // Specialists
  const teamSpecialists = [
    {
      num: "01",
      title: "Process & Design Specialists",
      desc: "Expertise in process simulation, 3D modeling and engineering design.",
      image: ourTeamImg,
    },
    {
      num: "02",
      title: "Field Rigging & Certified Welders",
      desc: "Execution by certified ASME welders and experienced rigging teams.",
      image: teamImg,
    },
    {
      num: "03",
      title: "Project Management Team",
      desc: "End-to-end coordination from planning to commissioning.",
      image: strengthImg,
    },
  ];

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
              alt="Lexus India Engineering Projects & Plant Execution"
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
                  ENGINEERING BENCHMARKS &amp;<br />
                  <span className="text-[#e5be58]">PLANT EXECUTION.</span>
                </h1>
              </Reveal>

              {/* Description */}
              <Reveal delay={150}>
                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-xl">
                  From initial 3D modeling and code-certified shop fabrication at our MIDC Bhosari facility to heavy crane erection and turnkey commissioning—Lexus India delivers process facilities with zero compromise on safety and precision.
                </p>
              </Reveal>

              {/* Primary CTA Buttons */}
              <Reveal delay={220}>
                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#methodology-section"
                    className="group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_12px_rgba(212,175,55,0.26),0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.52),0_4px_14px_rgba(0,0,0,0.45)] text-white px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200 hover:translate-x-0.5 active:scale-[0.98]"
                  >
                    <span>EXPLORE EXECUTION LIFECYCLE</span>
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
        {/* 02. SECTION: SYSTEMATIC EXECUTION METHODOLOGY (3 PHASES WITH CONNECTORS) */}
        {/* ========================================================================= */}
        <section
          id="methodology-section"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#EAE4D9]"
        >
          <div className="container-x">
            {/* Header with Title on Left & Quote Callout on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
              <div className="lg:col-span-8">
                <Reveal>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-px w-6 bg-[#c59b27]" />
                    <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#7a0d11]">
                      OUR APPROACH
                    </span>
                    <span className="h-px w-6 bg-[#c59b27]" />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#18181b] leading-tight">
                    Systematic<br />
                    Execution <span className="text-[#8b0000]">Methodology</span>
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                    From ground zero civil mobilization to heavy tandem lifts and commercial run sign-off, our structured all-phase framework ensures total schedule adherence, structural integrity, and statutory code compliance.
                  </p>
                </Reveal>
              </div>

              {/* Right Side 01 Quote Box */}
              <div className="lg:col-span-4 relative flex justify-end">
                <Reveal delay={100}>
                  <div className="relative p-6 bg-white/70 border border-[#EAE4D9] rounded-xs shadow-2xs max-w-sm">
                    <span className="absolute -top-6 right-4 font-serif text-6xl font-bold text-slate-200/70 select-none pointer-events-none">
                      01
                    </span>
                    <p className="font-serif italic text-xs sm:text-sm text-[#7a0d11] font-medium leading-relaxed">
                      “ Disciplined execution that turns complexity into operational success ”
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* 3 Process Phased Cards Connected by Step Roadmaps */}
            <div className="relative">
              {/* Connecting Horizontal Line on Desktop */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-4 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#c59b27] via-[#d4af37] to-[#c59b27] z-0"
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {methodologyPhases.map((phase, idx) => (
                  <Reveal key={phase.id} delay={idx * 120} className="h-full">
                    <div className="group h-full flex flex-col bg-white border border-[#EAE4D9] hover:border-[#c59b27] rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
                      
                      {/* Step Number Circle Badge */}
                      <div className="flex justify-center -mb-4 pt-2 relative z-20">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#520609] text-white border-2 border-[#d4af37] font-serif text-xs font-bold shadow-md">
                          0{idx + 1}
                        </div>
                      </div>

                      {/* Image */}
                      <div className="relative h-48 sm:h-52 overflow-hidden bg-muted">
                        <img
                          src={phase.image}
                          alt={phase.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Content Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#18181b] group-hover:text-[#520609] transition-colors mb-4 leading-snug">
                            {phase.title}
                          </h3>

                          {/* Bullet Points */}
                          <ul className="space-y-2 mb-6">
                            {phase.points?.map((pt, pIdx) => (
                              <li
                                key={pIdx}
                                className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27] mt-1.5 shrink-0" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Footer Link */}
                        <div className="pt-4 border-t border-[#EAE4D9] flex items-center justify-between">
                          <button
                            onClick={() => setSelectedItem(phase)}
                            className="inline-flex items-center gap-1.5 font-display text-[0.7rem] font-bold uppercase tracking-wider text-[#7a0d11] hover:text-[#520609] transition-colors cursor-pointer group/btn"
                          >
                            <span>VIEW PHASE DETAILS</span>
                            <ArrowRight className="h-3.5 w-3.5 text-[#c59b27] transition-transform duration-200 group-hover/btn:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 03. SECTION: FEATURED INDUSTRIAL INSTALLATIONS */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#F4EFE6] py-16 sm:py-20 lg:py-24 border-b border-[#EAE4D9]">
          <div className="container-x">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <Reveal>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-px w-6 bg-[#c59b27]" />
                    <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#7a0d11]">
                      FEATURED PROJECTS
                    </span>
                    <span className="h-px w-6 bg-[#c59b27]" />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18181b]">
                    Industrial Installations
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal">
                    Explore high-precision process columns, chemical distillation facilities, and modular skid packages fabricated and erected by Lexus India.
                  </p>
                  <a
                    href="#methodology-section"
                    className="inline-flex items-center gap-2 bg-[#520609] hover:bg-[#400407] text-white px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 shadow-xs"
                  >
                    <span>VIEW ALL PROJECTS</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#e5be58]" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* 3 Industrial Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((proj, idx) => (
                <Reveal key={proj.id} delay={idx * 120} className="h-full">
                  <div className="group h-full flex flex-col bg-white border border-[#EAE4D9] hover:border-[#c59b27] rounded-xs overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300">
                    
                    {/* Image */}
                    <div className="relative h-56 sm:h-60 overflow-hidden bg-muted">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      {/* Tag Badge */}
                      <div className="absolute top-3 left-3 bg-[#c59b27] text-white px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-wider rounded-xs shadow-md">
                        {proj.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#18181b] group-hover:text-[#520609] transition-colors mb-2.5 leading-snug">
                          {proj.title}
                        </h3>

                        {/* Meta Tags */}
                        <div className="text-xs text-slate-500 font-medium mb-3">
                          {proj.tags?.join(" • ")}
                        </div>

                        {/* Location */}
                        <div className="text-xs text-[#7a0d11] font-semibold mb-4">
                          {proj.location}
                        </div>
                      </div>

                      {/* Footer Action */}
                      <div className="pt-4 border-t border-[#EAE4D9]">
                        <button
                          onClick={() => setSelectedItem(proj)}
                          className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-[#7a0d11] hover:text-[#520609] transition-colors cursor-pointer group/btn"
                        >
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#520609] text-white">
                            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                          </div>
                          <span>VIEW PROJECT →</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 04. SECTION: BUILT FOR GLOBAL STANDARDS (INFRASTRUCTURE & QUALITY) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#1e0204] text-white py-16 sm:py-20 lg:py-24">
          <div className="container-x relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Heading & 2x2 Feature Tiles */}
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-px w-6 bg-[#c59b27]" />
                    <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#e5be58]">
                      INFRASTRUCTURE &amp; QUALITY
                    </span>
                    <span className="h-px w-6 bg-[#c59b27]" />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-white leading-tight">
                    Built for Global Standards
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-xl">
                    Our in-house fabrication facility at MIDC Bhosari, Pune is equipped for heavy pressure vessel forming, structural assembly, and skid packaging with rigorous international standards.
                  </p>

                  <div className="mt-6 mb-8">
                    <a
                      href="/about"
                      className="inline-flex items-center gap-2 bg-[#c59b27] hover:bg-[#d4af37] text-[#2c0305] px-6 py-3 font-display text-xs font-bold uppercase tracking-wider rounded-xs shadow-md transition-colors"
                    >
                      <span>LEARN MORE ABOUT OUR FACILITY</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </Reveal>

                {/* 2x2 Feature Tiles */}
                <Reveal delay={120}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xs bg-[#2c0407] border border-[#c59b27]/30 flex flex-col items-start gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60">
                        <Factory className="h-5 w-5" />
                      </div>
                      <span className="font-serif text-xs sm:text-sm font-bold text-white">
                        Heavy Fabrication Facility
                      </span>
                    </div>

                    <div className="p-4 rounded-xs bg-[#2c0407] border border-[#c59b27]/30 flex flex-col items-start gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60">
                        <Flame className="h-5 w-5" />
                      </div>
                      <span className="font-serif text-xs sm:text-sm font-bold text-white">
                        Advanced Welding &amp; NDT
                      </span>
                    </div>

                    <div className="p-4 rounded-xs bg-[#2c0407] border border-[#c59b27]/30 flex flex-col items-start gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60">
                        <Layers className="h-5 w-5" />
                      </div>
                      <span className="font-serif text-xs sm:text-sm font-bold text-white">
                        Large Component Handling
                      </span>
                    </div>

                    <div className="p-4 rounded-xs bg-[#2c0407] border border-[#c59b27]/30 flex flex-col items-start gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60">
                        <FileCheck className="h-5 w-5" />
                      </div>
                      <span className="font-serif text-xs sm:text-sm font-bold text-white">
                        ASME, IBR &amp; Statutory Compliance
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Welder & QA/QC Certified Photo */}
              <div className="lg:col-span-5 relative">
                <Reveal delay={180}>
                  <div className="relative rounded-xs border-2 border-[#d4af37]/80 bg-[#120305] p-2 shadow-2xl overflow-hidden group">
                    <img
                      src={certImg}
                      alt="Lexus India Certified Welding & Quality Code Standards"
                      className="w-full h-[320px] sm:h-[400px] object-cover object-center filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#e5be58]">
                        Shop-Floor Precision
                      </span>
                      <h4 className="font-serif text-base font-bold">
                        100% Code-Certified Craftsmanship
                      </h4>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 05. SECTION: DEDICATED PROJECT SPECIALISTS */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#EAE4D9]">
          <div className="container-x">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <Reveal>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-px w-6 bg-[#c59b27]" />
                    <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#7a0d11]">
                      OUR EXPERTISE
                    </span>
                    <span className="h-px w-6 bg-[#c59b27]" />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18181b]">
                    Dedicated Project Specialists
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                    Led by experienced project directors and multidisciplinary engineers, our team coordinates every phase from 3D CAD modeling to site rigging and commissioning.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-[#7a0d11] hover:text-[#520609] transition-colors shrink-0 group"
                >
                  <span>MEET OUR TEAM</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#7a0d11] text-[#7a0d11] group-hover:bg-[#7a0d11] group-hover:text-white transition-colors">
                    <Plus className="h-3.5 w-3.5" />
                  </div>
                </a>
              </Reveal>
            </div>

            {/* 3 Specialist Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamSpecialists.map((spec, idx) => (
                <Reveal key={spec.num} delay={idx * 120} className="h-full">
                  <div className="group h-full flex flex-col bg-white border border-[#EAE4D9] hover:border-[#c59b27] rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
                    
                    {/* Image */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-muted">
                      <img
                        src={spec.image}
                        alt={spec.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2.5">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#520609] text-[#e5be58] font-serif text-xs font-bold shrink-0">
                            {spec.num}
                          </div>
                          <h3 className="font-serif text-base sm:text-lg font-bold text-[#18181b] leading-snug">
                            {spec.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {spec.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 06. SECTION: COLLABORATION CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#240305] text-white py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-15 overflow-hidden select-none">
            <img
              src={aboutHeroSunset}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#240305] via-[#240305]/95 to-[#240305]/90" />
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="container-x relative z-10">
            <Reveal>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <span className="h-px w-6 bg-[#d4af37]" />
                    <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#e5be58]">
                      COLLABORATE WITH LEXUS INDIA
                    </span>
                    <span className="h-px w-6 bg-[#d4af37]" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                    Have an Upcoming Plant Project<br />
                    or Fabrication Requirement?
                  </h2>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed font-normal">
                    Partner with an engineering firm that takes complete single-source ownership—from conceptual sizing and shop fabrication to turnkey mechanical erection and commissioning.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#c59b27] hover:bg-[#d4af37] text-[#2c0305] px-7 py-4 font-display text-xs font-bold uppercase tracking-wider rounded-xs shadow-lg transition-colors"
                  >
                    <span>REQUEST TECHNICAL PROPOSAL</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="https://wa.me/917387052118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-white/20 hover:border-white/40 text-white px-6 py-4 font-display text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                  >
                    <MessageSquareText className="h-4 w-4 text-emerald-400" />
                    <span>WHATSAPP US: +91 73870 52118</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 07. INTERACTIVE DETAIL LIGHTBOX MODAL */}
        {/* ========================================================================= */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-xs shadow-2xl overflow-hidden flex flex-col text-foreground border border-[#c59b27]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#520609] text-white border-b border-[#7a0d11]">
                <div className="flex items-center gap-3">
                  <span className="bg-[#c59b27] text-[#2c0305] text-[0.68rem] font-display font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-xs">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white truncate max-w-md">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-white/80 hover:text-white p-1 rounded-xs hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                <div className="relative h-64 sm:h-80 rounded-xs overflow-hidden bg-black/10 border border-[#EAE4D9]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-serif text-xl font-bold text-[#520609] mb-2">
                    {selectedItem.title}
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {selectedItem.points && (
                  <div className="bg-[#FAF8F5] p-5 rounded-xs border border-[#EAE4D9]">
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-[#520609] mb-3">
                      Execution Scope &amp; Milestones
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedItem.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27] mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedItem.specs && (
                  <div>
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-[#520609] mb-3">
                      Technical Specifications
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {selectedItem.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="bg-[#FAF8F5] p-3 rounded-xs border border-[#EAE4D9]"
                        >
                          <span className="text-[0.65rem] uppercase tracking-wider text-muted-foreground block">
                            {spec.label}
                          </span>
                          <span className="font-semibold text-xs text-foreground mt-0.5 block">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-[#FAF8F5] border-t border-[#EAE4D9] flex items-center justify-between">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground/70 hover:text-foreground border border-[#EAE4D9] rounded-xs cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#520609] hover:bg-[#400407] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#e5be58]" />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
