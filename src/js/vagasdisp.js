let params = new URLSearchParams(location.search);
let id = params.get("id");
let namee = document.getElementById("a-Carrossel");
let aPerfil = document.getElementById("a-Perfil");
let aForum = document.getElementById("a-Forum");
aForum.href = `Forum.html?id=${id}`;
aPerfil.href = `Perfil.Freelancer.html?id=${id}`;
namee.href = `carrossel.html?id=${id}`;
