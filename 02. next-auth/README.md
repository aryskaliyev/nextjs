## Instructions

- Navigate to the root folder of the project and run `npx create-next-app@latest auth-tutorial` to create new NextJS app.
    - `TypeScript` - Yes
    - `ESLint` - Yes
    - `Tailwind CSS` - Yes
    - `src/ directory` - No
    - `App Router` - Yes
    - `import alias (@/*)` - No

- To install shadcn-ui, a collection of re-usable components, navigate to `auth-tutorial` and run `npx shadcn-ui@latest init`.
    - `style` - New York
    - `base color` - Slate
    - `global CSS` file - app/globals.css
    - `CSS variables` - Yes
    - Custom `tailwind prefix` - Blank
    - `tailwind.config.js` - tailwind.config.ts
    - `components` - @/components
    - `utils` - @/lib/utils
    - `React Server Components` - Yes
    - `components.json` - Y

- To install shadcn-ui Button component run `npx shadcn-ui@latest add button`.
- To install shadcn-ui Card component run `npx shadcn-ui@latest add card`.
- To install react-icons run `npm i react-icons`.
- To install shadcn-ui Form component run `npx shadcn-ui@latest add form`.
- To install shadcn-ui Input component run `npx shadcn-ui@latest add input`.
- To install shadcn-ui Radio Group run `npx shadcn-ui@latest add radio-group`.
- To install shadcn-ui Select run `npx shadcn-ui@latest add select`.
- To install shadcn-ui Popover run `npx shadcn-ui@latest add popover`.
- To install shadcn-ui Calendar run `npx shadcn-ui@latest add calendar`.
- To install shadcn-ui InputOTP run `npx shadcn-ui@latest add input-otp`.

- To install prisma ORM in dev mode run `npm i - D prisma`.
- To install prisma clien run `npm i @prisma/client`.
- To initialize prisma, create prisma schema, run `npx prisma init`.

- Use neon.tech for postgresql database.
- To generate prisma client library run `npx prisma generate`.
- To push database to neon.tech run `npx prisma db push`.
- To install prisma adapter for authjs run `npm install @auth/prisma-adapter`.
- To encrypt user password install bcrypt, run `npm i bcrypt`.
- To install brcypt types run `npm i -D @types/bcrypt`.