import { createFileRoute } from "@tanstack/react-router";
import { OriginalServicePage } from "@/components/site/OriginalServicePage";
import content from "@/components/site/original-services/painting-work.json";

export const Route = createFileRoute("/painting-work")({
  head: () => ({ meta: [
    { title: "Painting Work Singapore | BSM Engineering & Construction" },
    { name: "description", content: "Explore BSM Engineering's painting work services in Singapore, our scope of work and original service photographs. Contact our team for an enquiry." },
    { property: "og:title", content: "Painting Work | BSM Engineering Singapore" },
    { property: "og:description", content: "Painting Work for commercial and residential properties in Singapore. Discuss your requirements with BSM Engineering." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServicePage,
});

function ServicePage() { return <OriginalServicePage content={content} />; }
