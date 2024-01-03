//your code here
document.addEventListener('DOMContentLoaded', function () {
    const newTodoInput = document.getElementById('newTodoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    addTodoBtn.addEventListener('click', function () {
        const todoText = newTodoInput.value.trim();

        if (todoText) {
            todoList.innerHTML += `<li>${todoText}</li>`;
            newTodoInput.value = '';
        }
    });
});


