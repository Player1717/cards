// result.js

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const question = urlParams.get('question');

    // Отображение вопроса пользователя
    document.getElementById('user-question').textContent = question;

    // Анимация колоды карт
    const deckContainer = document.querySelector('.deck-container');
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img');
        card.src = 'images/deck.png';
        card.alt = 'Card';
        card.classList.add('deck-image');
        card.style.zIndex = 10 - i; // Создание эффекта стопки
        card.style.transform = `translateY(${i * 2}px)`; // Смещение карт
        deckContainer.appendChild(card);
    }

    // Добавление обработчика клика на колоду
    deckContainer.addEventListener('click', function () {
        window.location.href = 'layout.html';
    });
});