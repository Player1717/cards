// script.js

document.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;

        // Установка альбомной ориентации
        tg.setOrientation("landscape"); // Фиксирует альбомную ориентацию

        // Расширение приложения на весь экран
        tg.expand(); // Занимает весь доступный экран
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
