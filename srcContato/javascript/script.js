document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnComecar");
    const perguntas = document.getElementById("perguntas");

    btn.addEventListener("click", function () {
        perguntas.style.display = "block";
        btn.style.display = "none"; // Oculta botão após clique

    });
});