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
});
function ledados() {
  let vagascriadas = localStorage.getItem("usuario");
  let objvagas = {};
  if (vagas) {
    objvagas = JSON.parse(vagascriadas);
  } else {
    objvagas = {
      vaga: [
        "Segunda a quinta das 08:00 às 18:00 e sexta-feira: 08:00 às 17:00 horas função: Ser responsável por preservar a identidade visual das marcas e desenvolvimento da comunicação visual dos projetos do grupo e seus clientes. ",
      ],
    };
  }

  return objvagas;
}

function salvardados(dados) {
  localStorage.setItem("usuario", JSON.stringify(dados));
}

function imprimeDados() {
  let vagas = document.getElementById("cardvagas");
  let strHtml = "";
  let objvagas = ledados();
  for (i = 0; i < objDados.vaga.length; i++) {
    strHtml =
      strHtml +
      `<div class="vaga-disponivel" data-identificador="${i}">
        <div class="div-img">
          <img src="${vagaIMG}" alt="Img-Usuario" class="img-vaga"/>
        </div>
        <div class="div-dadosVagas">
          <p class="paragraph-titulo"><strong> </strong>${cardvagas.nomeVaga}</p>
          <p class="paragraph-descricao"><strong>Descrição : </strong>${cardvagas.descricao}</p>
        </div>
      </div>`;
  }
  cardvagas.innerHTML = strHtml;
}
