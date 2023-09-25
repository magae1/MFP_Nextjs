"use client";
import { Avatar, Box, Button } from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";

const MAX_AVATAR_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const AvatarUpload = () => {
  return (
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
      <Avatar sx={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

export default AvatarUpload;
