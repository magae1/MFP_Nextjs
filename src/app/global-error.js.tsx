"use client";

import { Button, Typography } from "@mui/material";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Typography variant={"h2"}>오류가 발생했습니다!</Typography>
        <Button onClick={() => reset()}>재시도</Button>
      </body>
    </html>
  );
}
