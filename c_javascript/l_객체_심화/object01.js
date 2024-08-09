//! 자바스크립트 내장 객체
// : 특정 작업 수행이나 복잡한 기능을 담은 메서드와 속성을 제공

//# 1. Number 객체의 기본 메서드

// cf) 기본 자료형 number

// Number - 자바스크립트 내부에 직접 정의 되어 있는 객체(데이터)
// : 수치형 데이터를 처리하는 메서드를 제공

//& 1) toFixed()
// : 소수점 이하 n 자리까만 출력 (반올림)

let num = 123.45672;
console.log(num.toFixed(3)); //3번째까지 출력 그 뒤숫자 반올림 123.457
console.log(num.toFixed(5)); //5번째까지 출력 123.45672
console.log(num.toFixed(6)); //6번째까지 출력 123.456720 올릴게 없으면 0으로 출력
console.log(num.toFixed()); //빈공간 123 정수만 출력

// 2) inNaN(), isFinite ()
// : 각각 NaN 인지 Infinity 인지 확인
// >> Number 객체에 바로 적용 , 인자값으로 확인할 데이터를 삽입

let notNum = Number("숫자로 변환할 수 없는 값");

console.log(notNum); //NaN
console.log(notNum === NaN);// false: NaN 데이터는 비교연산자 사용이 불가 

console.log(Number.isNaN(notNum)); // true

// Infinity (양의 무한대), Infinity(음의 무한대)
// cf) 양수 또는 음수를 0으로 나누면 각각의 무한대 수가 생성

console.log((10/0));
console.log((-10/0));

let infinity = 10/0;
let minusInfinity = -10/0;

console.log(Number.isFinite(infinity));// false
console.log(Number.isFinite(minusInfinity)); //false
console.log(Number.isFinite(10)); //true


//# 2. String 객체의 기본 메서드
// : 문자열을 처리하는 메서드를 제공
//& 1) trim()
// : 문자열 양쪽 끝의 공백(띄어쓰기, 줄바꿈 등)을 없애는 메서드

let stringA = `
  안녕하세요
  만나서 
  반갑습니다.
`;
let stringB = "   앞 뒤 공백을 넣습니다.";
console.log(stringA);
console.log(stringB);

// 공백을 자름 ( 하지만 A의 경우 첫줄만 자름 )
console.log(stringA.trim());
console.log(stringB.trim());

//& 2) split()
// : 문자열을 특정 기호로 자르는 메서드 >> 배열로 반환
let manyData =`
  생년,월,일
  1999,01,01
  2020.34.63
  2545.45.12
  3542.34.64
`;
console.log(manyData);

// 앞뒤 공백 제거
manyData = manyData.trim();

// 줄바꿈으로 자르기(줄바꿈 기호 : \n)
manyData = manyData.split("\n");
console.log(manyData);

// 배열을 순회하여 각문자열 마다 공백을 제거
manyData = manyData.map(line => line.trim());
console.log(manyData); // [ '생년,월,일', '1999,01,01', '2020.34.63', '2545.45.12', '3542.34.64' ]

// 배열 내부의 문자열을, 쉼표를 기준으로 나누기
manyData = manyData.map(line => line.split(","));

console.log(manyData); //2차원 배열

//& 3) length
// : 문자열 길이를 반환
// >> 띄어쓰기, 줄바꿈도 한개의 문자열로 인식 (따옴표는 x)
let stringC = "hello, Js";
console.log(stringC.length);//13

//& toUpperCase(), toLowerCase()
console.log(stringC.toLowerCase()); // hello, js
console.log(stringC.toUpperCase()); // HELLO, JS

