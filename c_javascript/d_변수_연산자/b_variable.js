//# b_variable.js

//! 변수 : 데이터를 저장하기 위한 공간
// 변수 선언

// - 명명규칙

//* 필수 변수 명명규칙
// 첫문자로 영문자, 언더스코어, 달러만 사용 가능
// 띄워쓰기 허용 x
// 기호는 _,$만 사용 가능하다.
// 영어 대소문자를 구별 (number, Number 은 각각 다른 변수)
// 예약어 사용x

// let 1num; -error
// let num ber; -error


//* 선택 변수 명명규칙 - 권장 
// lowerCamelCase 사용을 권장
// : 처음시작하는 알파벳은 소문자로 시작, 이어지는 단어의 시작만 대문자로 작성
// cf . UpperCamelCase
// : 시작을 포함하여 이어지는 단어의 시작만 대문자로 작성

// 가능 : now, _now, now$25, now_25
// 불가능 : 25now, now 25, *now

//! 변수명 지정 시 의미 있는 단어 사용을 권장합니다.
// 올해 년도 : currentYear 
// 태어난 연도 : birthYear
// 나이 : age
// age = currentYear - birthYear

//! js 변수 선언 방식 (2가지 - let, var)

// 변수 선언 방법
// 변수 종류 변수명;

// 변수 할당(대입)
// 변수명 = 데이터(값);

//! js 변수 선언과 초기화 (생성과 동시에 대입하는것을 초기화라고 한다.)
// 변수 종류 변수명 = 데이터(값);

let letVariable;
var varVariable;

letVariable = 10;
varVariable = "Hello World";

// 호이스팅 효과로 선언 전에 값 할당이 가능
// letVariable2 = 10;
varVariable2 = "안녕";

let letVariable2 = 20;
var varVariable2 = "안녕 변수";

//! let VS var
// 공통점 : 재할당 가능 ( 변수의 특성 ), 호이스팅 가능
// 차이점
// let : 동일한 영역 내에서 같은 이름으로 재선언 불가
// var : 동일한 영역 내에서 같은 이름으로 재선언 가능 (사용x)

// let letVariable2; 
// 블록 범위 변수 
// var varVariable2; 위험성이 크다 사용x 

//* 나이 계산 프로그램 만들기

// 올해 연도, 태어난 연도, 나이에 대한 변수 선언
// 올해 연도를 나타내는 변수에는 2024 값 할당

// 태어난 연도는 prompt 창에서 값을 할당 받아옴

let birthYear = prompt("태어난 연도를 입력해주세요", "1992");
let currentYear = 2024;
let age = currentYear - birthYear;
alert(`현재 나이는 ${age} 입니다.`)

//! 상수(constant) 변하지 않는 수

// : 변하지 않는 수
// : 한 번 할당된 값을 변경할 수 x (재할당 불가)

//? 상수 명명 규칙 ( 필수 - 변수와 동일 )
//* 권장 사항
// : UPPER_SNAKE_CASE : 모든 영문자를 대문자, 이어지는 단어는 언더스코어(_)로 구분하게 된다.

// 상수 선언과 초기화 => 반드시! 선언과 동시에! 할당! 그래서 선언만하게되면 오류가 난다.
// const 변수명 = 데이터(값);
const PI = 3.14;


