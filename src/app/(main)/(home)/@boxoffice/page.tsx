import { Box, IconButton, Typography } from "@mui/material";
import dayjs from "dayjs";
import {
  ArrowCircleLeftTwoTone,
  ArrowCircleRightTwoTone,
} from "@mui/icons-material";

import { TBoxOffice } from "@/app/_libs/types";
import BoxOffice from "@/app/(main)/(home)/@boxoffice/_components/BoxOffice";
import BoxofficeTooltip from "@/app/(main)/(home)/@boxoffice/_components/BoxofficeTooltip";

async function getData(targetDt: string) {
  const res = await fetch(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.BOXOFFICE_KEY}&targetDt=${targetDt}`,
  );
  if (!res.ok) throw new Error("⚠️데이터를 불러올 수 없습니다.⚠️");
  return res.json().then((data) => data.boxOfficeResult);
}

export default async function Page() {
  const targetDate = dayjs().subtract(25, "hour");
  const data: TBoxOffice = await getData(targetDate.format("YYYYMMDD"));

  return (
    <Box sx={{ width: "100%", flex: 1, aspectRatio: 3 / 2 }}>
      <Typography>
        오늘의 박스오피스 순위
        <BoxofficeTooltip targetDate={targetDate.toDate()} />
      </Typography>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ position: "absolute", top: "50%" }}>
          <IconButton>
            <ArrowCircleLeftTwoTone />
          </IconButton>
        </div>
        {data.dailyBoxOfficeList.map((d) => (
          <div style={{ display: "inline-block" }}>
            <BoxOffice data={d} />
          </div>
        ))}
        <div style={{ position: "absolute", top: "50%", right: 0 }}>
          <IconButton>
            <ArrowCircleRightTwoTone />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
}
