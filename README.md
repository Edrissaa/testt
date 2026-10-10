# Synapse AI

Next.js 15 (App Router) + Tailwind CSS v4 + shadcn/ui-style components, built from the Stitch "Synapse AI" design.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

- Design tokens (colors, type scale, radii, spacing) live in `app/globals.css` under `@theme`.
- Page copy and image URLs live in `lib/content.ts`.
- Reusable primitives are in `components/ui` (Button, Badge, Card, Input, Select, Tabs, Slider); sections in `components/sections`.
