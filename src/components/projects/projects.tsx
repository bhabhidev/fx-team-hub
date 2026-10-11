import {
  ArrowRight,
  Bot,
  Compass,
  Layers,
  LineChart,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "sayaproject",
    icon: Sparkles,
    iconLabel: "sayaproject.org",
    title: "Saya Project",
    description: "A collaborative initiative focused on creating impactful digital solutions.",
    meta: "Engineering, 2026",
    imageRatio: 1280 / 800,
    image: "/project-saya.jpg",
    imageAlt: "sayaproject.org screenshot",
  },
  {
    id: "sayaprojects-net",
    icon: Compass,
    iconLabel: "sayaprojects.net",
    title: "Saya Projects Network",
    description: "The extended network and infrastructure for the Saya ecosystem.",
    meta: "Infrastructure, 2026",
    imageRatio: 1280 / 800,
    image: "/project-sayaprojects.jpg",
    imageAlt: "sayaprojects.net screenshot",
  },
  {
    id: "shnwaz-dev",
    icon: Wand2,
    iconLabel: "shnwaz.dev",
    title: "Shnwaz Portfolio",
    description: "My personal digital space showcasing design and development work.",
    meta: "Design & Engineering, 2026",
    imageRatio: 1280 / 800,
    image: "/project-shnwaz.jpg",
    imageAlt: "shnwaz.dev screenshot",
  },
  {
    id: "introvert-bio",
    icon: Bot,
    iconLabel: "introvert.bio",
    title: "Introvert Bio",
    description: "A minimal bio link platform designed for the quiet achievers.",
    meta: "Product, 2026",
    imageRatio: 1280 / 800,
    image: "/project-introvert.jpg",
    imageAlt: "introvert.bio screenshot",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              to="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.1, 0.4)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <img
              src={project.image}
              alt={project.imageAlt}
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
              loading={index < 2 ? "eager" : "lazy"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}
