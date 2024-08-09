//! 객체의속성 존재여부 확인
// : 객체에 없는 속성에 접근 - undefined 재료형
// >> 조건문을 활용하여 undefined 여부 확인

// 객체 생성
let object = {
  name : "이승아",
  age : 50,
  job : 'developer'
}
//# 1. 객체 내부에 해당 속성 여부 확인
if (object.name !== undefined) {
  console.log(("name 속성 o"));

} else {
  console.log(("name 속성 x"));
}
// name o
//# 2. 조건문을 연산자로 간단하게 표시
// object.name
// object.hobby

// 1) 논리연산자(and, or, not)
// or 연산자
// >> 둘 중 하나라도 true면 true 
object.name || console.log("name 속성이 없습니다."); //실행 x
object.hobby || console.log("hobby 속성이 없습니다."); // 실행 o

!object.name || console.log("name 속성이 있습니다.");

// and 연산자
// : 모두 true 여야 true
console.log("=== and 연산자 ===");

//! 기본 속성 지정
//: 삼항 연산자


// 객체의 속성값 재할당 and 속성 생성
// 객체.속성 = 값
object.name
= object.name !== undefined ? object.name : "이름을 알 수 없는 고객";
object.hobby
= object.hobby !== undefined ? object.hobby : "이름을 알 수 없는 고객";
console.log(object);

// >> 논리 연산자로 변환
object.height = object.height || "키를 알 수 없음";
object.name = object.name || "키를 알 수 없음";

console.log(object);