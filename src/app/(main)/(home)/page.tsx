import Link from "next/link";
import { Box } from "@mui/material";
import _ from "underscore";

export default function Main() {
  return (
    <Box>
      {_.range(10).map((value, index) => (
        <li key={`k-${index}`}>{value}</li>
      ))}
    </Box>
  );
}
