import { Backdrop, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Backdrop sx={{ color: "#fff" }} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
