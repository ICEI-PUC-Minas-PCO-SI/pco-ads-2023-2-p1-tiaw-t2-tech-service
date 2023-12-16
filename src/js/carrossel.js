//Recuperando ID do usuario
let params = new URLSearchParams(location.search);
console.log(params);
let id = params.get("id");
let aPerfil = document.getElementById("a-Perfil");
let aVagas = document.getElementById("a-Vagas");
aVagas.href = `VagasDisponiveis.html?id${id}`;
aPerfil.href = `Perfil.Freelancer.html?id=${id}`;

let slideAtual = 0;
let URLVagas = "https://tech-servic.vercel.app/vagas";
let URLServicos = "https://tech-servic.vercel.app/servicos";

function criarSlide(slideAtual) {
  var strCarrossel = "";
  let slide = document.createElement("div");
  slide.className = "carousel-item" + (slideAtual === 0 ? " active" : "");
  slide.classList.add("fade");

  let divConteudo = document.getElementById("tela");

  fetch(URLVagas)
    .then((res) => res.json())
    .then(function (dados) {
      vagas = dados;

      if (id != null) {
        if (vagas[slideAtual].status) {
          strCarrossel = `
        <div class="vaga-disponivel container bg-light p-4 w-75 h-75 mt-5 rounded-5"" data-identificador="${slideAtual}">
          <div class="header d-flex justify-content-around my-5">
                   <i class="fas fa-fire fs-2"></i>
                   <a href="mailto:${vagas[slideAtual].email}"><i class="fas fa-comments fs-2 text-dark"></i></a>
                   <a href="PerfilDaEmpresa.html?id=${vagas[slideAtual].idE}"><i class="fas fa-user fs-2"></i></a>
          </div>
          <div class="row">
                  <div class="col-md-6 mx-0 my-auto">
                      <div class="d-flex justify-content-center">
                          <a href="PerfilDaEmpresa.html?id=${vagas[slideAtual].idE}">
                             <img src="${vagas[slideAtual].imagem}" width="250px" height="250px" alt="imagem-vaga" class="img-fluid rounded-5 mb-3"/>
                          </a>
                      </div>
                  </div>
                  <div class="div-dadosVagas col-md-6">
                  <h3 class="my-3">Detalhes da Vaga</h3>
              <p class="paragraph-titulo"><strong>Empresa : </strong>${vagas[slideAtual].nomeEmpresa}</p>
              <p class="paragraph-titulo"><strong>Vaga : </strong>${vagas[slideAtual].nomeVaga}</p>
              <p class="paragraph-descricao"><strong>Descrição : </strong>${vagas[slideAtual].descricao}</p>
              <p class="paragraph-filtro"><strong>Categoria : </strong>${vagas[slideAtual].filtro}</p>
              <p class="paragraph-site"><strong>Site da Empresa : </strong>
                <a href="${vagas[slideAtual].site}" target="_blank">${vagas[slideAtual].site}</a>
              </p>
              <p class="paragraph-site"><strong>E-mail : </strong>
                <a href="${vagas[slideAtual].site}" target="_blank">${vagas[slideAtual].site}</a>
              </p>
              <p class="paragraph-site"><strong>Telefone : </strong>
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
        } else {
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
        }
      } else {
        strCarrossel = `<p>Você precisa estar cadastrado para ter acesso a esse conteúdo.</p>`;
      }
      divConteudo.innerHTML = strCarrossel;
    });
}

function abrirModal() {
  document.getElementById("myModal").style.display = "block";
}

function fecharModal() {
  document.getElementById("myModal").style.display = "none";
}

function abrirModalRecusa() {
  document.getElementById("myModal2").style.display = "block";
}

function fecharModalRecusa() {
  document.getElementById("myModal2").style.display = "none";
}

function aceitarVaga() {
  abrirModal();
  cadastraServico(slideAtual);
  apagaVaga(slideAtual);
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
  } else {
    criarSlide(slideAtual);
  }
}

function recusarVaga() {
  abrirModalRecusa();
  apagaVaga(slideAtual);
  slideAtual++;

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
    document.querySelector("#tela").innerHTML = strCarrossel;
  } else {
    criarSlide(slideAtual);
  }
}

function apagaVaga(slideAtual) {
  fetch(URLVagas)
    .then((res) => res.json())
    .then(function (dados) {
      vagas = dados;
      vaga = vagas[slideAtual];

      fetch(`${URLVagas}/${vaga.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => location.reload());
    });
}

function cadastraServico(slideAtual) {
  fetch(URLVagas)
    .then((res) => res.json())
    .then(function (dados) {
      vagas = dados;
      vaga = vagas[slideAtual];

      const servico = JSON.stringify({
        id: vaga.id,
        title: vaga.nomeVaga,
        descricao: vaga.descricao,
        empresa: vaga.idE.toString(),
        usuario: id.toString(),
      });

      fetch(URLServicos, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: servico,
      }).then((res) => res.json());
    });
}

document.addEventListener("DOMContentLoaded", function () {
  fetch(URLVagas)
    .then((res) => res.json())
    .then(function (dados) {
      vagas = dados;
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
        document.querySelector("#tela").innerHTML = strCarrossel;
      } else {
        criarSlide(slideAtual);
      }
    });
});
