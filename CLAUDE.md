# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses [Vite+](https://viteplus.dev/) (`vp`) as the primary task runner, wrapping pnpm.

```bash
vp install && vp run dev:setup   # Install dependencies and set up
pnpm dev                         # Start Expo dev server (after app is installed on simulator)
vp run prebuild && vp run ios    # Build and run on iOS simulator
vp run android                   # Run on Android
vp check                         # Lint and type-check
vp check --fix                   # Lint with auto-fix
vp fmt                           # Format code (oxfmt + Tailwind CSS)
vp test                          # Run tests (Vitest via vite-plus)
vp run test:all                  # Lint/type-check + tests
```

Tests use `vite-plus/test` (re-exports Vitest). Import `{ expect, test }` from `'vite-plus/test'`.

## Architecture

### Routing

File-based routing via Expo Router. Structure:
- `src/app/_layout.tsx` — root layout (GestureHandlerRootView)
- `src/app/login.tsx` — unauthenticated entry point
- `src/app/(app)/_layout.tsx` — authenticated shell (BottomSheetModalProvider + Stack)
- `src/app/(app)/(tabs)/` — tab navigator screens

### Auth & State

`src/user/useViewerContext.tsx` — central viewer/auth context built with `@nkzw/create-context-hook`. Exposes `isAuthenticated`, `login`, `logout`, `user`, and per-user local settings (via `react-native-mmkv`). Wrap the app with `<ViewerContext>` to provide it; consume with `useViewerContext()`.

### UI & Styling

- **Tailwind CSS** via [Uniwind](https://www.uniwind.dev/) — use `className` props on React Native components. Colors are defined as CSS variables in `global.css` and mirrored in `src/ui/colors.ts`.
- **`@nkzw/stack`** — layout primitive (`<Stack>`) used throughout for flex layouts.
- **`src/ui/`** — shared UI components. `BottomSheetModal` wraps `@gorhom/bottom-sheet` with Uniwind support. `colors.ts` exports the design token palette.
- **`src/lib/cx.tsx`** — re-exports `classnames` as `cx` for conditional class merging.

### i18n

Uses [fbtee](https://github.com/nkzw-tech/fbtee) for internationalization. Wrap user-visible strings in `<fbt>` / `<fbt desc="...">` tags. Translations live in `translations/`.

### Tooling

- **Formatter/Linter**: Oxfmt + Oxlint, configured in `vite.config.ts`. Single quotes, no newlines between imports. Pre-commit hook runs `vp check --fix` on staged files.
- **React Compiler** is enabled (`experiments.reactCompiler: true` in `app.json`).
- **ESM**: project uses `"type": "module"`.
- **TypeScript native preview** (`@typescript/native-preview`) is installed — the tsconfig may use it.

<!-- code-review-graph MCP tools -->
## MCP Tools: code-review-graph

**IMPORTANT: This project has a knowledge graph. ALWAYS use the
code-review-graph MCP tools BEFORE using Grep/Glob/Read to explore
the codebase.** The graph is faster, cheaper (fewer tokens), and gives
you structural context (callers, dependents, test coverage) that file
scanning cannot.

### When to use graph tools FIRST

- **Exploring code**: `semantic_search_nodes` or `query_graph` instead of Grep
- **Understanding impact**: `get_impact_radius` instead of manually tracing imports
- **Code review**: `detect_changes` + `get_review_context` instead of reading entire files
- **Finding relationships**: `query_graph` with callers_of/callees_of/imports_of/tests_for
- **Architecture questions**: `get_architecture_overview` + `list_communities`

Fall back to Grep/Glob/Read **only** when the graph doesn't cover what you need.

### Key Tools

| Tool | Use when |
|------|----------|
| `detect_changes` | Reviewing code changes — gives risk-scored analysis |
| `get_review_context` | Need source snippets for review — token-efficient |
| `get_impact_radius` | Understanding blast radius of a change |
| `get_affected_flows` | Finding which execution paths are impacted |
| `query_graph` | Tracing callers, callees, imports, tests, dependencies |
| `semantic_search_nodes` | Finding functions/classes by name or keyword |
| `get_architecture_overview` | Understanding high-level codebase structure |
| `refactor_tool` | Planning renames, finding dead code |

### Workflow

1. The graph auto-updates on file changes (via hooks).
2. Use `detect_changes` for code review.
3. Use `get_affected_flows` to understand impact.
4. Use `query_graph` pattern="tests_for" to check coverage.
