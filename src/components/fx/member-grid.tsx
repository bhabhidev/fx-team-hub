import { ExternalLink } from "lucide-react";
import { useRef, type ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

type Member = {
  name: string;
  role: string;
  href?: string;
  audio?: string;
};

export const FX_MEMBERS: readonly Member[] = [
  {
    name: "ㅤ- 𝐉𝐔𝚴𝐄𝐃ㅤ",
    role: "owner of FX TEAM",
    href: "https://t.me/FXTEAMLINK",
  },
  {
    name: "𝚱 𝚹 𝚩 𝐑 𝚲",
    role: "kid banner papa",
    href: "https://t.me/pilbx",
  },
  { name: "ㅤ- 𝐒𝚮𝚴𝐖𝚨𝚭‎ㅤ", role: "developer" },
  {
    name: "⏤͟͟༒⃝ᏢᎡϟꋊᏣᎬ༒࿗⏤͟͞➤⃟💝",
    role: "puncherwala",
    href: "https://t.me/Semexx",
    audio: "https://files.catbox.moe/kpwqey.ogg",
  },
  { name: "𝑫 𝒆 𝒕 𝒓 𝒐 𝒊 𝒕", role: "Telegram · 8477766318" },
  {
    name: "𝗩𝗜𝗣 ⚡️ 𝘼𝙉𝙎𝙃𓆩⃟🦅 (ᴏғғʟɪɴᴇ)!!",
    role: "FX member",
    href: "https://t.me/AnshX69",
  },
  {
    name: "『 Jᴀtɪɴ ⚕ 』🕷️",
    role: "RENDHIIII",
    href: "https://t.me/J4tnxsrc",
  },
  {
    name: "𖣘˹𝔽𝕩𓆩˹𝗟𝗼𝗸𝗶˼𝆺𝅥࿐🥶⃤⛦⃕‌",
    role: "मादरचोद समलैंगिक",
    href: "https://t.me/zyrovin",
    audio: "https://files.catbox.moe/dbrlap.ogg",
  },
  { name: "y", role: "FX member" },
];

function initials(name: string): string {
  const cleaned = name.replace(/[^\p{L}\p{N}]/gu, "").trim();
  return cleaned.slice(0, 2).toUpperCase() || "FX";
}

function MemberCard({ member }: { member: Member }): ReactNode {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = (): void => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    void audioRef.current.play().catch(() => undefined);
  };

  const stopAudio = (): void => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const content = (
    <>
      <span className="member-avatar" aria-hidden="true">
        {initials(member.name)}
      </span>
      <span className="min-w-0 flex-1">
        <span className="member-name">{member.name}</span>
        <span className="member-role">{member.role}</span>
      </span>
      {member.href ? (
        <ExternalLink className="h-4 w-4 shrink-0 text-foreground/35" aria-hidden="true" />
      ) : null}
      {member.audio ? <audio ref={audioRef} src={member.audio} preload="none" /> : null}
    </>
  );

  if (member.href) {
    return (
      <a
        href={member.href}
        target="_blank"
        rel="noreferrer"
        className="member-card focus-ring"
        onMouseEnter={playAudio}
        onMouseLeave={stopAudio}
        onFocus={playAudio}
        onBlur={stopAudio}
      >
        {content}
      </a>
    );
  }

  return (
    <article className="member-card" onMouseEnter={playAudio} onMouseLeave={stopAudio}>
      {content}
    </article>
  );
}

export function MemberGrid(): ReactNode {
  return (
    <section className="mx-auto w-full max-w-275 px-6 pb-24 sm:px-10 sm:pb-32">
      <FadeIn className="member-grid">
        {FX_MEMBERS.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </FadeIn>
    </section>
  );
}