This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tips

- All routes must be placed in the `app` folder
- Next.js uses a file-system based router where folders are used to define routes.
- Each folder represents a route segment that maps to a URL segment. To create a nested route, you can nest folders inside each other.
- Files are used to create UI that is shown for a route segment
- Every file that corresponds to a route must be named page.js or page.tsx
- Next.js provides a set of special files to create UI with specific behavior in nested routes:
  - `layout`: Shared UI for a segment and its children
  - `page`: Unique UI of a route and make routes publicly accessible
  - `loading`: Loading UI for a segment and its children
  - `not-found`: Not found UI for a segment and its children
  - `not-found`: Error UI for a segment and its children
  - `global-error`: Global Error UI
  - `route`: Server-side API endpoint
  - `template`: Specialized re-rendered Layout UI
  - `default`: Fallback UI for Parallel Routes

`Good to know: .js, .jsx, or .tsx file extensions can be used for special files.`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.