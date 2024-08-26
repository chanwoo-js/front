import React, { useState } from 'react'

// 확장 플러그인
// react snippets 설치
// 
export default function ReactExample() {
  //? 리액트와 일반 ts의 차이
  // 간단한 카운터 예제

  // 1) ui 컴포넌트가 클래스 또는 함수 형태로 작성
  // 함수형 컴포넌트 사용을 권장

  // 2) 컴포넌트를 기반으로 ui와 삼태 관리를 구혐
  // 리액트는 크게 보면 상태관리가 시작이자 끝이다.

  // ? 리액트 기능 사용 (함수형 컴포넌트의 기능 : hook)
  const [count, setCount] = useState<number>(0);

  function increment () {
    setCount(count + 1);
  }


  function decrement () {
    setCount(count - 1);
  }

  // jsx에서는 return 문을 사용하여 html 영역을 반환
  return (
    <div>
      <h1>count : {count}</h1>
      {/* 
          jsx에서는 속성 지정 시 lowerCamelCase 사용
          js(ts): onclick
          jsx(tsx) : onClick 속성
      */}
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  )
}
//! rfce 사용 함수형 컴포넌트 구조
// import React from "react"

//function ReactExample() {

//}
// 1. function 함수를 만들고
// 2. 요소에 이벤트를 인라인형식으로 작성하고
// 3. 반응될때마다 함수기능이 작동되면서 상태변화가 일어나고
// 4. 일어난 변화 (값)을 반영하여 사용한다.

