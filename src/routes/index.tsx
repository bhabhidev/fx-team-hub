import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Hero } from "@/components/hero/hero";

const TITLE = "FX TEAM — Home";
const DESCRIPTION = "Meet FX TEAM and explore the people behind the team.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Hero />
    </main>
  );
}
