import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { MemberGrid } from "@/components/fx/member-grid";
import { FadeIn } from "@/components/ui/motion-primitives";

const TITLE = "FX Members — FX TEAM";
const DESCRIPTION = "Meet the members of FX TEAM and open their Telegram profiles.";

export const Route = createFileRoute("/fx")({
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
  component: FxPage,
});

function FxPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-14 sm:px-10 sm:pt-64 sm:pb-16">
        <FadeIn className="flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] font-semibold uppercase text-foreground/50">FX TEAM</p>
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
            The team
          </h1>
        </FadeIn>
      </section>
      <MemberGrid />
    </main>
  );
}