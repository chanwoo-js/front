export const tmp = "";

// 예제1) 제네릭 함수 구현
function reversArray<T>(array : T[]): T[] {
  // 일반적으로 reverse 라는 함수는 배열 메서드라서 []
  // >> [1,2,3].reverse() ===> [3,2,1];
  let reverseArr = array.reverse();
  return reverseArr;

}
let stringArr = reversArray(["1","2","3"]);
console.log(stringArr); // ["3","2","1"];


// 예제2) 제네릭 인터페이스 정의
interface KeyValue<K, V> { // K: key의 타입, V : value의 타입
  key : K,
  value : V
}

let KeyValue : KeyValue<string, number> ={
  key : "이승아",
  value : 123
}

let anotherKeyValue : KeyValue<boolean, number> = {
  key : true,
  value : 200
}


