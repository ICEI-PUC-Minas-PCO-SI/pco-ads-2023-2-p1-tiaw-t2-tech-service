//Recuperando ID do usuario
let params = new URLSearchParams(location.search);
let id = params.get("id");
let linkPerfil = document.getElementById("a-Perfil");
let linkCarrosel = document.getElementById("a-Carrossel");
let linkEditar = document.getElementById("a-EditarPerfil");
let linkForum = document.getElementById("a-Forum");
linkForum.href = `Forum.html?id=${id}`;
linkPerfil.href = `Perfil.Freelancer.html?id=${id}`;
linkCarrosel.href = `carrossel.html?id=${id}`;
linkEditar.href = `TelaEditarPerfil.html?id=${id}`;

//Recuperando ID do usuario
let recebeAPI = [];

fetch(`https://tecmatch--brandds.repl.co/usuarios/${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    pegarIMG(data);
  });

function pegarIMG(dados) {
  recebeAPI.push(dados);
}
let divFiltro = document.querySelector(".sectior-filtros-vagas");
let select = document.getElementById("select");
select.addEventListener("change", function () {
  let newdiv = document.createElement("div");
  newdiv.classList.add("newDiv");
  let newCamp;
  let existiDiv = document.querySelector(".newDiv");

  if (select.value == "Software") {
    newCamp = `
    <div class="div-selects">
      <select name="select-Software" class="select-soft" id="select-1" onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
        <option value=""></option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="PHP">PHP</option>
        <option value="C#">C#</option>
        <option value="C++">C++</option>
        <option value="TypeScript">TypeScript</option>
        <option value="Swift">Swift</option>
        <option value="R">R</option>
        <option value="Scala">Scala</option>
        <option value="Go">Go</option>
        <option value="PowerShell">PowerShell</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Rust">Rust</option>
        <option value="Perl">Perl</option>
        <option value="Dart">Dart</option>
        <option value="Ruby">Ruby</option>
      </select>
      <select name="select-Software" id="select-2" onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
        <option value=""></option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="PHP">PHP</option>
        <option value="C#">C#</option>
        <option value="C++">C++</option>
        <option value="TypeScript">TypeScript</option>
        <option value="Swift">Swift</option>
        <option value="R">R</option>
        <option value="Scala">Scala</option>
        <option value="Go">Go</option>
        <option value="PowerShell">PowerShell</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Rust">Rust</option>
        <option value="Perl">Perl</option>
        <option value="Dart">Dart</option>
        <option value="Ruby">Ruby</option>
      </select>
      <select name="select-Software" id="select-3" onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
        <option value=""></option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="PHP">PHP</option>
        <option value="C#">C#</option>
        <option value="C++">C++</option>
        <option value="TypeScript">TypeScript</option>
        <option value="Swift">Swift</option>
        <option value="R">R</option>
        <option value="Scala">Scala</option>
        <option value="Go">Go</option>
        <option value="PowerShell">PowerShell</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Rust">Rust</option>
        <option value="Perl">Perl</option>
        <option value="Dart">Dart</option>
        <option value="Ruby">Ruby</option>
      </select>
    </div>
    
    `;
    newdiv.innerHTML = newCamp;
    divFiltro.appendChild(newdiv);
  }
  if (existiDiv) {
    document.querySelector(".newDiv").remove();
  }
});

if (select.value == "Software") {
  let newCamp = `
    <select name="select-Software" id="select-Software" onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
      <option value=""></option>
      <option value="JavaScript">JavaScript</option>
      <option value="Python">Python</option>
      <option value="Java">Java</option>
      <option value="PHP">PHP</option>
      <option value="C#">C#</option>
      <option value="C++">C++</option>
      <option value="TypeScript">TypeScript</option>
      <option value="Swift">Swift</option>
      <option value="R">R</option>
      <option value="Scala">Scala</option>
      <option value="Go">Go</option>
      <option value="PowerShell">PowerShell</option>
      <option value="Kotlin">Kotlin</option>
      <option value="Rust">Rust</option>
      <option value="Perl">Perl</option>
      <option value="Dart">Dart</option>
      <option value="Ruby">Ruby</option>
    </select>
    `;
  newdiv.innerHTML = newCamp;
  divFiltro.appendChild(newdiv);
}

let customName = document.getElementById("vaga-nome");
let customSite = document.getElementById("vaga-site");
let customDescri = document.getElementById("vaga-descricao");
let msgPHR = document.getElementById("paragraph-modal-serv");
let msgTitle = document.getElementById("titulo-modal");
let msrErr = document.getElementById("meuModal-Servico");
msrErr.style.display = "none";
let msgConfP = document.getElementById("mensagem-confimacao");
let msgConfTitle = document.querySelector(".modal-title");
let msgConf = document.getElementById("meuModal");
msgConf.style.display = "none";

document.getElementById("Btn-fechar").addEventListener("click", function () {
  msrErr.style.display = "none";
});
document.getElementById("btn-fechar").addEventListener("click", function () {
  msgConf.style.display = "none";
});

let newVaga = document.getElementById("submit-newVaga");
newVaga.addEventListener("click", async function (ev) {
  ev.preventDefault();
  let newName = document.getElementById("vaga-nome").value;
  let newSite = document.getElementById("vaga-site").value;
  let newDescri = document.getElementById("vaga-descricao").value;
  let soft1;
  let soft2;
  let soft3;

  if (select.value == "Software") {
    let newSoft1 = document.getElementById("select-1");
    newSoft1.addEventListener("change", function () {});
    let newSoft2 = document.getElementById("select-2");
    newSoft2.addEventListener("change", function () {});
    let newSoft3 = document.getElementById("select-3");
    newSoft3.addEventListener("change", function () {});
    soft1 = newSoft1.value;
    soft2 = newSoft2.value;
    soft3 = newSoft3.value;
  }
  let newFiltro = select.value;

  // console.log(newName, newSite, newDescri, newFiltro, soft1, soft2, soft3);

  if (!newName || !newSite || !newDescri || !newFiltro) {
    if (!newName) {
      customName.style.border = "4px solid red";
    }
    if (!newSite) {
      customSite.style.border = "4px solid red";
    }
    if (!newDescri) {
      customDescri.style.border = "4px solid red";
    }
    if (!newFiltro) {
      select.style.border = "4px solid red";
    }
    msrErr.style.display = "block";
    msgTitle.style.color = "red";
    msgPHR.style.color = "red";
    msgPHR.textContent = "Insira todos os campos ";
    setTimeout(() => {
      customDescri.style.border = "";
      customName.style.border = "";
      customSite.style.border = "";
      select.style.border = "";
    }, 2000);
  } else {
    let vaga = {
      imagem: recebeAPI[0].imagem,
      nomeVaga: newName,
      descricao: newDescri,
      site: newSite,
      filtro: newFiltro,
      soft1: soft1,
      soft2: soft2,
      soft3: soft3,
      idE: parseInt(id),
      status: true,
    };
    msgConfTitle.textContent = "Sucesso";
    msgConfTitle.style.color = "green";
    msgConfTitle.style.fontSize = "1.7rem";
    msgConfP.textContent = "Todaos campos preenchidos, deseja salva-los?";
    msgConfP.style.color = "green";
    msgConfP.style.fontSize = "1.2rem";
    msgConf.style.display = "block";
    customDescri.style.border = "4px solid green";
    customName.style.border = "4px solid green";
    customSite.style.border = "4px solid green";
    select.style.border = "4px solid green";

    setTimeout(() => {
      customDescri.style.border = "";
      customName.style.border = "";
      customSite.style.border = "";
      select.style.border = "";
    }, 2000);
    document
      .getElementById("btn-enviar")
      .addEventListener("click", function (ev) {
        ev.preventDefault();
        msgConf.style.display = "none";
        postVagas(vaga);
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
  }
});

function postVagas(dados) {
  fetch("https://tecmatch--brandds.repl.co/vagas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((response) => response.json())
    .then((data) => {});
}
getVagas();
function getVagas() {
  fetch("https://tecmatch--brandds.repl.co/vagas")
    .then((response) => response.json())
    .then(function (data) {
      let container = document.getElementById("vagas-criadas");
      let newDiv = document.createElement("div");
      newDiv.classList.add("newDivv");
      let newCamp = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].idE == id) {
          let servicesString = "<p><strong>Linguagens: </strong>";

          if (data[i].soft1 !== undefined) {
            servicesString += data[i].soft1;
          }

          if (data[i].soft2 !== undefined) {
            servicesString +=
              (data[i].soft1 !== undefined ? ", " : "") + data[i].soft2;
          }

          if (data[i].soft3 !== undefined) {
            servicesString +=
              (data[i].soft1 !== undefined || data[i].soft2 !== undefined
                ? ", "
                : "") + data[i].soft3;
          }

          servicesString += "</p>";
          if (data[i].imagem) {
            newCamp += `
          <div class="div-container" data-value="${data[i].id}">
            <div class="div01">
             <img class="img-vaga" src="${data[i].imagem}" alt="Minha Figura">
             <p><strong>Nome: </strong>${data[i].nomeVaga}</p>
            </div>
            <div class="div02">
             <p><strong>Descrição: </strong>${data[i].descricao}</p>
             <p><strong>Site: </strong>
             <a href="${data[i].site}">${data[i].site}</a></p>
             <p><strong>Serviço: </strong>${data[i].filtro}</p>
             ${servicesString}
             <button class="btn-excluir" onclick="Excluir(${data[i].id})" type="button">Excluir Vaga</button>
            </div>
          </div>`;
          } else {
            newCamp += `
          <div class="div-container" data-value="${data[i].id}">
            <div class="div01">
             <img class="img-vaga" src="imgs/icon-user.png" alt="Minha Figura">
             <p><strong>Nome: </strong>${data[i].nomeVaga}</p>
            </div>
            <div class="div02">
             <p><strong>Descrição: </strong>${data[i].descricao}</p>
             <p><strong>Site: </strong>
             <a href="${data[i].site}">${data[i].site}</a></p>
             <p><strong>Serviço: </strong>${data[i].filtro}</p>
             ${servicesString}
             <button class="btn-excluir" onclick="Excluir(${data[i].id})" type="button">Excluir Vaga</button>
            </div>
          </div>`;
          }
        }
      }
      newDiv.innerHTML = newCamp;
      container.appendChild(newDiv);
    });
}
function Excluir(value) {
  document.querySelector(`.div-container[data-value="${value}"]`).remove();
  fetch(`https://tecmatch--brandds.repl.co/vagas/${value}`, {
    method: "DELETE",
  }).then((response) => console.log("Item excluido"));
}
