# Hexi Website (Astro)

Minimal Astro website for Hexi branding and landing page content.

## Stack
- Astro 5
- Tailwind CSS 4
- TypeScript

## Development
```bash
bun install
bun run sync:version
bun run website
```

## Version Sync
The site reads latest package version metadata from `src/generated/version.json`.

Sync it from PyPI (`hexicodes`) with:
```bash
bun run sync:version
```

Optional package override:
```bash
PYPI_PACKAGE_NAME=your-package-name bun run sync:version
```

## Build
```bash
ASTRO_TELEMETRY_DISABLED=1 bun run build
```
`prebuild` runs `sync:version` automatically, so every build uses the latest package version.

## Release Website
Run this before publishing/deploying the website:
```bash
bun run release:website
```

## Routes
- `/` homepage
- `/api` JSON endpoint returning `{ "message": "Hello, world!" }`
