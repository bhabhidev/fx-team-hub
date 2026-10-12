<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shareable content as separate TanStack routes so navigation, metadata, and direct links remain reliable.
- Keep FX member definitions centralized in the member grid so names, links, and hover audio stay synchronized.
- Store readable display names alongside original FX names for accessible card labels; opt-in original names use the member font stylesheet so decorative glyphs retain their identity.
- Use CDN asset pointers for supplied photos and videos; About uses an inline muted looping video to support mobile autoplay.
- Preserve the imported portfolio's visual language while FX TEAM content replaces the portfolio sections, so future changes remain stylistically consistent.
