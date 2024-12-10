This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tips

### General Config

- Add `lang` and `dir` attributes to `html` tag.

### Tailwindcss Config

- Add color variables to `globals.css`, for example:

```css
@layer base {
  :root {
    &,
    &.light-mode {
      --background-app-rgb: 249, 250, 251;
      --color-primary-900: 74, 109, 255;
      --color-primary-800: 92, 124, 255;
      --color-primary-700: 110, 138, 255;
      --color-primary-600: 128, 153, 255;
      --color-primary-500: 146, 167, 255;
      --color-primary-400: 164, 182, 255;
      --color-primary-300: 183, 197, 255;
      --color-primary-200: 201, 211, 255;
      --color-primary-100: 219, 226, 255;
      --color-primary-50: 228, 233, 255;
      --color-secondary-900: 17, 24, 39;
      --color-secondary-800: 31, 41, 55;
      --color-secondary-700: 55, 65, 81;
      --color-secondary-600: 75, 85, 99;
      --color-secondary-500: 107, 114, 128;
      --color-secondary-400: 156, 163, 175;
      --color-secondary-300: 209, 213, 219;
      --color-secondary-200: 229, 231, 235;
      --color-secondary-100: 243, 244, 246;
      --color-secondary-50: 249, 250, 251;
      --color-secondary-0: 255, 255, 255;
      --color-success: 0, 192, 115;
      --color-warning: 255, 153, 0;
      --color-error: 255, 71, 87;
      --color-red-500: 239, 68, 68;
      --color-red-300: 252, 165, 165;
    }

    &.dark-mode {
      --background-app-rgb: 20, 20, 20;
      --color-secondary-900: 249, 250, 251;
      --color-secondary-800: 243, 244, 246;
      --color-secondary-700: 229, 231, 235;
      --color-secondary-600: 209, 213, 219;
      --color-secondary-500: 156, 163, 175;
      --color-secondary-400: 107, 114, 128;
      --color-secondary-300: 75, 85, 99;
      --color-secondary-200: 55, 65, 81;
      --color-secondary-100: 31, 41, 55;
      --color-secondary-50: 17, 24, 39;
      --color-secondary-0: 24, 33, 47;
      --backdrop-color: 0, 0, 0;
    }
  }
}
```

- Add `withOpacity` function to `tailwind.config.js` and use it as follows:

```javascript
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  // other config...
  theme: {
    extend: {
      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
          800: withOpacity("--color-primary-800"),
          700: withOpacity("--color-primary-700"),
          600: withOpacity("--color-primary-600"),
          500: withOpacity("--color-primary-500"),
          400: withOpacity("--color-primary-400"),
          300: withOpacity("--color-primary-300"),
          200: withOpacity("--color-primary-200"),
          100: withOpacity("--color-primary-100"),
        },
        secondary: {
          900: withOpacity("--color-secondary-900"),
          800: withOpacity("--color-secondary-800"),
          700: withOpacity("--color-secondary-700"),
          600: withOpacity("--color-secondary-600"),
          500: withOpacity("--color-secondary-500"),
          400: withOpacity("--color-secondary-400"),
          300: withOpacity("--color-secondary-300"),
          200: withOpacity("--color-secondary-200"),
          100: withOpacity("--color-secondary-100"),
          50: withOpacity("--color-secondary-50"),
          0: withOpacity("--color-secondary-0"),
        },
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error"),
      },
      // other config...
    },
  },
  // other config...
};
```

### Absolute Imports

Next.js has in-built support for the "paths" and "baseUrl" options of `tsconfig.json` and `jsconfig.json` files.

```javascript
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

These options allow you to alias project directories to absolute paths, making it easier to import modules.

```javascript
// before
import { Button } from "../../../components/button";

// after
import { Button } from "@/components/button";
```

### Module Path Aliases

In addition to configuring the baseUrl path, you can use the "paths" option to "alias" module paths.

For example, the following configuration maps @/components/_ to components/_:

```javascript
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"]
    }
  }
}


// Best practice

