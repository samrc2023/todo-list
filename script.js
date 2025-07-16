function addTask() {
  const task = document.getElementById('new-task').value;
  const list = document.getElementById('tasks');
  const li = document.createElement('li');
  li.textContent = task;
  list.appendChild(li);
}