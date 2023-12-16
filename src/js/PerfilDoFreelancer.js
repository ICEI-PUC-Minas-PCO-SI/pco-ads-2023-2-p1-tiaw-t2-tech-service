document.addEventListener("DOMContentLoaded", function () {
  //Recuperando ID do usuario
  let params = new URLSearchParams(location.search);
  console.log(params);
  let id = params.get("id");
  console.log(id);
  let linkHome = document.getElementById("a-Carrossel");
  let linkCriar = document.getElementById("a-CriarVagas");
  linkCriar.href = `TelaCriarVagas.html?id=${id}`;
  linkHome.href = `carrossel.html?id=${id}`;
  let linkForum = document.getElementById("a-Forum");
  let linkEdit = document.getElementById("a-EditarPerfil");
  linkEdit.href = `TelaEditarPerfil.html?id=${id}`;
  linkForum.href = `Forum.html?id=${id}`;
  let linkVagaDisp = document.getElementById("a-VagasDisp");
  linkVagaDisp.href = `VagasDisponiveis.html?id=${id}`;
  ReceberID(id);
  Servicos(id);
  Avaliacao(id);
});

function ReceberID(id) {
  let Json = `https://jsonserver-techmatch--brandds.repl.co/usuarios/${id}`;
  fetch(Json)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let img = document.getElementById("logo-perfil");
      let name = document.getElementById("perfil-nome");
      let descri = document.getElementById("desc");
      console.log(data);

      if (data.imagem) {
        img.src = `${data.imagem}`;
        name.textContent = `${data.nome} ${data.sobrenome}`;
        descri.textContent = `${data.sobre}`;
      } else {
        img.src = "imgs/icon-user.png";
        name.textContent = `${data.nome} ${data.sobrenome}`;
        descri.textContent = `${data.sobre}`;
      }
    });
}

function Servicos(id) {
  let servicos = "https://jsonserver-techmatch--brandds.repl.co/servicos";
  fetch(servicos)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let card = document.getElementById("conteudo");
      let newDiv = document.createElement("div");
      newDiv.classList.add("newDiv");
      let strHtml = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].usuario == id) {
          strHtml += `
                    <div class="card-vagas p-5">
                      <div class="card-body">
                        <div class="container text-center">
                          <div class="row row-cols-2">
                            <div class="col-md-4">
                              <img class="icon-vagas" src="${data[i].imagem}" />
                            </div>
                            <div class="col-md-8">
                              <h6>${data[i].title}</h6>
                              <p id="descVaga">
                              ${data[i].descricao}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
        }
      }
      newDiv.innerHTML = strHtml;
      card.appendChild(newDiv);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const URLComentario =
    "https://jsonserver-techmatch--brandds.repl.co/comentarios";
  const avaliacaoForm = document.getElementById("avaliacao-form");

  avaliacaoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(URLComentario)
      .then((res) => res.json())
      .then(function (dados) {
        const comentario = dados;
        let params = new URLSearchParams(location.search);
        let id = params.get("id");
        const avaliacao = {
          id: comentario.length + 1,
          nome: document.getElementById("nome").value,
          usuario: id,
          comentario: document.getElementById("comentario").value,
        };

        return fetch(URLComentario, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(avaliacao),
        });
      })
      .then((res) => res.json())
      .catch((error) => console.error("Erro:", error));
  });
});

function Avaliacao(id) {
  let divComentario = document.getElementById("cards");
  let Json = `https://jsonserver-techmatch--brandds.repl.co/comentarios`;
  fetch(Json)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let strAvaliacao = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].usuario == id) {
          strAvaliacao += `<div class="col">
                    <div class="card">
                      <div class="card-body">
                        <div class="container-card-body text-center">
                          <div class="row">
                            <div class="col-md-4">
                              <img class="icon-user" src="imgs/icon-user.png" />
                              <h6 id="nome-ava">${data[i].nome}</h6>
                            </div>
                            <div class="col-md-8" id="card-2">
                              <p class="des-ava mt-3">
                                ${data[i].comentario}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;
        }
      }

      divComentario.innerHTML = strAvaliacao;
    });
}
