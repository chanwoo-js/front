import React, { useRef, useState } from 'react';

function UseRef02() {
  const inputRef = useRef<HTMLInputElement>(null);
  const prevCountRef = useRef<number>(0);
  const [count, setCount] = useState<number>(0);

  const handleButtonFocus = () => {
    if (inputRef.current) {
      // .focus() : dom 요소를 활성화
      inputRef.current.focus();
    }
  }

  const incrementCount = () => {
    setCount(count => {
      prevCountRef.current = count; // 현재 count 값을 prevCountRef에 저장
      console.log(prevCountRef.current);
      console.log(prevCountRef);
      return count + 1;
    });
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      {/* 버튼을 클릭하면 인풋으로 focus가 감 */}
      <button onClick={handleButtonFocus}>focus the input</button>
      <hr />
      <p>현재 카운트 : {count}</p>
      <p>이전 카운트 : {prevCountRef.current}</p>
      <button onClick={incrementCount}>증가</button>
    </div>
  );
}

export default UseRef02;
