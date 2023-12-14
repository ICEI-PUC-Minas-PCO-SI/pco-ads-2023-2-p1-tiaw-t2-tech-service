//Recuperando ID do usuario
let params = new URLSearchParams(location.search);
let id = params.get("id");
let aPerfil = document.getElementById("a-Perfil");
aPerfil.href = `Perfil.Freelancer.html?id=${id}`;
let aVagas = document.getElementById("a-Vagas");
aVagas.href = `VagasDisponiveis.html?id=${id}`;
let aDenuncia = document.getElementById("a-Denuncia");
aDenuncia.href = `Denuncia.html?id=${id}`;
