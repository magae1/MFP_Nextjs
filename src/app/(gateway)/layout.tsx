import React, { ReactNode } from "react";
import { Paper, Container, Stack } from "@mui/material";

import Copyright from "@/components/Copyright";
import GatewayHeader from "@/components/GatewayHeader";

export default function GatewayLayout({ children }: { children: ReactNode }) {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Stack mt={6} width={"100%"} maxWidth={440} spacing={2}>
        <GatewayHeader />
        <Paper sx={{ px: 5, pt: 2, pb: 5 }} variant={"outlined"}>
          {children}
        </Paper>
        <Copyright sx={{ pt: 8, pb: 2 }} />
      </Stack>
    </Container>
  );
}
