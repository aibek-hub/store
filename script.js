// Обработчик для кнопки "+" (FAB)
document.getElementById('fabButton').addEventListener('click', function() {
  const fabMenu = document.querySelector('.fab-menu');
  fabMenu.classList.toggle('d-none');
});

// Обработчик для кнопки "Изменить" в формах
const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Остановим отправку формы
      alert('Изменения сохранены!'); // Сообщение о сохранении
  });
});
// Обработчик для кнопки "+" (FAB)
document.getElementById('fabButton').addEventListener('click', function() {
  const fabMenu = document.querySelector('.fab-menu');
  fabMenu.classList.toggle('d-none');
});
// script.js
document.getElementById('fabButton').addEventListener('click', function() {
  const fabMenu = document.querySelector('.fab-menu');  
  fabMenu.classList.toggle('d-none');
});
      