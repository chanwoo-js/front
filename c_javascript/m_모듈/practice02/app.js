//# 1. 프로젝트 기능 정의
// - todomanager 모듈의 기능을 사용하여 할 일 앱을 구현

import { TodoManager } from "./TodoManager.js";

// - 이벤트 등록, 할 일 목록 업데이트 등 로직을 담당

// ? todomanager 의 인스턴스를 생성
const todomanager = new TodoManager();

//? html 요소 가져오기
const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#new-todo");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // form 내부에서 데이터를 할일 목록에 추가
  const text = input.value.trim();

  if(text !== "") {//text 가 빈 문자열이 아니라면 ( 비어있지 않다면 )
    todomanager.addTodo(text);
    input.value = "";
    updateTodoList();
  }

})

// 할일 목록을 업데이트 하는 함수
function updateTodoList () {

  //모든 할 일 가져오기
  const todos = todomanager.getTodos();

  // ul 태그 내부의 데이터(내용)을 삭제
  // html 요소.innerHTML 
  // :  요소 내부의 전체 HTML 코드를 문자열로 가져오기
  todoList.innerHTML = "";
  
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if(todo.completed) {// 순회되는 요소의 완료 여부가 true 라면
      li.classList.add("completed");
    }else {
      li.classList.remove("completed");
    }

    li.addEventListener("click", () => {
      todomanager.toggleCompleted(todo.id);
      updateTodoList();

    });
    // 삭제 버튼 생성
    const deletedButton = document.createElement("button");
    deletedButton.textContent = "Delete";
    deletedButton.classList.add("delete-button");

    // 삭제 버튼 클릭 시 해당 할 일 항목 제거
    deletedButton .addEventListener("click", (e) => {
      todomanager.removeTodo(todo.id);
      updateTodoList();
    });
    li.appendChild(deletedButton);
    todoList.appendChild(li);
  })

}

updateTodoList();