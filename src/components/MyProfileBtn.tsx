"use client";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Skeleton, ButtonBase } from "@mui/material";
import useSWR from "swr";

import { refreshTokenFetcher, baseAxios } from "@/utils/fetchers";
import { IAccessTokenPayLoad } from "@/utils/IData";
import { toast } from "react-toastify";

const MyProfileBtn = () => {
  const { data, error, isLoading } = useSWR<IAccessTokenPayLoad>(
    `auth/refresh/`,
    refreshTokenFetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 1000 * 60 * 20,
      dedupingInterval: 1000 * 60 * 5,
    },
  );

  if (!!error) {
    baseAxios
      .post("auth/logout")
      .then((res) => toast.info("인증 정보가 만료됐습니다."))
      .catch();
  }

  return (
    <ButtonBase
      sx={{ borderRadius: "100%" }}
      id="avatar-button"
      component={Link}
      href={"/account"}
      disabled={isLoading}
    >
      {!data || isLoading ? (
        <Skeleton variant={"circular"}>
          <Avatar />
        </Skeleton>
      ) : (
        <Avatar src={`/media/avatars/${data.account_identifier}.JPEG`} />
      )}
    </ButtonBase>
  );
};

export default MyProfileBtn;
