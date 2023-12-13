URLVagas = 'http://localhost:3000/vagas';

function carregarVagas(){
    let divVaga = document.getElementById('job-list');
    let strVaga = '';
    fetch(URLVagas)
    .then(res => res.json())
    .then(function(dados){
        vagas = dados;

        cont = 0;
        for(let i = 0; i < vagas.length; i++){
            if(vagas[i].status){
                if (cont % 3 === 0) {
                    strVaga += `<div class="row justify-content-center">`;
                }
                strVaga += `
                            <div class="col-sm-12 col-md-3 mb-4 px-3">
                                <div class="card job-card">
                                    <div class="card-body d-flex flex-column align-items-center justify-content-center p-3">
                                        <h3 class="card-title mb-3">${vagas[i].nomeVaga}</h3>
                                        <span class="card-text">${vagas[i].nomeEmpresa}</span>
                                        <span class="card-text">${vagas[i].filtro}</span>
                                        <a onclick="getVaga(${i});" class="btn btn-light btn-sm m-3" data-bs-toggle="modal" data-bs-target="#vaga-modal">Saber Mais</a>
                                    </div>
                                </div>
                            </div>
                `;
                if ((cont + 1) % 3 === 0 || (cont + 1) === vagas.length) {
                    strVaga += '</div>';
                }
                cont++;
            }
        }

        divVaga.innerHTML = strVaga;
    })
}

function getVaga(id){
    fetch(URLVagas)
    .then(res => res.json())
    .then(function(dados){
        vagas = dados;
        vaga = vagas[id];

        const modalBody = document.getElementById('vagaModalBody');
        modalBody.innerHTML = `
          <h5>${vaga.nomeEmpresa} - ${vaga.nomeVaga}</h5>
          <p>${vaga.filtro}</p>
          <p>${vaga.descricao}</p>
          <h5>Contato</h5>
          <strong>E-mail:</strong> <p class="d-inline">${vaga.email}</p><br>
          <strong>Telefone:</strong> <p class="d-inline">${vaga.telefone}</p>
          
        `;
    })
}

carregarVagas();
