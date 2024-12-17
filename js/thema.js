function loadQuiz(button) {
    fetch('../json/' + button.id + '.json')
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(json => {
            window.location.href = `../pages/quiz.html?theme=${encodeURIComponent(button.id)}`;
        })
        .catch(error => {
            console.log(error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button'); // Get all buttons

    buttons.forEach(button => {
        console.log(button.id);

        button.addEventListener('click', () => {
            loadQuiz(button); // Call loadQuiz with the clicked button
        });
    });
});
