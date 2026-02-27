var lista = [];

// Mostrar lista
function mostrar() {
    document.getElementById("lista").innerHTML = lista.join(" | ");
}

// Adicionar
function adicionar() {
    var item = document.getElementById("item").value;

    if (item != "") {
        lista.push(item);
        mostrar();
    }

    document.getElementById("item").value = "";
}

// Remover pelo nome
function removerItem() {
    var nome = document.getElementById("remover").value;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i] == nome) {
            lista.splice(i, 1);
            break;
        }
    }

    mostrar();
}

// Buscar pelo nome
function buscarNome() {
    var nome = document.getElementById("buscarNome").value;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i] == nome) {
            document.getElementById("msg").innerHTML =
                "Encontrado na posição: " + i;
            return;
        }
    }

    document.getElementById("msg").innerHTML = "Item não encontrado";
}

// Buscar pela posição
function buscarPos() {
    var pos = document.getElementById("buscarPos").value;

    if (pos >= 0 && pos < lista.length) {
        document.getElementById("msg").innerHTML =
            "Item: " + lista[pos];
    } else {
        document.getElementById("msg").innerHTML =
            "Posição inválida";
    }
}