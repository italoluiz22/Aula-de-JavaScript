const API = "http://localhost:3000/usuarios";

function carregarUsuarios() {

fetch(API)
.then(res => res.json())
.then(data => {

const lista = document.getElementById("lista");
lista.innerHTML = "";

data.forEach(u => {

lista.innerHTML += `
<tr>
<td>${u.id}</td>
<td>${u.nome}</td>
<td>${u.email}</td>
<td>
<button onclick="editar(${u.id},'${u.nome}','${u.email}')">Editar</button>
<button onclick="deletar(${u.id})">Excluir</button>
</td>
</tr>
`;

});

});

}

function salvar(){

const id = document.getElementById("id").value;
const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;

if(id){

fetch(API+"/"+id,{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({nome,email})
})
.then(()=>carregarUsuarios())

}else{

fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({nome,email})
})
.then(()=>carregarUsuarios())

}

document.getElementById("id").value="";
document.getElementById("nome").value="";
document.getElementById("email").value="";
}

function editar(id,nome,email){

document.getElementById("id").value=id;
document.getElementById("nome").value=nome;
document.getElementById("email").value=email;

}

function deletar(id){

fetch(API+"/"+id,{
method:"DELETE"
})
.then(()=>carregarUsuarios())

}

carregarUsuarios();