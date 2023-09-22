"use client";
import { Box, Divider, Stack, Typography } from "@mui/material";
import useSWR from "swr";

import { baseGetFetcher } from "@/utils/fetchers";
import SettingBlock from "@/components/SettingBlock";
import ProfileForm from "@/components/ProfileForm";
import { IAccount } from "@/utils/IData";
import ClientLoading from "@/components/ClientLoading";

export default function Page() {
  const { data, error, isLoading, isValidating, mutate } = useSWR<IAccount>(
    "account/me/",
    baseGetFetcher,
    {
      revalidateOnFocus: false,
    },
  );

  if (error) return <Box>fail</Box>;
  if (!data || isLoading || isValidating)
    return (
      <ClientLoading sx={{ width: "100%", height: "calc(100vh - 45px)" }} />
    );
  return (
    <>
      <Box py={4}>
        <Typography variant={"h4"}>내 계정</Typography>
        <Typography variant={"h6"}>안녕하세요! {data.identifier}님</Typography>
      </Box>
      <Stack divider={<Divider />} spacing={{ xs: 2, sm: 2 }}>
        <SettingBlock subtitle={"프로필"}>
          <ProfileForm profile={data.profile} />
        </SettingBlock>
        <SettingBlock subtitle={"비밀번호 변경"}>ojh</SettingBlock>
      </Stack>
    </>
  );
}
