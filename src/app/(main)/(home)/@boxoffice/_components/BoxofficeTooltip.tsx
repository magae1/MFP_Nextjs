"use client";
import {
  IconButton,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
import { InfoSharp } from "@mui/icons-material";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const BoxofficeTooltip = (props: { targetDate: Date }) => {
  const { targetDate } = props;

  return (
    <HtmlTooltip
      title={
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
          {"It's very engaging. Right?"}
        </>
      }
    >
      <IconButton size={"small"}>
        <InfoSharp fontSize={"small"} />
      </IconButton>
    </HtmlTooltip>
  );
};

export default BoxofficeTooltip;
