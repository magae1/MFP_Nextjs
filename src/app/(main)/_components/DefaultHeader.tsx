"use client";
import Link from "next/link";
import { Toolbar, Typography, AppBar, styled } from "@mui/material";
import { VideoStable } from "@mui/icons-material";
import type {} from "@mui/material/themeCssVarsAugmentation";

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: "rgba(0 0 0 / 0.0)",
  [theme.getColorSchemeSelector("dark")]: {
    backgroundColor: "rgba(0 0 0 / 0.0)",
  },
}));

const DefaultHeader = () => {
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

export default DefaultHeader;
