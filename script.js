// script.js

function startReading() {
    const question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Пожалуйста, введите вопрос.");
        return;
    }

    // Переход на следующую страницу с результатом
    window.location.href = `result.html?question=${encodeURIComponent(question)}`;
}