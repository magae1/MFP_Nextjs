import React from "react";
import Image from "next/image";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { IDailyBoxOffice } from "@/utils/IData";
import { tmdbFetcher } from "@/utils/fetchers";

interface props {
  data: IDailyBoxOffice;
}

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w342";

const BoxOffice = async ({ data }: props) => {
  const { rnum, rank, movieNm } = data;

  const searchResult = await tmdbFetcher(movieNm);

  return (
    <Card sx={{ width: "inherit" }}>
      <CardMedia
        sx={{ position: "relative", width: "100%", aspectRatio: 3 / 4 }}
      >
        <Image
          src={TMDB_IMAGE_URL + searchResult.results[0].poster_path}
          alt={`poster ${movieNm}`}
          fill
          sizes={"100%"}
        />
      </CardMedia>
      <CardContent>
        <Typography>{rnum}</Typography>
        <Typography>{movieNm}</Typography>
      </CardContent>
    </Card>
  );
};

export default BoxOffice;
