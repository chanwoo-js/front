import { timeStamp } from "console";
import React, { useState } from "react";
interface Todo {
  text: string;
  completed: boolean;
  timestamp: Date;
}

function UseRef03re() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  const addTodo = () => {
    // 기본값 설정
    const newTodo = {
      text: task,
      completed: false,
      timestamp: new Date(),
    };
    setTodos([...todos, newTodo]);
    setTask(""); //초기화
  };
  return (
    <div>
      <button onClick={addTodo}>추가 버튼</button>
      {/* 원래값 보여주기 */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            (추가 시간 : {todo.timestamp.toLocaleTimeString()})
            <button>완료여부</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseRef03re;
