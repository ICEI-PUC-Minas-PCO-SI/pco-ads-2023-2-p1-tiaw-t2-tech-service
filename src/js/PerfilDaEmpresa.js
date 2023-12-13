document.addEventListener("DOMContentLoaded", function () {
  //Recuperando ID do usuario
  let params = new URLSearchParams(location.search);
  console.log(params);
  let id = params.get("id");
  console.log(id);
  let linkHome = document.getElementById("a-Carrossel");
  linkHome.href = `carrossel.html?id=${id}`;
  let linkForum = document.getElementById("a-Forum");
  linkForum.href = `Forum.html?id=${id}`;
  let linkVagaDisp = document.getElementById("a-VagasDisp");
  linkVagaDisp.href = `VagasDisponiveis.html?id=${id}`;
  let linkEditar = document.getElementById("a-EditarPerfil");
  linkEditar.href = `TelaEditarPerfil.html?id=${id}`;
  let linkCriarVa = document.getElementById("a-CriarVagas");
  linkCriarVa.href = `TelaCriarVagas.html?id=${id}`;
  console.log(linkCriarVa);
  ReceberID(id);
  Vagas(id);
});

function ReceberID(id) {
  let Json = 'http://localhost:3000/usuarios';
  fetch(Json)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data[id] && data[id].nome && data[id].sobre && data[id].imagem) {
        console.log(data);
        let img = document.getElementById("logo-perfil");
        let nome = document.getElementById("perfil-nome");
        let sobre = document.getElementById("desc");

        sobre.innerText = data[id].sobre;
        img.src = data[id].imagem;
        nome.innerText = data[id].nome;
      } else {
        window.stop();
        alert("Você não possui um perfil.");
        window.location.href = "/src/HTML/TelaEditarPerfil.html";
      }
    });
}

function Servicos(id) {
  let servicos = 'http://localhost:3000/servicos';
  fetch(servicos)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let card = document.getElementById("conteudo");
      let strHtml = "";

      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          const ser = data[i];

          if (ser.title && ser.descricao) {
            strHtml += `
            <div class="card-vagas">
              <div class="card-body" id="cardvagas">
                <div class="container text-center">
                  <div class="row row-cols-2">
                    <div class="col-md-4">
                      <img class="icon-vagas" src="${ser.imagem}" />
                    </div>
                    <div class="col-md-8">
                      <h6>${ser[id].title}</h6>
                      <p id="descVaga">
                        ${ser[id].descricao}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
          }
        }
      } else {
        strHtml = "<p>O usuario ainda não possui serviços</p>";
      }

      card.innerHTML = strHtml;
      console.log(card);
    });
}


function Vagas(id) {
  let vagas = 'http://localhost:3000/vagas';
  fetch(vagas)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let card = document.getElementById("conteudo");
      let strHtml = "";

      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          const vagaAtual = data[i];

          if (vagaAtual.nomeVaga && vagaAtual.descricao) {
            strHtml += `
            <div class="card-vagas">
              <div class="card-body" id="cardvagas">
                <div class="container text-center">
                  <div class="row row-cols-2">
                    <div class="col-md-4">
                      <img class="icon-vagas" src="${vagaAtual[id].imagem}" />
                    </div>
                    <div class="col-md-8">
                      <h6>${vagaAtual[id].nomeVaga}</h6>
                      <p id="descVaga">
                      ${vagaAtual[id].descricao}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
          }
        }
      } else {
        strHtml = "<p>Nenhuma vaga disponível.</p>";
      }

      card.innerHTML = strHtml;
      console.log(card);
    });
}
