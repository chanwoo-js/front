export const tmp = "";

//! 타입스크립트의 객체 타입

//? 1. 객체 타입 지정(명시)
// : {} 중괄호를 사용하여 표현
// >> 각 데이터별 타입 명시의 구분은 세미콜론(;) 사용을 권장

const username : string = "이승아";

// const user = {
//   name : "이승아",
//   height : 169
// }

const user : {
  // 각 타입 구분 시 콤마와 세미콜론 모두 사용 가능
  // >> 세미콜론 사용을 권장
  name : string,
  height : number,
  // favorite : string [];
//   'user'이(가) 선언은 되었지만 해당 값이 읽히지는 않았습니다.ts(6133)
// 'favorite' 속성이 '{ name: string; height: number; }' 형식에 없지만 '{ name: string; height: number; favorite: string[]; }' 형식에서 필수입니다.ts(2741)
// type02.ts(21, 3): 여기서는 'favorite'이(가) 선언됩니다.
// const user: {
//     name: string;
//     height: number;
//     favorite: string[];
// }

} = {
  // 객체 내부에서 각 속성의 구분은 콤마(,)로 표시
  name : "이승아",
  height : 169,
  // hobby : "exercise"
}

// 개체 리터럴은 알려진 속성만 지정할 수 있으며 '{ name: string; height: number; }' 형식에 'hobby'이(가) 없습니다.ts(2353)
// (property) hobby: string

//! 객체의 선택 속성
// : 선택적 프로퍼티 
// >> 속성명 뒤에 물음표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현

const ldk : {
  name : string;
  height? : number; // 타입 명시 속성 뒤에 물음표를 작성(선택적 프로퍼티) => 작성하지 않아도 오류나지 않음 ex) 예를 들어 회원가입 추천인부분
} = {
  name : "이도경",
  // height 안적어도됨
}
//! 읽기 전용 속성

