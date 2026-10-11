import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FX TEAM" },
      { name: "description", content: "About FX TEAM and the collective behind the name." },
      { property: "og:title", content: "About — FX TEAM" },
      { property: "og:description", content: "About FX TEAM and the collective behind the name." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main id="main-content" className="content-page about-page">
      <p className="eyebrow">ABOUT THE COLLECTIVE</p>
      <h1>FX TEAM</h1>
      <p className="about-copy">
        A close group of creators and developers, each with a different voice and one shared identity.
      </p>
      <dl className="about-facts">
        <div><dt>Founded</dt><dd>2026</dd></div>
        <div><dt>Members</dt><dd>09</dd></div>
        <div><dt>Base</dt><dd>Online</dd></div>
      </dl>
    </main>
  );
}