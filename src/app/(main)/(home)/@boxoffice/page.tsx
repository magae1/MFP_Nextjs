import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

import { IBoxOffice } from "@/utils/IData";
import BoxOffice from "@/components/BoxOffice";
import { boxOfficeFetcher } from "@/utils/myAxios";

export default async function Page() {
 const targetDate = dayjs().subtract(25, 'hour');
  const data: IBoxOffice = await boxOfficeFetcher(targetDate.format("YYYYMMDD"));

  return (
    <Box>
      <Typography>{targetDate.format("MMM D일(dd)")} {data.boxofficeType}</Typography>
      <Box sx={{ overflow:"auto" , width:"100%", display: "flex"}}>
        {data.dailyBoxOfficeList.map((value, index) => (
          <div key={index} style={{width:"300px"}}><BoxOffice data={value} /></div>
        ))}
     </Box>
    </Box>
  );
}
