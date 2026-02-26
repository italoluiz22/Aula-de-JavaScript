// Array para guardar os produtos
var produtos = [];

function adicionarProduto() {

    var nome = document.getElementById("nome").value;
    var quantidade = document.getElementById("quantidade").value;
    var valor = document.getElementById("valor").value;

    // Verificação se algum campo está vazio
    if (nome == "" || quantidade == "" || valor == "") {
        document.getElementById("mensagem").innerHTML =
            "Preencha todos os campos!";
        return;
    }

    // Criando objeto produto
    var produto = {
        nome: nome,
        quantidade: quantidade,
        valor: valor
    };

    // Guardando no array
    produtos.push(produto);

    document.getElementById("mensagem").innerHTML = "";

    mostrarProdutos();

    // Limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("valor").value = "";
}

function mostrarProdutos() {

    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    // Percorrendo os produtos
    for (var i = 0; i < produtos.length; i++) {

        var item = document.createElement("li");

        item.innerHTML =
            "Produto: " + produtos[i].nome +
            " | Quantidade: " + produtos[i].quantidade +
            " | Valor: R$ " + produtos[i].valor;

        lista.appendChild(item);
    }
}