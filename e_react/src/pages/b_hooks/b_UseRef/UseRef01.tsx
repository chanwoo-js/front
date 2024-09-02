import React, { useRef, useState } from 'react'

//! useRef 
// use + reference (참조)
// 변경 가능한 참조 객체를 생성할 수 있는 기능(훅)
//? 사용 목적
// dom 요소에 직접적으로 접근하고 조각
// 컴포넌트가 재렌더링될 때도 값이 유지되는 변수 관리
// 이전 상태를 기억 (렌더링 사이에 지속되는 값을 유지)

//? 기본 문법
// const refContainer = userRef(initiaValue);
// initialValue  :  참조 객체의 초기값
// refContainer.current : 저장된 현재 값에 접근

//+) useRef는 객체를 반환
// 해당 객체에는 current 라는 속성이 존재
// 컴포넌트의 재랜더링에도 값이 유지

let lengthData = 0;
function UseRef01() {

  const [text, setText] = useState<string>("");

  const lengthRef = useRef(0);

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    lengthRef.current = e.target.value.length; // 새롭게 랜더링되어도 값을 저장할 수 있다?
    lengthData = e.target.value.length;

  }
  return (
    <div>
      <h4>현재 텍스트 길이 측정 예제</h4>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>text 길이 : {lengthRef.current}</p>
      {/* 값을 기억할 수 있다 */}
      <p>text 길이 : {lengthData}</p>
      {/* 값을 기억할 수 없다. */}
    </div>
  )
}

export default UseRef01