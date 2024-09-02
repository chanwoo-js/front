// 커스텀 훅 제작
// : useInput
// >> input창에 입력되는 값을 저장하고 UI의 변경 상태에 따라 데이터의 상태 관리
// >> 여러 개의 input 창을 하나의 훅으로 관리

import { useState } from "react";

// >> input창에 대한 비움 처리 (초기화)
export function useInput(initialValue: string) {
  
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  } 

  const reset = () => {
    setValue(initialValue);
  }

  return {
    value,
    reset,
    // 바인딩 값: UI에 직접적으로 적용될 속성과 함수를 정의
    bind: {
      value,
      onChange: handleValueChange
    }
  }
}