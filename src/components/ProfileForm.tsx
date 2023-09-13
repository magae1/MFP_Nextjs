"use client";
import { useMemo } from "react";
import Image from "next/image";
import { Grid, Box, FormHelperText, OutlinedInput } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import _ from "underscore";

import { IProfile } from "@/utils/IData";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z.object({
  avatar: z
    .instanceof(File)
    .refine(
      (avatar) => avatar.size <= MAX_FILE_SIZE,
      "최대 5MB까지 업로드 가능합니다.",
    )
    .refine(
      (avatar) => ACCEPTED_IMAGE_TYPES.includes(avatar.type),
      ".jpeg, .jpg, .png, .webp형식의 파일만 업로드 가능합니다.",
    )
    .nullable(),
  nickname: z.string({
    required_error: "닉네임은 반드시 입력되어야 합니다.",
  }),
  introduction: z.string().or(z.literal("")),
});
type SchemaType = z.infer<typeof schema>;

const ProfileForm = (props: { profile: IProfile }) => {
  const { profile } = props;
  const {
    register,
    handleSubmit,
    watch,
    setError,
    getValues,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      avatar: null,
      nickname: profile.nickname,
      introduction: profile.introduction,
    },
  });

  const avatarSrc = useMemo(() => {
    const imageFile = getValues("avatar");
    return _.isNull(imageFile)
      ? profile.avatar
      : URL.createObjectURL(imageFile);
  }, [watch("avatar")]);

  return (
    <Grid
      container
      spacing={1}
      sx={{
        "& .MuiInputBase-input": { p: 1 },
        "& .MuiInputBase-root": { px: 0, py: 1 },
      }}
      component={"form"}
      autoComplete={"off"}
    >
      <Grid item xs={4}>
        <Box>
          <Image
            src={avatarSrc}
            alt={"아바타"}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <input
            type={"file"}
            hidden
            accept={ACCEPTED_IMAGE_TYPES.join(", ")}
            {...register("avatar")}
          />
        </Box>
      </Grid>
      <Grid container item xs={8}>
        <Grid item xs={12}>
          <label>닉네임</label>
          <OutlinedInput fullWidth {...register("nickname")} />
          <FormHelperText error>
            {errors.nickname?.message && errors.nickname.message}
          </FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <label>소개</label>
          <OutlinedInput fullWidth multiline {...register("introduction")} />
          <FormHelperText error>
            {errors.introduction?.message && errors.introduction.message}
          </FormHelperText>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileForm;
