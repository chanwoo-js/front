//# 4. 논리 연산자 : boolean 값을 연산하는 사용
// true , false을 반환

// - && 연산자 (and) , || 연산자 (or)
// - ! 연산자

// 1) && 연산자 (논리곱)
// : false 가 하나라도 존재하면 무조건 false

// true && true => true
// true && true && false => false

// +) 단락평가 : false 뒤의 내용은 평가되지 x

//? || 연산자 (논리합) : true가 하나라도 존재하면 무조건 true
// true || true => true
// false || true => true

// +) || 연산자의 "단락평가" : true 뒤의 내용은 평가되지 x

//? ! 연산자 (부정 논리, not) : boolean 자료형의 데이터는 전환
let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true

console.log(!bool1); // false
console.log(!bool2); // true

//# 5. 삼항(조건) 연산자
// : 유일하게 피연산자를 세 개를 가지는 조건 연산자 (기호가 2개)

//? 기본 구조
// 표현식 ? 참 반환값1 : 거짓 반환값2

// - 표현식 :  true 또는 false 값을 반환하는 식
// - 반환값1 : 위의 표현식 조건이 참 true 일때 반환될 값
// - 반환값2 : 위의 표현식 조건이 거짓 false 일때 반환될 값

let age = 18;
let beverage = age > 20 ? 'beer' : 'juice';
console.log(beverage);

let isMember = false; //회원의 유무를 저장하는 변수
let discount = isMember ? "10%" : "5%";
console.log(discount); // 5% 

// 삼항연산자의 중첩 
// 20살 이상 (성인) 20살 미만 (미성년자) 미성년자 - 13살 이하 (어린이) / 13살 초과 (청소년)

age = 17;
let identity = age >= 20 ? 성인 : (age <= 13 ? "어린이" : "청소년"); 
console.log(identity);

//# 문자열 연산자
// : 타입이 모두 숫자 : 산술 연산자의 덧셈
// 타입이 하나라도 문자열 일 경우: 문자열 결합

let firstName = "SeungAH";
let lastName = "Lee";

console.log(firstName + " " +  lastName);

//# typeof 연산자 : 데이터에 대한 타입 반환이 문자열올 반환
// "nuber", "string", "boolean", "undefined", "object", "function", "symbol", "bigint"

// +) null 타입의 결함 : 초기 js설계의 결함으로 object 타입을 반환
let objectData = {};
let functionData = function () {};

console.log(typeof objectData); // object
console.log(typeof functionData); // function