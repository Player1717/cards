// layout.js

document.addEventListener('DOMContentLoaded', function () {
    const cardSlots = document.querySelectorAll('.card-slot');
    const cards = [];

    // Загрузка изображений карт
    for (let i = 1; i <= 10; i++) {
        const cardFront = new Image();
        cardFront.src = `images/cards${i}.png`; // Изображение лицевой стороны карты

        const cardBack = new Image();
        cardBack.src = `images/cardback${i}.png`; // Изображение обратной стороны карты

        // Проверка загрузки изображений
        cardFront.onload = () => console.log(`Card ${i} front loaded successfully`);
        cardFront.onerror = () => console.error(`Error loading card ${i} front`);

        cardBack.onload = () => console.log(`Card ${i} back loaded successfully`);
        cardBack.onerror = () => console.error(`Error loading card ${i} back`);

        cards.push({ front: cardFront, back: cardBack });
    }

    let currentCardIndex = 0;

    function placeCard(slot) {
        if (currentCardIndex >= cards.length) return;

        const cardSlot = slot;
        const cardNumber = cardSlot.dataset.number;
        const card = cards[currentCardIndex];

        // Создаем элементы для фронтальной и обратной сторон карты
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const frontElement = document.createElement('div');
        frontElement.classList.add('card', 'front');
        frontElement.appendChild(card.front);

        const backElement = document.createElement('div');
        backElement.classList.add('card', 'back');
        backElement.appendChild(card.back);

        cardElement.appendChild(frontElement);
        cardElement.appendChild(backElement);

        // Начальная позиция карты (из колоды)
        const deckPosition = document.querySelector('.deck-container').getBoundingClientRect();
        cardElement.style.position = 'fixed'; // Используем fixed для анимации
        cardElement.style.left = `${deckPosition.left}px`;
        cardElement.style.top = `${deckPosition.top}px`;

        document.body.appendChild(cardElement);

        // Анимация падения карты
        setTimeout(() => {
            const slotPosition = cardSlot.getBoundingClientRect();
            cardElement.style.transition = 'all 0.5s ease-in-out';
            cardElement.style.left = `${slotPosition.left}px`;
            cardElement.style.top = `${slotPosition.top}px`;
        }, 100);

        // Добавляем карту в слот после анимации
        setTimeout(() => {
            cardSlot.appendChild(cardElement);
            cardElement.style.position = 'static'; // Возвращаем обычное позиционирование

            // Скрываем цифру (убираем .slot-number)
            const slotNumber = cardSlot.querySelector('.slot-number');
            if (slotNumber) {
                slotNumber.style.display = 'none'; // Скрываем цифру
            }
        }, 600);

        currentCardIndex++;
    }

    // Начинаем раскладывать карты
    cardSlots.forEach((slot, index) => {
        setTimeout(() => {
            placeCard(slot);
        }, index * 500); // Задержка между падением каждой карты
    });
	
	// Добавляем обработчик события для кнопки "Ваш результат"
    document.getElementById('result-button').addEventListener('click', () => {
        window.location.href = 'result-display.html';
    });
});

