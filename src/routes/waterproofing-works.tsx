import { createFileRoute } from "@tanstack/react-router";
import { OriginalServicePage } from "@/components/site/OriginalServicePage";
import content from "@/components/site/original-services/waterproofing-works.json";

export const Route = createFileRoute("/waterproofing-works")({
  head: () => ({ meta: [
    { title: "Waterproofing Works Singapore | BSM Engineering & Construction" },
    { name: "description", content: "Explore BSM Engineering's waterproofing works services in Singapore, our scope of work and original service photographs. Contact our team for an enquiry." },
    { property: "og:title", content: "Waterproofing Works | BSM Engineering Singapore" },
    { property: "og:description", content: "Waterproofing Works for commercial and residential properties in Singapore. Discuss your requirements with BSM Engineering." },
    ...(content.images[0]?.url.startsWith("https://") ? [
      { property: "og:image", content: content.images[0].url },
      { name: "twitter:image", content: content.images[0].url },
    ] : []),
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServicePage,
});

function ServicePage() { return <OriginalServicePage content={content} />; }
