// practice01.js

//! 객체, 배열, 함수 복습 문제

//? 문제 1
// 1. 객체 생성
// : person 객체 생성 - name (문자열), age (숫자), isStudent (불리언) 속성을 추가
// boolean 타입은 is , has와 같이 동사와 명사를 결합한 변수명을 주로 사용
// is 명사 (학생인가?) / has 동사 (먹었나?) 

let person = {
  name : "박찬우",
  age : 15,
  isStudent : true
}

// 2. 배열 사용
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가(3가지)
// : 두 번째 과일을 콘솔에 출력
let fruits = ['apple', 'banana','grape']
console.log(fruits[1])

// 3. 함수 정의
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수 add를 작성
function add(a,b) {
  return a+b;
}

//? 문제 2
// 1. 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}
// >> for in 반복문 사용
//* for in 반복문
// : 객체와 배열의 순회를 가볍게 처리하는 반복문 (for 문의 객체, 배열, 순회, 인덱스번호가 필요 x)

let array = [1,2,3,4,5];
// array 배열 안을 in 순회하면서 각 요소를 num에 할당
// : 배열의 요소에 접근하기 위해서 []대괄호 연산자를 사용
for (let num in array) {
  console.log(array[num]);
}

// 객체
// for (let key in obj) {
//   console.log(`${key} + ${obj}`);
// }
// 2. 배열 메서드 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력
let result = fruits.map((value)=> value.toUpperCase());
console.log(result);

// ! forEach : 반환x , 전체 요소에 동일한 기능을 적용

// ! map : 새로운 배열을 반환 , 전체 요소에 동일한 기능을 적용

// ! filter : 새로운 배열을 반환/ 해당 조건식을 참으로 통과하는 요소만 새로운 배열로 반환

// +) 대문자 변환.toUpperCase();

// 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성
let a = [1, 2, 3];
let b = [4, 5, 6];

function sumFunction (a_array, b_array) {
  let newArray = [];
  for(let i = 0; i < a_array.length; i++) {
    newArray.push(a_array[i] + b_array[i])
  }
  return newArray;
};

const sumArray = sumFunction(a,b)
console.log(sumArray);
// >> [5, 7, 9]



//? 문제 3
// 1. 객체 깊은 복사
// : person 객체를 깊은 복사하는 함수를 작성

let newPerson = JSON.parse(JSON.stringify(person)); // 깊은 복사

function copyObject (person_object) {
  df = JSON.parse(JSON.stringify(person_object));
  df.name = "얌2";
  console.log(df);
}
person.name = "얌"
copyObject(person);
console.log(newPerson);
console.log(person);
// setTimeout(function() {
//   console.log(df);
// },2000)
console.log(df);

// function deepCopy(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }

// let personCopy = deepCopy(person);
// console.log(personCopy); // { name: '이승아', age: 50, isStudent: false }


// 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환하는 함수를 작성
// : 메서드 체이닝 사용

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 18 }
];

function adultUserName (users) {
  return users
  .filter((user) => {return user.age >= 18})
  .map((user) => {return user.name});
}
console.log(adultUserName(users)); 

//성인 사용자만 필터링 된 데이터 ///# filter
// const users = [
//   { name: "John", age: 25 },
//   { name: "Doe", age: 18 }
// ];

// 성인 사용자의 이름만 새로운 배열로 저장 // # map
// const users = ['John', 'Doe'];
