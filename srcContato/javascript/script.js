document.addEventListener("DOMContentLoaded", function () {
    const btnComecar = document.getElementById("btnComecar");
    const btnVoltar = document.getElementById("btnVoltar");
    const perguntas = document.getElementById("perguntas");

    btnComecar.addEventListener("click", function () {
        perguntas.style.display = "block"; // mostra perguntas
        btnComecar.style.display = "none"; // esconde botão começar
        btnVoltar.style.display = "flex"; // mostra botão voltar
    });

    btnVoltar.addEventListener("click", function () {
        perguntas.style.display = "none"; // esconde perguntas
        btnComecar.style.display = "inline-block"; // mostra botão começar
        btnVoltar.style.display = "none"; // esconde botão voltar novamente
    });
});
