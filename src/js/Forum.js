//Recuperando ID do usuario
let params = new URLSearchParams(location.search);
console.log(params);
let id = params.get("id");
console.log(id);

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

function filterAll() {}

function filterRecent() {}
