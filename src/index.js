import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rammetto-one";


const theme = extendTheme({
  fonts: {
    heading: `'Rammetto One', sans-serif`,
    body: `'Rammetto One', sans-serif`,
  },
});

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//   },
//   {
//     path: "/about",
//     element:<About/>,
//   },
//   {
//     path: "/work",
//     element:<Work/>,
//   },
//   {
//     path: "/contact",
//     element:<Contact/>
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <RouterProvider router={router} /> */}
      <App/>
    </ChakraProvider>
  </React.StrictMode>
);
