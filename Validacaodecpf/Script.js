function validar() {

    var cpf = document.getElementById("cpf").value;

    var soma = 0;
    var resto;

    // Primeiro dígito
    for (var i = 0; i < 9; i++) {
        soma = soma + cpf[i] * (10 - i);
    }

    resto = (soma * 10) % 11;
    if (resto == 10) resto = 0;

    if (resto != cpf[9]) {
        document.getElementById("msg").innerHTML = "CPF inválido";
        return;
    }

    soma = 0;

    // Segundo dígito
    for (var i = 0; i < 10; i++) {
        soma = soma + cpf[i] * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto == 10) resto = 0;

    if (resto != cpf[10]) {
        document.getElementById("msg").innerHTML = "CPF inválido";
        return;
    }

    document.getElementById("msg").innerHTML = "CPF válido";
}