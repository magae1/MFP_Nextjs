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
    <Card>
      <Image
        src={TMDB_IMAGE_URL + searchResult.results[0].poster_path}
        width={150}
        height={200}
        alt={`poster ${movieNm}`}
      />
      <CardContent sx={{ position: "relative", bgcolor: "primary.main" }}>
        <Typography
          sx={{
            position: "absolute",
            left: "1px",
            top: -1,
            backgroundColor: "white",
          }}
        >
          {rnum}
        </Typography>
        <Typography>{movieNm}</Typography>
      </CardContent>
    </Card>
  );
};

export default BoxOffice;
