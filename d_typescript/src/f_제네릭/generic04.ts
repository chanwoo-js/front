
export const tmp = "";

//! 유니온 타입과 제네릭

// 유니온 타입(or , |)
// 여러 타입 중 하나가 될 수 있는 값을 의미

//? 유니온 타입을 제네릭의 타입 변수에 적용
// extends 키워드를 사용 (확장)

// 해당 함수 호출 시
// : string 또는 number 타입의 매개변수만 적용

function unionGeneric<T extends string | number> (value : T) {
  if(typeof value === "string"){
    return value.toLocaleLowerCase();
  }
  return value; // 숫자 데이터
}

const result1 = unionGeneric('sTrInG');
const result2 = unionGeneric(1000);

console.log(result1, result2); // string 1000

// # 제네릭 유틸리티 타입
// TS 에 내장된 제네릭 타입
// 기존의 타입을 변환하거나 조작하는데 사용

// 1) Partial (부분적인, 선택적인)
// >> 모든 속성을 선택적으로 만들어줌
// >> Partial<T>

interface User {
  name : string;
  age : number;
}

const users : {[key : number] : User} = { 
  1: {
    name : "이승아",
    age : 50
  },
  2: {
    name : "이도경",
    age : 40
  }
}

// 사용자 데이터를 업데이트 (수정)하는 함수 구현
// >> id 값을 사용하여 해당 데이터의 name 또는 age 값을 수정

function updateUser (id : number, changes : Partial<User>) {
  const user = users[id]; //User 타입의 객체

  if (!user) {
    console.log("해당 id 사용자는 없습니다.");
  }
  // changes (객체 >> name 과 age 속성이 모두 선택적 속성)
  users[id] = {...user, ...changes}; // 스프레드 연산자를 사용하여 객체의 "속성:값"의 형태만 추출
  //{name : "이승아", age: 50, name : "이도경"}
}
updateUser(1, {name: "권세혁"});
updateUser(2, {age : 10});
updateUser(3, {name : "최윤성"});

console.log(users[1]); //{ name: '권세혁', age: 50 }
console.log(users[2]); // { name: '이도경', age: 10 }
console.log(users[3]); // { name: '최윤성' }

updateUser(1, {name : "박찬우", age: 20});
console.log(users[1]); // { name: '박찬우', age: 20 }

// 2) Readonly
// 모든 속성을 읽기 전용 속성으로 변경 (상수)
// : Readonly<T>

interface Human {
  name : string;
  age : number;
}

let user : Readonly<Human> = {
  // 값의 변경이 안되는 옵션
  name : "이승아",
  age : 50
}

// user.name = "서호영";

// 3) Omit (샐략하다)의미를 담고있는 키워드
// 특정 속성을 제거한 타입을 반환
// Omit<T, K>
// T타입에서 K 속성을 제거함 

interface Employee {
  id : number;
  name : string;
  age: number;
  position: string;
}

type EmployeeWithoutID = Omit<Employee, "id">; //id key 값을 제거할래

const newEmployee : EmployeeWithoutID = {
  name : "성찬영",
  age : 30,
  position: "개발자"
}

const totalData : Employee = {
  id : 3,
  name : "홍동현",
  age: 20,
  position: "총무"
}