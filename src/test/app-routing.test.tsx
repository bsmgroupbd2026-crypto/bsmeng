import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each(["/electrical-work", "/waterproofing-works", "/ceiling-work", "/plumbing-work", "/drywall-partition-work", "/painting-work", "/bus-duct-work", "/services", "/projects", "/gallery", "/testimonials", "/contact-us", "/get-a-quote"])("matches the new page %s", path => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(path);
  });
  it("matches the reinstatement and hacking page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/reinstatement-hacking-work").at(-1)?.routeId).toBe("/reinstatement-hacking-work");
  });
  it("matches the manpower supply page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/manpower-supply").at(-1)?.routeId).toBe("/manpower-supply");
  });
  it("matches the awning work page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/awning-work").at(-1)?.routeId).toBe("/awning-work");
  });
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
