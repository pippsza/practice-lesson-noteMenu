const TASKS = 'tasks';

export const renderTasks = () => {
  const tasksList = document.querySelector('.tasks-list');
  tasksList.innerHTML = ``;

  const tasks = JSON.parse(localStorage.getItem(TASKS));
  const markupTask = tasks.map(ell => {
    const { id, taskName, taskText } = ell;
    return `<li class="task-list-item " data-id="${id}">
     <button class="task-list-item-btn">Удалить</button>
      <h3>${taskName}</h3>
     <p>${taskText}</p>
  </li>`;
  }).join('');
  tasksList.insertAdjacentHTML("beforeend", markupTask);
};


