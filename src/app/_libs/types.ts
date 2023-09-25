export type TObtainPair = {
  access: string;
  refresh: string;
};

export type TTokenPayload = {
  token_type: string;
  exp: number;
  iat: number;
  jit: string;
  account_identifier: string;
};

export type TRefresh = {
  access: string;
};

export type TDailyBoxOffice = {
  rnum: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  salesAmt: string;
  salesShare: string;
  salesInten: string;
  salesChange: string;
  salesAcc: string;
  audiCnt: string;
  audiInten: string;
  audiChange: string;
  audiAcc: string;
  scrnCnt: string;
  showCnt: string;
};

export type TBoxOffice = {
  boxofficeType: string;
  showRange: string;
  dailyBoxOfficeList: TDailyBoxOffice[];
};

export type TTMDBSearchResult = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TTMDBSearchResultPage = {
  page: number;
  result: TTMDBSearchResult[];
  total_pages: number;
  total_result: number;
};

export type TProfile = {
  account: string;
  avatar: string | null;
  nickname: string;
  introduction: string;
};

export type TAccount = {
  id: string;
  identifier: string;
  last_password_changed: Date;
  profile: TProfile;
};
