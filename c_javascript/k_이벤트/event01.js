//! === 1. 이벤트 정의 ===
// : 웹 페이지에서 발생하는 대부분의 일(사건)을 의미
// ex) 사용자가 버튼을 클릭, 웹 페이지가 로드, input  필드에 입력하는 것 등


//! === 2. 이벤트 핸들링 (handle : 다루다) === 
// : 특정 이벤트에 반응해서 특정 동작을 실행하는 것을 의미
// >> 이벤트 핸들러(이벤트 리스너)는 특정 이벤트가 발생했을 때 호출되는 함수

//? js 이벤트의 종류

// 1) 마우스 이벤트

// 2) 키보드 이벤트

// 3) 폼 이벤트

// 4) 문서/ 윈도우 이벤트

//! === 3. 이벤트 핸들러 '등록' 방법 ===

// 예시 함수 정의 (이벤트 활용 시 사용 될 " 랜덤 색상 생성 함수 ")
// rgb(r,g,b); >> 0~255까지의 정수가 지정

//* random 함수 정의 : 랜덤 숫자 생성
function random(number) {
  // 1. Math.random()
  // : 0 ~ 1미만의 부동 소수점 난수(랜덤 실수(소수점))을 생성하고 반환

  // 2. Math.floor()
  // : 괄호 안의 수를 내림하여 가장 가까운 정수를 생성하고 반환( 소수점 짜르기? )

  // ex) 0 이상 101 미만의 정수를 생성
  // : 0부터 100까지의 정수 생성
  return Math.floor(Math.random() * (number + 1));
};
console.log(Math.random()); // 0 ~ 1미만
console.log(Math.random() * 100); // 0 ~ 100미만 
console.log(Math.random() * 101); // 0 ~ 101미만 


//* randomColor 함수 정의 : 랜덤 색상 생성
function randomColor () {
  // rgb (x,y,z) 형식과 동일
  // x,y,z에 각각 0부터 255까지의 무작위 정수를 사용
  // ex )rgb(244,31,59);
  return `rgb(${random(255)},${random(255)},${random(255)})`;
};
console.log(randomColor());

//? 1) html 이벤트 핸들러 속성(프로퍼티)
// >> html 요소에 직접 이벤트 핸들러 속성을 설정
// : html 요소를 js의 객체로 가져와서 핸들러 속성을 설정

//& on- 키워드
// :  이벤트의 종류를 연결시켜주는 키워드
// >> html 요소에 함수를 할당해서 이벤트를 연결
// >> 연결할때 함수를 
// 1. button.on- = function () {}을 사용
// 2. <tag> 자체에 onclick 이벤트 함수를 사용 (이건 안쓰기 - react에서는 많이씀)
// 3. addEventListener(on-, "") 사용

const bgButton = document.querySelector("#bgChange"); 
// html 요소를 '참조'

bgButton.onmouseout = function () {
  const color = randomColor();
  bgButton.style.backgroundColor = `${color}`;
  console.log(color);
}

//? 2) 인라인 이벤트 핸들러
// : 사용하지 않는 것을 권장
// >> 코드를 파싱(분석)과 유지보수의 어려움

const textButton = document.querySelector("#textChange");
function textChangeFunc() {
  const color = randomColor();
  textButton.style.color = color;
}

// & html 요소의 참조를 가지고 오는 방법
// cf) js 내에서의 html 인식
// : 자바스크립트의 객체로 인식
// >> dom 으로 인식 (document object model)

// 1. documnet.querySelector("선택자");
// : 같은 선택자 여러 개일 경우 첫번째 요소만 가져옴
const btnButton = document.querySelector("#btn");
btnButton.onclick = function () {
  console.log("버튼이 클릭되었습니다.");
}
// 2. document.querySelectorAll("선택자");
// : 여러 개의 요소의 참조를 모두 가져와서 한 번에 이벤트 핸들러를 추가
// >> 해당 참조값이 배열 리스트로 저장

const divs = document.querySelectorAll("div");

divs.forEach(div => {
  div.onclick = function() {
    this.style.backgroundColor = randomColor();
  }
})

//? 3) addEventListener 메서드
// : 표준 이벤트 모델
// html 요소에 addEventListner 메서드를 사용하여 이벤트를 등록하는 방법
// >> 한 요소에 여러 개의 이벤트 핸들러 등록 가능

// addEventLister 메서드는 html 요소(객체)에 사용

const btnsButton = document.querySelectorAll('.btnsChange');
console.log(btnsButton);
// forEach
// btnsButton.addEventListener("click", function () {
//   const color = randomColor();
//   btnsButton.style.backgroundColor = color; 

// })
btnsButton.forEach(function(button) {
  // btn은 dom 요소(html 요소를 객체로 변환)
  button.addEventListener("click", function() {
    const color = randomColor();
    button.style.backgroundColor = color;
  });
});

//? === 4) 이벤트 제거하는 방법 ===
// : removeEventListener() 메서드 사용
// >> 이벤트 핸들러를 제거하는 메서드

const removeButton = document.querySelector("#remove");

removeButton.addEventListener("click", () => {
  const color = randomColor();
  removeButton.style.color = color;
})

//제거
removeButton.removeEventListener("click", () => {
  const color = randomColor();
  removeButton.style.color = color;
})