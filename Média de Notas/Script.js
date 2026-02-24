function calcularMedia() {

    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;

    var media = (nota1 * 1 + nota2 * 1) / 2;

    var situacao;

    if (media <= 4.5) {
        situacao = "Aluno Reprovado";
    } else if (media <= 6.5) {
        situacao = "Aluno em Recuperação";
    } else {
        situacao = "Aluno Aprovado";
    }

    document.getElementById("resultado").innerHTML =
        "Média = " + media + " | " + situacao;
}