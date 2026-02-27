function calcular() {

    var n1 = document.getElementById("num1").value * 1;
    var n2 = document.getElementById("num2").value * 1;
    var op = document.getElementById("operacao").value;

    var resultado;

    if (op == "+") {
        resultado = n1 + n2;
    }
    else if (op == "-") {
        resultado = n1 - n2;
    }
    else if (op == "*") {
        resultado = n1 * n2;
    }
    else if (op == "/") {
        resultado = n1 / n2;
    }
    else if (op == "%") {
        resultado = n1 % n2;
    }
    else if (op == "**") {
        resultado = n1 ** n2;
    }
    else {
        document.getElementById("resultado").innerHTML =
            "Operação inválida!";
        return;
    }

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}