document.addEventListener("DOMContentLoaded", function () {
    //Recuperando ID do usuario
    let params = new URLSearchParams(location.search);
    console.log(params);
    let id = params.get("id");
    console.log(id);
    let linkHome = document.getElementById("a-Carrossel");
    linkHome.href = `carrossel.html?id=${id}`;
    let linkForum = document.getElementById("a-Forum");
    linkForum.href = `Forum.html?id=${id}`;
    let linkVagaDisp = document.getElementById("a-VagasDisp");
    linkVagaDisp.href = `VagasDisponiveis.html?id=${id}`;
    ReceberID(id);
    Servicos(id);
});

function ReceberID(id) {
    let Json = `http://localhost:3000/usuarios/${id}`;
    fetch(Json)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let img = document.getElementById("logo-perfil");
            let name = document.getElementById("perfil-nome");
            let descri = document.getElementById("desc");
            console.log(data);

            if (img) {
                img.src = `${data.imagem}`;
                name.textContent = `${data.nome} ${data.sobrenome}`;
                descri.textContent = `${data.sobre}`;
            }
        });
}

function Servicos(id) {
    let servicos = "http://localhost:3000/servicos";
    fetch(servicos)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let card = document.getElementById("conteudo");
            let newDiv = document.createElement("div");
            newDiv.classList.add("newDiv");
            let strHtml = "";
            for (let i = 0; i < data.length; i++) {
                if (data[i].usuario == id) {
                    strHtml += `
                    <div class="card-vagas p-5">
                      <div class="card-body">
                        <div class="container text-center">
                          <div class="row row-cols-2">
                            <div class="col-md-4">
                              <img class="icon-vagas" src="${data[i].imagem}" />
                            </div>
                            <div class="col-md-8">
                              <h6>${data[i].title}</h6>
                              <p id="descVaga">
                              ${data[i].descricao}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
                }
            }
            newDiv.innerHTML = strHtml;
            card.appendChild(newDiv);
        });
}
