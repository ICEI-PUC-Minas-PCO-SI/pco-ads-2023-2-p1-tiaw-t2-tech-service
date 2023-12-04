document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
  document
    .getElementById("btn-cadastro")
    .addEventListener("click", receberUser);
=======
  let form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    receberUser();
  });
>>>>>>> 36bcd7cfdd5039634a7bfdf2a10deb0030fd219e
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

<<<<<<< HEAD
function receberUser(event) {
  event.preventDefault();
  const userName = document.getElementById("UserName").value;
  const userSenha = document.getElementById("UserSenha").value;
  //Conferir se tem dados armazenados Fetch
  //Conferir se tem dados armazenados Fetch

  //verificar campos do formulario
  if (userName.length < 3 || userSenha.length < 5) {
    if (userName.length < 3 && userSenha.length < 5) {
=======
function receberUser() {
  const userName = document.getElementById("UserName").value;
  const userSenha = document.getElementById("UserSenha").value;

  if (userName.length < 3 || userSenha.length < 5) {
    if (userName.length < 3 && userSenha.length < 5) {
      console.log("nome < 3");
      console.log("senha < 5");
>>>>>>> 36bcd7cfdd5039634a7bfdf2a10deb0030fd219e
    } else if (userName.length < 3) {
      console.log("nome < 3");
    } else {
      console.log("senha < 5");
    }
<<<<<<< HEAD
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

      const usuarioExiste = data.find((user) => user.login === userName);

      if (!usuarioExiste) {
        let usuario = {
          id: 0,
=======
  } else {
    let conferLocal = JSON.parse(localStorage.getItem("usuario"));
    console.log(conferLocal);

    if (!conferLocal) {
      let usuario;
      conferLocal = usuario = [
        {
          id: 1,
>>>>>>> 36bcd7cfdd5039634a7bfdf2a10deb0030fd219e
          login: userName,
          senha: userSenha,
          nome: "",
          sobre: "",
          curriculo: "",
          portfolio: "",
          imagem: "",
          servicos: [],
          Vaga: [],
<<<<<<< HEAD
        };
        conferLocar.push(usuario);
        localStorage.setItem("usuario", JSON.stringify(conferLocar));
        putAPI(usuario);
      } else {
        let usuario;
        for (let i = 0; i <= data.length; i++) {
          if (data[i] === undefined) {
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
          }
        }
        localStorage.setItem("usuario", JSON.stringify(conferLocar));
        posttAPI(usuario);
      }
    });
  userName = "";
  userSenha = "";
  setTimeout(() => {
    window.location.href = "./HTML/Login.hmtl";
  }, 4000);
}
function posttAPI(dados) {
  fetch("http://localhost:3000/usuarios", {
=======
        },
      ];
      console.log(conferLocal);
      console.log(conferLocal[0].login + " - " + conferLocal[0].senha);
      localStorage.setItem("usuario", JSON.stringify(conferLocal));
      getAPI(conferLocal);
    } else {
      for (let i = 0; i <= conferLocal.length; i++) {
        if (conferLocal[i] == undefined) {
          console.log("ola");
          userDefaul.id = i + 1;
          userDefaul.login = userName;
          userDefaul.senha = userSenha;
          conferLocal.push(userDefaul);
          console.log(conferLocal);
          localStorage.setItem("usuario", JSON.stringify(conferLocal));
          break;
        }
      }
    }
  }
}
function getAPI(dados) {
  fetch(URL, {
>>>>>>> 36bcd7cfdd5039634a7bfdf2a10deb0030fd219e
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
<<<<<<< HEAD
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
=======
    body: JSON.stringify({ dados }),
>>>>>>> 36bcd7cfdd5039634a7bfdf2a10deb0030fd219e
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
