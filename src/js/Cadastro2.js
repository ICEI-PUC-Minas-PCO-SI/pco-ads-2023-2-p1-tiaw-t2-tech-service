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
      const email = document.getElementById("Email").value;
      const telefone = document.getElementById("Telefone").value;
      const passsoword1 = document.getElementById("UserSenha1").value;
      const passoword = document.getElementById("UserSenha").value;

      console.log(
        login,
        name,
        sobrenome,
        email,
        telefone,
        passoword,
        passsoword1
      );
      //Receber Valores

      if (
        !login ||
        !name ||
        !sobrenome ||
        !email ||
        !telefone ||
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
        if (!email) {
          console.log("email");
        }
        if (!telefone) {
          console.log("telefone");
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
          email: email,
          telefone: telefone,
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
        URL = "https://tecmatch--brandds.repl.co/usuarios ";

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
                let campName = document.getElementById("");
                msgErr.style.display = "block";
                msgErr.textContent = "Login já usado";
                msgErr.style.color = "yellow";

                setTimeout(() => {
                  msgErr.style.display = "none";
                }, 2000);
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
                  let emaill = document.getElementById("Email");
                  let telefonee = document.getElementById("Telefone");
                  let passsoword11 = document.getElementById("UserSenha1");

                  namee.style.border = "4px solid green";
                  sobrenomee.style.border = "4px solid green";
                  emaill.style.border = " 4px solid green";
                  telefonee.style.border = " 4px solid green";
                  passsoword11.style.border = "4px solid green";
                  campoName.style.border = "4px solid green";
                  campoSenha.style.border = "4px solid green";

                  bordDiv.style.border = " 4px solid green";
                  iconSuc.style.display = "block";
                  modal.style.display = "block";
                  postUser(usuario);
                  setTimeout(() => {
                    campoName.style.borderColor = "";
                    campoSenha.style.borderColor = "";
                    namee.style.borderColor = "";
                    sobrenomee.style.borderColor = "";
                    emaill.style.borderColor = "";
                    telefonee.style.borderColor = "";
                    passsoword11.style.borderColor = "";
                    bordDiv.style.borderColor = "";
                    iconSuc.style.display = "none";
                    modal.style.display = "none";
                  }, 8000);
                  setTimeout(() => {
                    window.location.href = "Login.html";
                  }, 6000);
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
  URL = "https://tecmatch--brandds.repl.co/usuarios ";
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
  URL = "https://tecmatch--brandds.repl.co/vagas ";
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
  URL = "https://tecmatch--brandds.repl.co/servicos";
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

$(document).ready(function () {
  $("#Telefone").inputmask("(99) 9999-9999");
});

function validarLogin() {
  var login = document.getElementById("UserName").value;

  if (login.trim() === "") {
    document.getElementById("erroLogin").innerHTML =
      "Por favor, informe o login.";
  } else {
    document.getElementById("erroLogin").innerHTML = "";
  }
}

function validarNome() {
  var nome = document.getElementById("UserName1").value;

  if (nome.trim() === "") {
    document.getElementById("erroNome").innerHTML =
      "Por favor, informe o nome.";
  } else {
    document.getElementById("erroNome").innerHTML = "";
  }
}

function validarSobrenome() {
  var sobrenome = document.getElementById("UserSobrenome").value;

  if (sobrenome.trim() === "") {
    document.getElementById("erroSobrenome").innerHTML =
      "Por favor, informe o sobrenome.";
  } else {
    document.getElementById("erroSobrenome").innerHTML = "";
  }
}

function validarEmail() {
  var email = document.getElementById("Email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
    document.getElementById("erroEmail").innerHTML =
      "Por favor, informe o e-mail.";
  } else if (!emailRegex.test(email)) {
    document.getElementById("erroEmail").innerHTML =
      "Formato de e-mail inválido.";
  } else {
    document.getElementById("erroEmail").innerHTML = "";
  }
}

function validarTelefone() {
  var telefone = document.getElementById("Telefone").value;

  if (telefone.trim() === "") {
    document.getElementById("erroTelefone").innerHTML =
      "Por favor, informe o telefone.";
  } else {
    document.getElementById("erroTelefone").innerHTML = "";
  }
}

function validarSenha() {
  var senha = document.getElementById("UserSenha").value;
  var senha1 = document.getElementById("UserSenha1").value;

  if (senha.trim() === "" || senha1.trim() === "") {
    document.getElementById("erroSenha").innerHTML =
      "Por favor, informe a senha.";
  } else {
    document.getElementById("erroSenha").innerHTML = "";
  }
}
