// result-display.js

const cards = [
    { img: 'images/cardback1.png', title: 'Карта 1', description: 'Пояснение к карте 1' },
    { img: 'images/cardback2.png', title: 'Карта 2', description: 'Пояснение к карте 2' },
    { img: 'images/cardback3.png', title: 'Карта 3', description: 'Пояснение к карте 3' },
	{ img: 'images/cardback4.png', title: 'Карта 3', description: 'Пояснение к карте 4' },
	{ img: 'images/cardback5.png', title: 'Карта 3', description: 'Пояснение к карте 5' },
	{ img: 'images/cardback6.png', title: 'Карта 3', description: 'Пояснение к карте 6' },
	{ img: 'images/cardback7.png', title: 'Карта 3', description: 'Пояснение к карте 7' },
	{ img: 'images/cardback8.png', title: 'Карта 3', description: 'Пояснение к карте 8' },
	{ img: 'images/cardback9.png', title: 'Карта 3', description: 'Пояснение к карте 9' },
	{ img: 'images/cardback10.png', title: 'Карта 3', description: 'Пояснение к карте 10' },
    // Добавьте остальные карты...
];

let currentCardIndex = 0;

function updateCard() {
    const currentCard = cards[currentCardIndex];
    const cardElement = document.getElementById('current-card');

    // Анимация выхода текущей карты влево
    cardElement.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        // Обновляем данные карты
        cardElement.src = currentCard.img;
        document.getElementById('card-title').textContent = currentCard.title;
        document.getElementById('card-description').textContent = currentCard.description;

        // Возвращаем карту в исходное положение (справа)
        cardElement.style.transform = 'translateX(100%)';

        // Плавное появление новой карты
        setTimeout(() => {
            cardElement.style.transform = 'translateX(0)';
        }, 50); // Небольшая задержка для сброса анимации
    }, 500); // Время завершения анимации выхода

    // Обновляем состояние кнопок
    document.getElementById('prev-button').disabled = currentCardIndex === 0;
    document.getElementById('next-button').disabled = currentCardIndex === cards.length - 1;
}

document.getElementById('next-button').addEventListener('click', () => {
    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        updateCard();
    }
});

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
});

// Добавляем обработчик события для кнопки "Другой вопрос"
document.getElementById('new-question-button').addEventListener('click', () => {
    window.location.href = 'index.html'; // Переход на начальный экран
});

// Инициализация первой карты
updateCard();