import Image from "next/image";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { TDailyBoxOffice } from "@/app/_libs/types";

interface props {
  data: TDailyBoxOffice;
}

const BoxOffice = async ({ data }: props) => {
  const { rnum, rank, movieNm } = data;

  return (
    <Card sx={{ width: "inherit" }}>
      <CardMedia
        sx={{ position: "relative", width: "100%", aspectRatio: 3 / 4 }}
      >
        {/*<Image*/}
        {/*  src={TMDB_IMAGE_URL + searchResult.results[0].poster_path}*/}
        {/*  alt={`poster ${movieNm}`}*/}
        {/*  fill*/}
        {/*  sizes={"100%"}*/}
        {/*/>*/}
      </CardMedia>
      <CardContent>
        <Typography>{rnum}</Typography>
        <Typography>{movieNm}</Typography>
      </CardContent>
    </Card>
  );
};

export default BoxOffice;
