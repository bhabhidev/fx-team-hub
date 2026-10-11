import { createFileRoute } from "@tanstack/react-router";
import { MemberGrid } from "@/components/member-grid";

export const Route = createFileRoute("/fx")({
  head: () => ({
    meta: [
      { title: "FX — FX TEAM" },
      { name: "description", content: "Meet the nine members of FX TEAM." },
      { property: "og:title", content: "FX — FX TEAM" },
      { property: "og:description", content: "Meet the nine members of FX TEAM." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FxPage,
});

function FxPage() {
  return (
    <main id="main-content" className="content-page">
      <header className="page-heading">
        <p className="eyebrow">THE PEOPLE BEHIND FX</p>
        <h1>FX</h1>
        <p>Nine members. One team.</p>
      </header>
      <MemberGrid />
    </main>
  );
}