# Hexi Website (Astro)

Minimal Astro website for Hexi branding and landing page content.

## Stack
- Astro 5
- Tailwind CSS 4
- TypeScript

## Development
```bash
bun install
bun run website
```

## Build
```bash
ASTRO_TELEMETRY_DISABLED=1 bun run build
```

## Routes
- `/` homepage
- `/api` JSON endpoint returning `{ "message": "Hello, world!" }`
