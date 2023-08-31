import { IBoxOffice } from "@/utils/IData";

async function getData() {
  const res = await fetch(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.BOXOFFICE_KEY}&targetDt=20230831`
  );
  if (!res.ok) {
    throw new Error("정보를 가져오는데 실패했습니다.");
  }

  return res.json().then((value) => value.boxOfficeResult);
}

export default async function Page() {
  const data: IBoxOffice = await getData();

  return <main>{data.boxofficeType}</main>;
}
