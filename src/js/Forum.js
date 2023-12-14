//Recuperando ID do usuario
let params = new URLSearchParams(location.search);
let id = params.get("id");
let aPerfil = document.getElementById("a-Perfil");
aPerfil.href = `Perfil.Freelancer.html?id=${id}`;
let aVagas = document.getElementById("a-Vagas");
aVagas.href = `VagasDisponiveis.html?id=${id}`;
let aDenuncia = document.getElementById("a-Denuncia");
aDenuncia.href = `Denuncia.html?id=${id}`;

//Recuperando ID do usuario
function returnToMainPage() {
  window.location.href = "URL_da_tela_principal";
}
function showForm() {
  document.getElementById("createPostForm").style.display = "block";
}

function closeForm() {
  document.getElementById("createPostForm").style.display = "none";
}

function filterAll() {
  fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((posts) => {
      updateUI(posts);
    });
}
