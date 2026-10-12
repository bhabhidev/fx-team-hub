import { useRef, type ReactNode } from "react";
import shnwazPhoto from "@/assets/fx-shnwaz.jpg.asset.json";
import detroitPhoto from "@/assets/fx-detroit.jpg.asset.json";

import { FadeIn } from "@/components/ui/motion-primitives";

type Member = {
  name: string;
  displayName: string;
  role: string;
  photo?: string;
  href?: string;
  audio?: string;
};

export const FX_MEMBERS: readonly Member[] = [
  {
    name: "ㅤ- 𝐉𝐔𝚴𝐄𝐃ㅤ",
    displayName: "JUNED",
    role: "owner of FX TEAM",
    href: "https://t.me/FXTEAMLINK",
  },
  {
    name: "𝚱 𝚹 𝚩 𝐑 𝚲",
    displayName: "KOBRA",
    role: "kid banner papa",
    href: "https://t.me/pilbx",
  },
  { name: "ㅤ- 𝐒𝚮𝚴𝐖𝚨𝚭‎ㅤ", displayName: "SHNWAZ", role: "developer", photo: shnwazPhoto.url },
  {
    name: "⏤͟͟༒⃝ᏢᎡϟꋊᏣᎬ༒࿗⏤͟͞➤⃟💝",
    displayName: "PRINCE",
    role: "puncherwala",
    href: "https://t.me/Semexx",
    audio: "https://files.catbox.moe/kpwqey.ogg",
  },
  { name: "𝑫 𝒆 𝒕 𝒓 𝒐 𝒊 𝒕", displayName: "Detroit", role: "", photo: detroitPhoto.url, href: "tg://user?id=8477766318" },
  {
    name: "𝗩𝗜𝗣 ⚡️ 𝘼𝙉𝙎𝙃𓆩⃟🦅 (ᴏғғʟɪɴᴇ)!!",
    displayName: "VIP ⚡ ANSH (OFFLINE)!!",
    role: "FX member",
    href: "https://t.me/AnshX69",
  },
  {
    name: "『 Jᴀtɪɴ ⚕ 』🕷️",
    displayName: "Jatin",
    role: "RENDHIIII",
    href: "https://t.me/J4tnxsrc",
  },
  {
    name: "𖣘˹𝔽𝕩𓆩˹𝗟𝗼𝗸𝗶˼𝆺𝅥࿐🥶⃤⛦⃕‌",
    displayName: "FX Loki",
    role: "मादरचोद समलैंगिक",
    href: "https://t.me/zyrovin",
    audio: "https://files.catbox.moe/dbrlap.ogg",
  },
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
        {member.photo ? <img src={member.photo} alt="" className="h-full w-full object-cover" loading="lazy" /> : initials(member.displayName)}
      </span>
      <span className="min-w-0 flex-1">
        <span className="member-name">{member.displayName}</span>
        {member.role ? <span className="member-role">{member.role}</span> : null}
      </span>
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