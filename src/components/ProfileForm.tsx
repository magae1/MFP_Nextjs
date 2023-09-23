"use client";
import { useCallback, useRef } from "react";
import Image from "next/image";
import {
  Grid,
  Box,
  Avatar,
  Stack,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";

import { IProfile } from "@/utils/IData";
import { baseAxios } from "@/utils/fetchers";
import axios from "axios";

const schema = z.object({
  nickname: z.string({
    required_error: "닉네임은 반드시 입력되어야 합니다.",
  }),
  introduction: z.string().or(z.literal("")),
});

type SchemaType = z.infer<typeof schema>;

export default function ProfileForm(props: { profile: IProfile }) {
  const { profile } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      nickname: profile.nickname,
      introduction: profile.introduction,
    },
  });

  const onSubmit = handleSubmit((data) => {
    axios
      .post(`/api/account/profile/`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => toast.info("123"))
      .catch((error) => console.error(error));
  });

  return (
    <Grid
      container
      spacing={2}
      component={"form"}
      autoComplete={"off"}
      onSubmit={onSubmit}
      sx={{
        width: "100%",
        "& .MuiInputBase-input": { p: 1 },
        "& .MuiInputBase-root": { px: 0, py: 1 },
      }}
    >
      <Grid item xs={4} lg={3}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "200px",
            aspectRatio: 1,
          }}
        >
          <Button
            sx={{
              position: "absolute",
              bottom: { xs: -7, sm: -3 },
              right: 0,
              zIndex: 500,
              borderRadius: "6px",
            }}
          >
            <AddPhotoAlternate />
          </Button>
          <Avatar
            src={`/media/avatars/${profile.account}.JPEG`}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={8}
        lg={9}
        sx={{ "& .MuiFormControl-root": { width: "100%" } }}
      >
        <Stack spacing={{ xs: 1, md: 2 }}>
          <TextField
            fullWidth
            label={"닉네임"}
            error={!!errors.nickname}
            helperText={!!errors.nickname && errors.nickname.message}
            {...register("nickname")}
          />
          <TextField
            fullWidth
            label={"소개"}
            multiline
            error={!!errors.introduction}
            helperText={!!errors.introduction && errors.introduction.message}
            {...register("introduction")}
          />
          <Box display={"flex"} sx={{ justifyContent: "end" }}>
            <Button type="submit" disabled={!isDirty}>
              변경
            </Button>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
