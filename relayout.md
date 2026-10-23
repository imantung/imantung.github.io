# Relayout plan — imantung.com

## 1. What the research says

Sites built for the same job (senior engineers, fractional CTOs, consultants) mostly
look alike. The good ones share these patterns:

| Pattern | Seen in | Takeaway for this site |
|---|---|---|
| Restrained, text-first design beats lots of effects | Chuck Lepley, Paco Coursey, Lee Robinson | Keep it calm. Animation should support the content, not compete with it. |
| Intro followed by 2–3 credibility blocks | Nick Velten (executive/advisor) | Hero → "Where I can help" → proof (writing, posts). |
| Plainly listed services + one clear next step | KrishaWeb 2026, GoFractional | Turn "Where I can help" into scannable service cards and close with a CTA panel. |
| **One** signature interaction, not many | Andrew McCarthy (scramble text), Adenekan Wonderful (links in bio) | Pick a single memorable motif and repeat it lightly. |
| Bento/card grids with staggered reveal on scroll | 2026 trend roundups (Netguru, MotionKit) | Use a 2×2 card grid for services, stagger the fade-in. |
| Only animate `transform`/`opacity`, respect `prefers-reduced-motion` | MotionKit 2026 | All motion is CSS + one tiny IntersectionObserver; disabled under reduced motion. |
| "Availability" status chip | Common on consultant/freelance sites | Pulsing dot: "Open to fractional engagements". |

Sources: [Website in a Box PRO](https://websiteinaboxpro.com/blog/personal-website-examples/),
[KrishaWeb](https://www.krishaweb.com/blog/best-personal-website-examples/),
[GoFractional](https://www.gofractional.com/blog/fractional-cto),
[SiteBuilderReport](https://www.sitebuilderreport.com/inspiration/engineer-portfolios),
[Colorlib](https://colorlib.com/wp/developer-portfolios/),
[Netguru](https://www.netguru.com/blog/modern-web-design-trends),
[MotionKit](https://motionkit.io/blog/web-animation-trends-2026).

## 2. The uniqueness angle: "engineer's notebook"

The name is already set in monospace. Lean into that as the site's signature,
without turning it into a gimmicky fake terminal:

- **Blinking caret** after the name in the hero (pure CSS).
- **Mono section labels** like `01 / about`, `02 / writing`, `03 / posts` — reads like a
  spec document / file index.
- **Faint dot-grid "blueprint" background** behind the hero, fading out with a radial
  mask. Hints at system architecture without any images.
- Monospace for small metadata (dates, labels); DM Sans for everything readable.

## 3. Color theme

Replace warm cream + navy with **ink + teal, amber as a spark** (terminal-green nod
that fits the mono motif). All text colors checked for WCAG AA (≥ 4.5:1) on the background.

| Token | Light | Dark |
|---|---|---|
| `bg` | `#F8F8F5` paper | `#0D1115` ink |
| `surface` | `#EFF0EB` | `#161B21` |
| `text` | `#14181C` | `#E8ECEF` |
| `secondary` | `#475059` | `#A8B2BC` |
| `muted` | `#646E78` (4.9:1) | `#828D98` (5.6:1) |
| `border` | `#E0E2DB` | `#262D35` |
| `accent` | `#0F766E` teal-700 (5.1:1) | `#2DD4BF` teal-400 |
| `spark` (new, decorative only) | `#D97706` amber | `#FBBF24` amber |

Favicon and OG banner get the new colors too.

## 4. Layout changes by section

**Global**
- Container widens from 800px to 960px so the hero and card grids can breathe; long
  paragraphs stay capped at ~65ch for readability.
- Drop the `<hr>` dividers; separate sections with whitespace and the numbered mono labels.
- Add a **footer** (socials, © year, "built with Astro") — currently the page just stops.
- Fonts: add **JetBrains Mono** (500/700, one combined Google Fonts request) to replace
  Courier New, which renders thin and dated.

**Navbar**
- Translucent with backdrop blur instead of a solid bar.
- "IT" monogram in a small accent-filled rounded square.
- Active section highlighted while scrolling (IntersectionObserver).

**Hero** (two columns on ≥ md, stacked on mobile)
- Left: availability chip with pulsing dot → name + blinking caret → headline → location
  with map-pin icon → buttons.
- Primary button filled (accent, mail icon); secondary outlined (LinkedIn icon).
- Right: photo in a rounded square with an offset accent frame behind it (shifts slightly on hover).
- Dot-grid background behind the whole hero.

**About**
- Intro paragraphs unchanged.
- "Where I can help" becomes a **2×2 card grid**, each card with an icon tile
  (users, layers, git-branch, sparkles). Hover: border turns accent, card lifts 2px.
- "What I'm interested in" becomes an icon list (cpu, compass, flag).
- Ends with a **CTA panel** (surface background): "Have a problem that fits?" + button.

**Writing**
- Same 2-column card grid, with consistent `p-5` padding, Medium icon + mono date,
  and an ↗ arrow that slides out on hover.

**LinkedIn posts**
- Vertical timeline: dots on the line, accent dot on hover, mono dates.

## 5. Spacing system (balance)

Everything goes on a 4/8px rhythm:

| Element | Before | After |
|---|---|---|
| Section vertical padding | `py-10` | `py-16 sm:py-20` |
| Section label → title | — | `mb-2` |
| Section title → content | `mb-3` | `mb-8` |
| Card padding | `px-4 py-[14px]` | `p-5` |
| Grid gaps | `gap-[10px]` | `gap-4` |
| Hero top padding | `pt-16` | `pt-14 sm:pt-24` |
| Horizontal page padding | `px-4 sm:px-10` | `px-5 sm:px-8` |

## 6. Motion

- **Scroll reveal**: elements with `data-reveal` fade in and rise 12px when they enter
  the viewport; grid children stagger by 60ms. Content stays visible without JS
  (the hidden state only applies once a `js` class is on `<html>`).
- **Hero entrance**: staggered fade-up on load.
- **Micro-interactions**: card lift, arrow nudge, photo frame shift, theme-toggle icon rotation.
- **Ambient**: caret blink, availability-dot pulse.
- Everything off under `prefers-reduced-motion: reduce`. No animation library — CSS
  plus ~20 lines of inline JS, so the Lighthouse score holds.

## 7. Files touched

- `src/styles/global.css` — palette, type classes, motion utilities, dot-grid
- `tailwind.config.mjs` — `spark` color, mono font
- `src/layouts/BaseLayout.astro` — font request, `js` class, reveal script
- `src/icons/icons.ts` — new icons
- `src/data/content.ts` — `icon` field on about items, availability text
- `src/components/*` — Navbar, Hero, About, Writing, LinkedInPosts, new `Footer`, new `SectionHeader`; `Divider` removed
- `public/favicon.svg`, `public/og-banner.svg` — new colors
