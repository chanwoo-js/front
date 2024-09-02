import { useState } from "react";
//! 커스텀 훅



export function useCounter(initialValue : number) {
  // 초기값을 배개변수로 받고
  // 카운터를 증가 감소 초기화 하는 함수와 현재값을 반환
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount(prevcount => prevcount + 1);
  const decrement = () => setCount(prevcount => prevcount - 1);
  const reset = () => setCount(initialValue);

  // 객체
  // 속성 1개 메서드3개와 같다
  return {count, increment, decrement, reset};
}