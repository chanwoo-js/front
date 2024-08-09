//? node js 환경에서 ex6 모듈 시스템 활용 방법
// package.json 파일에 type : module을 추가
// 1) 프로젝트의 루트 디렉토리(폴더)에 package.json 파일 생성
// : npm init -y


//# 1. 모듈의 정의
// :  재사용 가능한 코드 조각
// >> 함수 , 변수, 클래스, 파일, 등을 포함

// # 2. 모듈의 특징
// - 각각의 모듈은 독립성을 가짐
// - 다른 코드 내부에서 재사용 가능
// - 네임스페이스 관리 : 모듈 자체의 이름을 가짐(다른모듈과의 충돌을 방지)
// - 가독성 및 조직화 향상

// # 3. ES6 모듈
// : ES2015 이후에 JS 에서 공식적으로 모듈 시스템을 도입
// >> import , export 문을 통해 모듈을 가져오고 내보내는 방식을 도입했다.

// - 스코프 격리
// : 모듈 내에서 선언된 변수, 함수, 클래스, 등은 모듈 외부에서 접근 x
// >> 전역변수의 사용을 줄이고 이름 충돌을 방지

// - 재사용성과 유지보수성 향상

// #import문 사용 예시
// 1) 이름 붙여 가져오기 - 중괄호 사용 o 
// : 여러개의 export 가 가능
// >> 중괄호 내에서 , 로 구분하여 나열
// 혹시 모듈로 불러왔지만 같은 파일내에서 같은 변수명을 사용해야한다면
// as 로 불러온 변수명을 변경해주고 사용하면 된다.
// >> 근데 이러면 하나는 결국 바꾸는건데 물 바꿔도 의미없을듯 싶다.


import { PI, multiply as mp } from "./module02.js"; 

// import { multiply } from "./module02.js";

console.log(PI); // 3.14
console.log(multiply(2,3)); // 6

// 2) 이름 붙여 가져오기의 as구문
// >> as 키워드(alias 별칭, 별명)
// >> 가져오는 모듈 내에서 별칭을 사용하여 해당 기능에 대한 참조


function multiply (x,y) {
  return x + y;
}
console.log(multiply(5,8)); // 13

// 3) 전체 모듈을 별칭으로 가져오기
// >> 하나의 모듈 (파일)을 하나의 별칭으로 가져와
// , 모듈 내의 모든 기능을 해당 별칭을 통해 접근
// >> 하나의 모듈을 객체로 파악

import * as module02 from "./module02.js"; // module02에 모든걸 가져옴

console.log(module02.PI); //3.14
console.log(module02.multiply(9,2)); //18
console.log(mp(5,8)) // 40

//& 2) 기본 가져오기
//* import 모듈명 (변경x) from "./파일 경로.확장자";
import add from "./module02.js";
console.log(add(4,5)); // 9

