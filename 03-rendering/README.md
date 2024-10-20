This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tips

### Rendering

- Rendering is the process that transforms the code you write into user interface.
- Choosing the right time and place to do this rendering is vital for building a performant application.

#### Client-side Rendering (CSR)

- the browser downloads a minimal HTML page and the JavaScript needed for the page.
- The JavaScript is then used to update the DOM and render the page.
- When the application is first loaded, the user may notice a slight delay before they can see the full page, this is because the page isn't fully rendered until all the JavaScript is downloaded, parsed, and executed.
- After the page has been loaded for the first time, navigating to other pages on the same website is typically faster, as only necessary data needs to be fetched, and JavaScript can re-render parts of the page without requiring a full page refresh.
- **Rendreing process:**
  1. **Request** (from client)
  2. **Response** (HTML + JS bundle - Blank screen)
  3. **Request** (Download JS)
  4. **Response** (JS)
  5. Generate HTML

##### Drawbacks of CSR

- **SEO:** A single div tag is not optimal for SEO.
- **Performance:** Handling all the work such as fetching data, computing UI and making HTML interactive can slow things down (slow load times).
  - Download, parse and execute javascript
  - Users might see a blank screen or a loading spinner while the page loads
  - Increase the size of the javascript bundle, prolonging the wait time for users to see the UI
  - Network waterfall to fetch data

#### Server-side Rendering (SSR)

- page HTML is generated on each request.
- **Rendreing process:**
  1. **Request** (from client - Generate HTML)
  2. **Response** (Full HTML + JS reference - Non-interactive UI)
  3. **Request** (Download JS)
  4. **Response** (JS)
  5. Hydration
  - Hydrate dry HTML with `JavaScript`
  - Is the process of attaching event listener to the DOM, **to make the static HTML interactive**.
  - initializing the application state, attaching event handlers for actions.

##### SSR benefits

- **SEO:** improves the SEO because search engines can easily index the server-rendered content
- **Performance:** User can immediately see the page html content, instead of blank screen or loading spinner (fast initial page load)

#### CSR vs SSR

##### CSR:

- HTML is rendered on the **client** (browser) using `JavaScript`
- **Slower initial page loades:**
  - Bigger JavaScript bundle needs to be downloaded before app starts running
  - Data is fetched after components mount
- **SEO can be problematic**

###### Typical Timeline

```
                                         First Contentful Paint (FCP)             Largest Contentful Paint (LCP)
  Server ---- Empty page ------------------------------|--- Fetch Data -----------------------|
                    \                                  |   /          \                       |
                     \                                 |  /            \                      |
                      \                                | /              \                     |
  Client ---- Download JS bundle -----> Render Spinner |/--------------- Render App with data |
```

##### SSR:

- HTML is rendered on the **server**
- **Faster initial page loades:**
  - Less JavaScript needs to be downloaded and executed
  - Data is fetched before HTML is rendered
- **SEO-friendly:** content is easier for search engines to index

###### Typical Timeline

```
Much faster!
                                                  First Contentful Paint (FCP) and Largest Contentful Paint (LCP)
  Server ---- Fetch data -----> Render App with data ------------------|--------------------------------------------
                                                   \                   |
                                                    \                  |
                                                     \                 |
  Client -------------------------------------------- HTML, CSS and JS |----> Download JS bundle -----> Hydrate ----
```

#### When to use SSR and CSR?

##### CSR

- **SPAs:** Perfect for building highly interactive Web apps.
- **Apps that don't need SEO:**
  - Apps that are used "internally" as tools inside companies
  - Apps that are entirely hidden behind a login

##### SSR

- **Content-driven website or apps where SEO is essential:** E-commerce, blog, news, marketing website, etc.

###### Types of SSR

- **Static Side Generation (SSG):** SSG occurs at build time, when the application is deployed on the server. It is ideal for content that doesn't change often, like blog posts.
- **Server Side Rendering (SSR)** SSR renders the page on demand in response to user requests. It is suitable for personalized content like social media feeds, where the HTML depends on the logged-in user

###### Drawback of SSR

1. You hav to fetch everything before you can show anything

