const dateInput = document.querySelector("#date");
// date 날짜 항상 어제 날짜까지만 가능하도록
const today = () => {
  // 오늘날짜
  const date = new Date();
  // 어제날짜
  date.setDate(date.getDate() - 1);
  console.log(date.toISOString()); // 2026-08-06T01:42:31.867Z
  return date.toDateString().split("T")[0];
};
dateInput.max = today();

async function load(date) {
  // 사용자의 날짜를 입력받아서 해당 날짜의 일별 박스 오피스 보여주기
  const url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=10f205e002373d98a4a3d5a5ef0515de&targetDt=";

  const requestUrl = url + date;
}
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    console.log(data);
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);
  }
    let result = "";
    dailyBoxOfficeList.forEach((item) => {
      result += `<tr>`;
      result += `<td>$(item.rank)</td>`;
      result += `<td>$(item.rankInten)</td>`;
      result += `<td><a href =`$(item.movie) $(item.movieNm)</td>`;
      result += `<td>$(item.openDt)</td>`;
      result += `<td>$(item.audiCnt)</td>`;
      result += `<td>$(item.audiAcc)</td>`;
      result += `<td>$(item.saleAcc)</td>`;
      result += `</tr>`;
    });

    const table = document.querySelector("table");
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = result;
    table.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

// 사용자가 날짜를 변경하면 선택된 날짜 가져와서 데이터 요청하러 가기
dateInput.addEventListener("change", (e) => {
  const selDate = e.target.value;
  console.log(selDate);
  // selDate : 2026-08-05 => 20260805
  // selDate.replace("-","").replace("-","")
  // selDate.split("-").join("")
  load(selDate.split("-").join(""));
});

// 영화명 클릭 시 영화상세정보 가져와서 화면에 보여주기
// 1) movieCd 가져오기 : href
// 2) a 태그 기능 중지 : e.preventDefault()
// https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=10f205e002373d98a4a3d5a5ef0515de&targetDt="

document.q
