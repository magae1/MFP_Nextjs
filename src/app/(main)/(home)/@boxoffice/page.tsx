import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

import { IBoxOffice } from "@/utils/IData";
import BoxOffice from "@/components/BoxOffice";
import { boxOfficeFetcher } from "@/utils/fetchers";

export default async function Page() {
  const targetDate = dayjs().subtract(25, "hour");
  const data: IBoxOffice = await boxOfficeFetcher(
    targetDate.format("YYYYMMDD"),
  );

  return (
    <Paper sx={{ py: 2, px: 3 }} elevation={0}>
      <Typography>
        {targetDate.format("MMM D일(dd)")} {data.boxofficeType}
      </Typography>
      <Box sx={{ overflow: "auto", width: "100%", display: "flex" }}>
        <Stack direction={"row"} spacing={1}>
          {!!data.dailyBoxOfficeList &&
            data.dailyBoxOfficeList.map((value, index) => (
              <Box key={index} sx={{ width: "150px" }}>
                <BoxOffice data={value} />
              </Box>
            ))}
        </Stack>
      </Box>
    </Paper>
  );
}
