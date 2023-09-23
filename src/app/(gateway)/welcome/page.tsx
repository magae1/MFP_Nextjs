"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Grid, Typography, Button } from "@mui/material";

export default function Page() {
  const searchParams = useSearchParams();

  const identifier = searchParams.get("id");
  const email = searchParams.get("email");

  return (
    <Grid container spacing={2}>
      {identifier && (
        <Grid item xs={12}>
          <Typography sx={{ textAlign: "center" }}>
            아이디: {identifier}
          </Typography>
        </Grid>
      )}
      {email && (
        <Grid item xs={12}>
          <Typography sx={{ textAlign: "center" }}>이메일: {email}</Typography>
        </Grid>
      )}
      <Grid item xs={12} sm={6}>
        <Button component={Link} fullWidth href={"/"}>
          홈으로
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button component={Link} fullWidth href={"/login"}>
          로그인하기
        </Button>
      </Grid>
    </Grid>
  );
}
