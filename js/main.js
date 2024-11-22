document.addEventListener("DOMContentLoaded", function () {
    var isStartPage = document.getElementById("quiz-form");
    var isThemePage = document.querySelector(".team-name");

    if (isStartPage) {
        isStartPage.addEventListener("submit", function (event) {
            event.preventDefault();
            var playerName = document.getElementById("name").value.trim();
            if (playerName) {
                localStorage.setItem("playerName", playerName);
                window.location.href = "pages/thema.html";
            } else {
                alert("Voer een naam in om door te gaan!");
            }
        });
    }

    if (isThemePage) {
        var playerName = localStorage.getItem("playerName");
        if (playerName) {
            document.querySelector(".team-name").textContent = playerName;
            document.querySelector("h2").textContent = `Hallo ${playerName}, welke quiz wil je spelen?`;
        } else {
            alert("Er is geen naam ingevoerd. Je wordt teruggeleid naar de startpagina.");
            window.location.href = "index.html";
        }
    }
});
