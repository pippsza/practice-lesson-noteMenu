/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */
// Отримати значення - сформувати об'єкт для локального сховища з додаванням айді- записати в сховище
import { nanoid } from 'nanoid';
import localStorageApi from './js/localStorageApi';
import { renderTasks } from './js/render-tasks-1'
const taskForm = document.querySelector('#task-form');
const TASKS = 'tasks';
localStorageApi.initStorage();

taskForm.addEventListener('submit', event => {
  event.preventDefault();

  const taskNameValue = event.currentTarget.elements.taskName.value.trim();
  const taskTextValue = event.currentTarget.elements.taskText.value.trim();

  if (!taskNameValue && !taskTextValue) {
    alert('Введіть назву та текст задачі');
    return;
  }
  const newTask = {
    id: nanoid(),
    taskName: taskNameValue,
    taskText: taskTextValue,
  };

  localStorageApi.addTask(newTask);
  renderTasks()
});
renderTasks()