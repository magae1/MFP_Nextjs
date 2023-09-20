import { Box, BoxProps, CircularProgress } from "@mui/material";

const ClientLoading = (props: BoxProps) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      {...props}
    >
      <CircularProgress />
    </Box>
  );
};

export default ClientLoading;
