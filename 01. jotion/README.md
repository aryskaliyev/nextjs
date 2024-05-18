- Navigate to project root folder. Run `npx create-next-app@latest notion-clone`.
    - `TypeScript` - Yes
    - `ESLint` - Yes
    - `TailwindCSS` - Yes
    - `src/ directory` - No
    - `App Router` - Yes
    - `import alias (@/*)` - No

- Navigate to `notion-clone`, and run `npx shadcn-ui@latest init` to install shadcn.
    - `TypeScript` - Yes
    - `style` - Default
    - `base color` - Neutral
    - `global CSS` file - app/globals.css
    - `CSS variables` - Yes
    - `tailwind.config.js` - tailwind.config.ts
    - import alias for `components` - @/components
    - import alias for `utils` - @/lib/utils
    - `React Server Components` - Yes
    - `components.json` - Yes

- To run the dev server `npm run dev`

- To add button component from shadcn, navigate to `notion-clone` and run `npx shadcn-ui@latest add button`.

- To install dark mode with shadcn/ui run `npm install next-themes`.
- To install `dropdown-menu` from shadcn/ui run `npx shadcn-ui@latest add dropdown-menu`.
- To install icons run `@radix-ui/react-icons`.

- Navigate to `notion-clone`, and run `npm install convex` to install the Convex client and server library.
- To setup a Convex deployment run `npx convex dev`. It must run along with `npm run dev`:
    - a new project
    - project name
- API functions, queries and mutations will be created inside `convex` directory.