import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import aboutVideo from "@/assets/fx-about.mp4.asset.json";

const TITLE = "About — FX TEAM";
const DESCRIPTION =
  "Words from FX TEAM.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="about-scene">
      <video className="about-video" src={aboutVideo.url} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
      <div className="about-shade" aria-hidden="true" />
      <section className="about-copy">
        <h1 className="font-serif text-[1.75rem] font-medium leading-relaxed sm:text-[2rem]">
          Itna kar tu mehnat aage badh nhi to hoga baad me khed...
        </h1>
        <p className="mt-6 text-[18px] leading-relaxed sm:text-[22px]">
          Wo mil jaegi to kya de degi tujhe .. mal mutra ka ched..
        </p>
      </section>
    </main>
  );
}
