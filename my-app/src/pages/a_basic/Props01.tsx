import React from 'react'

/*
react 문법 체계 : jsx

컴포넌트 : 리액트의 구성요소 (ui)

Props : 컴포넌트의 속성 (properties의 약어)

! props 데이터 전달
부모 컨포넌트로 부터 자식 컴포넌트로 데이터를 전달할 때 사용

-props 로 전달된 데이터는 자식 컴포넌트에서 readonly! 사용 (부모로부터 받은 데이터 변경 불가)


*/
// ? 자식 컴포넌트
// 부모로 부터 전달되는 props 를 매개변수로 받음
type ChildType = {
  name : string;
}
// 한개짜리 ( {name} : {name:string})
function ChildComponent( {name, age} : {name : string; age : number} ) {
  // props.name = "이도경"; - error (readonly 속성)
  return (
    <>
      <div>안녕하세요. {name}</div>
      <div>나이는 {age}살 입니다</div>
    </>
  )
}
type MultiPropsType = {
  name : string;
  colorProps : string;
}
// 여러 개의 props 전달과 비구조화 할당(구조분해)
// 객체나 배열에서 해당 묶음 구조를 풀이해서 작성
// 객체나 배열 내부의 요소들을 한번에 각각의 요소의 변수에 할당
// 구조분해할때 배열은 순서가 중요하지만 객체는 각속성에 따라 알아서 대입되기 떄문에 좀더 자유롭다

// ex) [a,b] = [1,2,3,4];
// a = 1;
// b = 2;

function MultiPropsComponent({ name, colorProps }: MultiPropsType) {
  // 좌항의 name과 colorProps는 함수 내부의 로컬 매개변수
  // 우항의 객체 구조는 외부에서 전달하는 인자값(객체, 배열)

  return <div style={{ color: colorProps }}>반갑습니다. {name}님</div>;
}
MultiPropsComponent.defaultProps = {
  name : "황상기"
}
export default function Props01() {
  const props = {
    colorProps: 'orange',
    name: '박영준',
  };
  return (
    <div>
      {/*
      props의 경우 객체로 전달됨!
      */}
      <ChildComponent name="이승아" age={40} />
      <ChildComponent name="이도경" age={30} />
      <MultiPropsComponent name="이기석" colorProps="pink" />
      <MultiPropsComponent {...props} />
      <MultiPropsComponent colorProps='purple' />
    </div>
  );
}