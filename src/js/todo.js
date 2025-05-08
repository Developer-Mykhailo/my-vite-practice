// Створи перелік справ.
// Є інпут, в який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Список із завданнями має бути доступним після перезавантаження сторінки.
// * Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import { refs } from './refs';
// import { getFromLs, saveInLs } from './storage';

// const LS_TASK_KEY = 'list to do';

// let tasks = getFromLs(LS_TASK_KEY) || [];
// refs.taskList.innerHTML = createTasksMarkup(tasks);

// refs.taskForm.addEventListener('submit', addTask);
// refs.taskList.addEventListener('click', deleteTask);

// function addTask(event) {
//   event.preventDefault();
//   const inputData = event.target.elements.taskName.value.trim();

//   if (!inputData) {
//     iziToast.warning({
//       message: 'Enter something for adding',
//       position: 'center',
//     });
//     return;
//   }
//   const oneTask = { text: inputData, id: Date.now() };
//   tasks.push(oneTask);

//   saveInLs(LS_TASK_KEY, tasks);
//   refs.taskList.innerHTML = createTasksMarkup(tasks);

//   refs.taskForm.reset();
// }

// function deleteTask(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   tasks = tasks.filter(task => task.id !== +event.target.id);
//   refs.taskList.innerHTML = createTasksMarkup(tasks);
//   saveInLs(LS_TASK_KEY, tasks);
// }

// function createTasksMarkup(arr) {
//   return arr
//     .map(
//       ({ text, id }) => `
//         <li>${text} <button id="${id}">delete</button></li>
//         `
//     )
//     .join('');
// }

//!==============================================================
// Створи перелік справ.
// Є інпут, в який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Список із завданнями має бути доступним після перезавантаження сторінки.
// * Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import { refs } from './refs';
// import { saveInLs, getFromLs } from './storage';

// const KEY_LS_TASKS = 'list of tasks';
// let tasks = getFromLs(KEY_LS_TASKS) || [];
// refs.taskList.innerHTML = createMarkupForTask(tasks);
// refs.taskForm.taskName.focus();

// refs.taskForm.addEventListener('submit', addTask);
// refs.taskList.addEventListener('click', deleteTask);
// refs.taskList.addEventListener('click', changetask);

// let taskFromPromt = '';

// function addTask(event, fromPromt) {
//   event.preventDefault();

//   const inputValue = event.target.elements.taskName.value.trim() || fromPromt;
//   if (!inputValue) {
//     iziToast.warning({
//       message: 'The field is empty',
//       position: 'center',
//     });
//     return;
//   }
//   const oneTask = { text: inputValue, id: Date.now() };
//   const taskExist = tasks.some(item => item.text === oneTask.text);
//   if (taskExist) {
//     iziToast.warning({
//       message: 'This task exists already',
//       position: 'center',
//     });
//     refs.taskForm.reset();
//     return;
//   }

//   tasks.push(oneTask);
//   saveInLs(KEY_LS_TASKS, tasks);

//   refs.taskList.innerHTML = createMarkupForTask(tasks);
//   refs.taskForm.reset();
//   refs.taskForm.taskName.focus();
// }
// //---------------------------------------------------------------
// function deleteTask(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   tasks = tasks.filter(task => task.id !== +event.target.id);
//   refs.taskList.innerHTML = createMarkupForTask(tasks);
//   saveInLs(KEY_LS_TASKS, tasks);
// }

// //---------------------------------------------------------------
// //!==============================================================
// //!==============================================================
// //!==============================================================
// function changetask(event) {
//   const isInside = event.target.closest('[data-id]');
//   if (!isInside) {
//     return;
//   }

//   taskFromPromt = prompt('Enter new task');

//   console.log(taskFromPromt);
//   addTask(taskFromPromt);
// }

// //---------------------------------------------------------------

// function createMarkupForTask(arr) {
//   return arr
//     .map(
//       ({ text, id }) =>
//         `<li> ${text} </br>
//             <button data-id="${(id * 0.5).toFixed()}">Chenge</button>
//             <button id="${id}">delete</button>
//         </li>`
//     )
//     .join('');
// }
