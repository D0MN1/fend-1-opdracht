document.addEventListener("DOMContentLoaded", function () {
    var quizContent = document.getElementById("quiz-content");
    var nextButton = document.getElementById("next-question");
    var quizTitle = document.getElementById("quiz-title");


    var quizzes = {
        github: [
            { question: "Wat is GitHub?", options: ["Een plek om code op te slaan", "Een social media platform", "Een zoekmachine"], answer: "Een plek om code op te slaan" },
            { question: "Welke tool gebruik je om code naar GitHub te sturen?", options: ["git push", "git pull", "git upload"], answer: "git push" },
            { question: "Wat is een repository op GitHub?", options: ["Een bestand", "Een map waarin je projecten opslaat", "Een server"], answer: "Een map waarin je projecten opslaat" },
            { question: "Wat betekent 'commit' in GitHub?", options: ["Het maken van een wijziging in een bestand", "Het verwijderen van een bestand", "Het herstellen van een bestand naar een vorige versie"], answer: "Het maken van een wijziging in een bestand" },
            { question: "Hoe noem je een versie van je project op GitHub?", options: ["Pull request", "Commit", "Issue"], answer: "Commit" }
        ],
        frontend: [
            { question: "Wat is HTML?", options: ["Een programmeertaal voor websites", "Een opmaaktaal voor het structureren van webpagina's", "Een manier om afbeeldingen in een webpagina te plaatsen"], answer: "Een opmaaktaal voor het structureren van webpagina's" },
            { question: "Wat doet de img; tag in HTML?", options: ["Maakt een afbeelding zichtbaar op de pagina", "Verbergt een afbeelding op de pagina", "Voegt tekst toe aan de pagina"], answer: "Maakt een afbeelding zichtbaar op de pagina" },
            { question: "Wat is CSS?", options: ["Een taal voor het maken van interactiviteit", "Een taal voor het stylen van webpagina's", "Een taal voor het toevoegen van afbeeldingen"], answer: "Een taal voor het stylen van webpagina's" },
            { question: "Welke tag gebruik je om een paragraaf tekst toe te voegen?", options: ["<p>", "<h1>", "<div>"], answer: "<p>" },
            { question: "Wat is een class in CSS?", options: ["Een manier om een specifieke stijl toe te passen", "Een variabele in JavaScript", "Een type van HTML-element"], answer: "Een manier om een specifieke stijl toe te passen" }
        ],
        backend: [
            { question: "Wat is backend development?", options: ["Wat je ziet op een webpagina", "Wat server-side processen zijn", "Wat de gebruiker aanraakt"], answer: "Wat server-side processen zijn" },
            { question: "Welke taal wordt vaak gebruikt voor backend development?", options: ["HTML", "Python", "CSS"], answer: "Python" },
            { question: "Wat doet een database in een backend?", options: ["Maakt een webpagina mooi", "Bewaren van data voor later gebruik", "Voegt animaties toe aan de pagina"], answer: "Bewaren van data voor later gebruik" },
            { question: "Wat is een API?", options: ["Een manier om de frontend te bouwen", "Een interface om backend diensten te communiceren", "Een programmeertaal"], answer: "Een interface om backend diensten te communiceren" },
            { question: "Wat is een server?", options: ["Een apparaat dat webpagina's toont aan gebruikers", "Een programmeertaal", "Een soort browser"], answer: "Een apparaat dat webpagina's toont aan gebruikers" }
        ]
    };

    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let score = 0;


    var urlParams = new URLSearchParams(window.location.search);
    var theme = urlParams.get("theme");


    quizTitle.textContent = `Welkom bij de ${theme.charAt(0).toUpperCase() + theme.slice(1)} Quiz!`;


    currentQuiz = quizzes[theme];
    nextButton.style.display = "none";

    function displayQuestion() {
        if (currentQuestionIndex >= currentQuiz.length) {
            quizContent.innerHTML = `<h2>Je hebt de quiz voltooid!</h2><p>Je score is ${score} van de ${currentQuiz.length} vragen.</p>`;
            nextButton.style.display = "none";
            return;
        }

        var currentQuestion = currentQuiz[currentQuestionIndex];
        quizContent.innerHTML = `
            <div class="question-container">
                <p class="question">${currentQuestion.question}</p>
                <div class="options">
                    ${currentQuestion.options.map(option => `<button class="option-button">${option}</button>`).join('')}
                </div>
            </div>
        `;


        var optionButtons = document.querySelectorAll(".option-button");
        optionButtons.forEach(button => {
            button.addEventListener("click", function () {
                if (button.textContent === currentQuestion.answer) {
                    score++;
                    alert("Goed antwoord!");
                } else {
                    alert("Fout antwoord!");
                }

                nextButton.style.display = "inline-block";
            });
        });
    }

    nextButton.addEventListener("click", function () {
        currentQuestionIndex++;
        displayQuestion();
        nextButton.style.display = "none";
    });


    displayQuestion();
});
