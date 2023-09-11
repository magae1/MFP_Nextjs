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
import { toast } from "react-toastify";

import { baseAxios } from "@/utils/fetchers";

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
    setError,
    formState: { errors },
  } = useForm<SchemaType>({ resolver: zodResolver(schema) });

  const onLogIn = handleSubmit((data) => {
    baseAxios
      .post("auth/login/", data)
      .then((res) => {
        const accessToken = res.data.access;
        baseAxios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        router.refresh();
      })
      .catch((error) => {
        if (!!error.response && !!error.response.data) {
          setError("password", {
            message: "계정을 찾을 수 없습니다. 아이디/비밀번호를 확인해주세요.",
          });
        } else {
          toast.error("알 수 없는 오류가 발생했습니다");
        }
      });
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
        <Input
          type={"password"}
          maxRows={40}
          fullWidth
          {...register("password")}
        />
        <FormHelperText error>
          {errors.password?.message && errors.password.message}
        </FormHelperText>
      </FormControl>
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <Button type="submit" fullWidth>
            로그인
          </Button>
        </Grid>
        <Grid item xs={6}>
          <MuiLink component={Link} href="/signup" variant="body2">
            회원가입하러 가기
          </MuiLink>
        </Grid>
      </Grid>
    </Stack>
  );
}
