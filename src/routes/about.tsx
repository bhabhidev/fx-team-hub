import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const toggleAudio = (): void => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
    void video.play().catch(() => undefined);
  };
  return (
    <main id="main-content" className="about-scene">
      <video ref={videoRef} className="about-video" autoPlay muted={muted} loop playsInline preload="auto" aria-hidden="true">
        <source src={aboutVideo.url} type="video/mp4" />
      </video>
      <div className="about-shade" aria-hidden="true" />
      <Button variant="ghost" className="about-audio-toggle" onClick={toggleAudio} aria-label={muted ? "Turn video sound on" : "Mute video sound"} aria-pressed={!muted} title={muted ? "Turn video sound on" : "Mute video sound"}>
        <span className="about-audio-icon">{muted ? <VolumeX /> : <Volume2 />}</span>
      </Button>
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
