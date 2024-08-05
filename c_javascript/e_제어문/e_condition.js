// 자바스크립트의 "제어"문
// 조건문, 반복문

//# 1. 조건문(condition)
//? 1. js의 조건문 종류
// if문, else문, else if문, switch문

//! 1. if문 : 특정 조건이 "참"이면 코드 블록을 실행

//* if문의 구조 (기본 형태) 만약~ 참이라면
// if(조건) {
//   // 조건이 참(true) 일 때 실행할 코드
// }
// // >> 조건 : 보통 비교 연산자를 사용하여 표현

let number = 10;
if (number > 0) {
  console.log("양의 정수입니다.");
}

let stringData = "";
let numberData = 0;

if (stringData) {
  console.log("빈 문자열은 false로 인식됩니다.");
}

if (!stringData) {
  console.log("빈 문자열은 false로 인식됩니다.");
}

//! else문 (그 밖에)
// : if문과 함께 사용
// : if문의 주어진 조건이 거짓일 때 실행할 코드 블록을 정의

//* (if) else 문의 구조 (기본 형태)
/*
if(조건) {
  조건이 참일 떄 실행되는 코드
} else {
 조건이 거짓일 때 실행되는 코드
}
*/

number = -10;
if (number > 0) {
  // 조건이 1이 참
  console.log("양의 정수입니다");
} else if (number < 0) {
  // 조건 1 거짓 && 조건 2 참
  console.log("음의 정수입니다.");
} else {
  // 두 가지 조건식 모두 false 인 경우
  console.log("0입니다");
}

//! 3. if-else 문
// : if와 else 사이에 여러 개의 조건을 추가

//* else if문의 구조 (기본 형태)
/*
if (조건1) {
  조건 1이 참인 경우
} else if (조건2) {
  조건 1이 거짓 && 조건2가 참
} else if (조건3) {
  조건 1이 거짓 && 조건 2이 거짓 && 조건2가 참
  ...
} else {
  모든 조건이 거짓일 때 실행되는 코드
}
*/

// +) 조건문 작성 팁!
// (1) 실행될 코드 블럭이 한 줄일 경우에만 코드 축약 가능
if (number > 0) console.log("양수 o")
else console.log("양수 x")

// (2) if문 형태의 로직들은 삼항 연산자로 변환이 가능
// 조건문의 경우 코드블럭의 다양한 표현이 가능
//! 삼항 연산자의 경우 코드의 간결성과 {} 사용을 하지 않아 다양한 활용 가능

//? 조건문 예제
// 13살 미만 : 어린이
// 13살 이상 20살 미만 : 청소년
// 20살 이상 : 성인
let age;

if (age < 13 ){
  console.log("어린이");
} else if (age < 20) {
  console.log("청소년");
} else {
  console.log("성인")
}