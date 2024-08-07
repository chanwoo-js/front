//# 2. number(숫자형)
// : 정수 및 실수를 포함하는 자료형

// +) typeof 연산자
// : 자료형

let num = 10;
let float = 10.5;

console.log(typeof num);// number
console.log(typeof float); // number
//# 3. boolean (논리형)
// : 참(true), 거짓(false) 값만을 가지는 자료형

let bool1 = true;
let bool2 = false;

console.log(bool1) // true
console.log(typeof bool1) // boolean
console.log(bool1) // true
console.log(typeof bool2) // boolean

// # 4. null & underfined 자료형

// null : 아무것도 없다
// 변수의 데이터가 유효하지 않은 경우

let value = null;
console.log(typeof value);

// value 변수의 타입이 'object'이면서 (and)값이 존재하지 않을 경우 'null'을 출력
console.log(typeof value === 'object' && !value) ? 'null' : 'not null' // null

// 4-2. undefined 정의되지 않았다.
// 변수가 선언되었으나, 아직 어떤한 값도 할당되지 않았을떄의 기본값

let hello; // 변수선언
console.log(hello); //null

//? === 자료형 변환, 형변환 ===
// 문자열로 변환, 숫자형으로 변환, 논리형으로 변환
// 1. String() 함수
let numString1 = 123;
let numString2 = 456;
console.log(numString1 + numString2); // 579

// 123456
let StringNum1 = String(numString1);
let StringNum2 = String(numString2);
console.log(StringNum1 + StringNum2)


// 2. Mumber() 함수
let notANumber = '안녕하세요'; // 문자열
console.log(Number(notANumber)); //NaN : NOT A NUMBER - 숫자로 변환할 수 없는 값을변환 시도할 경우

console.log(Number(StringNum1)); // 123
console.log(typeof Number(StringNum1)) // number

// 3. Boolean() 함수
// false : false, 0, ", null, undefined, NaN
// true : 위의 값을 제외한 모든 데이터를 true로 간주

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(123)); // true
console.log(Boolean(0));  // false

