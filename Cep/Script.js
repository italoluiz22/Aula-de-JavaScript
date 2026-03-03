async function buscarCEP() {

    var cep = document.getElementById("cep").value;

    try {

        var resposta = await fetch("https://viacep.com.br/ws/" + cep + "/json/");

        var dados = await resposta.json();

        // Se o CEP não existir
        if (dados.erro) {
            limparCampos();
            document.getElementById("msg").innerHTML =
                "CEP não encontrado!";
            return;
        }

        // Preencher campos
        document.getElementById("logradouro").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;

        document.getElementById("msg").innerHTML = "";

    } catch (erro) {

        limparCampos();
        document.getElementById("msg").innerHTML =
            "Erro ao buscar o CEP!";
    }
}

// Função para limpar os campos
function limparCampos() {
    document.getElementById("logradouro").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}