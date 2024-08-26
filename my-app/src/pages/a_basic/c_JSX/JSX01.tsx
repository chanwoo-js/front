import React from "react";

/*
! JSX(TSX)
: JS(TS) 파일 내에서 HTML 과 유사한 마크업을 작성할 수 있도록 해주는 JS 구문 확장 문법

? 사용목적
- 선언적 뷰 설계 가능 (ui를 직관적으로 설계)
- 불필요한 dom 설정 필요 x

? 특징
: js + html (xml) 형태로 엄격한 문법 체계
: jsx 내에서 babel 을 사용해 js로 변환하려면 xml 문법을 준수해야한다.

# jsx 문법 규칙

1) 단일 루트 노드
: 하나의 컴포넌트는 단일 루트 노드만 반환
>> 최상단의 루트 태그가 존재해야합니다.
>> <></> 빈 fragment (조각) 으로 감싸서 표현

2) 태그 닫기
: 태그는 반드시 닫혀야 하며 단일 태그 사용 시 닫히는 꺽쇠괄호에 /가 첨부!
>> input, br, hr, img 등

3) 대소문자 구분
: 태그 내의 이름이 대소문자를 구분
>> 소문자로 시작 : HTML 요소로 인식
>> 대문자로 시작 : 사용자 정의 정포넌트로 인식

4) HTML 코드를 JSX로 변환 시 주의점
- 대부분 lowerCamelCase 사용
: css 속성, on - 메서드 등
- class 속성의 경우 className 으로 변경
: js의 class (객체 틀)과의 이름 충돌

*/
function Div() {
  return (
    <>
      <div className="hello"></div>
      <div className="hello"></div>
      <div className="hello"></div>
      <div className="hello"></div>
    </>
  );
}


//! jsx 안에서 자바스크립트 값 사용
// jsx 내에서 중괄호 사용 방법 (2가지)
// 1. jsx 태그 내에서 직접적인 데이터 사용
// 2. 속성 = {}
function JSX01() {
  const welcomeMsg = "환영합니다";
  const greeting = (name:string) => `안녕하세요 ${name}님`;
  const userInfo = {
    name : "이승아",
    age : 54
  }
  const handleClick = (value : string) => {
    return `클릭 : ${value}`;
  }
  const disStyle = {
    backgroundColor : "orangecp",
    color : "white",
    padding : "10px"
  }
  return (
    <>
      <div>jsx01</div>
      <p>안녕하세요</p>
      <input type="text" />
      <img src="" alt="" />
      <br />
      <hr />
      {/*
        html 내에서 js의 속성 지정
        : 문자열, 숫자, 기타 js 기타 표현식 외의 객체도 모두 중괄호 내에서 작성
      */}
      <Div />
      <div>{welcomeMsg}</div>
      <div>{greeting("이승아")}</div>
      <div>이름 : {userInfo.name}</div>
      <div>나이 : {userInfo.age}</div>
      {3+5/2}
      {/*요소에 이벤트 전달 시 코드를 해석하는 과정에서 실행되지 않도록 >> 콜백 함수의 형태로 전달(익명함수의 형태*/}
      <button onClick={ () => handleClick("클릭")}>버튼을 클릭해주세요</button>

      <div  style={{backgroundColor : "orange", color : "white"}}>div 요소</div>
      <div style={disStyle}>dd</div>
    </>
  );
}

export default JSX01;
