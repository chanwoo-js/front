// 요구사항 (비지니스 로직이라고 하기도함) 정리
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.nextId = 1;
    }
    // 2. 메서드 (기능 정의)
    //* 할 일 추가
    // : 할 일 내용(content)
    TaskManager.prototype.addTask = function (content) {
        var newTask = {
            id: this.nextId,
            content: content,
            completed: false
        };
        this.tasks.push(newTask);
        // 다음 id값을 미리 증가
        this.nextId++;
        // 할 일 개수를 업데이트
        this.updateTaskCount();
    };
    //* 할 일 제거
    // 제거할 요소의 id값
    TaskManager.prototype.removeTask = function (id) {
        // 제거는 filter
        // task  배열에서 배개변수로 받은 id와 일치하지 않는 할 일만 필터링
        this.tasks = this.tasks.filter(function (task) {
            return task.id !== id;
        });
        // 변경된 할 일 목록을 화면에 다시 렌더링
        this.renderTasks("task-list");
        // 할 일 개수를 업데이트
        this.updateTaskCount();
    };
    //* 할 일 출력
    // 렌더링 할 컨테이너 ul태그의 id를 매개변수로 받을꺼
    TaskManager.prototype.renderTasks = function (containerId) {
        var _this = this;
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        this.tasks.forEach(function (task) {
            // 새로운 목록 항목 (li)을 생성
            var li = document.createElement("li");
            li.textContent = "".concat(task.content);
            // <li>content의 값<button>삭제</button><input type = "check" checked /></li>
            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "삭제";
            deleteBtn.onclick = function () {
                _this.removeTask(task.id);
            };
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.onchange = function () {
                task.completed = !task.completed;
                _this.renderTasks(containerId);
            };
            if (task.completed) {
                li.style.textDecoration = "line-through";
            }
            // 생성된 html의 하위 요소에 삽입 (제일 마지막)
            li.appendChild(deleteBtn);
            // 생성된 html 의 하위 요소로 삽입(삽입할 요소, 부모요소.firstChild) : 제일 처음
            li.insertBefore(checkbox, li.firstChild);
            container.appendChild(li);
        });
        this.updateTaskCount();
    };
    //* 할 일 수정 (완료 여부 토글)
    //* 할 일 개수 업데이트
    TaskManager.prototype.updateTaskCount = function () {
        var countElement = document.getElementById("task-count");
        // as타입 단언을 통해 dom 요소의 존재여부 체킹을 하지 않은 경우
        // : 존재 여부를 조건문으로 검증
        if (countElement) {
            countElement.textContent = "\uD560 \uC77C \uAC1C\uC218 : ".concat(this.tasks.length);
        }
    };
    return TaskManager;
}());
// # 휍 페이지가 모두 로드되었을때 실행될 함수
document.addEventListener("DOMContentLoaded", function () {
    var taskManager = new TaskManager;
    var addButton = document.getElementById("add-button");
    var newTaskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");
    addButton.addEventListener("click", function () {
        if (newTaskInput.value.trim() !== "") {
            taskManager.addTask(newTaskInput.value);
            taskManager.renderTasks("task-list");
            newTaskInput.value = "";
        }
    });
});
