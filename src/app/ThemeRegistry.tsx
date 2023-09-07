"use client";
import React, { ReactNode } from "react";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { theme } from "./theme";

const ThemeRegistry = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
      <ToastContainer autoClose={3000} />
    </CssVarsProvider>
  );
};

export default ThemeRegistry;
