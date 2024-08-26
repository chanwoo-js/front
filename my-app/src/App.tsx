import React from 'react';
import ReactExample from './pages/a_basic/a_React/ReactExample';
// 파일명 까지 명시
import Component01 from './pages/a_basic/b_Component/Component01';
// index라는 이름을 가진 파일은 폴더 명까지만 명시 가능
// index는 하나만 가져야되기떄문에
import Index23 from './pages/a_basic/b_Component';
// export default 이기때문에 이름 변경이 가능한것

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
//: http://localhost : 3000환경에서 실행
function App() {
  return (
    <div className="App">
      <h1>React Project</h1>
      {/* 컴포넌트 호출 <컴포넌트명 /> */}
      <ReactExample/>
      <Component01/>
      <Index23/>
      내용수정
    </div>
  );
}

export default App;
