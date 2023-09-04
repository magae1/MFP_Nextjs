"use client";
import React, { ReactNode } from "react";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { theme } from "./theme";

const ThemeRegistry = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};

export default ThemeRegistry;