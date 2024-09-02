import React, { useState } from 'react'

function Practice02() {
  // input 에 작성되는 상태값 저장
  const [inputText, setInputText] = useState<string>('');


  // input 에 작성될때마다 반응
  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }
  const handleAddTodo = () => {

  }
  return (
    <div>
      <h2>todo list</h2>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>할일 추가 버튼</button>
    </div>
  )
}

export default Practice02