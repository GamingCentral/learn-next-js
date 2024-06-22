# All the errors i faced

## 1. Error: The default export is not a React Component in page: "/"
This error occured when the layout.tsx was left empty in the app folder. This makes sense cause the children i.e body of the text in html
is no where mentioned like we did with index.jsx file in react.js where 
***index.jsx:***

import React from 'react';  

import { ReactDOM } from "react";  


reactDOM.render(  

  <div>  
    <App />
  </div>,
  document.getElementbyID("root")
);

and all the content within the App was returned by ***App.jsx***.

But in next js there is no index.jsx but only one sigular home page. So to do the rendering functioning it uses **RootLayout** in ***Layout.jsx***
file.

***Layout.tsx***:
export const metadata = {
  title: 'try nextJs',
  description: 'By Mannoj',
} ***//all the meta data here.***

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} ***rendering is done here.***


