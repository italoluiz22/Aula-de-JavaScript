function calcular() {

    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var imc = peso / (altura * altura);

    var mensagem;

    if (imc < 18.5) {
        mensagem = "Abaixo do peso";
    } else if (imc < 25) {
        mensagem = "Peso normal";
    } else if (imc < 30) {
        mensagem = "Sobrepeso";
    } else {
        mensagem = "Obesidade";
    }

    document.getElementById("resultado").innerHTML =
        "IMC = " + imc + " | " + mensagem;
}