import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About, Services, WhyBSM, Industries, Projects, Credentials, Contact, Footer } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BSM Engineering & Construction | Manpower & Construction Singapore" },
      { name: "description", content: "Singapore engineering, construction and skilled manpower solutions — reinstatement, ceiling, electrical, M&E and site workforce." },
      { property: "og:title", content: "BSM Engineering & Construction Singapore" },
      { property: "og:description", content: "Engineering excellence and the right workforce for every Singapore project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyBSM />
        <Industries />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
