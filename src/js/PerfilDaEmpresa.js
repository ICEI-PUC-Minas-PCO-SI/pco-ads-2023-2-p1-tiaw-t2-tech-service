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
  ReceberID(id);
  Vagas(id);
  Avaliacao(id);
});

function ReceberID(id) {
  let Json = `https://tecmatch--brandds.repl.co/usuarios/${id}`;
  fetch(Json)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let img = document.getElementById("logo-perfil");
      let name = document.getElementById("perfil-nome");
      let descri = document.getElementById("desc");

      if (data.imagem && data.nome && data.sobre) {
        img.src = `${data.imagem}`;
        name.textContent = `${data.nome}`;
        descri.textContent = `${data.sobre}`;
      } else if(!data.imagem && data.nome && data.sobre){
        img.src = `imgs/icon-user.png`;
        name.textContent = `${data.nome}`;
        descri.textContent = `${data.sobre}`;
      }else if(!data.imagem && data.nome && !data.sobre){
        img.src = `imgs/icon-user.png`;
        name.textContent = `${data.nome}`;
        descri.innerHTML = `<p class="textoDesc">Usuário ainda sem descrição</p>`;
      }
    });
}

function Vagas(id) {
  let vagas = "https://tecmatch--brandds.repl.co/vagas";
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

          if (vagaAtual.idE == id) {
            if (vagaAtual.nomeVaga && vagaAtual.descricao && vagaAtual.imagem) {
              strHtml += `
              <div class="card-vagas p-5">
                <div class="card-body">
                  <div class="container text-center">
                    <div class="row row-cols-2">
                      <div class="col-md-4">
                        <img class="icon-vagas" src="${vagaAtual.imagem}" />
                      </div>
                      <div class="col-md-8">
                        <h6>${vagaAtual.nomeVaga}</h6>
                        <p id="descVaga">
                        ${vagaAtual.descricao}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
            }
          }
        }
      } else {
        strHtml = "<p>Nenhuma vaga disponível.</p>";
      }

      card.innerHTML = strHtml;
      console.log(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const URLComentario = "https://tecmatch--brandds.repl.co/comentarios";
  const avaliacaoForm = document.getElementById("avaliacao-form");

  const stars = document.querySelectorAll('.star');
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      resetStars();
      const value = parseInt(star.getAttribute('data-value'));
      highlightStars(value);
    });

    star.addEventListener('click', () => {
      selectedRating = parseInt(star.getAttribute('data-value'));
    });
  });

  function highlightStars(value) {
    for (let i = 0; i < value; i++) {
      stars[i].classList.add('oba');
    }
  }

  function resetStars() {
    stars.forEach(star => {
      star.classList.remove('oba');
    });
  }

  avaliacaoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(URLComentario)
      .then((res) => res.json())
      .then(function (dados) {
        const comentario = dados;

        let params = new URLSearchParams(location.search);
        let id = params.get("id");

        if (selectedRating > 0) {
          estrela = selectedRating;
          resetStars();
          selectedRating = 0;
        } else {
          alert('Você deve escolher ao menos 1 estrela para avaliar');
        }

        const avaliacao = {
          id: comentario.length + 1,
          nome: document.getElementById("nome").value,
          usuario: id,
          comentario: document.getElementById("comentario").value,
          estrela: estrela
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
      .then(() => location.reload())
      .catch((error) => console.error("Erro:", error));
  });
});

function Avaliacao(id) {
  let divComentario = document.getElementById("cards");
  let Json = `https://tecmatch--brandds.repl.co/comentarios`;
  fetch(Json)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let strAvaliacao = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].usuario == id) {
          const estrelas = gerarEstrelas(data[i].estrela);
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
                            <p>${estrelas}</p>
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

function gerarEstrelas(estrela){
  const simbolo = `<i class="fa-solid fa-star text-warning"></i>`;
  const fullEstrela = simbolo.repeat(estrela);
  return fullEstrela;
}