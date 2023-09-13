export interface IDailyBoxOffice {
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
}

export interface IBoxOffice {
  boxofficeType: string;
  showRange: string;
  dailyBoxOfficeList: IDailyBoxOffice[];
}

export interface IObtainTokens {
  refresh: string;
  access: string;
}

export interface IRefreshTokens {
  refresh: string;
}

export interface ITMDBSearchResult {
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
}

export interface ITMDBSearchResultPage {
  page: number;
  result: ITMDBSearchResult[];
  total_pages: number;
  total_result: number;
}

export interface IAccessTokenPayLoad {
  exp: string;
  iat: string;
  jti: string;
  account_identifier: string;
  nickname: string;
  avatar: string;
}

export interface IProfile {
  account: string;
  avatar: string;
  nickname: string;
  introduction: string;
}

export interface IAccount {
  identifier: string;
  last_password_changed: Date;
  profile: IProfile;
}
