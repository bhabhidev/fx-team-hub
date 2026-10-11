# FX TEAM website update

## Goal
Port the uploaded portfolio into the current project without redesigning its established visual style, then simplify it into an FX TEAM member site.

## Changes
- Replace the current blank page with the uploaded site’s layout, theme switching, motion, and visual styling.
- Rename the site and page metadata to **FX TEAM**.
- Change navigation to **Home**, **FX**, and **About**, replacing the Projects tab with a dedicated `/fx` page.
- Remove the Projects page and all “My recent work” content.
- Remove every “Let’s connect” section and contact button.
- Remove the current home introduction, portrait statement, “Design engineer & AI enthusiast” copy, and “View my work” button.
- Remove the Education and Stack sections.
- Make the remaining experience primarily the FX member cards, as requested.

## FX member page
- Build a responsive card layout using the uploaded site’s restrained styling rather than introducing a new visual direction.
- Add the supplied members in order, preserving their display names and labels exactly:
  1. ㅤ- 𝐉𝐔𝚴𝐄𝐃ㅤ — owner of FX TEAM — links to `https://t.me/FXTEAMLINK`
  2. 𝚱 𝚹 𝚩 𝐑 𝚲 — kid banner papa — links to `https://t.me/pilbx`
  3. ㅤ- 𝐒𝚮𝚴𝐖𝚨𝚭‎ㅤ — developer — no link supplied
  4. ⏤͟͟༒⃝ᏢᎡϟꋊᏣᎬ༒࿗⏤͟͞➤⃟💝 — puncherwala — links to `https://t.me/Semexx`
  5. 𝑫 𝒆 𝒕 𝒓 𝒐 𝒊 𝒕 — Telegram ID `8477766318`
  6. 𝗩𝗜𝗣 ⚡️ 𝘼𝙉𝙎𝙃𓆩⃟🦅 (ᴏғғʟɪɴᴇ)!! — links to `https://t.me/AnshX69`
  7. 『 Jᴀtɪɴ ⚕ 』🕷️ — RENDHIIII — links to `https://t.me/J4tnxsrc`
  8. 𖣘˹𝔽𝕩𓆩˹𝗟𝗼𝗸𝗶˼𝆺𝅥࿐🥶⃤⛦⃕‌ — supplied Hindi label — links to `https://t.me/zyrovin`
  9. `y` — shown as a simple member card because no additional ninth-card details were supplied
- Use polished initials avatars where a usable member photo is unavailable.
- Open supplied Telegram links when their cards are selected; cards without valid links remain non-clickable.
- Play `https://files.catbox.moe/kpwqey.ogg` while card 4 is hovered and `https://files.catbox.moe/dbrlap.ogg` while card 8 is hovered; stop and reset playback when hover ends. Keep touch devices usable without relying on hover audio.

## Pages and cleanup
- Keep Home and About minimal and aligned with the FX TEAM identity, with no removed portfolio, education, stack, or contact content returning elsewhere.
- Remove unused portfolio sections and references from navigation and page imports.
- Give Home, FX, and About distinct FX TEAM titles and descriptions for sharing and search results.
- Preserve light/dark mode and verify the final cards, links, audio behavior, and layout on desktop and mobile.

## Technical details
- Keep TanStack file-based routing and create `/fx` as its own route.
- Reuse the uploaded project’s components and semantic styling where they remain relevant; import only needed source/assets and exclude archive metadata or generated files.
- Use accessible links, focus states, avatar alternatives, and reduced-motion behavior.
