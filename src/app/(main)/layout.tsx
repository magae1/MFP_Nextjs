import React, { ReactNode } from "react";
import { Card, Grid } from "@mui/material";

interface props {
  children: ReactNode;
  boxoffice: ReactNode;
}

const MainLayout = ({ children, boxoffice }: props) => {
  return (
    <Grid container spacing={1} sx={{ height: "200vh" }}>
      <Grid container item spacing={1} xs={12} sm={7}>
        <Grid item xs={12} sm={7}>
          {boxoffice}
        </Grid>
        <Grid item xs={12} sm={7}>
          <Card>456</Card>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Card>{children}</Card>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
