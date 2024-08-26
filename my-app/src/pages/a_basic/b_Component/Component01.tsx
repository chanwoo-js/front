import React from 'react'

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
function Component01() {
  return (
    <div>안녕하세요 컴포넌트입니다.</div>
  )
}

export default Component01