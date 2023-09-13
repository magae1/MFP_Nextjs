import { Stack, Box, Divider, Typography } from "@mui/material";

import { baseAxios } from "@/utils/fetchers";
import SettingBlock from "@/components/SettingBlock";
import ProfileForm from "@/components/ProfileForm";

async function getData() {
  const data = await baseAxios.get(`account/${}`);
}

export async function Page() {
  return (
    <>
      <Box py={4}>
        <Typography variant={"h4"}>내 계정</Typography>
      </Box>
      <Stack divider={<Divider />} spacing={{ xs: 2, sm: 3 }}>
        <SettingBlock subtitle={"프로필"}>
          <ProfileForm />
        </SettingBlock>
        <SettingBlock subtitle={"비밀번호 변경"}>ojh</SettingBlock>
      </Stack>
    </>
  );
}
