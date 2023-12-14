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
  let Json = `http://localhost:3000/usuarios/${id}`;
  fetch(Json)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let img = document.getElementById("logo-perfil");
      let name = document.getElementById("perfil-nome");
      let descri = document.getElementById("desc");
      console.log(data);

      if (img) {
        img.src = `${data.imagem}`;
        name.textContent = `${data.nome}`;
        descri.textContent = `${data.sobre}`;
      }
    });
}

// function Servicos(id) {
//   let servicos = "http://localhost:3000/servicos";
//   fetch(servicos)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       let card = document.getElementById("conteudo");
//       let newDiv = document.createElement("div");
//       newDiv.classList.add("newDiv");
//       let strHtml = "";
//       for (let i = 0; i < data.length; i++) {
//         if (data[i].empresa == id) {
//           console.log("ola");
//           if (data[i].imagem) {
//             strHtml += `
//             <div class="container-Serv">
//               <div class="Divimg-Serv">
//                 <img src="${data[i].imagem}" class="img-Serv" alt="Minha Figura">
//               </div>
//               <div class="Divdados-serv">
//                 <p class="title-serv">${data[i].title}</p>
//                 <p class="descri-serv">${data[i].descricao}</p>
//               </div>
//             </div> `;
//           } else {
//             strHtml += `
//             <div class="container-Serv">
//               <div class="Divimg-Serv">
//                 <img src="../imgs/icon-user.png" class="img-Serv" alt="Minha Figura">
//               </div>
//               <div class="Divdados-serv">
//                 <p class="title-serv">${data[i].title}</p>
//                 <p class="descri-serv">${data[i].descricao}</p>
//               </div>
//             </div>
//             `;
//           }
//         }
//       }
//       newDiv.innerHTML = strHtml;
//       card.appendChild(newDiv);
//     });
// }

function Vagas(id) {
  let vagas = "http://localhost:3000/vagas";
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

          if(vagaAtual.idE == id){
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

document.addEventListener('DOMContentLoaded', function () {
  const URLComentario = 'http://localhost:3000/comentarios';
  const avaliacaoForm = document.getElementById('avaliacao-form');

  avaliacaoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      fetch(URLComentario)
          .then(res => res.json())
          .then(function (dados) {
              const comentario = dados;
              let params = new URLSearchParams(location.search);
              let id = params.get("id");
              const avaliacao = {
                  id: comentario.length + 1,
                  nome: document.getElementById('nome').value,
                  usuario: id,
                  comentario: document.getElementById('comentario').value
              }

              return fetch(URLComentario, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(avaliacao)
              });
          })
          .then(res => res.json())
          .catch(error => console.error('Erro:', error));
  });
});

function Avaliacao(id) {
  let divComentario = document.getElementById('cards');
  let Json = `http://localhost:3000/comentarios`;
  fetch(Json)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          let strAvaliacao = '';
          for(let i = 0; i < data.length; i++){
              if (data[i].usuario == id) {
                  strAvaliacao += `<div class="col">
                  <div class="card">
                    <div class="card-body">
                      <div class="container-card-body text-center">
                        <div class="row">
                          <div class="col-md-4">
                            <img class="icon-user" src="/src/imgs/icon-user.png" />
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
