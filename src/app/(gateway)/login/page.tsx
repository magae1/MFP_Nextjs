"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Input,
  Button,
  Link as MuiLink,
  Grid,
  Stack,
  FormControl,
  FormHelperText,
  InputLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { baseAxios } from "@/utils/myAxios";
import { logIn } from "@/utils/auth";

const schema = z.object({
  identifier: z.string(),
  password: z.string(),
});

type SchemaType = z.infer<typeof schema>;

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({ resolver: zodResolver(schema) });

  const onLogIn = handleSubmit((data) => {
    baseAxios
      .post("token/", data)
      .then((res) => {
        logIn(res.data);
        router.push("/");
      })
      .catch();
  });

  return (
    <Stack component={"form"} spacing={1} onSubmit={onLogIn}>
      <FormControl>
        <InputLabel htmlFor="identifier-labal">아이디</InputLabel>
        <Input maxRows={40} fullWidth {...register("identifier")} />
        <FormHelperText error>
          {errors.identifier?.message && errors.identifier.message}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password-labal">비밀번호</InputLabel>
        <Input maxRows={40} fullWidth {...register("password")} />
        <FormHelperText error>
          {errors.password?.message && errors.password.message}
        </FormHelperText>
      </FormControl>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        로그인
      </Button>
      <Grid container>
        <Grid item xs>
          <MuiLink component={Link} href="/signup" variant="body2">
            회원가입하러 가기
          </MuiLink>
        </Grid>
      </Grid>
    </Stack>
  );
}
