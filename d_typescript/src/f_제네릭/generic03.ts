export const tmp = "";

//! 제네릭의 제약 조건
// ? 제약 조건(constraints)
// : 타입 매개변수가 특정 조건을 만족해야 한다는 것을 명시하는 방법
// >> 제네릭 타입의 사용 범위를 제한

// ? 제약 조건의 예시
interface ILength {
  length: number;
}
// T라는 타입 변수는 ILength 인터페이스를 포함하는 타입이어야 한다.
// a extends b (a : 타입 변수, b : 반드시 포함할 타입)
function constraints<T extends ILength>(arg : T): T {
  console.log(arg.length); // 10
  return arg;
}

let data01 = constraints({
  length: 10,
  // length 속성을 반드시 포함하는 객체를 인자로 전달!
  // >> 추가로 다른 속성 명시 가능( 확장 )
  value : 3,
  addedOption : "안녕하세요"
});

console.log(data01); // { length: 10, value: 3, addedOption: '안녕하세요' }

// 최소한의 속성을 가진 객체 찾기
// keyof 연산자
// : 객체 형태의 타입을 따로 속성만 뽑아 유니온 타입으로 만들어주는 연산자

// >> 모든 키의 이름을 유니온 타입으로 반환
// name 과 age 속성을 가지는 타입 별칭
type Type = {
  name : string;
  age : number;
}

type Union = keyof Type;
// Union = name | age;

// ? 조건부 타입
// : 타입 매개변수에 대한 조건 표현식을 사용하여 타입을 결정하는 방식
// >> if 문과 유사한 기능

type Check<T> = T extends string ? "String" : "Not a String";
type Type1 = Check<string>;//
type Type2 = Check<number>;//

function checkType<T> (value : T): Check<T> {
  let result = typeof value === "string" ? "string" as Check<T> : "Not a String" as Check<T>;
  return result;
}
console.log(checkType<string>("안녕하세요")); // string
console.log(checkType(5)); // Not a String