{
  "compilerOptions": {
    "baseUrl": "src/",
    "paths": {
      "@/components/*":["components/*"],
      "@/services/*":["services/*"],
      "@/styles/*":["styles/*"],
      "@/ui/*":["ui/*"],
      "@/utils/*":["utils/*"],
      "@/lib/*":["lib/*"],
      "@/providers/*":["providers/*"],
      "@/context/*":["context/*"],
    }
  }
}
```

### Add Local Font

- Add the fonts file to the `public` folder
- Create a js file in the `constants` folder and name it `localFont.js`, this file contains [these codes](./src/constants/localFont.js)
- Add the `className` attribute to the `body` tag in the `RootLayout` like [this](./src/app/layout.jsx)
- Add the `fontFamily` to the `tailwindcss.config.js` file as following:

```javascript
export default {
  // other config...
  theme: {
    extend: {
      // other config...
      fontFamily: {
        sans: ["var(--font-vazir)", ...fontFamily.sans],
      },
      // other config...
    },
  },
  // other config...
};
```

- Add `font-family: var(--vazir-font)` to the `globals.css` file for the `html` and `body` tags

### App Icon

Use an image file to set an app icon by placing a `favicon`, `icon`, or `apple-icon` image file within your /app directory. The favicon image can only be located in the top level of app/.

Next.js will evaluate the file and automatically add the appropriate tags to your app's `<head>` element.

### Image Optimization

The Next.js Image component extends the HTML `<img>` element with features for automatic image optimization:

- Size Optimization: Automatically serve correctly sized images for each device, using modern image formats like WebP and AVIF.
- Visual Stability: Prevent layout shift automatically when images are loading.
- Faster Page Loads: Images are only loaded when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.
- Asset Flexibility: On-demand image resizing, even for images stored on remote servers

Because `next/image` is designed to guarantee good performance results, it cannot be used in a way that will contribute to layout shift, and must be sized in one of three ways:

1. Automatically, using a `static import`
2. Manually, by including a `width` and `height` property used to determine the image's aspect ratio.
3. Implicitly, by using `fill` which causes the image to expand to fill its parent element.

### Server-Side Rendering in Next.js

Note: both **Server** and **Client** components are rendered on the server on the initial render.

- In Next.js the server-side rendering work **is split by Routes**
- Eacch route can be either **static** (also called pre-rendered) or **dynamic**
- There is also **Partial Pre-Rendering (PPR)** which mixes dynamic and static rendering in the same route (more later)

#### Static vs Dynamic rendering

##### Static Rendering (prerendered as static content)

- HTML is generated at **build time** or **periodically in the background** by re-fetching data (**ISR**)
- Useful when data doesn't change often and is not personalized to user (e.g product and post page)
- Default rendering strategy in Next.js (even when a page or component fetches data)

##### Dynamic Rendering (server-rendered on demand)

- HTML is generated at **request time** (for each new request reaches the server)
- **Useful when:**
  - The data changes frequently and is personalized to the user (e.g. cart)
  - Rendering a route requires information that depends on request. (e.g. search params, cookies, header, params)
- A route automatically switches to dynamic rendering in certain conditions.

###### When Next.js switches to dynamic rendering

Usually, developers **don't directly choose** whether a route should be static or dynamic. Next.js will automatically switches to dynamic rendering in the following scenarios:

- The route has a **dynamic segment** (page uses **params** - _[postSlug]_)
- **_searchParams_** are used in page component (_/posts?category=sport_)
- **Headers()** or **cookies()** are used in of any route's server component (dynamic functions)
- An **uncatched data request** is made in in of any route's server component
- We can also **force** Next.js to render a route dynamically

```
1. export const dynamic = "force-dynamic";  // from page.js

2. export const revalidate = 0;  // from page.js

3. { cashe: "no-store" }  // added to a fetch request in any of the route's server components

4. noStore() // in any of the route's server components
```

###### Generate static params

The `generateStaticParams` function can be used in combination with dynamic route segments to **statically generate** routes at build time instead of on-demand at request time.

```javascript
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch("https://.../posts").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }) {
  const { slug } = await params;
  // ...
}
```

generateStaticParams should return an array of objects where each object represents the populated dynamic segments of a single route.

- Each property in the object is a dynamic segment to be filled in for the route.
- The properties name is the segment's name, and the properties value is what that segment should be filled in with.

More details on the page (`generateStaticParams`)[https://nextjs.org/docs/app/api-reference/functions/generate-static-params]

**Notice:** `dynamicParams`; Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.

```javascript
export const dynamicParams = true; // true | false,
```

- **`true`** (default): Dynamic segments not included in `generateStaticParams` are generated on demand.
- **`false`**: Dynamic segments not included in `generateStaticParams` will return a 404.

#### Partial Prerendering

- Partial Prerendering (PPR) enables you to combine static and **dynamic** components together in the same route.
- During the build, Next.js prerenders as much of the route as possible. If dynamic code is detected, like reading from the incoming request, you can wrap the relevant component with a **React Suspense** boundary. The Suspense boundary fallback will then be included in the prerendered HTML.

##### Using Partial Prerendering

- In Next.js 15, you can incrementally adopt Partial Prerendering in **layouts** and **pages** by setting the **`ppr`** option in `next.config.js` to `incremental`, and exporting the `experimental_ppr` **route config option** at the top of the file:

```javascript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
```

```javascript
import { Suspense } from "react"
import { StaticComponent, DynamicComponent, Fallback } from "@/app/ui"

