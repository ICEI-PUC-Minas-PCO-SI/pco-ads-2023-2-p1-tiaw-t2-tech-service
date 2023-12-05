URL = "http://localhost:3000/usuarios";

function receberdados(fuc) {
  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (dados) {
      console.log(dados);
      fuc();
    });
}
