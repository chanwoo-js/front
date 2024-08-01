//# 4. switch문

// : 하나의 표현식의 값을 확인하고 해당 값과 일치하는
// case문의 코드 블록을 실행

//* switch case문의 구조 (기본 형태)
/*
switch (식) {
  case 값1 : 
  식이 값1과 일치할 경우
  case 값2 : 
  식이 값2과 일치할 경우
  case 값3 : 
  식이 값3과 일치할 경우
  case 값4 : 
  식이 값4과 일치할 경우
  ...
  default :
    식이 어떤 값과도 일치하지 않을 경우 실행
}
*/

let fruit = "banana";
// case의 데이터 유형은 switch 식의 데이터 유형과 동일
switch (fruit) {
  case "apple":
    console.log("사과");
    break;
    // 동일한 case값을 찾을 경우 : 그다음 이어지는 코드를 모두 실행
    // >> 코드 실행 흐름을 중지하려면 break 키워드를 사용하여 switch 문을 탈출
  case "banana":
    console.log("바나나");
    break;
  case "orange":
    console.log("오렌지");
    break;
  default: //일치하는 값이 없는 경우
    console.log("일치하는 값이 없습니다.")
    break;
}

//! 조건문 종합 예제

// 점수
let score =  70;
// 학점
let grade;

// 점수를 변수에 담아 해당 점수가
// 0 미만 100초과 일 경우 '유효한 점수가 아닙니다'

// 90점 이상 A
// 80점 이상 B
// 70점 이상 C
// 60점 이상 D
// 그외의 경우 F

//? 1. IF문 (else if, else문)
if (score >= 90) {
  grade = "A";
  console.log("A");
} else if (score >= 80){
  grade = "B";
  console.log("B");
} else if (score >= 70){
  grade = "C";
  console.log("C");
} else if (score >= 60){
  grade = "D";
  console.log("D");
} else if (score > 100 && score < 0) {
  console.log("유효한 점수가 아닙니다.");
} else {
  grade = "F";
  console.log("F");
}
//? 2) switch 문
console.log("=== switch case 문 ===");
score = 85;
switch (true) {
  case (score < 0 || score > 100):
    console.log("유효한 점수가 아닙니다."); 
  case score >= 90:
    grade = "A";
    console.log("A");
    break;
  case score >= 80:
    grade = "B";
    console.log("B");
    break;
  case score >= 70:
    grade = "C";
    console.log("C");
    break;
  case score >= 60:
    grade = "D";
    console.log("D");
    break;
  default:
    grade = "F";
    console.log("F");
    break;
}


//? 3) 삼항연산자
score = 100;;

grade = 
score > 100 || score < 0 
? "유효한 점수가 아닙니다."
: score >= 90 
? "A"
: score >= 80
? "B"
: score >= 70
? "C"
: score >= 60
? "D" : "F";

console.log(grade)

// +) 조건식 예제
//! 출력값 확인
// true ? console.log("출력A") : console.log("출력B");
// 출력A
// false ? console.log("출력B") : console.log("출력A");
// 출력A
// true || console.log("출력A")
// 출력X
// true && console.log("출력A")
// 출력A

//* 조건문 Best Practice //

// 1. 비교 연산자 사용시 "==" 대신 "===" 사용을 권장

console.log(0 == false); // true
console.log(0 === false); // false

// 2. 변수에 대한 조건 활용 시 일치/불일치 여부를 생략
let isTrue = true;

if (isTrue === true) {
  console.log("isTrue는 참이다")
}
if (isTrue) console.log("isTrue는 참이다.")
  
if (isTrue !== true) console.log("isTrue는 참이다.")
if (!isTrue) console.log("isTrue는 참이다.")
