import { ReactNode } from "react";
import { Container } from "@mui/material";

import Home from "@/app/(gateway)/_component/Home";
import Copyright from "@/app/(gateway)/_component/Copyright";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth={"sm"} sx={{ flex: 1, pt: { xs: 4, sm: 12, md: 16 } }}>
      <Home />
      {children}
      <Copyright sx={{ pt: 8, pb: 2 }} />
    </Container>
  );
}
