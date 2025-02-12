// script.js

document.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;

        // Установка альбомной ориентации через Telegram API
        tg.setOrientation("landscape");
        tg.expand();
    } else if (screen.orientation && screen.orientation.lock) {
        // Установка альбомной ориентации через Screen Orientation API
        screen.orientation
            .lock("landscape")
            .then(() => {
                console.log("Ориентация успешно заблокирована в альбомный режим.");
            })
            .catch((err) => {
                console.log("Ошибка блокировки ориентации:", err);
            });
    } else {
        console.log("Невозможно заблокировать ориентацию.");
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
