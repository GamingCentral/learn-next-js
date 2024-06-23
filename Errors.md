# All the errors i faced

## 1. Error: The default export is not a React Component in page: "/" {Next.js}

This error occured when the layout.tsx was left empty in the app folder. This makes sense cause the children i.e body of the text in html
is no where mentioned like we did with index.jsx file in react.js where
**_index.jsx:_**

import React from 'react';  
import { ReactDOM } from "react";  
reactDOM.render(  
 | div |  
 | App / |  
 | /div | ,  
 document.getElementbyID("root")  
);

and all the content within the App was returned by **_App.jsx_**.

But in next js there is no index.jsx but only one sigular home page. So to do the rendering functioning it uses **RootLayout** in **_Layout.jsx_**
file.

**_Layout.tsx_**:  
export const metadata = {  
 title: 'try nextJs',  
 description: 'By Mannoj',  
} **_//all the meta data here._**

export default function RootLayout({  
 children,  
}: {  
 children: React.ReactNode  
}) {  
 return (  
 | html lang="en" |  
 |body| {children} |/body|  
 | /html |  
 )
}  
**_rendering is done here._**

## 2. Box cannot be exported as a JSX component {Material UI}

This happened due to the fact that my | Box | | Box/ | was imported under '@material-ui/core/Box' rather than '@mui/materials/Box'.  
This was due to material-ui rebranding to mui.

## 3. Module not found: Can't resolve '@emotion/react' {Material UI}

@emotion/react @emotion/styled were not installed in my machine so i used: npm install @emotion/react @emotion/styled in terminal.

## 4. Container not occupying 100% width {Material UI}

This error is because the maxWidth was forgotten but is mandatory prop to Component element. Setting it to xl had taken care of this issue.

## 5. Appbar component overlapping main element ie children {Material UI}

This error can be resolved by setting position to static instead of default fixed.