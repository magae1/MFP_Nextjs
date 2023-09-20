"use client";
import Image from "next/image";
import { Grid, Box, Avatar, Stack, TextField, Button } from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";

import { IProfile } from "@/utils/IData";
import { baseAxios } from "@/utils/fetchers";

const MAX_AVATAR_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const schema = z.object({
  avatar: typeof window === "undefined" ? z.any() : z.instanceof(File),
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
    baseAxios
      .patch(
        `account/`,
        { profile: data },
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      )
      .then((res) => toast.info(res.statusText))
      .catch();
  });

  return (
    <Grid
      container
      spacing={2}
      sx={{
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
            component={"label"}
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              zIndex: 500,
            }}
          >
            <AddPhotoAlternate />
          </Button>
          <input
            type={"file"}
            id={"avatar-input"}
            accept={ACCEPTED_IMAGE_TYPES.join(", ")}
          />
          <Avatar sx={{ width: "100%", height: "100%" }}>
            {profile.avatar && (
              <Image src={profile.avatar} fill sizes={"100%"} alt={"아바타"} />
            )}
          </Avatar>
        </Box>
      </Grid>
      <Grid item xs={8} sx={{ "& .MuiFormControl-root": { width: "100%" } }}>
        <Stack
          spacing={{ xs: 1, md: 2 }}
          component={"form"}
          autoComplete={"off"}
          onSubmit={onSubmit}
        >
          <TextField
            fullWidth
            label={"닉네임"}
            helperText={!!errors.nickname && errors.nickname.message}
            {...register("nickname")}
            error={!!errors.nickname}
          />
          <TextField
            fullWidth
            label={"소개"}
            multiline
            error={!!errors.introduction}
            helperText={!!errors.introduction && errors.introduction.message}
            {...register("introduction")}
          />
          <Box>
            <Button type="submit" disabled={!isDirty}>
              변경
            </Button>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
