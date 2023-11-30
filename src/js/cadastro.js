document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    receberUser();
  });
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

function receberUser() {
  const userName = document.getElementById("UserName").value;
  const userSenha = document.getElementById("UserSenha").value;

  if (userName.length < 3 || userSenha.length < 5) {
    if (userName.length < 3 && userSenha.length < 5) {
      console.log("nome < 3");
      console.log("senha < 5");
    } else if (userName.length < 3) {
      console.log("nome < 3");
    } else {
      console.log("senha < 5");
    }
  } else {
    let conferLocal = JSON.parse(localStorage.getItem("usuario"));
    console.log(conferLocal);

    if (!conferLocal) {
      let usuario;
      conferLocal = usuario = [
        {
          id: 1,
          login: userName,
          senha: userSenha,
          nome: "",
          sobre: "",
          curriculo: "",
          portfolio: "",
          imagem: "",
          servicos: [],
          Vaga: [],
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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dados }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
