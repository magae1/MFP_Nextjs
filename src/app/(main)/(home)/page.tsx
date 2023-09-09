import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import _ from "underscore";

export default function Main() {
  return (
    <Box>
      {_.range(110).map((value, index) => (
        <li key={`k-${index}`}>{value}</li>
      ))}
      <Link href={"/signup"}>회원가입</Link>
    </Box>
  );
}
