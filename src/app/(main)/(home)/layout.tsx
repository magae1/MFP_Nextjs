import { ReactNode } from "react";
import { Card, Grid, Paper } from "@mui/material";

interface props {
  children: ReactNode;
  boxoffice: ReactNode;
}

const MainLayout = ({ children, boxoffice }: props) => {
  return (
    <Grid container spacing={1} mt={2}>
      <Grid container item spacing={2} xs={12} sm={6}>
        <Grid item xs={12}>
          {boxoffice}
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>{children}</Paper>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