export const experimental_ppr = true

export default function Page() {
  return {
     <>
      <StaticComponent />
      <Suspense fallback={<Fallback />}>
        <DynamicComponent />
      </Suspense>
     </>
  };
}
```

### Caching

#### Next.js V14

- In Next.js 14, `force-cache` was used by default if a `cache` option was not provided, unless a dynamic function or dynamic config option was used.

- By default, Next.js automatically catches the returned values of fetch operations in `Data cache` on the server.
- By default, Next.js will cache as much as possible to improve performance and reduce cost.

##### Caching Mechanisms

###### Request Memoization

- **What: _Return values of functions_**
- **Where: _Server_**
- **Purpose: _Re-use data in a React Component tree_**
- **Duration: _Per-request lifecycle_**

```
.______________________________________________________.
|                        Server                        |
|______________________________________________________|
|                   |in memory           |  Data Catch |
|Rendering          |Request Memoization |      OR     |
|                   |Function Returns    | Data Source |
|___________________|____________________|_____________|
|----- fetch --------------> MISS -----------> HIT
|<-------------------------- SET <--------------|
|
|----- fetch --------------> HIT
|<----------------------------|
|
|----- fetch --------------> HIT
|<----------------------------|
```

###### Data Cache

- **What: _Data_**
- **Where: _Server_**
- **Purpose: _Store data across user requests and deployments_**
- **Duration: _Persistent (can be revalidated)_**

```
.______________________________________________________.
|                        Server                        |
|______________________________________________________|
|                   |                    |             |
|Rendering          |     Data Catch      | Data Source |
|___________________|____________________|_____________|
|----- fetch --------------> MISS -----------> HIT
|<-------------------------- SET <--------------|
|
|----- fetch --------------> HIT
|<----------------------------|
|
|----- fetch --------------> HIT
|<----------------------------|
```

**How to revalidate?**

- Time-based (automatic) for all data on page:

```javascript
export const revalidate = $time; // from page.js
```

- Time-based (automatic) for one data request:

```javascript
fetch("...", { next: { revalidate: $time } });
```

**According to these:**

1. Pass time interval
2. New incomming request to rebuild this page
3. Updated data will be shown to the next user
   **These process called ISR (Incremental Static Regeneration)**

- On-demand (manual):

```javascript
revalidatePath();
// or
revalidateTag();
```

**How to opting out?**

- Entire page:

```javascript
export const revalidate = 0; // from page.js
```

- Entire page:

```javascript
export const dynamic = "force-dynamic"; // from page.js
```

- Individual request:

```javascript
fetch("...", { catch: "no-store" });
```

- Individual server components:

```javascript
noStore();
```

**These forces page to become dynamic**

**Note:** This code defines a configuration object for Next.js. It **enables detailed logging** for `fetch` requests by setting `fullUrl: true`, which ensures the full URL of each request is logged. The configuration is exported as the default module for use in the Next.js application.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
export default nextConfig;
```

#### Next.js V15

- In Next.js 15, `no-store` is used by default if a `cache` option is not provided. This means **fetch requests will not be cached by default.**

### Authentication vs Authorization

- **Authentication:** The process of verifying who a user is
- **Authorization:** The process of verifying what they have access to

#### Authentication

**Access Token, Refresh Token, and `withCredentials`**
**Access Tokens** provide short-term access to protected resources, while **Refresh Tokens** allow obtaining new Access Tokens when they expire. When working with **Axios**, the `withCredentials: true` option is required to store and send cookies for these tokens, especially in cross-origin requests.

**How It Works:**

1. The server sends **Access and Refresh Tokens** as _cookies_ with secure configurations (e.g., HttpOnly, Secure, SameSite).
2. `withCredentials: true` ensures cookies are stored in the browser and included in subsequent requests.
3. When the Access Token expires, a request with the Refresh Token is made to obtain a new Access Token automatically.
   
This setup secures token management and simplifies authentication flows.

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
