import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

import ThemeRegistry from "./ThemeRegistry";
import TitleBar from "@/components/TitleBar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="ko" className={inter.className}>
      <body>
        <ThemeRegistry>
          <TitleBar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
