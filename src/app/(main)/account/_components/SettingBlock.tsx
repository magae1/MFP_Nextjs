import { ReactNode } from "react";
import { Grid, Typography } from "@mui/material";

interface props {
  subtitle: string;
  description?: ReactNode;
  children: ReactNode;
}

const SettingBlock = ({ subtitle, description, children }: props) => {
  return (
    <Grid container sx={{ minHeight: "200px" }}>
      <Grid item xs={12} sm={3}>
        <Typography variant={"h6"} py={{ xs: 2, sm: 0 }}>
          {subtitle}
        </Typography>
        {description}
      </Grid>
      <Grid item xs={12} sm={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SettingBlock;
