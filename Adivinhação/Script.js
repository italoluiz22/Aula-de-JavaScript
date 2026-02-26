function jogar() {

    var numero = Math.floor(Math.random() * 10) + 1;

    // 1ª tentativa
    var chute1 = prompt("Tente adivinhar (1 a 10):");

    if (chute1 == numero) {
        alert("Você acertou!");
    } else {

        if (chute1 > numero) {
            alert("Errado! O número é MENOR.");
        } else {
            alert("Errado! O número é MAIOR.");
        }

        // 2ª tentativa
        var chute2 = prompt("Tente novamente:");

        if (chute2 == numero) {
            alert("Você acertou!");
        } else {

            if (chute2 > numero) {
                alert("Errado! O número é MENOR.");
            } else {
                alert("Errado! O número é MAIOR.");
            }

            // 3ª tentativa
            var chute3 = prompt("Última chance:");

            if (chute3 == numero) {
                alert("Você acertou!");
            } else {
                alert("Você perdeu! O número era " + numero);
            }
        }
    }
}