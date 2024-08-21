//! 리터럴 타입 (문자 그대로의 )
// : 특정 "값"만을 가질 수 있는 타입을 정의할 떄 사용
// >> 특정 "값"으로 제한

//? 리터럴 타입의 종류
// - 해당 값만을 가지는 상수

// - 해당 값을 타입으로 지정한 변수

// >> 다른 값을 할당하려고 하면 타입 에러가 발생

// 1) const 키워드를 사용하여 직접 리터럴 값을 할당( 초기화)
let str1 = "안녕하세요"; // 문자열로 저장은 했기 때문에 : string 타입으로 인식
str1 = "hello"; // let 은 재할당 가능 const 는 아래에

const str2 = "반갑습니다." // 반갑습니다가 타입으로 바뀐다. 그래서 string 으로도 재할당이 불가능하다

//? 2) 변수에 타입 명시를 리터럴 값으로 명시
// 예시 1 : 문제없음
let num1 : number = 123;
num1 = 234;
num1 = 345;

// 예시 2 : 문제있음 - 명시적으로 123을 데이터 타입으로 지정함 number가 아님
let num2 : 123 = 123; 
// num2 = 234; 오류남
// num2 = 456; 오류남



//& 리터럴 타입 활용
// : 주로 type 키워드(타입 별칭)와 함께 사용
// >> 유니언 타입 (or |)과 함께 사용하여 다양한 값을 표현함과 동시에 제한 가능
// 제한을 유연하게 만들어줌
// 변수 혹은 매개변수가 특정 값들 중 하나만을 가질 수 있도록 제한

//Direction(방향) 타입을 정의
type Directions = "up" | "down" | 'left' | 'right';

let moveUp : Directions;
moveUp = "down";

//! 2. 함수의 인자로 리터럴 타입을 지정하여 특정 값으로 제한
function setAlignment (align: "left" | 'center' | 'right') {
  // 함수 내용
  // let container document.querySelecotor("#contianer");
  // container.style.textAlign = align;
}

setAlignment("center");
// setAlignment("중앙"); //오류

//! 3. iot 국비반 학생 관리 시스템
type Students = '이승아' | '이도경' | '정재원' | '최준혁'| '최소윤';
let students : Students;
// students = "김준일";오류

//% 리터럴 타입의 경우 여러 타입의 혼합이 가능
type mix = 'yes' | 'no' | 1 | 2 | 3;


let gameState: mix;
gameState = "no";
// gameState = 123;에러

// * 객체 리터럴 타입
// : 실제 객체 데이터 정의

type UserType = {
  name : "이승아",
  height : 169;
}

let user : UserType = {
  name : "이승아",
  // height : 170 => 똑같이 값을 안넣어주면 에러남
  height : 169
}

// user.name = "이도경";


// * 객체의 구조적 타이핑 (덕 타이핑)
// 객체의 타입을 실제 값보다는 그 구조나 맴버에 의해 결정하는 방식
// 즉 객체의 형태가 같다면, 같은 타입으로 간주

type Person = {
  name : string;
  age : number;
}

function greet (person : Person) {
  console.log(`name : ${person.name}, age : ${person.age}`);
}

// Person 타입이 명시적으로 구현되지 않은 객체 생성
const p1 = {
  name : "이승아",
  age : 50
}

const p2 = {
  name : "이도경",
  age : 60,
  hobby : "배구보기"
}

const p3 = {
  name : "정수은",
}

greet(p1); // person과 구조가 일치하기 때문에 Person 취급
greet(p2); // 구조적 타이핑에 의해 Person 취급 (hobby 속성을 무시)
// greet(p3); // 오류 =>  타입 속성 구조와 불일치 불일치라기보단 Person 객체가 가지고 있는 조건을 맞춰야한다. 적으면 x 많으면 괜춘

// * 중첩된 객체 타입 정의

type Address = {
    street : string,
    city : string,
    zipCode? : number
}
type UserProfile = {
  username : string;
  email : string;
  address : Address; // 중첩된 객체라면 따로 빼는게 좋다
}

let userA : UserProfile = {
  username: "장지민",
  email : "qwe123",
  address: {
    street: "123 ST",
    city : "Busan"
  }
}

// userA.address.city = "대전";
userA.address.street = "중앙대로";

// * 객체의 인덱스 서명
// 객체의 모든 속성에 대해 타입을 정의하지 않고
// key와 value의  only type definited하여 build를 soft하게 적용하는 방법

type UserDataType = {
  name : string; // - 일반적인 객체 속성 타입 명시
  
  //? 인덱스 서명 사용 방법
  [key : string] : string | number | boolean; // 키는 string 사용을 권장, key는 자동으로 string값으로 지정되고 우측만 지정해주면 된다,
}

let user1 : UserDataType = {
  name : "이승아",
  height : "123",
  // age: 50, 에러나면 string | number로 안나게 가능
  age : "50",
  isTheacher : true
}

// user1.email = [123,456]; 오류남
user1.email = "qwe123";
