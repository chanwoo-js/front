import React, { useMemo, useState } from 'react'

// 컴포넌트 자체를 메모화 하는 경우
// react.memo()
// 함수형 컴포넌트에서 props 의 값이 동일한 경우
// 이전의 랜더링 결과를 재사용하여 불필요한 리렌더링을 방지

//# 자식 컴포넌트
const ChildComponent = React.memo( ({count} : {count: number}) => {
  console.log("자식컴포넌트 랜더링");
  return <div>count : {count}</div>})

//# 부모 컴포넌트


function UseMemo02() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  return (
    <div>
      <ChildComponent count={count}/>
      <button onClick={() => setCount(count + 1)}>증간</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />  
    </div>
  )
}

// 컴포넌트를 메모이제이션하고 exportdefault로 내보내기

export default React.memo(UseMemo02)