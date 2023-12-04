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

      const usuarioExiste = data.find((user) => user.login === userName);

      if (!usuarioExiste) {
        let usuario = {
          id: 0,
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
