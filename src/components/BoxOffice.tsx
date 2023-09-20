import Image from "next/image";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { IDailyBoxOffice } from "@/utils/IData";

interface props {
  data: IDailyBoxOffice;
}

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w342";

async function getData(movie: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&language=ko&region=KR&api_key=${process.env.TMDB_API_KEY}`,
  );
  if (!res.ok) throw new Error("21");
  return res.json();
}

const BoxOffice = async ({ data }: props) => {
  const { rnum, rank, movieNm } = data;

  const searchResult = await getData(movieNm);

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
