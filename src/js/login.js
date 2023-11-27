function mudancaHome() {
  alert(
    "Como você não está logado, não tem permissão pra acessar todas as funcionalidades do sistema!"
  );
  let mudanca = prompt(
    "Deseja mudar de página para acessar mais conteúdo? (Digite o número)  \n1- Sim \n2- Não"
  );
  if (mudanca == 1) {
    alert("Sendo direcionado");
    setTimeout(function () {
      window.location.href = "/src/HTML/carrossel.html";
    }, 2000);
  }
}
