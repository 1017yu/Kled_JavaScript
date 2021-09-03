const todolist = document.querySelector("#to-do-list")

function addNewTodo(text){
  const add = document.createElement('li')
  add.innerHTML = text;  // parameter로 전달받은 text를 li 태그 안에 넣기
  todolist.append(add);  // 마지막 자식요소로 추가하기 위해 append 메소드 사용
}

addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');