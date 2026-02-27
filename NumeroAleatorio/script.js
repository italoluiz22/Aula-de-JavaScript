function executar() {

    var numeros = [];

    // Gerar 10 números aleatórios
    for (var i = 0; i < 10; i++) {
        numeros[i] = Math.floor(Math.random() * 100) + 1;
    }

    document.getElementById("original").innerHTML =
        "Original: " + numeros.join(" | ");

    // ORDENAR CRESCENTE (método simples - Bubble Sort)
    var crescente = numeros.slice();

    for (var i = 0; i < crescente.length; i++) {
        for (var j = 0; j < crescente.length - 1; j++) {

            if (crescente[j] > crescente[j + 1]) {
                var temp = crescente[j];
                crescente[j] = crescente[j + 1];
                crescente[j + 1] = temp;
            }
        }
    }

    document.getElementById("crescente").innerHTML =
        "Crescente: " + crescente.join(" | ");

    // ORDENAR DECRESCENTE (mesma lógica invertida)
    var decrescente = numeros.slice();

    for (var i = 0; i < decrescente.length; i++) {
        for (var j = 0; j < decrescente.length - 1; j++) {

            if (decrescente[j] < decrescente[j + 1]) {
                var temp = decrescente[j];
                decrescente[j] = decrescente[j + 1];
                decrescente[j + 1] = temp;
            }
        }
    }

    document.getElementById("decrescente").innerHTML =
        "Decrescente: " + decrescente.join(" | ");

    // Separar pares, ímpares e primos
    var pares = [];
    var impares = [];
    var primos = [];

    for (var i = 0; i < numeros.length; i++) {

        if (numeros[i] % 2 == 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }

        // Verificar se é primo
        var ehPrimo = true;

        if (numeros[i] < 2) ehPrimo = false;

        for (var j = 2; j < numeros[i]; j++) {
            if (numeros[i] % j == 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            primos.push(numeros[i]);
        }
    }

    document.getElementById("pares").innerHTML =
        "Pares: " + pares.join(" | ");

    document.getElementById("impares").innerHTML =
        "Ímpares: " + impares.join(" | ");

    document.getElementById("primos").innerHTML =
        "Primos: " + primos.join(" | ");
}