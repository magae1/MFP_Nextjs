import { ReactNode } from "react";
import { Grid, Typography } from "@mui/material";

interface props {
  subtitle: string;
  description?: string;
  children: ReactNode;
}

const SettingBlock = ({ subtitle, description, children }: props) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        <Typography variant={"h6"}>{subtitle}</Typography>
        {!!description && <Typography>{description}</Typography>}
      </Grid>
      <Grid item xs={12} sm={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SettingBlock;
