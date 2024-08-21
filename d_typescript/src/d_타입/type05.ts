
export const tmp = "";
//! --- intersection 인터섹션 타입 ---

// : 여러 타입을 하나로 결합하여 모든 타입의 기능을 갖춘 단일 타입을 생성
// >> 여러 타입을 모두 만족하여 하나의 타입
// >> and 연산자 (a 그리고 b)
// >> & 기호를 사용하여 구현

// ? Intersection type  
// type 타입 별칭 = type1 & tpye2 & ....

type Employee = {
  name : string;
  startDate : Date;
}

type Manager = Employee & { group : string };

let managerA: Manager = {
  name : "이승아",
  startDate : new Date(),
  group : "개발부서"
}

// ? 인터섹션 타입의 특징
// - 타입 결합
// :  여러 타입의 속성을 결합해서 새로운 타입을 생성
// : 코드의 재사용성 + 복잡한 타입의 조합 가능

// 인터섹션 타입 예시
type Admin = {
  isAdmin : boolean;
}
type User = {
  id: string;
  password : string;
}
type AdminUser = Admin & User;

function createAdminUser(user:User): AdminUser {
  return {...user, isAdmin : true};
}

let newAdminUser : User = {
  id : "qwe123",
  password : "qwer123123"
}

let adminUser1 = createAdminUser(newAdminUser);
console.log(adminUser1); // { id: 'qwe123', password: 'qwer123123', isAdmin: true }