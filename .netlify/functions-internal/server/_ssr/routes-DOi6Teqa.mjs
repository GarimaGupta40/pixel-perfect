import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as ChevronLeft, i as ChevronRight, n as Twitter, o as Check, r as Linkedin, s as ArrowRight, t as Youtube } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DOi6Teqa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_1_default = "/assets/logo%201-BRLlQxIt.png";
var hero_video_default = "/assets/hero-video-BGFtUI-x.mp4";
var hero_plant_default = "/assets/hero-plant-BUDe1WCj.jpg";
var fabrication_default = "/assets/fabrication-qi710Wlx.jpg";
var piping_default = "/assets/piping-F-lnlD2r.jpg";
var engineering_default = "/assets/engineering-6NW9j-ad.jpg";
var site_default = "/assets/site-uV0Mn-nh.jpg";
var evaporator_default = "/assets/evaporator-C27mLR7k.jpg";
var technicians_default = "/assets/technicians-B7sc0I9l.jpg";
var water_default = "/assets/water-CZP8V6c5.jpg";
var manufacturings_default = "/assets/manufacturings-BdL42qab.png";
var crane_lift_default = "/assets/crane-lift-DIsvMpEp.jpg";
var gold_ribbon_pipes_default = "/assets/gold-ribbon-pipes-Dj9cu62r.jpg";
var ind_ethanol_default = "/assets/ind-ethanol-TrWjzid3.jpg";
var ind_chemical_default = "/assets/ind-chemical-D0b24Oiz.jpg";
var ind_oilgas_default = "/assets/ind-oilgas-CansYyr-.jpg";
var ind_water_treat_default = "/assets/ind-water-treat-CEYM7aRW.jpg";
var ind_food_default = "/assets/ind-food-ntF4bQvb.jpg";
var ind_evaporation_default = "/assets/ind-evaporation-DnRU0w8a.jpg";
var NAV = [
	{
		label: "Capabilities",
		href: "#capabilities"
	},
	{
		label: "Industries",
		href: "#industries"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Reveal({ children, className = "", delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				el.classList.add("is-visible");
				io.disconnect();
			}
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `reveal ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function SectionEyebrow({ children, light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: `eyebrow flex items-center gap-2.5 ${light ? "text-[#e5be58]" : "text-[#c59b27]"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-5 sm:w-6 ${light ? "bg-[#e5be58]" : "bg-[#c59b27]"}` }), children]
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 30);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-border/80" : "bg-white"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-18 sm:h-20 items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center gap-3 group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_1_default,
						alt: "Lexus India Engineering Solutions",
						className: "h-[60px] sm:h-[70px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-8 lg:gap-10 md:flex",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-[#7a0d11] transition-colors link-underline pb-1",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "group inline-flex items-center gap-2 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_10px_rgba(212,175,55,0.22),0_2px_6px_rgba(0,0,0,0.35)] hover:shadow-[0_0_18px_rgba(212,175,55,0.48),0_4px_12px_rgba(0,0,0,0.4)] text-white px-5 sm:px-6 py-2.5 sm:py-3 font-display text-[0.72rem] font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200 active:scale-[0.98]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start A Project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" })]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#0c0d11] text-white pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						autoPlay: true,
						loop: true,
						muted: true,
						playsInline: true,
						poster: hero_plant_default,
						className: "h-full w-full object-cover object-center scale-[1.02] contrast-[1.06] brightness-[0.95]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: hero_video_default,
							type: "video/mp4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0c0d11]/94 via-[#0c0d11]/72 via-48% to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0c0d11]/90 via-transparent to-[#0c0d11]/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_78%_38%,rgba(218,165,32,0.18)_0%,rgba(197,155,39,0.06)_45%,transparent_70%)] mix-blend-screen"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x relative z-10 flex flex-1 flex-col justify-center py-20 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
							light: true,
							children: "ENGINEERING SOLUTIONS FOR A BETTER TOMORROW"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display font-black text-4xl sm:text-5xl lg:text-[3.8rem] leading-[1.04] tracking-tight uppercase text-white mt-6 sm:mt-7",
							children: [
								"ENGINEERING",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"COMPLEXITY.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"BUILT FOR ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#d4af37]",
									children: "EXECUTION."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-white/85 font-medium",
							children: "Integrated engineering, fabrication and execution for process plants."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 sm:mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#capabilities",
								className: "group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_12px_rgba(212,175,55,0.26),0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.52),0_4px_14px_rgba(0,0,0,0.45)] text-white px-7 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200 hover:translate-x-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Capabilities" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 border-t border-white/15 bg-[#0c0d11]/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "container-x grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
					children: [
						{
							num: "01",
							label: "ENGINEERING"
						},
						{
							num: "02",
							label: "FABRICATION"
						},
						{
							num: "03",
							label: "EPC"
						},
						{
							num: "04",
							label: "SITE EXECUTION"
						},
						{
							num: "05",
							label: "PLANT SUPPORT"
						}
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: `flex items-center gap-3 py-4 text-xs font-bold tracking-wider text-white/90 uppercase ${i !== 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#c59b27] font-extrabold",
							children: item.num
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
					}, item.label))
				})
			})
		]
	});
}
function Intro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative overflow-hidden bg-white py-20 lg:py-28 border-b border-border/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-12 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "WHO WE ARE" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "headline mt-5 text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[0.96] text-foreground",
							children: [
								"ENGINEERING",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"CAPABILITY.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#7a0d11]",
									children: "EXECUTION"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"THAT CONNECTS IT."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-md",
							children: "Lexus India Engineering Solutions delivers end-to-end engineering, fabrication and execution for process plants across industries. We combine technical expertise, operational excellence and a commitment to long-term value."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#capabilities",
								className: "group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_10px_rgba(212,175,55,0.22),0_2px_6px_rgba(0,0,0,0.35)] hover:shadow-[0_0_18px_rgba(212,175,55,0.48),0_4px_12px_rgba(0,0,0,0.4)] text-white px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our Capabilities" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "relative lg:col-span-7",
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative ml-auto w-full lg:w-[94%] pb-8 sm:pb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute -left-3 -top-3 z-10 h-14 w-14 border-l-2 border-t-2 border-[#7a0d11] sm:-left-4 sm:-top-4 sm:h-20 sm:w-20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute -right-3 -bottom-3 z-10 h-14 w-14 border-r-2 border-b-2 border-[#7a0d11] sm:-right-4 sm:-bottom-4 sm:h-20 sm:w-20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative overflow-hidden bg-slate-900 shadow-lg rounded-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: fabrication_default,
									alt: "Stainless steel vessel fabrication and welding",
									className: "aspect-[16/10] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-4 right-0 sm:-top-6 sm:-right-4 z-20 bg-[#7a0d11] p-4 sm:p-5 text-white shadow-xl max-w-[210px] sm:max-w-[240px] rounded-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-[0.76rem] sm:text-xs font-black tracking-widest uppercase text-white leading-snug",
									children: [
										"INTEGRATED SOLUTIONS",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"FOR PROCESS",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"INDUSTRIES"
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -bottom-6 left-[-10px] sm:-bottom-8 sm:left-[-24px] z-20 w-[44%] max-w-[240px] sm:max-w-[280px] overflow-hidden border-4 border-white bg-slate-900 shadow-2xl rounded-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: piping_default,
									alt: "Industrial plant piping and process structure",
									className: "aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
								})
							})
						]
					})
				})]
			})
		})
	});
}
var LIFECYCLE_STAGES = [
	{
		num: "01",
		label: "UNDERSTAND"
	},
	{
		num: "02",
		label: "ENGINEER"
	},
	{
		num: "03",
		label: "DESIGN"
	},
	{
		num: "04",
		label: "BUILD"
	},
	{
		num: "05",
		label: "EXECUTE"
	},
	{
		num: "06",
		label: "COMMISSION"
	},
	{
		num: "07",
		label: "SUPPORT"
	}
];
function Lifecycle() {
	const [active, setActive] = (0, import_react.useState)(3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden border-b border-border/80 bg-[#fbfbfc] py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "PROJECT LIFECYCLE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "headline mt-5 text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[0.96] text-foreground",
				children: [
					"FROM REQUIREMENT",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"TO ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#7a0d11]",
						children: "COMMISSIONING."
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "relative mt-16 pt-6 sm:mt-20 sm:pt-8",
				delay: 150,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-[17px] left-[7.14%] right-[7.14%] h-[2px] bg-slate-200 z-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-[#7a0d11] transition-all duration-300 ease-out",
							style: { width: `${active / (LIFECYCLE_STAGES.length - 1) * 100}%` }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 flex justify-between gap-2 overflow-x-auto pb-4 sm:overflow-visible scrollbar-none",
						children: LIFECYCLE_STAGES.map((s, i) => {
							const isActive = active === i;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onMouseEnter: () => setActive(i),
								onClick: () => setActive(i),
								className: "group relative flex flex-1 min-w-[85px] flex-col items-center text-center cursor-pointer transition-transform duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex h-9 w-9 items-center justify-center",
									children: isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-center justify-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute h-8 w-8 rounded-full bg-[#7a0d11]/20 ring-1 ring-[#7a0d11]/40 animate-pulse-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative h-3.5 w-3.5 rounded-full bg-[#7a0d11] shadow-sm" })]
									}) : active > i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full border-2 border-[#7a0d11] bg-white transition-all duration-300 group-hover:scale-110" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full border-2 border-slate-300 bg-white transition-all duration-300 group-hover:border-slate-500 group-hover:scale-110" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-display text-lg sm:text-xl font-black transition-colors duration-300 ${isActive ? "text-[#7a0d11]" : "text-slate-400 group-hover:text-slate-600"}`,
										children: s.num
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-display text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-300 mt-1 ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`,
										children: s.label
									})]
								})]
							}, s.num);
						})
					})]
				})
			})]
		})
	});
}
var EXPERTISE_SLIDES = [
	{
		title: "EQUIPMENT FABRICATION",
		desc: "High-quality fabrication of process equipment to global standards, delivering reliability and performance.",
		colImg: site_default,
		crewImg: technicians_default,
		tankImg: evaporator_default
	},
	{
		title: "EPC & TURNKEY EXECUTION",
		desc: "Comprehensive engineering, procurement and construction management with end-to-end site commissioning.",
		colImg: hero_plant_default,
		crewImg: engineering_default,
		tankImg: piping_default
	},
	{
		title: "PROCESS PIPING & STRUCTURES",
		desc: "Precision layout, pre-fabrication and heavy structural installation engineered for demanding environments.",
		colImg: piping_default,
		crewImg: technicians_default,
		tankImg: water_default
	}
];
function Capabilities() {
	const [slide, setSlide] = (0, import_react.useState)(0);
	const current = EXPERTISE_SLIDES[slide] ?? EXPERTISE_SLIDES[0];
	const handlePrev = () => {
		setSlide((prev) => prev > 0 ? prev - 1 : EXPERTISE_SLIDES.length - 1);
	};
	const handleNext = () => {
		setSlide((prev) => prev < EXPERTISE_SLIDES.length - 1 ? prev + 1 : 0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "capabilities",
		className: "relative overflow-hidden bg-white py-20 lg:py-28 border-b border-border/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-12 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "OUR EXPERTISE" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "headline mt-5 text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[0.96] text-foreground",
							children: [
								"FROM ENGINEERING",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"DRAWINGS",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"TO ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#7a0d11]",
									children: "PLANT EXECUTION."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-md",
							children: "We deliver complete EPC solutions for a wide range of process industries, ensuring precision, safety and performance."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#projects",
								className: "group inline-flex items-center gap-2.5 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_10px_rgba(212,175,55,0.22),0_2px_6px_rgba(0,0,0,0.35)] hover:shadow-[0_0_18px_rgba(212,175,55,0.48),0_4px_12px_rgba(0,0,0,0.4)] text-white px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Projects" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "relative lg:col-span-7",
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative ml-auto w-full lg:w-[96%]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute -left-3 -top-3 z-10 h-14 w-14 border-l-2 border-t-2 border-[#7a0d11] sm:-left-4 sm:-top-4 sm:h-20 sm:w-20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute -right-3 -bottom-3 z-10 h-14 w-14 border-r-2 border-b-2 border-[#7a0d11] sm:-right-4 sm:-bottom-4 sm:h-20 sm:w-20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-12 gap-3 sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-6 overflow-hidden bg-slate-900 shadow-md rounded-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: current.colImg,
										alt: "Process plant distillation columns",
										className: "h-full w-full object-cover min-h-[340px] sm:min-h-[420px] transition-transform duration-700 hover:scale-[1.03]"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-6 flex flex-col gap-3 sm:gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-[#7a0d11] p-5 sm:p-6 text-white shadow-lg rounded-xs flex flex-col justify-between min-h-[170px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xs sm:text-sm font-black uppercase tracking-wider text-white",
											children: current.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-[0.74rem] sm:text-xs leading-relaxed text-white/85 font-normal",
											children: current.desc
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center justify-end gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: handlePrev,
												"aria-label": "Previous slide",
												className: "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/25 hover:bg-black/40 text-white transition-colors cursor-pointer",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: handleNext,
												"aria-label": "Next slide",
												className: "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#c59b27] hover:bg-[#b0871d] text-white transition-colors cursor-pointer",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2 sm:gap-3 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "overflow-hidden bg-slate-900 shadow-sm rounded-xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: current.crewImg,
												alt: "Site execution engineers",
												className: "h-full w-full object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "overflow-hidden bg-slate-900 shadow-sm rounded-xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: current.tankImg,
												alt: "Industrial storage vessel",
												className: "h-full w-full object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105"
											})
										})]
									})]
								})]
							})
						]
					})
				})]
			})
		})
	});
}
var INDUSTRIES_CARDS = [
	{
		title: "Ethanol & Distillery",
		img: ind_ethanol_default
	},
	{
		title: "Chemical & Process Plants",
		img: ind_chemical_default
	},
	{
		title: "Oil & Gas",
		img: ind_oilgas_default
	},
	{
		title: "Water & Wastewater",
		img: ind_water_treat_default
	},
	{
		title: "Food & Allied Industries",
		img: ind_food_default
	},
	{
		title: "Evaporation & Drying",
		img: ind_evaporation_default
	}
];
function IndustriesAestheticBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0 overflow-hidden select-none z-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: hero_plant_default,
			alt: "",
			className: "industries-plant-silhouette"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 1600 900",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			preserveAspectRatio: "xMidYMid slice",
			className: "h-full w-full opacity-90",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "indGoldFlow",
					x1: "0%",
					y1: "100%",
					x2: "50%",
					y2: "0%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--industries-gold)",
							stopOpacity: "0.45"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "40%",
							stopColor: "var(--industries-gold)",
							stopOpacity: "0.22"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--industries-crimson)",
							stopOpacity: "0.0"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "indCrimsonFlow",
					x1: "100%",
					y1: "0%",
					x2: "20%",
					y2: "80%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--industries-gold)",
							stopOpacity: "0.35"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "35%",
							stopColor: "var(--industries-gold)",
							stopOpacity: "0.18"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--industries-crimson)",
							stopOpacity: "0.0"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					stroke: "url(#indCrimsonFlow)",
					strokeWidth: "1.2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1000 -60 C1180 160, 1380 320, 1660 480" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1060 -60 C1230 140, 1430 300, 1660 430" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M1120 -60 C1280 120, 1480 270, 1680 380",
							strokeOpacity: "0.8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M940 -60 C1120 180, 1320 350, 1620 530",
							strokeOpacity: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M1200 -60 C1350 100, 1530 230, 1700 320",
							strokeOpacity: "0.4"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					stroke: "url(#indGoldFlow)",
					strokeWidth: "1.2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M-80 920 C180 840, 280 720, 240 540 C200 380, 80 320, 20 160" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M-100 860 C150 790, 240 680, 200 510 C160 350, 50 300, 0 140",
							strokeOpacity: "0.75"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M-60 970 C220 880, 320 750, 270 570 C220 400, 100 340, 40 180",
							strokeOpacity: "0.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M-120 800 C110 740, 190 640, 160 480 C130 320, 30 270, -10 120",
							strokeOpacity: "0.35"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					stroke: "var(--primary-foreground)",
					strokeOpacity: "0.04",
					strokeWidth: "0.75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "0",
							y1: "140",
							x2: "1600",
							y2: "140",
							strokeDasharray: "4 6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "0",
							y1: "760",
							x2: "1600",
							y2: "760",
							strokeDasharray: "4 6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "1380",
							cy: "140",
							r: "180",
							strokeDasharray: "4 4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "1380",
							cy: "140",
							r: "320",
							strokeDasharray: "6 8"
						})
					]
				})
			]
		})]
	});
}
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "industries",
		className: "relative overflow-hidden py-20 lg:py-28 text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustriesAestheticBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
				light: true,
				children: "INDUSTRIES WE SERVE"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "headline mt-5 max-w-3xl text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[0.96] text-primary-foreground",
				children: [
					"BUILT FOR",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"PROCESS-INTENSIVE",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "industries-highlight",
						children: "INDUSTRIES."
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-14",
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4",
					children: INDUSTRIES_CARDS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "industries-card group relative aspect-[3/4.2] overflow-hidden rounded-xs border transition-all duration-300 hover:-translate-y-1 shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.img,
								alt: item.title,
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "industries-card-shade absolute inset-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 p-3 sm:p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-[0.72rem] sm:text-xs font-extrabold uppercase tracking-wider text-primary-foreground leading-tight",
									children: item.title
								})
							})
						]
					}, item.title))
				})
			})]
		})]
	});
}
var EQUIPMENT_BULLETS = [
	"DISTILLATION COLUMNS",
	"HEAT EXCHANGERS",
	"PRESSURE VESSELS",
	"STORAGE TANKS",
	"REACTION VESSELS",
	"SKIDS & PACKAGES",
	"AND MORE"
];
function Manufacturing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-white py-20 lg:py-28 border-b border-border/80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute right-0 top-0 bottom-0 w-[45%] max-w-[600px] z-0 overflow-hidden hidden lg:block select-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: piping_default,
					alt: "",
					"aria-hidden": "true",
					className: "h-full w-full object-cover object-right opacity-[0.14] filter sepia-[0.35] brightness-[1.08] [mask-image:linear-gradient(to_left,black_20%,transparent_90%)]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute left-0 bottom-0 h-[320px] w-[550px] z-0 overflow-hidden select-none opacity-60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 550 320",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					preserveAspectRatio: "none",
					className: "h-full w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "equipGoldWave",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "100%",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "#c59b27",
								stopOpacity: "0.35"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "60%",
								stopColor: "#e5be58",
								stopOpacity: "0.15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "#7a0d11",
								stopOpacity: "0.0"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						stroke: "url(#equipGoldWave)",
						strokeWidth: "1.2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M-50 240 C120 260, 240 300, 460 320" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M-50 200 C140 220, 260 270, 490 320",
								strokeOpacity: "0.7"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M-50 160 C160 190, 280 240, 520 320",
								strokeOpacity: "0.4"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "lg:col-span-4 xl:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "OUR EQUIPMENT" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "headline mt-5 text-3xl sm:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[0.96] text-foreground",
								children: [
									"WHERE",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"ENGINEERING",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"BECOMES",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#7a0d11]",
										children: "EQUIPMENT."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-md",
								children: "High-performance process equipment designed and delivered for a wide range of industries, with precision, safety and reliability."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-3.5",
								children: EQUIPMENT_BULLETS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3.5 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7a0d11] text-white shadow-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground group-hover:text-[#7a0d11] transition-colors",
										children: item
									})]
								}, item))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "relative lg:col-span-8 xl:col-span-8 flex items-center justify-center",
						delay: 150,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full flex items-center justify-center lg:scale-105 xl:scale-110 transition-transform duration-500",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: manufacturings_default,
								alt: "Process equipment infographic showing distillation columns, evaporators, storage tanks, distillery columns, condensers, pressure/jacketed vessels, and dryers around a central heat exchanger",
								className: "w-full h-auto object-contain mix-blend-multiply transition-transform duration-700 hover:scale-[1.015]"
							})
						})
					})]
				})
			})
		]
	});
}
function ProjectExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative overflow-hidden bg-[#fbfbfc] py-20 lg:py-28 border-b border-border/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-12 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 self-stretch bg-[#c59b27] rounded-xs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl sm:text-6xl lg:text-[4.75rem] font-black tracking-tight text-[#c59b27] leading-none",
								children: "25+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xs font-black uppercase tracking-[0.2em] text-foreground/80 mt-2",
								children: "YEARS OF EXPERIENCE"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "headline mt-8 text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight leading-[1.02] text-foreground",
							children: [
								"PROVEN WHEN",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"CONDITIONS",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"GET TOUGH."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-md",
							children: "Trusted for our technical depth, execution excellence and ability to deliver in complex and challenging environments across industries."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "relative lg:col-span-7",
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-xs shadow-xl border border-border/80 bg-slate-900",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: crane_lift_default,
							alt: "Heavy crane lifting large process pressure vessel into steel structure",
							className: "w-full aspect-[16/10] object-cover transition-transform duration-700 hover:scale-[1.02]"
						})
					})
				})]
			})
		})
	});
}
var STAKEHOLDERS = [
	{
		title: "PLANT OWNERS",
		desc: "Secure, efficient and reliable process plants tailored to your business needs."
	},
	{
		title: "EPC CONTRACTORS",
		desc: "A trusted partner with engineering and execution expertise at every stage."
	},
	{
		title: "ENGINEERING COMPANIES",
		desc: "Collaborative execution with technical depth and manufacturing capability."
	},
	{
		title: "OEMS",
		desc: "Fabrication and equipment manufacturing support."
	},
	{
		title: "INDUSTRIAL PROJECT TEAMS",
		desc: "Responsive and dependable support to keep projects on track."
	}
];
function WhoWeServe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white py-20 lg:py-28 border-b border-border/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-12 lg:grid-cols-12 lg:gap-14 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "headline text-3xl sm:text-4xl lg:text-[2.65rem] font-black tracking-tight leading-[1.04] text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#7a0d11]",
							children: "SUPPORTING"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"THE TEAMS",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"BEHIND",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"INDUSTRIAL",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"PROJECTS."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-muted-foreground font-normal max-w-sm",
					children: "We work with all key stakeholders across the project lifecycle, ensuring seamless collaboration and successful delivery from concept to commissioning and beyond."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-8 flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
					children: STAKEHOLDERS.slice(0, 3).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 80,
						className: "group border border-border/80 bg-[#fbfbfc] p-6 flex flex-col justify-between rounded-xs transition-all duration-300 hover:border-[#c59b27]/60 hover:bg-white shadow-xs hover:shadow-md min-h-[190px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#f6edd9] border border-[#c59b27]/40 text-[#c59b27] font-display font-black text-sm mb-4",
							children: item.title[0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-black text-sm uppercase tracking-wider text-foreground group-hover:text-[#7a0d11] transition-colors",
							children: item.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted-foreground font-normal",
							children: item.desc
						})]
					}, item.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: STAKEHOLDERS.slice(3, 5).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 240 + i * 80,
						className: "group border border-border/80 bg-[#fbfbfc] p-6 flex flex-col justify-between rounded-xs transition-all duration-300 hover:border-[#c59b27]/60 hover:bg-white shadow-xs hover:shadow-md min-h-[180px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#f6edd9] border border-[#c59b27]/40 text-[#c59b27] font-display font-black text-sm mb-4",
							children: item.title[0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-black text-sm uppercase tracking-wider text-foreground group-hover:text-[#7a0d11] transition-colors",
							children: item.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted-foreground font-normal",
							children: item.desc
						})]
					}, item.title))
				})]
			})]
		})
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-[#fbfbfc] py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-xs border border-border/80 bg-white shadow-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-12 min-h-[360px] items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 self-stretch bg-[#c59b27] rounded-xs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display font-black text-2xl sm:text-3xl lg:text-[2.4rem] leading-[1.08] tracking-tight uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground block",
										children: "HAVE A COMPLEX PROJECT?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#7a0d11] block mt-1",
										children: "LET'S ENGINEER IT."
									})]
								}) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-lg pl-5",
								children: "Partner with Lexus India Engineering Solutions for end-to-end engineering, fabrication and execution support."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-4 pl-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#footer",
									className: "group inline-flex items-center gap-2 bg-[#520609] hover:bg-[#400407] border border-[#d4af37]/80 hover:border-[#f0d078] shadow-[0_0_10px_rgba(212,175,55,0.22),0_2px_6px_rgba(0,0,0,0.35)] hover:shadow-[0_0_18px_rgba(212,175,55,0.48),0_4px_12px_rgba(0,0,0,0.4)] text-white px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start A Project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-[#e5be58] transition-transform duration-200 group-hover:translate-x-0.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#capabilities",
									className: "inline-flex items-center gap-2 border border-foreground/30 hover:border-[#c59b27] text-foreground px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.16em] rounded-xs transition-all duration-200 hover:text-[#7a0d11]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discuss A Solution" })
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-slate-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: gold_ribbon_pipes_default,
							alt: "Golden engineered ribbon and industrial process piping",
							className: "h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
						})
					})]
				})
			}) })
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "footer",
		className: "relative overflow-hidden bg-[#faf9f6] text-foreground border-t border-border/70",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute right-0 top-0 bottom-0 w-[45%] max-w-[550px] z-0 overflow-hidden hidden md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: piping_default,
					alt: "",
					"aria-hidden": "true",
					className: "h-full w-full object-cover object-right opacity-[0.28] filter sepia-[0.35] brightness-[1.08] [mask-image:linear-gradient(to_left,black_25%,transparent_95%)]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 z-0 overflow-hidden select-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 1200 400",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					preserveAspectRatio: "none",
					className: "absolute left-0 bottom-0 h-[260px] w-[500px] opacity-75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "footerGoldWave",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#c59b27",
									stopOpacity: "0.45"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "50%",
									stopColor: "#e5be58",
									stopOpacity: "0.25"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#7a0d11",
									stopOpacity: "0.05"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "footerRibbonFill",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#c59b27",
									stopOpacity: "0.12"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "60%",
									stopColor: "#c59b27",
									stopOpacity: "0.04"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#7a0d11",
									stopOpacity: "0.0"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M-40 220 C100 240, 200 320, 360 400 L-40 400 Z",
							fill: "url(#footerRibbonFill)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							stroke: "url(#footerGoldWave)",
							strokeWidth: "1.3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M-60 180 C120 210, 220 300, 380 400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M-60 210 C140 240, 240 320, 410 400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M-60 240 C160 270, 260 340, 440 400",
									strokeOpacity: "0.7"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M-60 150 C100 180, 200 280, 350 400",
									strokeOpacity: "0.4"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x relative z-10 py-14 sm:py-16 lg:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 sm:gap-12 lg:grid-cols-12 items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#top",
								className: "inline-block group",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_1_default,
									alt: "Lexus India Engineering Solutions",
									className: "h-[62px] sm:h-[72px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 space-y-1 text-xs sm:text-[0.82rem] font-medium text-slate-700 leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Engineering solutions for a better tomorrow." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-slate-600",
									children: "Integrated Engineering | Fabrication | EPC | Plant Support"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-3 lg:border-l lg:border-slate-200/80 lg:pl-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xs sm:text-[0.82rem] font-black uppercase tracking-[0.18em] text-[#7a0d11]",
									children: "QUICK LINKS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-[2px] w-7 bg-[#c59b27] mt-2 mb-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2.5",
									children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: n.href,
										className: "text-xs sm:text-[0.82rem] font-medium text-slate-700 hover:text-[#7a0d11] transition-colors",
										children: n.label
									}) }, n.href))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4 lg:border-l lg:border-slate-200/80 lg:pl-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xs sm:text-[0.82rem] font-black uppercase tracking-[0.18em] text-[#7a0d11]",
									children: "FOLLOW US"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-[2px] w-7 bg-[#c59b27] mt-2 mb-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://linkedin.com",
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": "LinkedIn",
											className: "flex h-9 w-9 items-center justify-center rounded-full border border-[#c59b27]/80 bg-white text-slate-700 hover:border-[#7a0d11] hover:text-[#7a0d11] hover:bg-[#7a0d11]/5 shadow-xs transition-all",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4 stroke-[1.8]" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://twitter.com",
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": "Twitter",
											className: "flex h-9 w-9 items-center justify-center rounded-full border border-[#c59b27]/80 bg-white text-slate-700 hover:border-[#7a0d11] hover:text-[#7a0d11] hover:bg-[#7a0d11]/5 shadow-xs transition-all",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-4 w-4 stroke-[1.8]" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://youtube.com",
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": "YouTube",
											className: "flex h-9 w-9 items-center justify-center rounded-full border border-[#c59b27]/80 bg-white text-slate-700 hover:border-[#7a0d11] hover:text-[#7a0d11] hover:bg-[#7a0d11]/5 shadow-xs transition-all",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-4 w-4 stroke-[1.8]" })
										})
									]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 py-4 sm:py-4.5 text-white",
				style: { background: "linear-gradient(90deg, #580609 0%, #750c10 50%, #4e0508 100%)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[0.78rem] text-white/90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Lexus India Engineering Solutions. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#top",
								className: "text-white/90 hover:text-white transition-colors",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/40",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#top",
								className: "text-white/90 hover:text-white transition-colors",
								children: "Terms & Conditions"
							})
						]
					})]
				})
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capabilities, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manufacturing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lifecycle, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectExperience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoWeServe, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
