async function load() {
  // 사용자의 날짜를 입력받아서 해당 날짜의 일별 박스 오피스 보여주기
  const response = await fetch(
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=10f205e002373d98a4a3d5a5ef0515de&targetDt=20260805",
  );
  const data = await response.json();
  console.log(data);
  // 10개 가져오기
  const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
  console.log(dailyBoxOfficeList);
}
load();
