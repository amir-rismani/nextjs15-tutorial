This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tips

### Routing

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
- `Good to know: .js, .jsx, or .tsx file extensions can be used for special files.`

### Catch-all Segments

- Dynamic Segments can be extended to **catch-all** subsequent segments by adding an ellipsis inside the brackets [...segmentName]. This is called `Catch-all Segments`.
  - For example, `pages/shop/[...slug].js` will match `/shop/clothes`, but also `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`, and so on.
- Catch-all Segments can be made **optional** by including the parameter in double square brackets: [[...segmentName]].
  - For example, `pages/shop/[[...slug]].js` will also match `/shop`, in addition to `/shop/clothes`, `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`.
- The difference between **catch-all** and **optional catch-all** segments is that with optional, the route without the parameter is also matched (/shop in the example above).

### Project Organization and File Colocation

#### Safe colocation by default

- Each folder represents a route segment that is mapped to a corresponding segment in a URL path.
- Even though route structure is defined through folders, a route is not publicly accessible until a `page.js` or `route.js` file is added to a route segment.
- And, even when a route is made publicly accessible, only the content returned by `page.js` or `route.js` is sent to the client. This means that project files can be safely colocated inside route segments in the `app` directory without accidentally being routable
#### Project organization features
Next.js provides several features to help you organize your project.

##### Private Folders
- Private folders can be created by prefixing a folder with an underscore: `_folderName`.
- This indicates the folder is a private implementation detail and should not be considered by the routing system, thereby opting the folder and all its subfolders out of routing.
- Since files in the app directory can be safely colocated by default, private folders are not required for colocation. However, they can be useful for:
    - Separating UI logic from routing logic.
    - Consistently organizing internal files across a project and the Next.js ecosystem.
    - Sorting and grouping files in code editors.
    - Avoiding potential naming conflicts with future Next.js file conventions.
- You can create URL segments that start with an underscore by prefixing the folder name with `%5F` (the URL-encoded form of an underscore): `%5FfolderName`.


- 
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
