// Перед вами форма для авторизації на сайті (правильні дані для входу збережені в обʼєкті USER_DATA)

// Розбийте код на кілька файлів:
// storage.js - функції для роботи зі сховищем;
// refs.js - посилання на всі потрібні елементи в html;
// main.js - головний файл, де вся основна логіка додатка.

// Ви маєте додати перевірку введених даних при сабміті:
// Якщо введені дані не збігаються зі збереженими, викликайте аlert і
// повідомляйте про помилку.
// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми
// у локальне сховище і змінюйте кнопку Login на Logout, також робіть поля введення
// недоступними для змін.

// При перезавантаженні сторінки, якщо користувач авторизован, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// з локального сховища.

import { refs } from './refs';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { saveInLs, getFromLs, removeFromLs } from './storage';

const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

const LS_KEY = 'user-data';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (refs.buttonfirst.textContent === 'Logout') {
    refs.form.reset();
    refs.buttonfirst.textContent = 'Login';
    refs.inputEmail.removeAttribute('readonly');
    refs.inputPassword.removeAttribute('readonly');
    removeFromLs(LS_KEY);
    return;
  }

  const emailValue = event.target.elements.email.value.trim();
  const passwordValue = event.target.elements.password.value.trim();

  if (!emailValue || !passwordValue) {
    iziToast.warning({
      message: 'You have to fill all fields',
      position: 'center',
    });
    return;
  }

  if (emailValue !== USER_DATA.email || passwordValue !== USER_DATA.password) {
    iziToast.error({
      title: 'Error',
      message: 'Invalid Data',
      position: 'center',
    });
    return;
  }

  saveInLs(LS_KEY, { email: emailValue, password: passwordValue });
  refs.buttonfirst.textContent = 'Logout';
  refs.inputEmail.setAttribute('readonly', true);
  refs.inputPassword.setAttribute('readonly', true);
}

const savedData = getFromLs(LS_KEY);
if (savedData) {
  refs.inputEmail.value = savedData.email || '';
  refs.inputPassword.value = savedData.password || '';
  refs.buttonfirst.textContent = 'Logout';
  refs.inputEmail.setAttribute('readonly', true);
  refs.inputPassword.setAttribute('readonly', true);
}
