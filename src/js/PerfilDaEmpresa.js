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
  Servicos(id);
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

function Servicos(id) {
  let servicos = "http://localhost:3000/servicos";
  fetch(servicos)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let card = document.getElementById("conteudo");
      let newDiv = document.createElement("div");
      newDiv.classList.add("newDiv");
      let strHtml = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].idE == id) {
          console.log("ola");
          if (data[i].imagem) {
            strHtml += `
            <div class="container-Serv">
              <div class="Divimg-Serv">
                <img src="${data[i].imagem}" class="img-Serv" alt="Minha Figura">
              </div>
              <div class="Divdados-serv">
                <p class="title-serv">${data[i].title}</p>
                <p class="descri-serv">${data[i].descricao}</p>
              </div>
            </div> `;
          } else {
            strHtml += `
            <div class="container-Serv">
              <div class="Divimg-Serv">
                <img src="../imgs/icon-user.png" class="img-Serv" alt="Minha Figura">
              </div>
              <div class="Divdados-serv">
                <p class="title-serv">${data[i].title}</p>
                <p class="descri-serv">${data[i].descricao}</p>
              </div>
            </div>
            `;
          }
        }
      }
      newDiv.innerHTML = strHtml;
      card.appendChild(newDiv);
    });
}

// function Vagas(id) {
//   let vagas = "http://localhost:3000/vagas";
//   fetch(vagas)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);

//       let card = document.getElementById("conteudo");
//       let strHtml = "";

//       if (data.length > 0) {
//         for (let i = 0; i < data.length; i++) {
//           const vagaAtual = data[i];

//           if (vagaAtual.nomeVaga && vagaAtual.descricao) {
//             strHtml += `
//             <div class="card-vagas">
//               <div class="card-body" id="cardvagas">
//                 <div class="container text-center">
//                   <div class="row row-cols-2">
//                     <div class="col-md-4">
//                       <img class="icon-vagas" src="${vagaAtual[id].imagem}" />
//                     </div>
//                     <div class="col-md-8">
//                       <h6>${vagaAtual[id].nomeVaga}</h6>
//                       <p id="descVaga">
//                       ${vagaAtual[id].descricao}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>`;
//           }
//         }
//       } else {
//         strHtml = "<p>Nenhuma vaga disponível.</p>";
//       }

//       card.innerHTML = strHtml;
//       console.log(card);
//     });
// }
