import "@styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import Provider from "@components/Provider/Provider";
import Nav from "@components/Nav/Nav";
import Footer from "@components/Footer/Footer";
import CustomCursorWrapper from "@components/CustomCursorWrapper/CustomCursorWrapper";

export const metadata = {
  title: "Andrew Nguyen Photography",
  description: "Andrew Nguyen's Photography Gallery & Portfolio",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className="">
        <Provider>
          <MantineProvider theme={theme}>
            <div className="site-wrapper">
              <CustomCursorWrapper>
                <Nav />
                <main className="content-wrapper">{children}</main>
                <Footer />
              </CustomCursorWrapper>
            </div>
          </MantineProvider>
        </Provider>
      </body>
    </html>
  );
}
