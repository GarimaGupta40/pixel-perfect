import { createFileRoute } from "@tanstack/react-router";
import {
  Navbar,
  Hero,
  Intro,
  Lifecycle,
  Capabilities,
  Industries,
  Manufacturing,
  ProjectExperience,
  WhoWeServe,
  FinalCta,
  Footer,
} from "@/components/site/Sections";

const TITLE = "Lexus India Engineering Solutions | Engineering, Fabrication & EPC";
const DESC =
  "Engineering, fabrication and project execution for process industries — plant design, equipment manufacturing, site execution and commissioning. Pune, India.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lexus India Engineering Solutions",
  alternateName: "3A-Engg. Solution",
};

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Lifecycle />
        <Capabilities />
        <Industries />
        <Manufacturing />
        <ProjectExperience />
        <WhoWeServe />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
