// // 문제 1
// let name = prompt("이름을 입력해주세요");
// // 숫자에 대한 자료 호라용을 위해 형변환이 필요
// let age = Number(prompt("나이를 입력해주세요"));

// console.log(typeof(name));
// console.log(typeof(age));

// // 문제 
// const NUM1 = Number(prompt("숫자1"));
// const NUM2 = Number(prompt("숫자2"));

// console.log('두 수의 합은' + ( NUM1+ NUM2) + '입니다')


// 연산자 예제
// prompt 창으로 입력받는 값의 타입은 string(문자열)

// //! 문제1
// // 원의 넓잇값을 계싼하여 출력
// const PI = 3.14;
// let radius; // 원의 반지름 값
// let area = PI * radius * radius;
// console.log(area)


// //! 문제2
// // 1 inch = 2.54cm : 단위 변환기 프로그램만들기 ( inch값을 변수에 대입하면 cm값으로 변환하여 해당 값을 출력)
// let inch = Number(prompt("인치를 입력하세요"));
// let result = inch * 2.54;
// console.log("inch값은 " + inch + ", cm값은 " + result + "입니다");

// //! 문제3
// let num = Number(prompt("숫자를 입력해주세요"));
// let result = num%2 === 0 ? "짝수" : "홀수";
// console.log(result);

// //! 문제4
// let total = 0;

// total += 5;
// total *= 3;
// total -= 2;
// console.log(total);


//% === 조건문 예제 === //
//! 윤년 계산기
let randomYear = 12;
// 윤년의 조건
// 년도가 4로 나누어 떨어지는 해는 윤년입니다.
// 그 중에서 100으로 나누어 떨어지는 해는 윤년이 아닙니다.
// 하지만 400으로 나누어 떨어지는 해는 다시 윤년이 됩니다.

// 윤년일 경우 : randomYear 년은 윤년입니다.
// 윤년이 아닐 경우 : randomYear년은 윤년이 아닙니다.

if (!(randomYear % 400)) {
  console.log("randomYear은 윤년입니다.")
} else if ( !(randomYear%100)) {
  console.log("randomYear은 윤년이 아닙니다.")
} else if (!(randomYear%4)) {
  console.log("randomYear은 윤년입니다.")
} else {console.log("randomYear년은 윤년이 아닙니다.")}



