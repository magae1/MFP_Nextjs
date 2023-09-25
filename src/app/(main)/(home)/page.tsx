import { Box } from "@mui/material";
import _ from "underscore";

export default function Main() {
  return (
    <Box>
      {_.range(101).map((value, index) => (
        <li key={`k-${index}`}>{value}</li>
      ))}
    </Box>
  );
}
