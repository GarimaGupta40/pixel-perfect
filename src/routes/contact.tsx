import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, type FormEvent, type ChangeEvent } from "react";
import {
  Clock,
  Send,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  X,
  ShieldCheck,
  Headset,
  Users,
  ArrowRight,
  Sparkles,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Factory,
  Building2,
  ExternalLink,
} from "lucide-react";
import { Navbar, Footer } from "@/components/site/Sections";

// Images
import contactFacilityHub from "@/assets/contact-facility-hub.jpg";
import aboutHeroSunset from "@/assets/about-hero-sunset.jpg";

const TITLE = "Contact Us | Lexus India Engineering Solutions, Pune";
const DESC =
  "Connect with Lexus India Engineering Solutions in Pune. Discuss your process engineering, fabrication, and turnkey EPC project requirements with our engineering team.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

/* ---------- REVEAL HELPER ---------- */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
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
      { threshold: 0.1 }
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

/* ==========================================================================
   CONTACT US PAGE
   1. Contact Hero (“Let’s Engineer Something Great.”)
   2. Start a Project — Contact Form (Full validation, File Upload, Industry & Service dropdowns)
   ========================================================================== */

export function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    industry: "",
    serviceRequired: "",
    projectRequirements: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  // Industry Options
  const industryOptions = [
    "Chemical",
    "Oil & Gas",
    "Food Processing",
    "Distillery & Ethanol",
    "Water & Wastewater Treatment",
    "Other Process Industry",
  ];

  // Service Required Options
  const serviceOptions = [
    "Engineering & Design",
    "Fabrication & Manufacturing",
    "Equipment Installation",
    "Piping & Plant Layout",
    "EPC / Site Execution",
    "Commissioning",
    "Other",
  ];

  // Handle Input Changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field if user begins typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Handle File Upload
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (!e.target.files) return;
    const selected = Array.from(e.target.files);
    
    // Validate Max Size (25MB total)
    const maxSize = 25 * 1024 * 1024;
    const totalSize = [...files, ...selected].reduce((acc, f) => acc + f.size, 0);
    
    if (totalSize > maxSize) {
      setFileError("Total file size exceeds 25 MB. Please reduce file sizes or compress archives.");
      return;
    }

    setFiles((prev) => [...prev, ...selected]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Validate Form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Business email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.businessEmail.trim())
    ) {
      newErrors.businessEmail = "Please provide a valid business email address.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (formData.phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = "Please provide a valid phone number with area / country code.";
    }

    if (!formData.industry) {
      newErrors.industry = "Please select your industry sector.";
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = "Please select the service required.";
    }

    if (!formData.projectRequirements.trim()) {
      newErrors.projectRequirements = "Please provide details about your project requirements.";
    } else if (formData.projectRequirements.trim().length < 15) {
      newErrors.projectRequirements = "Please provide a slightly more descriptive summary (min 15 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll smoothly to form top if errors occur
      const formEl = document.getElementById("project-enquiry-form");
      formEl?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable enquiry receipt and reference generation
    setTimeout(() => {
      const generatedRef = `LX-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      companyName: "",
      businessEmail: "",
      phoneNumber: "",
      industry: "",
      serviceRequired: "",
      projectRequirements: "",
    });
    setFiles([]);
    setErrors({});
    setIsSubmitted(false);
    setReferenceId("");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-foreground selection:bg-[#7a0d11] selection:text-white font-sans">
      <Navbar />

      <main className="pt-18 sm:pt-20">
        {/* ===================================================================
            SECTION 1: CONTACT HERO
            Headline: “Let’s Engineer Something Great.”
            Layout: Warm Ivory Content + Dynamic Burgundy/Gold Ribbon + Sunset Refinery
            =================================================================== */}
        <section className="relative overflow-hidden bg-[#FAF6F0] border-b border-[#EAE4D9]">
          <div className="relative w-full min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col lg:flex-row items-stretch">
            
            {/* Left Content Area (Warm Ivory / Cream Content Panel) */}
            <div className="relative z-10 w-full lg:w-[46%] xl:w-[44%] bg-[#FAF6F0] flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-6 sm:px-12 lg:pl-16 lg:pr-10 shrink-0 overflow-hidden">
              {/* Subtle Ambient Gold Architectural Contour Lines */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-20 select-none overflow-hidden"
              >
                <svg viewBox="0 0 500 500" fill="none" className="h-full w-full">
                  <g stroke="#d4af37" strokeWidth="0.8" strokeOpacity="0.7">
                    <path d="M-50 60 C120 100, 260 220, 520 140" />
                    <path d="M-50 140 C160 180, 320 300, 520 220" strokeOpacity="0.4" />
                    <path d="M-50 220 C200 260, 380 380, 520 300" strokeOpacity="0.25" />
                  </g>
                </svg>
              </div>

              {/* Text & Content Stack */}
              <div className="relative z-10 max-w-[500px]">
                {/* 1. Eyebrow */}
                <Reveal>
                  <div className="flex items-center gap-2.5">
                    <span className="h-[1.5px] w-6 bg-[#c59b27]" />
                    <span className="font-display text-xs sm:text-[0.76rem] font-bold uppercase tracking-[0.2em] text-[#c59b27]">
                      GET IN TOUCH
                    </span>
                    <span className="h-[1.5px] w-14 sm:w-18 bg-[#c59b27]" />
                  </div>
                </Reveal>

                {/* 2. Headline */}
                <Reveal delay={80}>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.9rem] xl:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-[#18181b] mt-4 sm:mt-5">
                    Let’s Engineer<br />
                    <span className="text-[#520609]">Something Great.</span>
                  </h1>
                </Reveal>

                {/* 3. Supporting Text */}
                <Reveal delay={150}>
                  <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    Have an engineering requirement or an upcoming industrial project? Connect with our team to discuss your requirements.
                  </p>
                </Reveal>

                {/* 4. Three Trust Badges Strip with Vertical Dividers */}
                <Reveal delay={220}>
                  <div className="mt-7 sm:mt-8 pt-6 border-t border-[#EAE4D9] flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 text-xs text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-800 shrink-0">
                        <Clock className="h-4 w-4 stroke-[1.8]" />
                      </div>
                      <div className="leading-tight">
                        <span className="font-bold text-slate-900 block text-xs">24h</span>
                        <span className="text-slate-600 text-[0.72rem] whitespace-nowrap">Technical Turnaround</span>
                      </div>
                    </div>

                    <div className="hidden sm:block h-8 w-px bg-[#EAE4D9]" />

                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-800 shrink-0">
                        <ShieldCheck className="h-4 w-4 stroke-[1.8]" />
                      </div>
                      <div className="leading-tight">
                        <span className="font-bold text-slate-900 block text-xs">Confidential</span>
                        <span className="text-slate-600 text-[0.72rem] whitespace-nowrap">NDA Handling</span>
                      </div>
                    </div>

                    <div className="hidden sm:block h-8 w-px bg-[#EAE4D9]" />

                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-800 shrink-0">
                        <Users className="h-4 w-4 stroke-[1.8]" />
                      </div>
                      <div className="leading-tight">
                        <span className="font-bold text-slate-900 block text-xs">Direct</span>
                        <span className="text-slate-600 text-[0.72rem] whitespace-nowrap">Engineering Access</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 5. Primary CTA Button */}
                <Reveal delay={280}>
                  <div className="mt-8 sm:mt-9">
                    <a
                      href="#project-enquiry-form"
                      className="group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#3d0407] border border-[#a87928]/90 hover:border-[#d4af37] text-white px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] shadow-[0_4px_14px_rgba(82,6,9,0.25)] hover:shadow-[0_6px_20px_rgba(82,6,9,0.38)] transition-all duration-200 active:scale-[0.98]"
                    >
                      <span>GET IN TOUCH</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Dynamic Diagonal Ribbon Transition Boundary (Desktop Only, Flush Top-to-Bottom) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-[calc(46%-25px)] xl:left-[calc(44%-25px)] w-[85px] z-20 hidden lg:block select-none"
            >
              <svg
                viewBox="0 0 85 600"
                fill="none"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                {/* Smooth Cream Overlap */}
                <path
                  d="M 0 0 L 40 0 C 56 160, 68 320, 48 450 C 38 510, 24 560, 10 600 L 0 600 Z"
                  fill="#FAF6F0"
                />
                {/* Burgundy Graceful Ribbon */}
                <path
                  d="M 40 0 C 56 160, 68 320, 48 450 C 38 510, 24 560, 10 600 L 32 600 C 46 560, 62 510, 72 450 C 92 320, 80 160, 64 0 Z"
                  fill="#520609"
                />
                {/* Outer Gold Line */}
                <path
                  d="M 64 0 C 80 160, 92 320, 72 450 C 62 510, 46 560, 32 600"
                  stroke="#c59b27"
                  strokeWidth="2.5"
                />
                {/* Inner Gold Line */}
                <path
                  d="M 40 0 C 56 160, 68 320, 48 450 C 38 510, 24 560, 10 600"
                  stroke="#c59b27"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Mobile / Tablet Accent Ribbon Divider */}
            <div className="lg:hidden w-full h-2 bg-[#520609] border-y border-[#c59b27]/80 shrink-0" />

            {/* Right Hero Image Area: Sunset Refinery Process Plant (Flush Top-to-Bottom) */}
            <div className="relative w-full lg:w-[54%] xl:w-[56%] overflow-hidden min-h-[340px] sm:min-h-[400px] lg:min-h-full bg-[#120305] shrink-0 flex-1">
              <img
                src={aboutHeroSunset}
                alt="Lexus India sunset industrial refinery and chemical process plant"
                className="w-full h-full object-cover object-center scale-[1.01] filter contrast-[1.06] brightness-[0.98] transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle Sunset Amber Radiance Overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#200508]/40 via-transparent to-transparent"
              />
            </div>

          </div>
        </section>

        {/* ===================================================================
            SECTION 2: CONTACT INFORMATION CARDS (4 Equal Columns)
            Card 1: Office Address
            Card 2: Factory / Working Office Address
            Card 3: Contact Numbers
            Card 4: Email Address
            =================================================================== */}
        <section className="relative bg-[#FAF8F5] py-12 sm:py-16 border-b border-[#EAE4D9]/80">
          <div className="container-x">
            <Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                
                {/* Card 1: Office Address */}
                <div className="group relative flex flex-col justify-between rounded-xs border border-[#EAE4D9] bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#c59b27]/80 transition-all duration-300">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 shadow-xs mb-4 transition-transform duration-300 group-hover:scale-105">
                      <MapPin className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="font-display text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#520609]">
                      LOCATION
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181b] mt-1 mb-2.5">
                      Office Address
                    </h3>
                    <address className="not-italic text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Office No. 3A, Bhimdeep Society,<br />
                      Gokhale Nagar, Shivaji Nagar,<br />
                      Pune, Maharashtra – 411016, India
                    </address>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-[#EAE4D9]/60">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#c59b27]">
                      Pune Corporate Office
                    </span>
                  </div>
                </div>

                {/* Card 2: Second Office Address */}
                <div className="group relative flex flex-col justify-between rounded-xs border border-[#EAE4D9] bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#c59b27]/80 transition-all duration-300">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 shadow-xs mb-4 transition-transform duration-300 group-hover:scale-105">
                      <Building2 className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="font-display text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#520609]">
                      OFFICE LOCATION
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181b] mt-1 mb-2.5">
                      Office Address
                    </h3>
                    <address className="not-italic text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      PL No. RL 161, Infront of Shahu Garden Main Gate,<br />
                       1st Floor,<br />
                      G Block Haveli, Pune, Pimpri Chinchwad – 411019,<br />
                      Maharashtra, India.
                    </address>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-[#EAE4D9]/60">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#c59b27]">
                      Pimpri Chinchwad Office
                    </span>
                  </div>
                </div>

                {/* Card 3: Contact Numbers */}
                <div className="group relative flex flex-col justify-between rounded-xs border border-[#EAE4D9] bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#c59b27]/80 transition-all duration-300">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 shadow-xs mb-4 transition-transform duration-300 group-hover:scale-105">
                      <Phone className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="font-display text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#520609]">
                      DIRECT CALL
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181b] mt-1 mb-2.5">
                      Contact Numbers
                    </h3>
                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <div>
                        <a
                          href="tel:+917387052118"
                          className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#520609] hover:underline transition-colors"
                        >
                          +91 73870 52118
                        </a>
                      </div>
                      <div>
                        <a
                          href="tel:+919011347675"
                          className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#520609] hover:underline transition-colors"
                        >
                          +91 90113 47675
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-[#EAE4D9]/60">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#c59b27]">
                      Mon – Sat: 9:00 AM – 7:00 PM IST
                    </span>
                  </div>
                </div>

                {/* Card 4: Email Address */}
                <div className="group relative flex flex-col justify-between rounded-xs border border-[#EAE4D9] bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#c59b27]/80 transition-all duration-300">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 shadow-xs mb-4 transition-transform duration-300 group-hover:scale-105">
                      <Mail className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="font-display text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#520609]">
                      ELECTRONIC INTAKE
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181b] mt-1 mb-2.5">
                      Email Address
                    </h3>
                    <div className="text-xs sm:text-sm">
                      <a
                        href="mailto:lexusindiaengg@gmail.com"
                        className="inline-block font-medium text-slate-700 hover:text-[#520609] hover:underline transition-colors break-all"
                      >
                        lexusindiaengg@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-[#EAE4D9]/60">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#c59b27]">
                      24h Response SLA
                    </span>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: START A PROJECT — CONTACT FORM
            Fields:
            - Full Name (required)
            - Company Name (required)
            - Business Email (required)
            - Phone Number (required)
            - Industry (required dropdown)
            - Service Required (required dropdown)
            - Project Requirements (required multiline)
            - Upload Technical Documents (optional)
            =================================================================== */}
        <section
          id="project-enquiry-form"
          className="relative overflow-hidden bg-[#FAF8F5] py-10 sm:py-12 lg:py-14 border-b border-[#EAE4D9]/80"
        >
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-14">
              
              {/* Left Column: Form Introduction & Submission Guidance */}
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-base font-bold text-[#c59b27]">01</span>
                    <span className="h-[1.5px] w-8 bg-[#c59b27]" />
                    <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#520609]">
                      START A PROJECT
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18181b] mt-3">
                    Request an Engineering Proposal
                  </h2>

                  <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    Submit your plant specifications, design packages, or upcoming tender requirements. Our senior process engineers will review your inputs and respond with a structured technical proposal.
                  </p>

                  {/* Submission Steps Roadmap */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xs border border-[#EAE4D9] bg-white shadow-xs">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#520609] text-[#e5be58] font-bold text-xs">
                        1
                      </span>
                      <div>
                        <h4 className="font-display text-xs sm:text-sm font-bold uppercase text-[#18181b]">
                          Requirement Intake & Review
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Our core engineering group analyzes design limits, metallurgies, and operational parameters.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3.5 rounded-xs border border-[#EAE4D9] bg-white shadow-xs">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#520609] text-[#e5be58] font-bold text-xs">
                        2
                      </span>
                      <div>
                        <h4 className="font-display text-xs sm:text-sm font-bold uppercase text-[#18181b]">
                          Technical Discussion & Sizing
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Direct consultation with our Pune promoters on custom fabrication or turnkey execution feasibility.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3.5 rounded-xs border border-[#EAE4D9] bg-white shadow-xs">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#520609] text-[#e5be58] font-bold text-xs">
                        3
                      </span>
                      <div>
                        <h4 className="font-display text-xs sm:text-sm font-bold uppercase text-[#18181b]">
                          Formal Commercial & Technical Offer
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Clear milestone schedules, ASME / IS code certifications, and transparent pricing.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Box */}
                  <div className="mt-8 p-4 rounded-xs border border-[#c59b27]/40 bg-[#c59b27]/10 flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#520609] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-relaxed">
                      <strong>Confidentiality Guaranteed:</strong> We respect your intellectual property. All drawings, BOQs, P&IDs, and project specifications are handled under strict engineering NDA.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Actual Form UI */}
              <div className="lg:col-span-7">
                <Reveal delay={100}>
                  <div className="rounded-xs border-2 border-[#EAE4D9] bg-white p-6 sm:p-8 lg:p-10 shadow-lg">
                    
                    {isSubmitted ? (
                      /* Success Confirmation State */
                      <div className="py-8 text-center flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#520609] border-2 border-[#d4af37] text-[#e5be58] shadow-md mb-4 animate-bounce">
                          <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#520609]">
                          ENQUIRY RECEIVED
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18181b] mt-2">
                          Thank You for Reaching Out
                        </h3>
                        <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                          Your project enquiry has been registered in our engineering pipeline. A senior technical representative from Lexus India will review your specifications and contact you shortly.
                        </p>

                        <div className="mt-6 p-4 rounded-xs border border-[#EAE4D9] bg-[#FAF8F5] max-w-sm w-full text-left">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-500 font-medium">Reference ID:</span>
                            <span className="font-mono font-bold text-[#520609]">{referenceId}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs mt-2">
                            <span className="text-slate-500 font-medium">Expected Response:</span>
                            <span className="font-semibold text-slate-800">Within 24 Business Hours</span>
                          </div>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                          <button
                            type="button"
                            onClick={handleReset}
                            className="bg-[#520609] hover:bg-[#3d0407] text-white px-6 py-2.5 rounded-xs font-display text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                          >
                            Submit Another Enquiry
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Active Form */
                      <form onSubmit={handleSubmit} noValidate className="space-y-6">
                        
                        {/* Row 1: Full Name & Company Name */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          {/* Full Name */}
                          <div>
                            <label
                              htmlFor="fullName"
                              className="block font-display text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                            >
                              Full Name <span className="text-[#520609]">*</span>
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              className={`w-full rounded-xs border px-3.5 py-2.5 text-sm text-slate-800 transition-colors focus:outline-none ${
                                errors.fullName
                                  ? "border-red-600 bg-red-50/30 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                                  : "border-[#D5CDBD] bg-[#FDFCF9] focus:border-[#520609] focus:ring-1 focus:ring-[#520609]"
                              }`}
                            />
                            {errors.fullName && (
                              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                                <AlertCircle className="h-3 w-3 shrink-0" /> {errors.fullName}
                              </p>
                            )}
                          </div>

                          {/* Company Name */}
                          <div>
                            <label
                              htmlFor="companyName"
                              className="block font-display text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                            >
                              Company Name <span className="text-[#520609]">*</span>
                            </label>
                            <input
                              type="text"
                              id="companyName"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              className={`w-full rounded-xs border px-3.5 py-2.5 text-sm text-slate-800 transition-colors focus:outline-none ${
                                errors.companyName
                                  ? "border-red-600 bg-red-50/30 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                                  : "border-[#D5CDBD] bg-[#FDFCF9] focus:border-[#520609] focus:ring-1 focus:ring-[#520609]"
                              }`}
                            />
                            {errors.companyName && (
                              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                                <AlertCircle className="h-3 w-3 shrink-0" /> {errors.companyName}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Row 2: Business Email & Phone Number */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          {/* Business Email */}
                          <div>
                            <label
                              htmlFor="businessEmail"
                              className="block font-display text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                            >
                              Business Email <span className="text-[#520609]">*</span>
                            </label>
                            <input
                              type="email"
                              id="businessEmail"
                              name="businessEmail"
                              value={formData.businessEmail}
                              onChange={handleInputChange}
                              className={`w-full rounded-xs border px-3.5 py-2.5 text-sm text-slate-800 transition-colors focus:outline-none ${
                                errors.businessEmail
                                  ? "border-red-600 bg-red-50/30 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                                  : "border-[#D5CDBD] bg-[#FDFCF9] focus:border-[#520609] focus:ring-1 focus:ring-[#520609]"
                              }`}
                            />
                            {errors.businessEmail && (
                              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                                <AlertCircle className="h-3 w-3 shrink-0" /> {errors.businessEmail}
                              </p>
                            )}
                          </div>

                          {/* Phone Number */}
                          <div>
                            <label
                              htmlFor="phoneNumber"
                              className="block font-display text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                            >
                              Phone Number <span className="text-[#520609]">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              className={`w-full rounded-xs border px-3.5 py-2.5 text-sm text-slate-800 transition-colors focus:outline-none ${
                                errors.phoneNumber
                                  ? "border-red-600 bg-red-50/30 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                                  : "border-[#D5CDBD] bg-[#FDFCF9] focus:border-[#520609] focus:ring-1 focus:ring-[#520609]"
                              }`}
                            />
                            {errors.phoneNumber && (
                              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                                <AlertCircle className="h-3 w-3 shrink-0" /> {errors.phoneNumber}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Row 3: Industry & Service Required (Dropdowns) */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          {/* Industry Dropdown */}
                          <div>
                            <label
                              htmlFor="industry"
                              className="block font-display text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                            >
                              Industry <span className="text-[#520609]">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="industry"
                                name="industry"
                                value={formData.industry}
                                onChange={handleInputChange}
                                className={`w-full appearance-none rounded-xs border px-3.5 py-2.5 text-sm text-slate-800 transition-colors focus:outline-none bg-[#FDFCF9] pr-10 cursor-pointer ${
                                  errors.industry
                                    ? "border-red-600 bg-red-50/30 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                                    : "border-[#D5CDBD] focus:border-[#520609] focus:ring-1 focus:ring-[#520609]"
                                }`}
                              >
                                <option value="">Select Industry Sector</option>
                                {industryOptions.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                            </div>
                            {errors.industry && (
                              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                                <AlertCircle className="h-3 w-3 shrink-0" /> {errors.industry}
                              </p>
                            )}
                          </div>

                          {/* Service Required Dropdown */}
                          <div>
                            <label
                              htmlFor="serviceRequired"
                              className="block font-display text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                            >
                              Service Required <span className="text-[#520609]">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="serviceRequired"
                                name="serviceRequired"
                                value={formData.serviceRequired}
                                onChange={handleInputChange}
                                className={`w-full appearance-none rounded-xs border px-3.5 py-2.5 text-sm text-slate-800 transition-colors focus:outline-none bg-[#FDFCF9] pr-10 cursor-pointer ${
                                  errors.serviceRequired
                                    ? "border-red-600 bg-red-50/30 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                                    : "border-[#D5CDBD] focus:border-[#520609] focus:ring-1 focus:ring-[#520609]"
                                }`}
                              >
                                <option value="">Select Service Domain</option>
                                {serviceOptions.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                            </div>
                            {errors.serviceRequired && (
                              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                                <AlertCircle className="h-3 w-3 shrink-0" /> {errors.serviceRequired}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Project Requirements (Multiline) */}
                        <div>
                          <label
                            htmlFor="projectRequirements"
                            className="block font-display text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                          >
                            Project Requirements & Specifications <span className="text-[#520609]">*</span>
                          </label>
                          <textarea
                            id="projectRequirements"
                            name="projectRequirements"
                            rows={4}
                            value={formData.projectRequirements}
                            onChange={handleInputChange}
                            className={`w-full rounded-xs border px-3.5 py-2.5 text-sm text-slate-800 transition-colors focus:outline-none leading-relaxed ${
                              errors.projectRequirements
                                ? "border-red-600 bg-red-50/30 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                                : "border-[#D5CDBD] bg-[#FDFCF9] focus:border-[#520609] focus:ring-1 focus:ring-[#520609]"
                            }`}
                          />
                          {errors.projectRequirements && (
                            <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                              <AlertCircle className="h-3 w-3 shrink-0" /> {errors.projectRequirements}
                            </p>
                          )}
                        </div>

                        {/* Upload Technical Documents (Optional) */}
                        <div>
                          <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                            Upload Technical Documents <span className="text-slate-400 font-normal normal-case">(Optional — drawings, BOQs, P&IDs, max 25 MB)</span>
                          </label>

                          <div className="relative border-2 border-dashed border-[#D5CDBD] hover:border-[#520609] rounded-xs p-5 sm:p-6 bg-[#FAF8F5]/80 text-center transition-colors">
                            <input
                              type="file"
                              id="technicalDocs"
                              multiple
                              onChange={handleFileChange}
                              accept=".pdf,.dwg,.dxf,.step,.stp,.zip,.rar,.7z,.doc,.docx,.xls,.xlsx"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="flex flex-col items-center pointer-events-none">
                              <Upload className="h-7 w-7 text-[#520609] mb-2" />
                              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                                Click or drag files here to attach technical drawings & BOQs
                              </p>
                              <p className="text-[0.72rem] text-slate-500 mt-1">
                                Supported formats: PDF, DWG, DXF, STEP, ZIP, DOCX, XLSX (Up to 25 MB total)
                              </p>
                            </div>
                          </div>

                          {fileError && (
                            <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                              <AlertCircle className="h-3 w-3 shrink-0" /> {fileError}
                            </p>
                          )}

                          {/* Selected Files List */}
                          {files.length > 0 && (
                            <div className="mt-3 space-y-2">
                              {files.map((file, idx) => (
                                <div
                                  key={`${file.name}-${idx}`}
                                  className="flex items-center justify-between p-2.5 rounded-xs border border-[#EAE4D9] bg-[#FDFCF9] text-xs"
                                >
                                  <div className="flex items-center gap-2 overflow-hidden">
                                    <FileText className="h-4 w-4 text-[#520609] shrink-0" />
                                    <span className="font-medium text-slate-800 truncate">
                                      {file.name}
                                    </span>
                                    <span className="text-[0.7rem] text-slate-500 shrink-0">
                                      ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(idx)}
                                    className="text-slate-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                                    title="Remove file"
                                  >
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Submit Button & Reassurance */}
                        <div className="pt-3 border-t border-[#EAE4D9] flex flex-col sm:flex-row items-center justify-between gap-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#520609] hover:bg-[#3d0407] disabled:bg-slate-400 text-white px-8 py-3.5 rounded-xs font-display text-xs sm:text-[0.82rem] font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.99]"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                                <span>Submitting Enquiry...</span>
                              </>
                            ) : (
                              <>
                                <span>Submit Enquiry</span>
                                <Send className="h-4 w-4 text-[#e5be58]" />
                              </>
                            )}
                          </button>

                          <p className="text-[0.72rem] text-slate-500 text-center sm:text-right font-normal">
                            🔒 Non-disclosure protected • Prompt engineering review
                          </p>
                        </div>

                      </form>
                    )}

                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: OFFICE LOCATION MAPS (2 Cards)
            =================================================================== */}
        <section className="relative overflow-hidden bg-[#FAF8F5] py-12 sm:py-16 border-b border-[#EAE4D9]/80">
          <div className="container-x">
            {/* Section Header */}
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#c59b27]/30 pb-4 mb-8 sm:mb-10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-base font-bold text-[#c59b27]">02</span>
                    <span className="h-[1.5px] w-8 bg-[#c59b27]" />
                    <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#520609]">
                      OUR LOCATIONS
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#18181b] mt-2">
                    Visit Our Offices On The Map
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                  Navigate directly to our Pune corporate headquarters or our branch office in Pimpri Chinchwad.
                </p>
              </div>
            </Reveal>

            {/* 2 Map Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              
              {/* Map Card 1: Pune Corporate Office */}
              <Reveal delay={50}>
                <div className="group relative flex flex-col justify-between rounded-xs border border-[#EAE4D9] bg-white p-5 sm:p-6 shadow-xs hover:border-[#c59b27] hover:shadow-md transition-all duration-300 h-full">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 shadow-xs">
                          <MapPin className="h-5 w-5 stroke-[1.8]" />
                        </div>
                        <div>
                          <span className="font-display text-[0.66rem] font-bold uppercase tracking-wider text-[#520609]">
                            CORPORATE HEADQUARTERS
                          </span>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181b]">
                            Shivaji Nagar Office
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        LOC-01
                      </span>
                    </div>

                    <address className="not-italic text-xs sm:text-[0.82rem] text-slate-600 leading-relaxed font-normal mb-4">
                      Office No. 3A, Bhimdeep Society, Gokhale Nagar, Shivaji Nagar,<br />
                      Pune, Maharashtra – 411016, India.
                    </address>

                    {/* Google Map Embedded Iframe 1 */}
                    <div className="relative overflow-hidden rounded-xs border border-[#EAE4D9] bg-slate-100 shadow-inner aspect-[16/10] sm:aspect-[16/9] w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30263.955124754815!2d73.80714580756738!3d18.529155625545638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf777fd1dd0f%3A0x3c2402ba4d558e07!2sPune%2C%20Maharashtra%20411016!5e0!3m2!1sen!2sin!4v1791543058944!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Lexus India Shivaji Nagar Pune Office Location"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#EAE4D9]/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#c59b27]">
                      Shivaji Nagar, Pune
                    </span>
                    <a
                      href="https://maps.google.com/?q=Office+No.+3A,+Bhimdeep+Society,+Gokhale+Nagar,+Shivaji+Nagar,+Pune+411016"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#520609] hover:text-[#400407] hover:underline"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Map Card 2: Pimpri Chinchwad Office */}
              <Reveal delay={120}>
                <div className="group relative flex flex-col justify-between rounded-xs border border-[#EAE4D9] bg-white p-5 sm:p-6 shadow-xs hover:border-[#c59b27] hover:shadow-md transition-all duration-300 h-full">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs bg-[#520609] text-[#e5be58] border border-[#d4af37]/60 shadow-xs">
                          <Building2 className="h-5 w-5 stroke-[1.8]" />
                        </div>
                        <div>
                          <span className="font-display text-[0.66rem] font-bold uppercase tracking-wider text-[#520609]">
                            BRANCH OFFICE
                          </span>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181b]">
                            Pimpri Chinchwad Office
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        LOC-02
                      </span>
                    </div>

                    <address className="not-italic text-xs sm:text-[0.82rem] text-slate-600 leading-relaxed font-normal mb-4">
                      PL No. RL 161, Infront of Shahu Garden Main Gate, 1st Floor,<br />
                      G Block Haveli, Pune, Pimpri Chinchwad – 411019, Maharashtra, India.
                    </address>

                    {/* Google Map Embedded Iframe 2 */}
                    <div className="relative overflow-hidden rounded-xs border border-[#EAE4D9] bg-slate-100 shadow-inner aspect-[16/10] sm:aspect-[16/9] w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.0486621240938!2d73.80897126356332!3d18.655259345044193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8250314eaf5%3A0x3899b917ec8d9856!2sChhatrapati%20Shahu%20Garden!5e0!3m2!1sen!2sin!4v1791542971108!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Lexus India Pimpri Chinchwad Office Location"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#EAE4D9]/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#c59b27]">
                      Pimpri Chinchwad, Pune
                    </span>
                    <a
                      href="https://maps.google.com/?q=Chhatrapati+Shahu+Garden+Pimpri+Chinchwad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#520609] hover:text-[#400407] hover:underline"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
