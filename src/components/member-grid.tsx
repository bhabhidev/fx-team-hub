import { ExternalLink } from "lucide-react";
import { useRef, type ReactNode } from "react";

type Member = {
  name: string;
  role?: string;
  initials: string;
  link?: string;
  audio?: string;
};

const MEMBERS: readonly Member[] = [
  { name: "ㅤ- 𝐉𝐔𝚴𝐄𝐃ㅤ", role: "owner of FX TEAM", initials: "JU", link: "https://t.me/FXTEAMLINK" },
  { name: "𝚱 𝚹 𝚩 𝐑 𝚲", role: "kid banner papa", initials: "KO", link: "https://t.me/pilbx" },
  { name: "ㅤ- 𝐒𝚮𝚴𝐖𝚨𝚭‎ㅤ", role: "developer", initials: "SH" },
  {
    name: "⏤͟͟༒⃝ᏢᎡϟꋊᏣᎬ༒࿗⏤͟͞➤⃟💝",
    role: "puncherwala",
    initials: "PR",
    link: "https://t.me/Semexx",
    audio: "https://files.catbox.moe/kpwqey.ogg",
  },
  { name: "𝑫 𝒆 𝒕 𝒓 𝒐 𝒊 𝒕", role: "8477766318", initials: "DE" },
  { name: "𝗩𝗜𝗣 ⚡️ 𝘼𝙉𝙎𝙃𓆩⃟🦅 (ᴏғғʟɪɴᴇ)!!", initials: "AN", link: "https://t.me/AnshX69" },
  { name: "『 Jᴀtɪɴ ⚕ 』🕷️", role: "RENDHIIII", initials: "JA", link: "https://t.me/J4tnxsrc" },
  {
    name: "𖣘˹𝔽𝕩𓆩˹𝗟𝗼𝗸𝗶˼𝆺𝅥࿐🥶⃤⛦⃕‌",
    role: "मादरचोद समलैंगिक",
    initials: "LO",
    link: "https://t.me/zyrovin",
    audio: "https://files.catbox.moe/dbrlap.ogg",
  },
  { name: "y", initials: "Y" },
];

function MemberCard({ member, index }: { member: Member; index: number }): ReactNode {
  const audioRef = useRef<HTMLAudioElement>(null);

  const startAudio = (): void => {
    if (!member.audio || !window.matchMedia("(hover: hover)").matches) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    void audio.play().catch(() => undefined);
  };

  const stopAudio = (): void => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  };

  const content = (
    <>
      <span className="member-number">{String(index + 1).padStart(2, "0")}</span>
      <span className="member-avatar" aria-hidden="true">{member.initials}</span>
      <span className="member-copy">
        <strong>{member.name}</strong>
        {member.role ? <span>{member.role}</span> : null}
      </span>
      {member.link ? <ExternalLink className="member-link-icon" aria-hidden="true" /> : null}
      {member.audio ? <audio ref={audioRef} src={member.audio} preload="none" /> : null}
    </>
  );

  if (member.link) {
    return (
      <a
        className="member-card"
        href={member.link}
        target="_blank"
        rel="noreferrer"
        onPointerEnter={startAudio}
        onPointerLeave={stopAudio}
        onBlur={stopAudio}
      >
        {content}
      </a>
    );
  }

  return <article className="member-card member-card-static">{content}</article>;
}

export function MemberGrid(): ReactNode {
  return (
    <div className="member-grid">
      {MEMBERS.map((member, index) => (
        <MemberCard key={`${member.name}-${index}`} member={member} index={index} />
      ))}
    </div>
  );
}