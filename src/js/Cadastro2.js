document.addEventListener("DOMContentLoaded", function () {
  let iconSuc = document.querySelector(".loader");
  iconSuc.style.display = "none";
  let msgErr = document.querySelector(".msgErr");
  msgErr.style.display = "none";
  let modaFe = document
    .getElementById("fechar")
    .addEventListener("click", function () {
      modal.style.display = "none";
    });
  let modal = document.getElementById("modal");
  modal.style.display = "none";
  let form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", function (ev) {
      console.log("ola1");
      ev.preventDefault();
      console;
      //Receber Valores
      const login = document.getElementById("UserName").value;
      const name = document.getElementById("UserName1").value;
      const sobrenome = document.getElementById("UserSobrenome").value;
      const date = document
        .getElementById("UserDate")
        .value.split("-")
        .reverse()
        .join("/");
      const passsoword1 = document.getElementById("UserSenha1").value;
      const passoword = document.getElementById("UserSenha").value;

      console.log(login, name, sobrenome, date, passoword, passsoword1);
      //Receber Valores

      if (
        !login ||
        !name ||
        !sobrenome ||
        !date ||
        !passsoword1 ||
        !passoword
      ) {
        if (!login) {
          console.log("Login");
        }
        if (!name) {
          console.log("Name");
        }
        if (!sobrenome) {
          console.log("Sobrenome");
        }
        if (!date) {
          console.log("date");
        }
        if (!passsoword1) {
          console.log("senha1");
        }
        if (!passoword) {
          console.log("senha");
        }
      } else {
        let usuario = {
          id: "",
          login: login,
          senha: passoword,
          senha2: passsoword1,
          nome: name,
          sobrenome: sobrenome,
          data: date,
          sobre: "",
          portifolio: "",
          curriculo: "",
          imagem: "",
          servicos: "",
        };
        console.log(usuario);
        let servicos = {
          id: "",
          title: "",
          descricao: "",
        };
        let vagas = {
          id: "",
          nomeVaga: "",
          descricao: "",
          site: "",
          filtro: "",
          software: "",
          disponivel: "",
        };
        URL = "http://localhost:3000/usuarios ";

        fetch(URL)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            let qtt = 0;
            for (let i = 0; i < data.length; i++) {
              if (data[i].login === login) {
                console.log("Login ja usado");
                console.log(data[i].login);
                qtt++;
                break;
              }
            }
            if (qtt == 0) {
              console.log("Nao existe esse login");
              if (passsoword1.length > 5) {
                if (passoword == passsoword1) {
                  let campoName = document.getElementById("UserName");
                  let campoSenha = document.getElementById("UserSenha");
                  let bordDiv = document.querySelector(".wrapper");

                  let namee = document.getElementById("UserName1");
                  let sobrenomee = document.getElementById("UserSobrenome");
                  let datee = document.getElementById("UserDate");
                  let passsoword11 = document.getElementById("UserSenha1");

                  namee.style.border = "4px solid green";
                  sobrenomee.style.border = "4px solid green";
                  datee.style.border = " 4px solid green";
                  passsoword11.style.border = "4px solid green";
                  campoName.style.border = "4px solid green";
                  campoSenha.style.border = "4px solid green";

                  bordDiv.style.border = " 4px solid green";
                  iconSuc.style.display = "block";
                  modal.style.display = "block";

                  setTimeout(() => {
                    campoName.style.borderColor = "";
                    campoSenha.style.borderColor = "";
                    namee.style.borderColor = "";
                    sobrenomee.style.borderColor = "";
                    datee.style.borderColor = "";
                    passsoword11.style.borderColor = "";
                    bordDiv.style.borderColor = "";
                    iconSuc.style.display = "none";
                    modal.style.display = "none";
                    postUser(usuario);
                    window.location.href = "Login.html";
                  }, 8000);
                } else {
                  let campoSenha = document.getElementById("UserSenha");
                  let passsoword11 = document.getElementById("UserSenha1");
                  msgErr.style.color = "red";
                  msgErr.style.display = "block";
                  campoSenha.style.border = "4px solid red";
                  passsoword11.style.border = "4px solid red";

                  setTimeout(() => {
                    msgErr.style.display = "none";
                    campoSenha.style.border = "";
                    passsoword11.style.border = "";
                  }, 2000);
                }
              } else {
                let userPassoword = document.getElementById("UserSenha1");
                console.log("Senha menor que 5");
                msgErr.style.color = "red";
                msgErr.textContent = "Coloque uma senha maior que 5 caracteres";
                msgErr.style.display = "block";
                userPassoword.border = "4px solid red";
              }
            } else {
            }
          });
      }
    });
  } else {
    alert("Fomr element not found");
  }
});

function postUser(dados) {
  URL = "http://localhost:3000/usuarios ";
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
function postVagas(dados) {
  URL = "http://localhost:3000/vagas ";
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function postServicos(dados) {
  URL = "http://localhost:3000/servicos";
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
