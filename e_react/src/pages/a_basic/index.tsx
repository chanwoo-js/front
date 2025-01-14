import React from 'react'
//! 파일명까지 명시
import Props01 from './d_Props/Props01';
import ReactExample from './a_React/ReactExample';
import Component01 from './b_Component/Component01';

//! index라는 이름을 가진 파일은 폴더명까지만 명시 가능
import MainComponent from './b_Component';
import MainJSX from './c_JSX';
import Props02 from './d_Props/Props02';
import Rendering01 from './f_Rendering/Rendering01';
import Rendering02 from './f_Rendering/Rendering02';
import Handler01 from './g_Handler/Handler01';
import Handler02 from './g_Handler/Handler02';
import Handler03 from './g_Handler/Handler03';
import UseState01 from '../b_hooks/a_UseState/UseState01';

export default function index() {
  return (
    <div>
      <h1 style={{backgroundColor: "black", color:'white'}}>리액트의 기본 문법</h1>
      <h2>a_React 리액트 VS 타입스크립트</h2>
      <ReactExample />

      <h2>b_Component 리액트를 구성하는 기본 구조</h2>
      <Component01 />
      <MainComponent />

      <h2>c_JSX 리액트의 기본 문법</h2>
      <MainJSX />

      <h2>d_Props 리액트의 데이터 전달 - Props (부모 - 자식)</h2>
      <Props01 />
      <Props02 />
      
      <h2>f_Rendering 리액트의 조건부 렌더링</h2>
      <Rendering01/>
      <Rendering02/>

      <h2>g_Handler 리액트의 이벤트 핸들러</h2>
      <Handler01 />
      <Handler02 />
      <Handler03 />

      <h2>리액트 hooks - useState</h2>
      <UseState01/>
    </div>
  )
}
