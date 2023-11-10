function mudancaHome() {
  alert(
    "Como voce nao esta logado, não tem permissão pra mudar, para paginas especificas"
  );
  let mudanca = prompt(
    "Deseja mudar de pagina, para acessar mais conteudo ?(Digite o numero)  \n1- Sim \n2- Não"
  );
  if (mudanca == 1) {
    alert("Sendo direcionado");
    setTimeout(function () {
      window.location.href = "/src/HTML/carrossel.html";
    }, 2000);
  }
}
