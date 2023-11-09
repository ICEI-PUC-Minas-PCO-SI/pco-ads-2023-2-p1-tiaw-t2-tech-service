let bancoVagas = JSON.parse(localStorage.getItem("usuario"))|| [];
console.log(bancoVagas);
let slideAtual = 0;
let loadingOverlay = document.getElementById("loading-overlay");

function criarSlide(slideAtual) {
     console.log(bancoVagas.imagem)
    var strCarrossel = "";
    let slide = document.createElement("div");
    slide.className = "carousel-item" + (slideAtual === 0 ? " active" : "");
    const vaga = bancoVagas[slideAtual];
    const vagaIMG = bancoVagas.imagem;
    console.log(va)

   
    if(vaga){ 
        strCarrossel += `<div class="container bg-light p-4 w-75 h-75 mt-5 rounded-5">
            <div class="header d-flex justify-content-around my-5">
                <i class="fas fa-fire fs-2"></i>
                <i class="fas fa-comments fs-2"></i>
                <i class="fas fa-user fs-2"></i>
            </div>
            <div class="row">
                <h2 class="m-5">${vaga.nomeVaga} - ${vaga.site}</h2>
            </div>
            <div class="row">
                <div class="col-md-6 mx-0 my-auto">
                    <div class="d-flex justify-content-center">
                        <img src="${vagaIMG}" width="250px" height="250px" alt="imagem-vaga" class="img-fluid rounded-5">
                    </div>
                </div>
                <div class="col-md-6">
                    <h3>Descrição da Vaga</h3>
                    <p>${vaga.descricao}</p>
                </div>
            </div>
            <div class="actions d-flex justify-content-around">
                <div class="action">
                    <i class="fas fa-times text-danger fs-2" onclick="recusarVaga()"></i>
                </div>
                <div class="action">
                    <i class="fas fa-heart text-success fs-2" onclick="aceitarVaga()"></i>
                </div>
            </div>
        </div>`
    }else{
        strCarrossel = `<div class="container bg-light p-4 w-75 h-75 mt-5 rounded-5">
            <div class="header d-flex justify-content-around my-5">
                <i class="fas fa-fire fs-2"></i>
                <i class="fas fa-comments fs-2"></i>
                <i class="fas fa-user fs-2"></i>
            </div>
            <h2 class="text-center">Você chegou ao fim, essas foram as vagas disponíveis. Obrigado por colaborar com o nosso site!</h2>
        </div>`;
    }
    console.log(strCarrossel)
    document.querySelector('#tela').innerHTML = strCarrossel;
}

function aceitarVaga(){
    slideAtual++;

    if(slideAtual >= bancoVagas.length){
        strCarrossel = `<div class="container bg-light p-4 w-75 h-75 mt-5 rounded-5">
            <div class="header d-flex justify-content-around my-5">
                <i class="fas fa-fire fs-2"></i>
                <i class="fas fa-comments fs-2"></i>
                <i class="fas fa-user fs-2"></i>
            </div>
            <h2 class="text-center">Você chegou ao fim, essas foram as vagas disponíveis. Obrigado por colaborar com o nosso site!</h2>
        </div>`;
        document.querySelector('#tela').innerHTML = strCarrossel;
    }

    criarSlide(slideAtual);
}

function recusarVaga(){
    slideAtual++;

    if(slideAtual >= bancoVagas.length){
        strCarrossel = `<div class="container bg-light p-4 w-75 h-75 mt-5 rounded-5">
            <div class="header d-flex justify-content-around my-5">
                <i class="fas fa-fire fs-2"></i>
                <i class="fas fa-comments fs-2"></i>
                <i class="fas fa-user fs-2"></i>
            </div>
            <h2 class="text-center">Você chegou ao fim, essas foram as vagas disponíveis. Obrigado por colaborar com o nosso site!</h2>
        </div>`
        document.querySelector('#tela').innerHTML = strCarrossel;
    }

    criarSlide(slideAtual);
}

onload = () => {criarSlide(slideAtual);
}

$(document).ready(() => {
    $(".chat-btn").click(() => {
        $(".chat-box").slideToggle("slow")
    })
})