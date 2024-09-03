import React, { useReducer, useState } from "react";

//! React 컴포넌트의 상태 관리
// useState vs useReducer

// 1) useState
// const [state, setState] = useState<stateType>(initialValue);
// 리액트에서 가장 기본적인 상태 관리 hook

// 2) useReducer
// const [state, dispatch] = useReducer(reducer, initialValue);
// - 복잡한 상태 로직을 관리하는데 useState 보다 적합
// - 상태 업데이트 로직을 외부에서 선언 가능 ( 재사용성 용이 )
//? useReducer의 기본 구조
// reducer 함수 (리듀서 함수)
// : useReducer에 인자로 전달되는 값
// : 상태 변경 로직을 포함(switch, case)하고, 이전 상태와 액션 객체를 인자로 받아 새로운 상태를 반환
// initialValue
// : 리듀서의 초기 상태를 정의 (상태의 초기값)
// dispatch 함수
// : 액션을 발생시켜 상태를 업데이트하는 함수
// 해당 함수에 액션을 전달할 경우
// 리듀서 함수가 호출되어 새로운 상태를 계산

// state
// 현재 상태 값 (관리되는 데이터)

// state, action은 객체로 받아야한다.

type CountState = {
  count: number;
};
type CountAction = { type: "increment" } | { type: "decrement" };

function reducer(state: CountState, action: CountAction): CountState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}

function UseReducer01() {
  const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, {count : 0});
  // state는 값 배출 객체로 초기값을 만들기 때문에 state.~~ 로 값을 배출한다.
  // dispatch는 setstate와 비슷
  // reducer은 사용할 기능함수 정의
  // 초기값 : 객체 상태
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
    
      <h2>useState를 사용한 상태관리</h2>
      <p>count : {count}</p>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>증가</button>

      <h2>리듀서를 사용한 상태관리</h2>
      <p>count : {state.count}</p>
      <button onClick={() => dispatch({ type : "increment"})}>증가</button>
      <button onClick={() => dispatch({ type : "decrement"})}>감소</button>
 
    </div>
  );
}

export default UseReducer01;
