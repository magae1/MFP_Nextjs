"use client";
import Link from "next/link";
import {
  Input,
  Button,
  Link as MuiLink,
  Grid,
  Stack,
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

import { baseAxios } from "@/utils/fetchers";
import { IAccessTokenPayLoad } from "@/utils/IData";
import { storeTokenPayload } from "@/utils/tokens";

const schema = z.object({
  identifier: z.string().min(1, "아이디를 입력해주세요."),
  password: z.string().min(1, "비밀번호를 입력해주세요."),
});
export type LoginSchemaType = z.infer<typeof schema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(schema) });

  const onLogIn = handleSubmit((data) => {
    baseAxios
      .post("auth/login", data)
      .then((res) => location.replace("/"))
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
    <Stack component={"form"} spacing={2} onSubmit={onLogIn}>
      <TextField
        fullWidth
        label={"아이디"}
        error={!!errors.password}
        {...register("identifier")}
      />
      <TextField
        fullWidth
        label={"비밀번호"}
        type={"password"}
        helperText={errors.password?.message && errors.password.message}
        error={!!errors.password}
        {...register("password")}
      />
      <Grid container>
        <Grid item xs={12}>
          <Button type="submit" fullWidth>
            로그인
          </Button>
        </Grid>
        <Grid item xs={"auto"}>
          <MuiLink component={Link} href="/signup" variant="body2">
            회원가입하러 가기
          </MuiLink>
        </Grid>
      </Grid>
    </Stack>
  );
}
