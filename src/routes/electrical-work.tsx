import { createFileRoute } from "@tanstack/react-router";
import { OriginalServicePage } from "@/components/site/OriginalServicePage";
import content from "@/components/site/original-services/electrical-work.json";

export const Route = createFileRoute("/electrical-work")({
  head: () => ({ meta: [
    { title: "Electrical Work Singapore | BSM Engineering & Construction" },
    { name: "description", content: "Explore BSM Engineering's electrical work services in Singapore, our scope of work and original service photographs. Contact our team for an enquiry." },
    { property: "og:title", content: "Electrical Work | BSM Engineering Singapore" },
    { property: "og:description", content: "Electrical Work for commercial and residential properties in Singapore. Discuss your requirements with BSM Engineering." },
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
