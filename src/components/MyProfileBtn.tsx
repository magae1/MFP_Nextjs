"use client";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Skeleton, ButtonBase } from "@mui/material";
import useSWR from "swr";

import { refreshTokenFetcher } from "@/utils/fetchers";
import { IAccessTokenPayLoad } from "@/utils/IData";

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

  return (
    <ButtonBase
      sx={{ borderRadius: "100%" }}
      id="avatar-button"
      component={Link}
      href={"/account"}
    >
      {!data || isLoading ? (
        <Skeleton variant={"circular"}>
          <Avatar />
        </Skeleton>
      ) : (
        <Avatar>
          {data.avatar && (
            <Image
              src={`http://127.0.0.1:8000${data.avatar}`}
              alt={"아바타"}
              fill
              sizes={"100%"}
            />
          )}
        </Avatar>
      )}
    </ButtonBase>
  );
};

export default MyProfileBtn;
