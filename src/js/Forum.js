//Recuperando ID do usuario
let params = new URLSearchParams(location.search);
let id = params.get("id");
let aPerfil = document.getElementById("a-Perfil");
aPerfil.href = `Perfil.Freelancer.html?id=${id}`;
let aVagas = document.getElementById("a-Vagas");
aVagas.href = `VagasDisponiveis.html?id=${id}`;
let aDenuncia = document.getElementById("a-Denuncia");
aDenuncia.href = `Denuncia.html?id=${id}`;
Posts(id);

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
  fetch("https://tech-servic.vercel.app/posts")
    .then((response) => response.json())
    .then((posts) => {
      updateUI(posts);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const URLUsuario = "https://tech-servic.vercel.app/usuarios";
  const URLPost = "https://tech-servic.vercel.app/posts";
  const postForm = document.getElementById("post-form");

  postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(URLPost)
      .then((res) => res.json())
      .then(function (dados) {
        const post = dados;
        let params = new URLSearchParams(location.search);
        let id = params.get("id");

        fetch(URLUsuario)
          .then((res) => res.json())
          .then(function (dados) {
            usuario = dados;
            for (let i = 0; i < usuario.length; i++) {
              if (usuario[i].id == id) {
                let posicao = usuario[i];

                const postagem = {
                  id: post.length + 1,
                  nome: posicao.nome,
                  usuario: id,
                  imagem: posicao.imagem,
                  comentario: document.getElementById("comentario").value,
                };

                return fetch(URLPost, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(postagem),
                });
              }
            }
          });
      })
      .then((res) => res.json())
      .catch((error) => console.error("Erro:", error));
  });
});

function Posts(id) {
  let divPost = document.getElementById("cards");
  let Json = `https://tech-servic.vercel.app/posts`;
  fetch(Json)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let strAvaliacao = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].imagem) {
          strAvaliacao += `<div class="col mb-5">
                  <div class="card">
                    <div class="card-body">
                      <div class="container-card-body text-center">
                        <div class="row">
                          <div class="col-md-4">
                            <img src="${data[i].imagem}" width="100px" height="100px" class="rounded-5 img-fluid"/>
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
        } else {
          strAvaliacao += `<div class="col mb-5">
                  <div class="card">
                    <div class="card-body">
                      <div class="container-card-body text-center">
                        <div class="row">
                          <div class="col-md-4">
                            <img src="imgs/icon-user.png" width="100px" height="100px" class="rounded-5 img-fluid"/>
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

      divPost.innerHTML = strAvaliacao;
    });
}
