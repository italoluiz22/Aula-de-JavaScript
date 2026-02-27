// Funções matemáticas
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b == 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}

// Entrada pelo prompt
var n1 = Number(prompt("Digite o primeiro número:"));
var n2 = Number(prompt("Digite o segundo número:"));
var op = prompt("Digite a operação (+, -, *, /):");

var resultado;

if (op == "+") {
    resultado = soma(n1, n2);
}
else if (op == "-") {
    resultado = subtracao(n1, n2);
}
else if (op == "*") {
    resultado = multiplicacao(n1, n2);
}
else if (op == "/") {
    resultado = divisao(n1, n2);
}
else {
    resultado = "Operação inválida!";
}

console.log("Resultado:", resultado);