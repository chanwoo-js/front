//! 쿠키 설정
document.cookie = "cookie02=안녕; path=/;";
document.cookie = "username=lsa; path=/;";
let date = new Date();

console.log(getDate);
document.cookie = "username3=cksdn;  path=/;";


//! 쿠키 값 가져오는 방법
// 1) document.cookie 에서 반환된 문자열을 분석
// 2) 특정 쿠키 이름을 찾아 해당 값을 추출

//? 쿠키 문자열 분리
// : 웹 문서에 저장된 쿠키로부터 문자열을 세미콜론을 기준으로 분리해서 개별 쿠키를 배열로 변환

function getCookieValue(cookieName) { 
  let cookies = document.cookie; // 저장된 쿠키를 가져온다
  console.log(cookies);

  cookies = cookies.split(';'); // 세미콜론으로 분리하여 배열로 변환
  console.log(cookies);

  let length = cookies.length;
  for (let i = 0; i < length; i++) {
    let cookie = cookies[i]; // 배열을 순회하며 각 쿠키를 변수에 저장

    let parts = cookie.split('='); // 쿠키를 이름과 값으로 분리
    let name = parts[0].trim(); // 공백 제거
    if (name === cookieName) {  // 이름이 일치하는지 확인
      return parts[1] || ""; // 값이 있으면 반환하고 값이 없으면 빈 문자열을 반환
    }
  }
  return ''; // 일치하는 쿠키 이름이 없으면 빈 문자열 반환
}

// 쿠키 이름 'username'으로 값 가져오기
let username = getCookieValue("username");
console.log(username);

// 쿠키 값 변경
// 실질적으로 새로운 값을 가진 쿠키를
// 변경하고자 하는 이름으로 재설정

// document.cookie = "변경할쿠키명 = 수정된값;";


// 쿠키 값 삭제
// : 만료날짜를 과거로 설정
// 브라우저가 쿠키를 유효하지 않음으로 인식하여 삭제를 처리

function deleteCookie(cookieName) {
  // 쿠키 이름과 값을 설정하고, 만료 날짜를 과거로 설정하여 삭제
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
}

// 쿠키 삭제 예시
deleteCookie("username");
deleteCookie("userAge");


// 원하는 쿠키 이름, 쿠키 값 사용해서 전체 프로젝트 경로에서 접근 가능한 쿠키 설정
// + 만료 날짜 1시간 뒤로 설정
