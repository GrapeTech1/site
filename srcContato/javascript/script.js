document.addEventListener("DOMContentLoaded", function () {
    const btnComecar = document.getElementById("btnComecar");
    const btnVoltar = document.getElementById("btnVoltar");
    const perguntas = document.getElementById("perguntas");
    const formulario = document.getElementById("meuFormulario");

    // Mostrar/esconder perguntas
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

    // Enviar formulário via AJAX
    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // impede o envio tradicional

        const formData = new FormData(formulario);

        fetch("https://formsubmit.co/ajax/seu@email.com", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                title: "Parabéns",
                text: "Seu formulário foi enviado com sucesso",
                icon: "success"
                });

                formulario.reset(); // limpa os campos após o envio
            } else {
                alert("Erro ao enviar o formulário. Tente novamente.");
            }
        })
        .catch(error => {
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado ao enviar o furmulário",
            footer: '<a href="#">Tendo problemas?</a>'
            });
            console.error(error);
        });
    });
});
const hamburger = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => 
nav.classList.toggle("active"));