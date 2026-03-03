// Array que armazena os usuários
var usuarios = [];
var indiceEdicao = -1;

// INCLUIR
function incluir() {

    var usuario = {
        cpf: document.getElementById("cpf").value,
        nome: document.getElementById("nome").value,
        data: document.getElementById("data").value,
        email: document.getElementById("email").value
    };

    if (usuario.cpf == "" || usuario.nome == "" || usuario.data == "" || usuario.email == "") {
        document.getElementById("msg").innerHTML = "Preencha todos os campos!";
        return;
    }

    usuarios.push(usuario);
    mostrar();
    limpar();
}

// MOSTRAR LISTA
function mostrar(lista = usuarios) {

    var tabela = document.getElementById("tabela");
    tabela.innerHTML = "";

    for (var i = 0; i < lista.length; i++) {

        tabela.innerHTML +=
        "<tr>" +
        "<td>" + lista[i].cpf + "</td>" +
        "<td>" + lista[i].nome + "</td>" +
        "<td>" + lista[i].data + "</td>" +
        "<td>" + lista[i].email + "</td>" +
        "<td>" +
        "<button onclick='editar(" + i + ")'>Editar</button>" +
        "<button onclick='excluir(" + i + ")'>Excluir</button>" +
        "</td>" +
        "</tr>";
    }
}

// EDITAR (carrega dados no formulário)
function editar(i) {

    indiceEdicao = i;

    document.getElementById("cpf").value = usuarios[i].cpf;
    document.getElementById("nome").value = usuarios[i].nome;
    document.getElementById("data").value = usuarios[i].data;
    document.getElementById("email").value = usuarios[i].email;
}

// ALTERAR
function alterar() {

    if (indiceEdicao == -1) {
        document.getElementById("msg").innerHTML = "Selecione um usuário para alterar.";
        return;
    }

    usuarios[indiceEdicao] = {
        cpf: document.getElementById("cpf").value,
        nome: document.getElementById("nome").value,
        data: document.getElementById("data").value,
        email: document.getElementById("email").value
    };

    indiceEdicao = -1;
    mostrar();
    limpar();
}

// EXCLUIR
function excluir(i) {
    usuarios.splice(i, 1);
    mostrar();
}

// PESQUISAR POR NOME
function pesquisar() {

    var nomeBusca = document.getElementById("busca").value.toLowerCase();
    var filtrados = [];

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome.toLowerCase().includes(nomeBusca)) {
            filtrados.push(usuarios[i]);
        }
    }

    mostrar(filtrados);
}

// LIMPAR CAMPOS
function limpar() {
    document.getElementById("cpf").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
    document.getElementById("email").value = "";
}