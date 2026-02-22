let verde = document.getElementById("verde");
let vermelho = document.getElementById("vermelho");
let resetar = document.getElementById("resetar");
let mensagem = document.getElementById("mensagem");



verde.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});

vermelho.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

resetar.addEventListener("click", function() {
    document.body.style.backgroundColor = "";
});

mensagem.addEventListener("click", function() {
    alert("Olá, seja bem-vindo ao meu app da aula 01 Introdução ao JavaScript");
});