"use client";
import React, { ReactNode, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link as MuiLink,
  Stack,
  useFormControl,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import validator from "validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import _ from "underscore";

import { baseAxios } from "@/utils/myAxios";

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
        }
      )
      .refine(
        async (value) => {
          try {
            await baseAxios.get("signup/confirm_identifier/", {
              params: { identifier: value },
            });
            return true;
          } catch {
            return false;
          }
        },
        { message: "이미 사용 중인 아이디입니다." }
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

const SignUpLabel = (props: {
  children: ReactNode;
  htmlFor?: string;
  isValid: boolean;
}) => {
  const { children, htmlFor, isValid } = props;
  const theme = useTheme();
  const { focused, filled } = useFormControl() || {};

  const color = useMemo(() => {
    if (!focused && filled) {
      if (isValid) return theme.palette.success.main;
      return theme.palette.error.main;
    }
    return undefined;
  }, [focused, filled, isValid]);

  return (
    <InputLabel htmlFor={htmlFor} sx={{ color: color }}>
      {children}
    </InputLabel>
  );
};

const SignUpForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({ resolver: zodResolver(schema) });

  const onSignUp = handleSubmit((data, event) => {
    baseAxios
      .post("signup/", data)
      .then((res) =>
        router.push(
          `/welcome/?identifier=${res.data.identifier}&email=${res.data.email}`
        )
      )
      .catch((error) => {
        if (error.response.data) {
          _.chain(error.response.data)
            .values()
            .flatten()
            .every((value) => toast.error(value));
        } else {
          toast.error("알 수 없는 오류가 발생했습니다.");
        }
      });
  });

  return (
    <Stack
      component={"form"}
      spacing={1}
      onSubmit={onSignUp}
      autoComplete={"off"}
    >
      <FormControl>
        <SignUpLabel htmlFor="identifier-labal" isValid={!errors.identifier}>
          아이디*
        </SignUpLabel>
        <Input maxRows={40} fullWidth {...register("identifier")} />
        <FormHelperText error>
          {errors.identifier?.message && errors.identifier.message}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <SignUpLabel htmlFor={"email-label"} isValid={!errors.email}>
          이메일
        </SignUpLabel>
        <Input fullWidth inputMode={"email"} {...register("email")} />
        <FormHelperText error>
          {errors.email?.message && errors.email.message}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <SignUpLabel htmlFor={"password-label"} isValid={!errors.password}>
          비밀번호*
        </SignUpLabel>
        <Input
          fullWidth
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="비밀번호 보기 버튼"
                onClick={() => setShowPassword((v) => !v)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          {...register("password")}
        />
        <FormHelperText error>
          {errors.password?.message && errors.password.message}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <SignUpLabel htmlFor={"repassword-label"} isValid={!errors.re_password}>
          비밀번호(확인)*
        </SignUpLabel>
        <Input
          fullWidth
          type={showRepassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="확인 비밀번호 보기 버튼"
                onClick={() => setShowRepassword((v) => !v)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {showRepassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          {...register("re_password")}
        />
        <FormHelperText error>
          {errors.re_password?.message && errors.re_password.message}
        </FormHelperText>
      </FormControl>
      <Button type={"submit"}>회원가입</Button>
      <Box sx={{ display: "flex", pt: 1, flexWrap: "wrap" }}>
        <MuiLink component={Link} href={"/login"} variant={"body2"}>
          로그인하러 가기
        </MuiLink>
      </Box>
    </Stack>
  );
};

export default SignUpForm;
