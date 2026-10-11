import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { ContactCard } from "@/components/contact/contact-card";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";

const TITLE = "Shnwaz — Design Engineer & AI Enthusiast";
const DESCRIPTION =
  "Independent engineer focused on interfaces that feel calm, considered, and quietly fast. Selected work, background, and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: HomePage,
});

function HomePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <Hero />
      <Projects withHeadline viewMoreVisible />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
