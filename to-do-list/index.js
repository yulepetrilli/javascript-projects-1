const addBtn = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const input = document.getElementById('input-task');

addBtn.addEventListener('click', function(){
    let task = document.createElement('div');

    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${input.value}`;
    task.appendChild(li);

    /* Check button for complete task */
    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class="fa fa-check"></i>`;
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    /* Delete button for task */
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa fa-times"></i>`;
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if(!input.value){
        alert('Please enter a task');
    } else {
        taskContainer.appendChild(task);
    }

    input.value = "";

    checkBtn.addEventListener('click', function(){
        checkBtn.parentElement.style.textDecoration = 'line-through';
    });

    deleteBtn.addEventListener('click', function(e){
        let target = e.target;

        target.parentElement.parentElement.remove();
    });
});
