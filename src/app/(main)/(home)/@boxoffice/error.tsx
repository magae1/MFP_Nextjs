"use client";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {}, []);

  return (
    <Box>
      <Typography variant={"caption"}>{error.message}</Typography>
    </Box>
  );
}
