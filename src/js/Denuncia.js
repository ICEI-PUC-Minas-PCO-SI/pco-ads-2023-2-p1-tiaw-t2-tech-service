let params = new URLSearchParams(location.search);
let id = params.get("id");
let linkPerfil = document.getElementById("a-Perfil");
let linkCarrosel = document.getElementById("a-Carrossel");
let linkForum = document.getElementById("a-Forum");
linkForum.href = `Forum.html?id=${id}`;
linkPerfil.href = `Perfil.Freelancer.html?id=${id}`;
linkCarrosel.href = `carrossel.html?id=${id}`;

fetch("https://jsonserver-techmatch--brandds.repl.co/usuarios")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let containeir = document.getElementById("row");
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    let userS = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].imagem) {
        userS += `
      <div class="Denu-User">
        <img src="${data[i].imagem}" alt="Minha Figura" class="img-Denu">
        <p class="Parahrap-Denu">${data[i].nome}</p>
      </div>
      `;
      } else {
        userS += `
      <div class="Denu-User">
        <img src="imgs/icon-user.png" alt="Minha Figura" class="img-Denu">
        <p class="Parahrap-Denu">${data[i].nome}</p>
      </div>
      `;
      }
    }
    newDiv.innerHTML = userS;
    console.log(newDiv);
    containeir.appendChild(newDiv);
  });
