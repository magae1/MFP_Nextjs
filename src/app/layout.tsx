import React, { ReactNode } from "react";
import { Inter } from "next/font/google";

import ThemeRegistry from "./ThemeRegistry";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="ko" className={inter.className}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
