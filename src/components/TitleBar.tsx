"use client";
import React from "react";
import Link from "next/link";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import { VideoStable } from "@mui/icons-material";
import type {} from "@mui/material/themeCssVarsAugmentation";

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: "rgba(0 0 0 / 0.0)",
  [theme.getColorSchemeSelector("dark")]: {
    backgroundColor: "rgba(0 0 0 / 0.0)",
  },
}));

const TitleBar = () => {
  return (
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
  );
};

export default TitleBar;
