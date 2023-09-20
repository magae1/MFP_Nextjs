import { Box, Paper, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

import { IBoxOffice } from "@/utils/IData";
import BoxOffice from "@/components/BoxOffice";

async function getData(targetDt: string) {
  const res = await fetch(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.BOXOFFICE_KEY}&targetDt=${targetDt}`,
    { cache: "force-cache" },
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json().then((data) => data.boxOfficeResult);
}

export default async function Page() {
  const targetDate = dayjs().subtract(25, "hour");
  const data: IBoxOffice = await getData(targetDate.format("YYYYMMDD"));

  return (
    <Box sx={{ py: 2, px: 3 }}>
      <Typography>
        {targetDate.format("MMM D일(dd)")} {data.boxofficeType}
      </Typography>
      <Paper sx={{ overflow: "auto", width: "100%", display: "flex", p: 1 }}>
        <Stack direction={"row"} spacing={1}>
          {!!data.dailyBoxOfficeList &&
            data.dailyBoxOfficeList.map((value, index) => (
              <Box key={index} sx={{ width: "150px" }}>
                <BoxOffice data={value} />
              </Box>
            ))}
        </Stack>
      </Paper>
    </Box>
  );
}
