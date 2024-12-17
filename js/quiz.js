var currentQuestion = 1;
var totalPoints = 0; // Changed later
var obtainedPoints = 0;

function loadQuestion(json) {
    const correct = json.quiz[currentQuestion].correct_answer;

    const question = document.getElementById("question");
    const optionA  = document.getElementById("a");
    const optionB = document.getElementById("b");
    const optionC = document.getElementById("c");
    const optionD = document.getElementById("d");

    question.textContent = json.quiz[currentQuestion].question;
    optionA.textContent = json.quiz[currentQuestion].options.A;
    optionB.textContent = json.quiz[currentQuestion].options.B;
    optionC.textContent = json.quiz[currentQuestion].options.C;
    optionD.textContent = json.quiz[currentQuestion].options.D;
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme'); // Get the title parameter

    fetch('../json/' + theme + '.json')
        .then(res => res.json())
        .then(json => {
            const title = document.getElementById('quiz-title');
            const buttons = document.querySelectorAll('button');
            title.textContent = json.quiz[0].title;

            json.quiz.forEach(item => {
                if (item.points) {
                    console.log(item.points)
                    totalPoints += item.points;
                }
            })

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    if (button.id.toUpperCase() == json.quiz[currentQuestion].correct_answer) {
                        obtainedPoints += json.quiz[currentQuestion].points;
                    }

                    if (currentQuestion + 1 < Object.keys(json.quiz).length) {
                        currentQuestion += 1;
                        loadQuestion(json);
                    }
                    else {
                       const question = document.getElementById("question");
                       question.textContent = obtainedPoints + " / " + totalPoints;
                    }

                })
            })

            loadQuestion(json);
            
        })
        .catch(error => {
            console.error(error);
        })
});
