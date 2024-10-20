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
  - `error`: Error UI for a segment and its children
  - `global-error`: Global Error UI
  - `route`: Server-side API endpoint
  - `template`: Specialized re-rendered Layout UI
  - `default`: Fallback UI for Parallel Routes
- `Good to know: .js, .jsx, or .tsx file extensions can be used for special files.`
- A layout is UI that is **shared between multiple routes**. On navigation, layouts **preserve state**, **remain interactive**, and **do not re-render**.
- The root layout is defined at the top level of the `app` directory and applies to all routes.
- By default, layouts in the folder hierarchy are nested, which means they wrap child layouts via their `children` prop. You can nest layouts by adding `layout.js` inside specific route segments (folders).

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

##### Route Groups

- Route groups can be created by wrapping a folder in parenthesis: `(folderName)`. This indicates the folder is for organizational purposes and should not be included in the route's URL path.

- Route groups are useful for:

  - **Organizing routes into groups** e.g. by site section, intent, or team.
  - Enabling **nested layouts** in the same route segment level:
    - Creating multiple nested layouts in the same segment, including multiple root layouts
    - Adding a layout to a subset of routes in a common segment. (Opting specific segments into a layout)

- To create multiple root layouts, remove the top-level `layout.js` file, and add a `layout.js` file inside each **route groups**. This is useful for partitioning an application into sections that have a completely different UI or experience. The `<html>` and `<body>` tags need to be **added to each root layout**.

### Metadata

- Next.js has a Metadata API that can be used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability.
- There are two ways you can add metadata to your application:

  - **Config-based Metadata:** _Export a static metadata object_ or a _dynamic generateMetadata function_ in a `layout.js` or `page.js` file.

    - **Static Metadata**
      To define static metadata, export a Metadata object from a `layout.js` or static `page.js` file.

      ```javascript
      export const metadata = {
        title: "...",
        description: "...",
      };

      export default function Page() {}
      ```

    - **Dynamic Metadata**
      You can use generateMetadata function to fetch metadata that requires dynamic values.

      ```javascript
      export async function generateMetadata({ params, searchParams }, parent) {
        // read route params
        const id = params.id;

        // fetch data
        const product = await fetch(`https://.../${id}`).then((res) =>
          res.json()
        );

        // optionally access and extend (rather than replace) parent metadata
        const previousImages = (await parent).openGraph?.images || [];

        return {
          title: product.title,
          openGraph: {
            images: ["/some-specific-page-image.jpg", ...previousImages],
          },
        };
      }

      export default function Page({ params, searchParams }) {}
      ```

  - **File-based Metadata:** Add static or dynamically generated special files to route segments. File-based metadata has the higher priority and will override any config-based metadata.

#### Open Graph meta tags

- Open Graph meta tags are snippets of code that control how URLs are displayed when shared on social media.
- They’re part of Facebook’s Open Graph protocol and are also used by other social media sites, including LinkedIn and Twitter (if Twitter Cards are absent).
- You can find them in the <head> section of a webpage. Any tags with og: before a property name are Open Graph tags.
  ```html
  <meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
  <meta
    property="og:description"
    content="Get from SEO newbie to SEO pro in 8 simple steps."
  />
  <meta
    property="og:image"
    content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
  />
  ```

### <Link>

- `<Link>` is a React component that extends the HTML <a> element to provide **prefetching** and client-side navigation between routes.
- It is the primary way to navigate between routes in Next.js.
- Here's a summary of the props available for the Link Component:
  - `href` (required): The path or URL to navigate to. `href` can also accept an object.
  - `replace`: Defaults to `false`. When true, `next/link` will replace the current history state instead of adding a new URL into the **browser’s history** stack.
  - `scroll`: Defaults to `true`. The default behavior of `<Link>` **is to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation.** When `false`, `next/link` will *not scroll to the top of the page after a navigation.*
  - `prefetch`: Prefetching happens when a `<Link />` component enters the user's viewport (initially or through scroll). Next.js prefetches and loads the linked route (denoted by the `href`) and data in the background to improve the performance of client-side navigations. Prefetching is only enabled in production.

### Error Handling
- The `error.js` file convention allows you to gracefully handle unexpected runtime errors in nested routes.
- Automatically wrap a **route segment** and its **nested children** in a React Error Boundary.
- Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity.
- Isolate errors to affected segments while keeping the rest of the application functional.

### Loading UI and Streaming
- The special file `loading.js` helps you create meaningful Loading UI with **React Suspense**.
- With this convention, you can show an instant loading state from the server while the content of a route segment loads.
#### Instant Loading States
- An instant loading state is fallback UI that is shown immediately upon navigation.
- You can pre-render loading indicators such as skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc.
- This helps users understand the app is **responding** and **provides a better user experience**.

#### Streaming with Suspense
- In addition to `loading.js`, you can also manually create Suspense Boundaries for your own UI components. The App Router supports streaming with Suspense for both Node.js and Edge runtimes.

### Linking and Navigating
- There are four ways to navigate between routes in Next.js:
  - Using the **`<Link>` Component**
  - Using the **useRouter hook (Client Components)**
  - Using the **redirect function (Server Components)**
  - Using the native History API

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
