// 연산자 : 수학적 계산을 위한 코드
// >> 산술, 할당, 비교, 논리

//# 1. 산술 연산자
// +, - , * , / (사칙 연산)
// ++(증가), --(감소), %(나눗셈-나머지) 

let x = 10;
let y = 3;

console.log("===산술연산자==="); // 콘솔창에서의 구분
console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333333....
console.log(x % y); // 1 (나머지값)
console.log(10 % 2); // 0(딱 떨어지는 값)

// + ) 증감 연산자
// : ++, --의 형태로 수를 1씩 증가 또는 감소 시킬 때 사용하는 연산자

x = 10; //변수 재할당
console.log(x++); // 10 + 1 = 11될것 같지만 10이 나온다
console.log(x); // 이떄 10으로 바뀌어있다. x보다 ++증가표시가 뒤에 있을경우에는 해당위치에서 이미 x가 1증가된 값으로 들어갔지만 우리가 보는 값에서는 반영되지않고 다음에 x를 불렀을때 반영된 값으로 표현된다.

console.log(x++); // 10 (+1)
console.log(x++); // 11 (+1)
console.log(x); // 12
console.log(x++); // 12 (+1)
console.log(x); // 13

x = 10;
console.log(--x); // 9
console.log(x); // 9
console.log(--x); // 8
console.log(--x); // 7
console.log(x); // 7
console.log(--x); // 6

x = 10;
x++; // 11 10
x++; // 12 11
--x; // 11
x++; // 11 12
x; // 12
x++; // 13 12
++x; // 14
--x; // 13

x = 14;
y = x-- + 5 + --x;
console.log(y);
// 14 + 14 + 5 - 2 = 31

//# 2. 할당(대입) 연산자 : 영ㄴ산 방향이 '오른쪽에서 왼쪽'
// = (할당), +=, -=, *=, /=, %=
let a = 10; // 10을 a할당

// 더하기 후 할당
a += 5; // a = a + 5 = 15

// 빼기 후 할당
a -= 2; // a = a - 2 // 13

// 곱하기 후 할당
a *= 2; // a = a * 2 // 26

// 나누기 후 할당
a /= 2; // a = a / 2 // 13

//# 3. 비교 연산자 => boolean (true, false)
// : 피연산자 사이(데이터들)의 상대적인 크기를 판단하여 결과를 참(true), false로 반환 >> boolean type 

// 부등호
// >, <, >=, <= 

// 동등, 부등
// ==, !=

// 일치, 불일치 : ===, !==

let num1 = 10;
let num2= "10";

console.log(num1 == num2); // true
console.log(num1 != num2); // false

console.log(num1 === num2); // false
console.log(num1 !== num2); // true

// +) 문자열 비교 연산자 : 정렬 (기본값-오름차순)
let str1 = "abc";
let str2 = "bcd";

console.log(str1 < str2); // a ~ z까지 뒤로 갈수록 큰값
console.log(str1 = str2); // 
console.log(str1 > str2); // 

num1 = 10;
num2 = "10";


console.log("부등호 사용 비교");
// >== , <== 는 없기 때문에 형 변환이 자유롭다
console.log(num1 > num2); // false
console.log(num1 >= num2); // true
console.log(num1 > num2); // false
console.log(num1 <= num2); // true