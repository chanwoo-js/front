import React from 'react'

// ! 리액트 라우터
// 페이지 이동 기능

//? 라우터란
// 사용자가 요청한 url 에 따라 해당 url 에 맞는 페이지를 보여주는 것
// react-router-dom 패키지 외부 라이브러리를 사용하여 라우팅을 구현


//! 리액트 라우터 설치 방법
// npm i react-router-dom

//! 리액트 라우터 사용 방법
// 1) 프로젝트에 라우터 기능을 적용
// 프로젝트 최상단인 src/index.tsx 파일에서
// BrowerRouter 를 적용
// 자식 컴포넌트들이 라우팅 기능을 사용할 수 있도록 작성

// 2) Router 
// 여러 개의 Route 담을 수 있는 컴포넌트
// 여러 개의 Route 중각각의 path(경로)에 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할

// 3) Route

function index() {
  return (
    <div>index</div>
  )
}

export default index