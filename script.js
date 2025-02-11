// script.js

document.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;

        // Фиксация альбомной ориентации
        tg.setOrientation("landscape"); // Новый метод для установки ориентации
        tg.expand(); // Расширяет приложение на весь экран
    }
});

function startReading() {
    const question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Пожалуйста, введите вопрос.");
        return;
    }

    // Переход на следующую страницу с результатом
    window.location.href = `result.html?question=${encodeURIComponent(question)}`;
}
