import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FX TEAM — Home" },
      { name: "description", content: "Meet FX TEAM, a focused collective of creators and developers." },
      { property: "og:title", content: "FX TEAM — Home" },
      { property: "og:description", content: "Meet FX TEAM, a focused collective of creators and developers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="main-content" className="home-page">
      <section className="home-intro">
        <p className="eyebrow">EST. 2026 — DIGITAL COLLECTIVE</p>
        <h1>FX TEAM</h1>
        <p className="home-statement">One team. Distinct minds. Built to leave a mark.</p>
        <a className="text-link" href="/fx">
          Meet the team <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
      <div className="home-index" aria-hidden="true">
        <span>FX</span>
        <span>09 MEMBERS</span>
      </div>
    </main>
  );
}
