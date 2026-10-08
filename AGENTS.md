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

## Theme rules
- Keep homepage theme colors in semantic CSS tokens, including SVG paint and outline colors; legacy color names are compatibility aliases to the current brand roles so color-only updates preserve layout and behavior.
- Recolor embedded manufacturing illustration accents with a presentation-only CSS filter; preserve the original image asset and geometry.
- Scope Industries atmosphere tokens and presentation styles to its section; reuse existing plant imagery for background depth so other sections and card content stay unchanged.
