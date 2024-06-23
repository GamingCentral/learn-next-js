# Learning Next

## How to initialize a next js app:

1. go to cmd and execute: npx create-next-app@latest.
2. by default the app architecture is:
   -node_modules
   -public ...has svgs by default
   -src ... contains app which has icons, css, layout and a page file
   -other components...

we can start up from editing src/app/page.tsx/jsx .
by default the html file will be created by npm from the main page.tsx file

## How to initialize a next js app:

1. go to cmd and execute: npx create-next-app@latest.
2. by default the app architecture is:
   -node_modules
   -public ...has svgs by default
   -src ... contains app which has icons, css, layout and a page file
   -other components...

we can start up from editing src/app/page.tsx/jsx .
by default the html file will be created by npm from the main page.tsx file

## Routing Basics:

a next.js app contains **folders and files.**
each folder to file path defines a route ie a navigation path with the url to get to the page.
the folders are meant to be parents and can be renderable or non-rederable.

### Page

each renderable folder contains its **_"page.jsx/tsx/js"_** file.
this page file is a leaf node for the DOM tree.
pages are **server components** by default but can be made as **client components** too as needed.
can also **fetch data.**

**_syntax_**
export default function pageName() {
return (...);
}

### Layout:

a layout is a component that can next other components or can be nested into another layout.
these layout is like skeleton that doesnt change over the pages inside that folder or sub-folders.
these donot get re-rendered as long as user stays in that route.
contents inside layout can change but not the layout itself.
these are default server components but can be made to client components.
can do data fetching as well

**_syntax_**
export default function layout({
children, //a page or nested layout
}: {
children: React.ReactNode
})
{
return (
{children}
);  
}

#### root layout:

this resides directly in app/rootLayout.tsx ie this is the a layout that is applicable to all the pages.
this is requried and must contain html and body tags as such:

**_syntax_**

export default function Layout({
children,
}: {
children: React.ReactNode
}) {
return (
| html lang="en" |
| body |
{/_ Layout UI _/}
| main | {children}| /main |
| /body |
| /html |
)
}

### Template:

similar to a layout but yet the difference is that rather than maintaining states like layout does it creates
a new instance of the page and serves it to the user.

**_syntax_**
export default function Template({ children }: { children: React.ReactNode }) {
return | div | {children}| /div |
}

### Meta Data:

can modify the head contents using routing and calling metadata APIs
metadata can be defined from **metadata object** and can be included in index.jsx/tsx or page.jsx/tsx

**_syntax_**
import { Metadata } from 'next'
export const metadata: Metadata = {
title: 'Next.js',
}
export default function ...() {...}

### Linking and Redirects:

in this section we will see how to go between various routes.
we have 4 ways of doing this...

1. using | Link href="/route..." | LinkName| /Link | //similar to | a href="..." | | /a | //for static component redirects
   scrolling to a "id" of html tag is: | Link href="/route#id" | LinkName| /link | . Import next/navigation

2. using **useRouter()** hook:
   useRouter is used to change route between client side components.
   generally advised to use Links but one can use router hook when needed

**_syntax_**
"use client";
import {useRouter} from next/navigation

3. using **redirect**
   used when redirecting between routes on server
   on server side we can use: redierct('/route')

4. using **browser history API**
   **window.history.pushState(stateValue, stateName, newURL)**
   this method is used so that we can re-render parts of page with respect to new url without refresing the page
   this also allows us to navigate back to previous view/ page within browser.

**window.history.replaceState(stateValue, stateName, newURL)**
this method allows us to replace the current history entry to the new url entry by this the user wont be allowed to
go back to the previous state/page.

### Loading ui:

there is a file **loading.js** that can be used to make a loading skeleton that helps next replace unloaded content that is
being processed in server with a abstract loading screen and once the requested data is ready automatically re-renders it.
look into: https://react.dev/reference/react/Suspense

### Streaming:

for a page to be usable there are 4 mutually exclusive steps that happen:

1. server fetches data.
2. server renders html for the data.
3. html,css and js are sent to the client.
4. non interactable user interface is then shown to the user.
5. now the interactive part comes when react hydrates the page.

rather than blocking the user for soo long the data is fetched as chunks ie an non interactive page is shown
as soon as possible to user by breaking the page into much smaller chunks and the higher priority chunks are sent
earlier and react immediately hydrates these chunks

### Error Handling:

error.js file provides error handling capabilities within react error boundaries

### redirecting

**redirect:** this is used to temporarily redirect user to a route. This is server side.
**_status codes_**: 303(server action) or 307(temporary redirect).

**permanentRedirect:** used to permanently redirect an user to a route. This is server side.
**_status code_**: 308(permanent redirect).

**useRouter:** used for redirects in client side.
