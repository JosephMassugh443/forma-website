# FORMA repository guidance

## Studio context

- FORMA is a premium independent web-design studio currently serving small independent businesses, with room to expand upmarket and internationally.
- Keep public claims accurate and restrained. The three bundled portfolio demos—Atelier Barber, KISSA, and FORMWORK—are fictional concept projects, not commissioned client work.
- The public business contact is `enquiries.forma@gmail.com`.

## Design standards

- Preserve the established premium minimalist direction: generous spacing, strong typographic hierarchy, restrained motion, and clear calls to action.
- The main site uses warm paper `#f5f5f0`, near-black `#171717`, muted grey `#737373`, and terracotta accent `#d75635`, with an Inter/system sans-serif stack.
- Maintain responsive behaviour, keyboard accessibility, visible focus states, reduced-motion support, semantic HTML, and descriptive metadata.
- Do not redesign the main site or alter a demo's distinct visual system unless the task explicitly calls for it.

## Repository structure

- `index.html`, `styles.css`, and `script.js` are the main FORMA portfolio.
- `assets/branding/` contains the favicon and social-sharing artwork; `assets/projects/` contains portfolio screenshots.
- `demos/atelier-barber/`, `demos/kissa/`, and `demos/formwork/` are self-contained fictional demonstrations with their own HTML, CSS, and JavaScript.
- Preserve demo backlinks to the main portfolio and keep fictional contact, location, pricing, and form details clearly labelled as demonstrations.

## Private knowledge base

- The private Obsidian vault is at `~/Documents/FORMA`; begin with `00 - Dashboard.md` and consult only relevant notes when business context is needed.
- Treat the vault as private. Never copy internal business notes, client or lead data, credentials, secrets, private pricing decisions, or other sensitive material into this public repository, commits, logs, or responses intended for publication.
- If vault access is unavailable, report the restriction rather than attempting to bypass it. Prefer established public website copy when private notes and public content differ.

## Workflow and deployment

- The site is a static project published from this portfolio directory through GitHub and Cloudflare Pages. The current production site is `https://forma-website-5v5.pages.dev/`.
- Before editing, inspect `git status` and preserve unrelated or user-owned changes. Keep changes narrowly scoped.
- Before committing, run relevant HTML/structure and local-link checks, JavaScript syntax checks, asset checks, responsive/accessibility review, and `git diff --check`.
- Review the staged diff for secrets and unrelated files. Commit, push, change remotes, or deploy only when explicitly requested.
