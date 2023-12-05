document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btn-cadastro")
    .addEventListener("click", receberUser);
});
URL = "http://localhost:3000/usuarios";
let id = 1;
const userDefaul = {
  id: "",
  login: "",
  senha: "",
  nome: "",
  sobre: "",
  curriculo: "",
  portfolio: "",
  imagem: "",
  servicos: [],
  Vaga: [],
};

function receberUser(event) {
  event.preventDefault();
  const userName = document.getElementById("UserName").value;
  const userSenha = document.getElementById("UserSenha").value;
  //Conferir se tem dados armazenados Fetch
  //Conferir se tem dados armazenados Fetch

  //verificar campos do formulario
  if (userName.length < 3 || userSenha.length < 5) {
    if (userName.length < 3 && userSenha.length < 5) {
    } else if (userName.length < 3) {
      console.log("nome < 3");
    } else {
      console.log("senha < 5");
    }
    return;
  }
  //verificar campos do formulario

  //Fetch verificar se ja existe
  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let conferLocar = JSON.parse(localStorage.getItem("usuario")) || [];

      for (let i = 0; i < data.length; i++) {
        const usuario = data[i];

        if (!usuario.login.trim() || !usuario.senha.trim()) {
          let Vagas = {
            id: i,
            nomeVaga: "",
            site: "",
            descricao: "",
            filtro: [],
            software: [],
          };
          let usuario = {
            id: i,
            login: userName,
            senha: userSenha,
            nome: "",
            sobre: "",
            curriculo: "",
            portfolio: "",
            imagem: "",
            servicos: [],
            Vaga: [],
          };
          conferLocar.push(usuario);
          localStorage.setItem("usuario", JSON.stringify(conferLocar));
          putAPI(usuario);
          putApiVagas(Vagas);

          alert(`Usuário no índice ${i} possui campos obrigatórios vazios.`);
          break;
        } else {
          let usuario;
          let Vagas;
          for (let i = 0; i <= data.length; i++) {
            if (data[i] === undefined) {
              Vagas = {
                id: i,
                nomeVaga: "",
                site: "",
                descricao: "",
                filtro: [],
                software: [],
              };
              usuario = {
                id: i,
                login: userName,
                senha: userSenha,
                nome: "",
                sobre: "",
                curriculo: "",
                portfolio: "",
                imagem: "",
                servicos: [],
                Vaga: [],
              };
              conferLocar.push(usuario);
              break;
            }
          }
          localStorage.setItem("usuario", JSON.stringify(conferLocar));
          posttAPI(usuario);
          postApiVagas(Vagas);
        }
      }
    });
}
function posttAPI(dados) {
  fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function putAPI(dados) {
  URL = `http://localhost:3000/usuarios/${dados.id}`;
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
function postApiVagas(dados) {
  fetch("http://localhost:3000/vagas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function putApiVagas(dados) {
  URL = `http://localhost:3000/vagas/${dados.id}`;
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
