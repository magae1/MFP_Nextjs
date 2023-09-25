import { ReactNode } from "react";
import { Box, Grid, Stack } from "@mui/material";

interface props {
  children: ReactNode;
  boxoffice: ReactNode;
}

const MainLayout = ({ children, boxoffice }: props) => {
  return (
    <Grid container spacing={3} mt={2}>
      <Grid container item spacing={2} xs={12} sm={6}>
        <Stack width={"100%"}>
          <Box>{boxoffice}</Box>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;
