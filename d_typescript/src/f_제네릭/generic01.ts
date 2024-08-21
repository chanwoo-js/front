export const tmp = "";

// * 제네릭 (Generic, 일반적인)


//# 1. 제네릭 정의
// 재사용 가능한 코드 단위를 만드는데 사용
// 해당 컴포넌트가 처리할 데이터 타입을 미리 지정하지 않고
// 해당 컴포넌트를 사용하는 시점에서 원하는 데이터 타입 지정

//# 2. 제네릭 필요성
// 코드의 중복을 줄임
// 재사용 가능한 컴포넌트를 생성
// 타입 안정성 보장
// 컴파일 시점에서 타입을 체크 (런타임 환경에서 발생할 수 있는 에어를 방지)

//? 컴파일 타임
// 소스코드를 작성하고 편집하는 과정

//? 런타임 타임
// 컴파일 과정을 마친 프로그램이 사용자에 의해 실행되어 동작되어지는 때

//# 3. 제네릭 기본 문법
// 사용할 컴포넌트(변함수 클래스 등) 이름 뒤에 꺽쇠괄호 (<>)안에 타입 변수를 지정
// 함수나 클래스 등을 사용할 때 활용할 타입을 명시

//! 1. 타입 변수 ( 일반적으로 변수처럼 사용함 )
// 임의의 키워드를 사용하여 명시
// 일반적으로 대문자 알파벳 하나를 사용 ( T : type, U , V , W , X , Y , Z ~~);
// 해당 타입 변수는 컴포넌트 내에서 실제 데이터 타입의 자리를 대신

//% 일반 함수의 정의
function generic1 () {

}
generic1();

//& 제네릭 함수의 정의
function generic2<T>(a : T) : T {
  // 현재 타입 변수 T 가 단일 타입 변수인지 말 그대로 타입 변수가 딱 하나들어간다.
  return a;
}
// 함수 호출 시 타입 변수에 활용할 타입을 명시
generic2<number>(123); 
generic2<boolean>(true); 
let str01 = generic2<string>("안녕하세요");
let str02 = generic2("안녕하세요"); // 오류x - 제네릭의 경우 타입 변수에 값을 유추 가능 하지만 생략하지마세요


// 여러 제네릭 타입 변수 지정

function pair<T,U>(first : T, second : U) : [T,U] {
  return [first, second];
}

let pairOutput = pair<string, number>("안녕",345);
let pairOutput2 = pair<number, string>(345,"ㅇ");

function pair2<T, U>(first: T, second : U) : U {
  return [first, second] as U;
}

let pair2Output = pair2<string, string>("hello", "hi");
// ["hello", "hi"];

//# 4. 제네릭을 사용하는 컴포넌트들 예시

// 1) 변수
let a;
a = 10;

// 2) 제네릭 함수
// 주로 매개변수의 타입을 지정하는 경우가 많음

function genericFunc<T>(args : T[]) : T[] {
  console.log(`배열의 길이 : ${args.length}`);
  return args;
}

let resultFunc = genericFunc<boolean>([true,true,false]);


// 3) 타입 매개변수 T를 가지는 인터페이스
interface IGeneric<T> {
  (key : T) : T; // 인터페이스 내부의 속성 타입을 명시;
}

function example<T>(arg:T) : T {
  return arg; 
}
let myGeneric : IGeneric<number> = example;

console.log(example(5));
console.log(myGeneric(5));

// 4) 제네릭 클래스
class GenericClass<T> {
  value : T;
  add : (x:T,y:T) => T; // 해당 클래스로 인스턴스화 될 떄 인자로 함수값을 전달받음

  constructor(value : T, addFunc: (x: T, y : T) => T)  {
    this.value = value;
    this.add = addFunc;
  }
}


class BasicClass {
  value : string;
  constructor (value : string, addFunc: (x: string, y: string) => string) {
    this.value = value;
    this.add = addFunc
  }
  add : (x : string, y : string) => string;
}


let myGenericNumber = new GenericClass<number>(0, function(x,y) {return x + y});
console.log(myGenericNumber.add(4,5));

let myGenericString = new GenericClass<string>("", function (x,y) { return `${x} + ${y}`});
console.log(myGenericString.add("이", "승아")); // 이승아


