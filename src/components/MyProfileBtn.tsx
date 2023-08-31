"use client";
import React, { useState, MouseEvent } from "react";
import { Avatar, ButtonBase, Menu, MenuItem } from "@mui/material";

const MyProfileBtn = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      >
        <MenuItem onClick={handleClose}>내 프로필</MenuItem>
        <MenuItem onClick={handleClose}>로그아웃</MenuItem>
      </Menu>
    </>
  );
};

export default MyProfileBtn;
