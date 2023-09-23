import { Link, Typography, TypographyProps } from "@mui/material";
import dayjs from "dayjs";

export default function Copyright(props: TypographyProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        영자국
      </Link>{" "}
      {dayjs().year()}
      {"."}
    </Typography>
  );
}
