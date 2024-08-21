export const tmp = "";
//! === Union 유니언 타입 ===
// : 여러타입중 하나가 될 수 있는 값을 나타내는 방법
// >> 값에 허용된 타일을 두개 이상으로 지정
// >> or 연산자 (a 또는 b ...)
// >> | vertical bar 기호를 사용하여 표현

// ? 유니언 타입의 사용
// >> 변수, 함수의 매개변수, 반환값 등에서 모두 사용 가능
// >> 타입의 유연성을 제공
// : 무분별한 any 사용을 방지

//? 유니언 타입의 사용
// type UnionTpye  = Type1 | Type2 | Type3;

type VariableType = string | number | boolean | string[];

let value : VariableType = "문자";
value = 123;
value = true;
value = ["안녕", "반갑"];

// value = [123, 456];// error
// value = {}; // error

//? 타입 별칭의 예시
// 관리자 계정 Admin
type Admin = {
  id : string;
  password : string;
  isAdmin : boolean;
}
// 사용자 계정 User
type User = {
  id : string;
  name : string;

}
// 위의 두가지 계정을 가지는 사이트의 계정 타입
type Person = Admin | User ;

// >> 타입 별칭이 union 타입인 경우
// >> 중복되지 않은 타입 속성은 옵셔널(?)과 동일
// type Person = {
//   id : string;
//   password? : string;
//   name? : string;3
// }

let lsa: Person = {
  id : "123",
  password : "234",
  isAdmin : true
}

let ldk: Person = {
  id : "123",
  name : "234"
}


type Union = number | string;
function getAge (age:Union) {

  //나이가 입력될 경우
  // - 숫자 : 소수점 자리갸 없도록 반올림 하여 문자열로 반환 (toFixed())
  // - 문자열 : 그대로 반환
  

  if (typeof age === "number"){
    age = age.toFixed();
    return age;
  }else {
    age = age.toLocaleUpperCase();
    return age;
  }
}

console.log(getAge(12.345)); // 12
console.log(getAge("12 years old")); // 12 YEARS OLD