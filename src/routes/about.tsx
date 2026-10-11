import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Experience } from "@/components/about/experience";

import { Skills } from "@/components/about/skills";
import { FadeIn } from "@/components/ui/motion-primitives";

const TITLE = "About — FX TEAM";
const DESCRIPTION =
  "About FX TEAM, its experience, and capabilities.";

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
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-160 px-6 pt-40 pb-16 sm:px-10 sm:pt-56 sm:pb-24">

        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              About <span className="border-b border-foreground/30 pb-0.5">FX TEAM</span>
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                A{" "}
                <strong className="font-semibold text-foreground">
                  close-knit independent team
                </strong>{" "}
                bringing together creative and technical people. We value{" "}
                <strong className="font-semibold text-foreground">visual craft</strong>{" "}
                and{" "}
                <strong className="font-semibold text-foreground">
                  thoughtful execution
                </strong>
                .
              </p>
              <p>
                Our members contribute different strengths while working with a{" "}
                <strong className="font-semibold text-foreground">
                  shared team identity
                </strong>{" "}
                and a direct, focused approach.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Skills />
          </div>
        </FadeIn>
      </section>

      <div className="h-12 sm:h-16" />
    </main>
  );
}
