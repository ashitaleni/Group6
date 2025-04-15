document.addEventListener("DOMContentLoaded", loadTodos);



function addTodo() {

  const input = document.getElementById('todo-input');

  const todoText = input.value.trim();



  if (todoText === '') return;



  const todo = {

    text: todoText,

    completed: false

  };



  saveTodo(todo);

  renderTodos();

  input.value = '';

}



function renderTodos() {

  const todoList = document.getElementById('todo-list');

  todoList.innerHTML = '';



  const todos = getTodos();



  todos.forEach((todo, index) => {

    const li = document.createElement('li');

    li.textContent = todo.text;



    if (todo.completed) {

      li.classList.add('completed');

    }



    li.onclick = () => toggleCompleted(index);



    const delBtn = document.createElement('button');

    delBtn.textContent = 'X';

    delBtn.className = 'delete-btn';

    delBtn.onclick = (e) => {

      e.stopPropagation(); // So it doesn’t trigger toggle

      deleteTodo(index);

    };



    li.appendChild(delBtn);

    todoList.appendChild(li);

  });

}



function toggleCompleted(index) {

  const todos = getTodos();

  todos[index].completed = !todos[index].completed;

  localStorage.setItem('todos', JSON.stringify(todos));

  renderTodos();

}



function deleteTodo(index) {

  const todos = getTodos();

  todos.splice(index, 1);

  localStorage.setItem('todos', JSON.stringify(todos));

  renderTodos();

}



function saveTodo(todo) {

  const todos = getTodos();

  todos.push(todo);

  localStorage.setItem('todos', JSON.stringify(todos));

}



function getTodos() {

  return JSON.parse(localStorage.getItem('todos')) || [];

}



function loadTodos() {

  renderTodos();

}
