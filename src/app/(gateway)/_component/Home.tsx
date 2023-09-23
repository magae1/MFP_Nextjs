"use client";
import { Typography, Box, useTheme, Stack } from "@mui/material";
import Link from "next/link";
import { useSpringRef, useSpring, useChain, animated } from "@react-spring/web";

const AnimatedTypo = animated(Typography);

export default function Home() {
  const theme = useTheme();

  const footprintSpringRef = useSpringRef();
  const footprintSprings = useSpring({
    ref: footprintSpringRef,
    from: { scale: 2 },
    to: { scale: 1.2 },
    delay: 500,
  });

  const titleSpringRef = useSpringRef();
  const titleSprings = useSpring({
    ref: titleSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useChain([footprintSpringRef, titleSpringRef], [0, 1], 900);
  return (
    <Box
      component={Link}
      href={"/"}
      sx={{ textDecoration: "none", color: theme.palette.primary.contrastText }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography variant={"subtitle1"} mr={1}>
          영화에 남기는
        </Typography>
        <animated.span style={footprintSprings}>👣</animated.span>
      </Box>
      <AnimatedTypo variant={"h2"} pl={3} style={titleSprings}>
        영자국
      </AnimatedTypo>
    </Box>
  );
}
