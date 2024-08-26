import React from 'react'
import cat01 from "../../../assets/cat01.jpg"

// rfc , rfce >> 함수형 컴포넌트 생성
// : 파일 명으로 컴포넌트 함수 생성

/*
! 컴포넌트 (Component)
: 사용자 인터페이스(ui)를 구축하는 기본 요소

? 컴포넌트 사용 방법
1) 컴포넌트 내보내기 (export default)

2) 컴포넌트 가져오기
: 불러오는 환경에서 상대경로를 지정
>> 기존의 컴포넌트 함수명에서 변경 가능 (default)

? 특징
1) 대문자로 시작 (upperCamelCase 사용)
: js의 일반 함수 형태와 구분
>> rfc, rfce 스니펫 사용 시
  - 파일명이 함수명으로 구현
  - 각 폴더의 메인이 되는 파일 : index.tsx(소문자)
  >> 컴포넌트명은 대문자로 수정

*/

// 컴포넌트 생성
// Img 컴포넌트
// src, alt 속성을 가진 img 태그를 반환
// html 코드 내에서 js문법 사용 시 
// : 중괄호 내에 작성
// js 코드 내에서 html 코드 작성 시
// : 소괄호 내에 작성
// >> 컴포넌트 함수에서 렌더링 할 때 html 코드는
// return 반환문 내에서 () 소괄호 지정 후 작성

function Img () {
  return (
    <div><img src={cat01} alt="고양이" width={300} /></div>
  )
}
// Component01 : 해당 파일의 메인 컴포넌트 ( export default )

function Component01() {
  // 컴포넌트 사용 시 함수 컴포넌트 명으로 태그 작성
  // : 대문자로 시작!
  
  //? jsx 컴포넌트 사용 시
  // 마크업(태그)이 한 개인 경우 소괄호 생략 가능
  // , 여러개의 경우 반드시 소괄호로 감싸서 사용

  return (
    <div>
      <img src={cat01} alt="고양이" width={100} />
      <Img />
      <Img />
    </div>
  )
}

export {Component01,Img }