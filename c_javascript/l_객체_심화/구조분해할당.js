//! 구조 분해 할당(다중 할당)
// 배열과 객체의 값을 한 번에 여러 개의 변수에 할당

// ? 다중 할당의 형태
// 식별자 : 변수를 나열한 형태
// [식별자, 식별자, 식별자, ...] = 배열;
// {속성명, 속성명, 속성명, ... } = 객체;
// cf) 식별자 : 변수를 나열한 형태

let array = [1,2];
let [a,b] = array;
// let a = array[0];
// let b = array[1];

console.log(a); // 1
console.log(b); // 2

// >> 배열의 크기는 같을 필요가 x - 넘치는 값은 생략
const arrayA = [1,2,3,4,5,];
const [aa,bb,cc] = arrayA;

console.log(aa,bb,cc); //1 2 3c

// 객체 생성
const bookObject = {
  name : "JS공부하기",
  price : 25000,
  publisher : "코리아 it"
}

// ? 객체는 배열과 달리 순서 상관 x

// 각각 연결된 속성명으로 값이 자동 전달
const {publisher, name, price, author} = bookObject;
console.log(name, price, publisher, author); // js 공부하기 25000 코리아 it

// 새로운 이름에 저장
const { aaa=name, bbb= price} = bookObject;
console.log(aaa,bbb); // js공부하기 25000

