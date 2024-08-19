// let num = 10;
// :블록 범위 변수 'num'을(를) 다시 선언할 수 없습니다.ts(2451)
// helloWorld.ts(15, 5): 여기서도 'num'이(가) 선언되었습니다.
// helloWorld.ts 파일의 변수와 충돌

// : ts 는 파일 단위의 스코프가 생성되지 x
// >> 프로젝트 전체 범위의 스코프가 전역 스코프

// ! 스코프 생성 방법
// 1. 중괄호 사용방법
// : 직관적인 스코프를 생성
{
  let num = 10;
}

{
  let num = 5;
}

// 2. 중괄호보다 조금 나은 방법 exprot 키워드를 사용
// : export 키워드를 사용하는 경우 ts 파일이 자동 모듈로 인식
// >> 외부 전역 스코프와 충돌을 방지 가능

// tmp : temporary (일시적인, 임시의)
export const tmp = ""; // 이 파일이 자동적으로 모듈로 인식함 (ts 기능)
let num = 10; // 그래서 여기에 충돌이 일어나지 않는다.

// 만약 외부에서 받아오고 싶으면 import 쓰면 된다.
// import {num} from "../b_환경설정/helloWorld.ts";

console.log(num);

/*
$ ts-node a_basic.ts
10
*/

// ! js 와의 차이점
let message = "hello";

console.log(message.toLocaleUpperCase()); // HELLO

// message(); // js와 다르게 실행시키기전 미리 오류를 보여줌
/* 이 식은 호출할 수 없습니다.
'String' 형식에 호출 시그니처가 없습니다.ts(2349)
let message: string
*/