- Fetching must be completed before the server can begin rendering the page
- Delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client

```
Time ----------------------------->
------------------------------------------------------------------------------------------------------
                                      |TTFB             |FCP   |TTI
  <--------------------------->       |                 |      |
  |A__________________________||B_____|_||C_____________|_||D__|_|

  |A| Fetching data on server                                TTFB   Time To First Byte
  |B| Rendering HTML on server                               FCP    First Contentful Paint
  |C| Loading code on the client                             TTI    Time To Interactive
  |D| Hydrating
------------------------------------------------------------------------------------------------------
```

2. You have to load everything before you can hydrate anything

- The component tree in the browser must exactly match the server-generated component tree
- This means that all the JavaScript for the components must be loaded on the client before you can start hydration any of them

```
Time ----------------------------->
------------------------------------------------------------------------------------------------------
                                      |TTFB             |FCP   |TTI
                               <------|-----------------|->    |
  |A__________________________||B_____|_||C_____________|_||D__|_|

  |A| Fetching data on server                                TTFB   Time To First Byte
  |B| Rendering HTML on server                               FCP    First Contentful Paint
  |C| Loading code on the client                             TTI    Time To Interactive
  |D| Hydrating
------------------------------------------------------------------------------------------------------
```

3. You have to hydrate everything before you can interact with anything

- When React starts hydration, it won't stop until it's finished with the entire tree
- All components must be hydrate before you can interact with any of theme

```
Time ----------------------------->
------------------------------------------------------------------------------------------------------
                                      |TTFB             |FCP   |TTI
                                      |                 |  <---|->
  |A__________________________||B_____|_||C_____________|_||D__|_|

  |A| Fetching data on server                                TTFB   Time To First Byte
  |B| Rendering HTML on server                               FCP    First Contentful Paint
  |C| Loading code on the client                             TTI    Time To Interactive
  |D| Hydrating
------------------------------------------------------------------------------------------------------
```

**Summary**

- First, all data for a given page is fetched on the server
- The server then renders the HTML for the page
- The HTML, CSS and JavaScript for the page are sent to the client
- A non-interactive user interface is shown using the generated HTML and css
- Finally, React hydrates the user interface to make it interactive

**These steps are sequential and blocking**

```
Time ----------------------------->
------------------------------------------------------------------------------------------------------
                                      |TTFB             |FCP   |TTI
                                      |                 |      |
  |A__________________________||B_____|_||C_____________|_||D__|_|

  |A| Fetching data on server                                TTFB   Time To First Byte
  |B| Rendering HTML on server                               FCP    First Contentful Paint
  |C| Loading code on the client                             TTI    Time To Interactive
  |D| Hydrating
------------------------------------------------------------------------------------------------------
```

###### Suspense Benefits for SSR

- **HTML streaming on the server:** Progressively rendering HTML from the server to the client
- **Selective hydration on the client:** React priorities what components to make iteractive first based on user interaction

**What is streaming?**

- **Streaming** allows you to **break down the page's HTML into smaller chunks** and progressively send those chunks from the server to the client
- This enables parts of the page to be displayed sooner, without waiting for all the data to load before any UI can be rendered

  ```
  Time ----------------------------->
  ------------------------------------------------------------------------------------------------------
                  |TTFB        |FCP   |TTI
                  |            |      |
                  |            |      |
    |B____________|__||C_______|__||D_|__|
                  |            |      |
    |A____________|____________|__||B_|_____||C______________||D___|
                  |            |      |
    |A____________|____________|______||B______||C______________||D___|

    |A| Fetching data on server                                TTFB   Time To First Byte
    |B| Rendering HTML on server                               FCP    First Contentful Paint
    |C| Loading code on the client                             TTI    Time To Interactive
    |D| Hydrating
  ------------------------------------------------------------------------------------------------------
  ```

  **Another aplication on Suspense** Show loading.js component on specific part of the UI

###### Drawback of Suspense

1. **Increased bundle sizes** leadding to exessive downloads for users
2. **Unnecessary hydration** delaying interactivity
3. **Extensive client-side processing** that could result in poor performance

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
