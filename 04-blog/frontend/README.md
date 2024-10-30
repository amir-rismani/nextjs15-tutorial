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
