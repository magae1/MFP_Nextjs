import { ReactNode } from "react";
import { AppBar, Stack, Toolbar } from "@mui/material";

import ThemeBtn from "@/app/(main)/_components/ThemeBtn";

const NavIsland = ({ children }: { children: ReactNode }) => {
  return (
    <AppBar
      sx={{
        minWidth: "10px",
        width: "fit-content",
        right: 0,
        position: "fixed",
        borderBottomLeftRadius: "35px",
        borderWidth: "1px",
      }}
    >
      <Toolbar disableGutters sx={{ padding: "0 10px" }}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <ThemeBtn />
          {children}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavIsland;
