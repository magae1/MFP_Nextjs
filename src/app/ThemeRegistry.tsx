"use client";
import React, { ReactNode } from "react";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline, useTheme } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { theme } from "./theme";

const ThemeRegistry = (props: { children: ReactNode }) => {
  const currentTheme = useTheme();
  const { children } = props;

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
      <ToastContainer
        autoClose={3000}
        theme={currentTheme.palette.mode === "light" ? "colored" : "dark"}
      />
    </CssVarsProvider>
  );
};

export default ThemeRegistry;
