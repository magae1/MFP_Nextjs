"use client";
import { AppBar, styled } from "@mui/material";
import type {} from "@mui/material/themeCssVarsAugmentation";

export const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: "rgba(0 0 0 / 0.0)",
  [theme.getColorSchemeSelector("dark")]: {
    backgroundColor: "rgba(0 0 0 / 0.0)",
  },
}));
