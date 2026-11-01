import { createFileRoute } from "@tanstack/react-router";
import { OriginalServicePage } from "@/components/site/OriginalServicePage";
import content from "@/components/site/original-services/bus-duct-work.json";

export const Route = createFileRoute("/bus-duct-work")({
  head: () => ({ meta: [
    { title: "Bus Duct Work Singapore | BSM Engineering & Construction" },
    { name: "description", content: "Explore BSM Engineering's bus duct work services in Singapore, our scope of work and original service photographs. Contact our team for an enquiry." },
    { property: "og:title", content: "Bus Duct Work | BSM Engineering Singapore" },
    { property: "og:description", content: "Bus Duct Work for commercial and residential properties in Singapore. Discuss your requirements with BSM Engineering." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServicePage,
});

function ServicePage() { return <OriginalServicePage content={content} />; }
