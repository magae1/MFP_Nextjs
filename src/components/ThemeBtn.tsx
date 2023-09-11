"use client";
import React, { useEffect, useState } from "react";
import { useColorScheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { LightModeSharp, Brightness3Sharp } from "@mui/icons-material";

const ThemeBtn = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  const [icon, setIcon] = useState(<LightModeSharp />);

  useEffect(() => {
    setMounted(true);
    setIcon(mode === "light" ? <LightModeSharp /> : <Brightness3Sharp />);
  }, []);

  return (
    <IconButton
      disabled={!mounted}
      size={"large"}
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
          setIcon(<Brightness3Sharp />);
        } else {
          setMode("light");
          setIcon(<LightModeSharp />);
        }
      }}
    >
      {icon}
    </IconButton>
  );
};

export default ThemeBtn;
