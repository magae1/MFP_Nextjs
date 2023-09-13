"use client";
import { AppBar, Grid, styled } from "@mui/material";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { display } from "@mui/system";

export const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: "rgba(0 0 0 / 0.0)",
  [theme.getColorSchemeSelector("dark")]: {
    backgroundColor: "rgba(0 0 0 / 0.0)",
  },
}));

export const InputWrapper = styled(Grid)(({ theme }) => ({
  display: "",
}));
