"use client";
import { ReactNode, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Grid,
  Button,
  InputLabel,
  Link as MuiLink,
  Stack,
  TextField,
  useFormControl,
  useTheme,
} from "@mui/material";
import validator from "validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import _ from "underscore";

import { baseAxios } from "@/utils/fetchers";

const schema = z
  .object({
    identifier: z
      .string()
      .min(5, { message: "최소 5자 이상이어야 합니다." })
      .refine(
        (value) =>
          validator.isAlphanumeric(value, undefined, { ignore: "_-" }) &&
          validator.isLowercase(value),
        {
          message: "영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
        },
      ),
    email: z.string().email("이메일 형식이 아닙니다.").or(z.literal("")),
    password: z
      .string()
      .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." }),
    re_password: z.string(),
  })
  .refine((data) => data.password === data.re_password, {
    path: ["re_password"],
    message: "비밀번호가 일치하지 않습니다.",
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

  const onSignUp = handleSubmit((data, event) => {
    baseAxios
      .post("signup/", data)
      .then((res) =>
        router.push(
          `/welcome/?identifier=${res.data.identifier}&email=${res.data.email}`,
        ),
      )
      .catch((error) => {
        if (!!error.response && !!error.response.data) {
          _.chain(error.response.data)
            .pairs()
            .each(([fieldName, errors]) => {
              if (
                fieldName === "identifier" ||
                fieldName === "password" ||
                fieldName === "email" ||
                fieldName === "re_password"
              ) {
                _.every(errors, (e) => setError(fieldName, { message: e }));
              }
            });
        } else toast.error("알 수 없는 오류가 발생했습니다.");
      });
  });

  return (
    <Stack
      component={"form"}
      spacing={2}
      onSubmit={onSignUp}
      autoComplete={"off"}
    >
      <TextField
        fullWidth
        label={"아이디*"}
        helperText={errors.identifier?.message && errors.identifier.message}
        error={!!errors.identifier}
        {...register("identifier")}
      />
      <TextField
        fullWidth
        label={"이메일"}
        helperText={errors.email?.message && errors.email.message}
        error={!!errors.email}
        {...register("email")}
      />
      <TextField
        fullWidth
        label={"비밀번호*"}
        helperText={errors.password?.message && errors.password.message}
        error={!!errors.password}
        {...register("password")}
      />
      <TextField
        fullWidth
        label={"비밀번호(확인)*"}
        helperText={errors.re_password?.message && errors.re_password.message}
        error={!!errors.re_password}
        {...register("re_password")}
      />
      <Grid container>
        <Grid item xs={12}>
          <Button fullWidth type={"submit"}>
            회원가입
          </Button>
        </Grid>
        <Grid item xs={"auto"}>
          <MuiLink component={Link} href={"/login"} variant={"body2"}>
            로그인하러 가기
          </MuiLink>
        </Grid>
      </Grid>
    </Stack>
  );
}
