document.addEventListener("DOMContentLoaded", function () {
  //Receber ID (Identificador do usuario)
  let params = new URLSearchParams(location.search);
  let id = params.get("id");
  //Links para outras paginas
  let PERFIL = document.getElementById("a-Perfil");
  let NEWVAGA = document.getElementById("a-CriarVaga");
  let FORUM = document.getElementById("a-Forum");
  let HOME = document.getElementById("a-carrossel");
  console.log(HOME);
  PERFIL.href = `Perfil.Freelancer.html?id=${id}`;
  NEWVAGA.href = `TelaCriarVagas.html?id=${id}`;
  FORUM.href = `Forum.html?id=${id}`;
  HOME.href = `carrossel.html?id=${id}`;
  //Receber ID (Identificador do usuario)
  let receberDados = [];
  //Padroes
  let modalUser = document.getElementById("meuModal");
  modalUser.style.display = "none";
  let modalUserPh = document.getElementById("paragraph-modal");
  modalUserPh.innerText = "Ola";

  let modalServ = document.getElementById("meuModal-Servico");
  modalServ.style.display = "none";
  //Padroes

  document.getElementById("btn-fechar").addEventListener("click", function () {
    modalUser.style.display = "none";
  });
  document
    .getElementById("btn-fecharServ")
    .addEventListener("click", function () {
      modalServ.style.display = "none";
    });

  //Chamando JSONServer User
  fetch(`https://tech-servic.vercel.app/usuarios/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let name = (document.getElementById("input-nome").value = data.nome);
      let img = document.getElementById("img-user");
      if (data.imagem) {
        let imagem = (document.getElementById("input-img").value = data.imagem);
        img.src = data.imagem;
      } else {
        img.src = "/src/imgs/avatarimg.png";
      }
      carregarJsonServ(data);
      getJSONUser(data);
    });
  function getJSONUser(data) {
    receberDados.push(data);
  }
  //Chamando JSONServer User
  console.log(receberDados);

  //Edita Perfil User
  let btn = document.getElementById("submit-usuario");
  btn.addEventListener("click", function (ev) {
    ev.preventDefault();

    // Recebendo valores dos campos de Perfil do Usuario
    let nome = document.getElementById("input-nome").value;
    let imagem = document.getElementById("input-img").value;
    let descricao = document.getElementById("textarea-sobre").value;
    let curriculo = document.getElementById("input-arquivo1").value;
    let portfolio = document.getElementById("input-arquivo2").value;
    //Recebendo valores dos campos de perfil do Usuario
    let usuario = {
      id: id,
      login: receberDados.login,
      senha: receberDados.senha,
      senha2: receberDados.senha2,
      nome: nome,
      sobrenome: receberDados.sobrenome,
      data: "",
      sobre: descricao,
      portifolio: portfolio,
      curriculo: curriculo,
      imagem: imagem,
      servicos: "",
    };

    console.log(nome, imagem, descricao, curriculo, portfolio);
    let nomee = document.getElementById("input-nome");
    let imagemm = document.getElementById("input-img");
    let descricaoo = document.getElementById("textarea-sobre");
    let curriculoo = document.getElementById("input-arquivo1");
    let portfolioo = document.getElementById("input-arquivo2");

    let titleModalSuc = document.getElementById("title-modal");

    if (!nome || !imagem || !descricao || !curriculo || !portfolio) {
      if (!imagem) {
        imagemm.style.border = "4px solid red";
      }
      if (!descricao) {
        descricaoo.style.border = "4px solid red";
      }
      if (!curriculo) {
        curriculoo.style.border = "4px solid red";
      }
      if (!curriculo) {
        curriculoo.style.border = "4px solid red";
      }
      if (!portfolio) {
        portfolioo.style.border = "4px solid red";
      }
      if (!nome) {
        modalUser.style.display = "block";
        titleModalSuc.style.color = "yellow";
        modalUserPh.innerText = "Insira no minimo o Nome";
        nomee.style.border = "4px solid red";
        setTimeout(() => {
          nomee.style.border = "";
          imagemm.style.border = "";
          descricaoo.style.border = "";
          curriculoo.style.border = "";
          portfolioo.style.border = "";
        }, 2000);
      } else {
        titleModalSuc.style.color = "yellow";
        modalUserPh.innerText =
          "Nem todos os dados foram inseridos, deseja salva-los?";
        modalUser.style.display = "block";
        setTimeout(() => {
          nomee.style.border = "";
          imagemm.style.border = "";
          descricaoo.style.border = "";
          curriculoo.style.border = "";
          portfolioo.style.border = "";
        }, 2000);
        let addJSON = document.getElementById("btn-seguir");
        addJSON.addEventListener("click", function () {
          putUse(usuario);
        });
      }
    } else {
      //Styles Green
      nomee.style.border = "4px solid green ";
      imagemm.style.border = "4px solid green";
      descricaoo.style.border = "4px solid green";
      curriculoo.style.border = "4px solid green";
      portfolioo.style.border = "4px solid green";
      //Styles Green
      modalUserPh.innerText =
        "Todos os campos foram preenchidos deseja Salvar?";
      modalUser.style.display = "block";

      setTimeout(() => {
        nomee.style.border = "";
        imagemm.style.border = "";
        descricaoo.style.border = "";
        curriculoo.style.border = "";
        portfolioo.style.border = "";
      }, 4000);
      let addJSON = document.getElementById("btn-seguir");
      addJSON.addEventListener("click", function () {
        modalUser.style.display = " none";
        setTimeout(() => {
          nomee.style.border = "";
          imagemm.style.border = "";
          descricaoo.style.border = "";
          curriculoo.style.border = "";
          portfolioo.style.border = "";
          modalUser.style.display = " none";
          putUse(usuario);
        }, 4000);
      });
    }
  });
  //Edita Perfil User

  //Metodo PUT Perfil User
  function putUse(dados) {
    URL = `https://tech-servic.vercel.app/usuarios/${id}`;
    fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  //Metodo PUT Perfil User
  let receberServ = [];
  //Chamando JSONServer Serviço
  function carregarJsonServ(dados) {
    fetch("https://tech-servic.vercel.app/servicos")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let containeir = document.getElementById("container");
        let newDiv = document.createElement("div");
        newDiv.id = "newConteudos";
        let newCont = "";
        if (!dados.imagem) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].idE == id) {
              newCont += `
          <div class="div-container" data-value="${data[i].id}">
            <div class="div-img">
              <img class="img-content" src="/src/imgs/avatarimg.png" alt="Minha Figura">
            </div>
            <div class="div-content">
              <p class="title-conte"><strong>Titulo :</strong> ${data[i].title}</p>
              <p class="descricao-conte"><strong>Descrição :</strong> ${data[i].descricao}</p>
              <button class="bnt-Serv"   type="button">Excluir Serviço</button>
            </div>
          </div>`;
            }
          }
        } else {
          for (let i = 0; i < data.length; i++) {
            console.log(receberDados);
            if (data[i].idE == id) {
              newCont += `
          <div class="div-container" data-value="${data[i].id}">
            <div class="div-img">
              <img class="img-content" src="${receberDados[0].imagem}" alt="Minha Figura">
            </div>
            <div class="div-content">
              <p class="title-conte"><strong>Titulo :</strong> ${data[i].title}</p>
              <p class="descricao-conte"><strong>Descrição :</strong> ${data[i].descricao}</p>
              <button class="bnt-Serv" onclick="Excluir(${data[i].id})"  type="button">Excluir Serviço</button>
            </div>
          </div>`;
            }
          }
        }

        newDiv.innerHTML = newCont;
        containeir.appendChild(newDiv);
        getJSONUServ(data);
      });
  }
  //Chamando JSONServer Serviço
  function getJSONUServ(dados) {
    receberServ.push(dados);
  }
  console.log(receberServ);

  const cornameServ = document.getElementById("titulo-serv");
  const cordescriServ = document.getElementById("descricao-serv");

  //Criar novo serviço
  let form = document.getElementById("form-Edit");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    let nameServ = document.getElementById("titulo-serv").value;
    let descriServ = document.getElementById("descricao-serv").value;
    let mensagerErr = document.querySelector("#paragraph-modal-serv");
    let titleModalSuc = document.getElementById("title-modal");
    let titleModalErr = document.querySelector(".modal-title-serv");
    console.log(titleModalSuc);

    if (!nameServ || !descriServ) {
      titleModalErr.style.color = "yellow";
      cornameServ.style.border = "4px solid red";
      cordescriServ.style.border = "4px solid red";
      mensagerErr.style.color = "red";
      mensagerErr.innerText = "Insira todos os campos";

      setTimeout(() => {
        cornameServ.style.border = "";
        cordescriServ.style.border = "";
      }, 2000);
      modalServ.style.display = "block";
    } else {
      let servicos = {
        title: nameServ,
        descricao: descriServ,
        idE: parseInt(id, 10),
      };
      titleModalSuc.innerText = "Sucesso";
      cornameServ.style.border = "4px solid green";
      cordescriServ.style.border = "4px solid green";
      titleModalSuc.style.color = "green";
      modalUserPh.innerText = "Todos dados preenchidos, deseja salva-los?";
      modalUser.style.display = "block";

      setTimeout(() => {
        cornameServ.style.border = "";
        cordescriServ.style.border = "";
      }, 2000);

      let addJSON = document.getElementById("btn-seguir");
      addJSON.addEventListener("click", function () {
        console.log(servicos);
        postServicos(servicos);
      });
    }
  });
  //Criar novo serviço

  //Funçao FETC POSTServ
  function postServicos(dados) {
    fetch("https://tech-servic.vercel.app/servicos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  //Funçao FETC POSTServ
});

function Excluir(value) {
  document.querySelector(`.div-container[data-value="${value}"]`).remove();
  fetch(`https://tech-servic.vercel.app/servicos/${value}`, {
    method: "DELETE",
  }).then((response) => console.log("Item excluido"));
}
