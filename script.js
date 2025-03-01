// Получаем элементы
const toggleButton = document.getElementById('toggleButton');
const hiddenImageContainer = document.getElementById('hiddenImageContainer');

// Добавляем обработчик события на кнопку
toggleButton.addEventListener('click', () => {
    if (hiddenImageContainer.classList.contains('hidden')) {
        hiddenImageContainer.classList.remove('hidden');
    } else {
        hiddenImageContainer.classList.add('hidden');
    }
});