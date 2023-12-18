let params = new URLSearchParams(location.search);
let id = params.get("id");
let linKPerfil = document.getElementById("a-Perfil");
let linkHome = document.getElementById("a-Carrossel");
let linkForum = document.getElementById("a-Forum");
linKPerfil.href = `Perfil.Freelancer.html?id=${id}`;
linkHome.href = `carrossel.html?id=${id}`;
linkForum.href = `Forum.html?id=${id}`;
let recerStatus = [];
fetch(`http://localhost:3000/usuarios/${id}`)
  .then((response) => response.json())
  .then((data) => {
    let input = document.getElementById("input-value");
    console.log(data);
    recerStatus.push(data);
    console.log(recerStatus);
    if (data.res == true) {
      input.disabled = false;
    } else {
      input.disabled = true;
    }
  });

let receberdados = [];
fetch(" http://localhost:3000/avaliacoes")
  .then((response) => response.json())
  .then((data) => {
    receberdados.push(data);
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["0", "1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Quantidade de avaliações",
            data: [
              data[0].zero,
              data[0].um,
              data[0].dois,
              data[0].tres,
              data[0].quatro,
              data[0].cinco,
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
const ctx = document.getElementById("myChart");

let msg = document.querySelector(".msg");
msg.style.display = "none";
//Pegar avalição
const resposta = document.getElementById("btn-enviar");
resposta.addEventListener("click", receberRespota);

function receberRespota() {
  let avalicao = {
    id: 0,
    zero: receberdados[0][0].zero,
    um: receberdados[0][0].um,
    dois: receberdados[0][0].dois,
    tres: receberdados[0][0].tres,
    quatro: receberdados[0][0].quatro,
    cinco: receberdados[0][0].cinco,
  };
  console.log(avalicao);
  let valor = document.getElementById("input-value").value;
  if (valor < 0 || valor > 5) {
    msg.style.display = "block";
    msg.style.color = "red";

    setTimeout(() => {
      msg.style.display = "none";
    }, 4000);
  } else {
    if (valor == 0) {
      avalicao.zero += 1;
    }
    if (valor == 1) {
      avalicao.um += 1;
    }
    if (valor == 2) {
      avalicao.dois += 1;
    }
    if (valor == 3) {
      avalicao.tres += 1;
    }
    if (valor == 4) {
      avalicao.quatro += 1;
    }
    if (valor == 5) {
      avalicao.cinco += 1;
    }
    let usuario = {
      id: "",
      login: recerStatus[0].login,
      senha: recerStatus[0].senha,
      senha2: recerStatus[0].senha2,
      nome: recerStatus[0].nome,
      sobrenome: recerStatus[0].sobrenome,
      email: recerStatus[0].email,
      telefone: recerStatus[0].telefone,
      sobre: "",
      portifolio: "",
      curriculo: "",
      imagem: "",
      servicos: "",
      res: false,
    };

    putUserStatus(usuario);
    console.log(avalicao);
    putAvaliacao(avalicao);
  }
}
//Pegar avalição

function putAvaliacao(dados) {
  console.log(dados);
  fetch("http://localhost:3000/avaliacoes/0", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function putUserStatus(dados) {
  console.log(dados);
  fetch(`http://localhost:3000/usuarios/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
