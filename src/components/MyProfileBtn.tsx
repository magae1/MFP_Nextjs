"use client";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Avatar, ButtonBase, Menu, MenuItem } from "@mui/material";
import useSWR from "swr";

import { baseAxios } from "@/utils/fetchers";
import jwt_decode from "jwt-decode";

const refreshTokenFetcher = baseAxios
  .get("auth/refresh/")
  .then((res) => {
    baseAxios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data.access}`;
    jwt_decode(res.data.access);
  })
  .catch((err) => err);

const MyProfileBtn = () => {
  const { data } = useSWR(refreshTokenFetcher);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickAccount = () => {
    handleClose();
    router.push("/account");
  };

  const logOut = () => {
    baseAxios.post("auth/logout/", null).then((res) => router.refresh());
  };

  return (
    <>
      <ButtonBase
        sx={{ borderRadius: "100%" }}
        id="avatar-button"
        aria-controls={open ? "avatar-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar />
      </ButtonBase>
      <Menu
        id="avatar-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiButtonBase-root": {
            px: 3,
            py: 1,
            textAlign: "center",
          },
        }}
      >
        <MenuItem onClick={onClickAccount}>내 계정</MenuItem>
        <MenuItem onClick={logOut}>로그아웃</MenuItem>
      </Menu>
    </>
  );
};

export default MyProfileBtn;
