import { ReactNode } from "react";
import { Paper, Container, Stack } from "@mui/material";

import Copyright from "@/components/Copyright";
import GatewayHeader from "@/components/GatewayHeader";

export default function GatewayLayout({ children }: { children: ReactNode }) {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Stack mt={6} width={"100%"} maxWidth={440} spacing={2}>
        <GatewayHeader />
        {children}
        <Copyright sx={{ pt: 8, pb: 2 }} />
      </Stack>
    </Container>
  );
}
