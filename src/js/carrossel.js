//Recuperando ID do usuario
let params = new URLSearchParams(location.search);
console.log(params);
let id = params.get("id");
console.log(id);
// let linkVagasDis = document.getElementById("a-Vagas");
// // linkVagasDis.href = `VagasDisponiveis.html?id=${id}`;
// let linkPerfil = document.getElementById("a-Perfil");
// linkPerfil.href = `Perfil.Freelancer.html?id=${id}`;
// console.log(linkPerfil);

let slideAtual = 0;
let URLVagas = 'http://localhost:3000/vagas';

criarSlide(slideAtual);

function criarSlide(slideAtual) {
  var strCarrossel = "";
  let slide = document.createElement("div");
  slide.className = "carousel-item" + (slideAtual === 0 ? " active" : "");
  slide.classList.add("fade");

  let divConteudo = document.getElementById("tela");

  fetch(URLVagas)
  .then(res => res.json())
  .then(function(dados){
    vagas = dados;

    if (id != null) {
        if(vagas[slideAtual].status){
          strCarrossel = `
        <div class="vaga-disponivel container bg-light p-4 w-75 h-75 mt-5 rounded-5"" data-identificador="${slideAtual}">
          <div class="header d-flex justify-content-around my-5">
                   <i class="fas fa-fire fs-2"></i>
                   <i class="fas fa-comments fs-2"></i>
                   <a href="PerfilDaEmpresa.html"><i class="fas fa-user fs-2"></i></a>
          </div>
          <div class="row">
                  <div class="col-md-6 mx-0 my-auto">
                      <div class="d-flex justify-content-center">
                          <img src="${vagas[slideAtual].imagem}" width="250px" height="250px" alt="imagem-vaga" class="img-fluid rounded-5 mb-3"/>
                      </div>
                  </div>
                  <div class="div-dadosVagas col-md-6">
                  <h3 class="my-3">Detalhes</h3>
              <p class="paragraph-titulo"><strong>Nome da Vaga : </strong>${
                vagas[slideAtual].nomeVaga
              }</p>
              <p class="paragraph-descricao"><strong>Descrição : </strong>${
                vagas[slideAtual].descricao
              }</p>
              <p class="paragraph-filtro"><strong>Categoria : </strong>${vagas[slideAtual].filtro}</p>
              <p class="paragraph-site"><strong>Site da Empresa : </strong>
                <a href="${vagas[slideAtual].site}" target="_blank">${vagas[slideAtual].site}</a>
              </p>
              </div>
              <div class="actions d-flex justify-content-around">
                    <div class="action">
                         <i class="fas fa-times text-danger fs-2" onclick="recusarVaga()"></i>
                    </div>
                    <div class="action">
                        <i class="fas fa-heart text-success fs-2" onclick="aceitarVaga()"></i>
                    </div>
                </div>
        </div>`;
        }
    }else{
      strCarrossel = `<p>Você precisa estar cadastrado para ter acesso a esse conteúdo.</p>`;
    }
    divConteudo.innerHTML = strCarrossel;
  })

  
}

function abrirModal(){
  document.getElementById("myModal").style.display = "block";
}

function fecharModal(){
  document.getElementById("myModal").style.display = "none";
}

function abrirModalRecusa(){
  document.getElementById("myModal2").style.display = "block";
}

function fecharModalRecusa(){
  document.getElementById("myModal2").style.display = "none";
}

function aceitarVaga() {
  abrirModal();
  slideAtual++;
  let divConteudo = document.getElementById("tela");

  if (slideAtual >= vagas.length) {
    strCarrossel = `<div class="container bg-light p-4 w-75 h-75 mt-5 rounded-5">
            <div class="header d-flex justify-content-around my-5">
                <i class="fas fa-fire fs-2"></i>
                <i class="fas fa-comments fs-2"></i>
                <i class="fas fa-user fs-2"></i>
            </div>
            <h2 class="text-center">Você chegou ao fim, essas foram as vagas disponíveis. Obrigado por colaborar com o nosso site!</h2>
            <div class="text-center">
              <a href="/src/HTML/VagasDisponiveis.html" class="mt-3 fs-5 text-decoration-none" style="color: #b03f63;">Ver mais vagas</a>
            </div>
        </div>`;
      divConteudo.innerHTML = strCarrossel;
  }
  criarSlide(slideAtual);
}

function recusarVaga() {
  abrirModalRecusa();
  slideAtual++;

  if (slideAtual >= vagas.length) {
    strCarrossel = `<div class="container bg-light p-4 w-75 h-75 mt-5 rounded-5">
            <div class="header d-flex justify-content-around my-5">
                <i class="fas fa-fire fs-2"></i>
                <i class="fas fa-comments fs-2"></i>
                <i class="fas fa-user fs-2"></i>
            </div>
            <h2 class="text-center">Você chegou ao fim, essas foram as vagas disponíveis. Obrigado por colaborar com o nosso site!</h2>
        </div>`;
    document.querySelector("#tela").innerHTML = strCarrossel;
  }

  criarSlide(slideAtual);
}

document.addEventListener("DOMContentLoaded", function () {
  criarSlide(slideAtual);
});




