import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
import { Toolbar, Typography } from "@mui/material";
import { VideoStable } from "@mui/icons-material";

import ThemeRegistry from "./ThemeRegistry";
import { TransparentAppBar } from "@/components/styles";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="ko" className={inter.className}>
      <body>
        <ThemeRegistry>
          <TransparentAppBar>
            <Toolbar>
              <Link href={"/"} style={{ textDecoration: "none" }}>
                <Typography>
                  <VideoStable />
                  영자국
                </Typography>
              </Link>
            </Toolbar>
          </TransparentAppBar>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
