import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import { IDailyBoxOffice } from "@/utils/IData";

interface props {
  data: IDailyBoxOffice;
}

const BoxOffice = ({ data }: props) => {
  const { rnum, rank, movieNm } = data;
  return (
    <Card variant={"outlined"}>
      <CardContent>
        <Typography>{rnum}</Typography>
        <Typography>{movieNm}</Typography>
      </CardContent>
    </Card>
  );
};

export default BoxOffice;
