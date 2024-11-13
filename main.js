
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const playerName = document.getElementById("name").value;
    localStorage.setItem("playerName", playerName);
    window.location.href = "Pagina's/thema.html";
});
