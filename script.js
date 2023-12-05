function alterarTexto() {
  let nomeUsuario = prompt("Digite o seu nome:");

  if (nomeUsuario === null || nomeUsuario === "") {
    return;
  }

  let paragrafo = document.getElementById("meuParagrafo");

  paragrafo.textContent =
    "E aí " + nomeUsuario + "! Você está deixando o seu site dinâmico.";
}

function incrementarContador() {
  let numero = document.getElementById("numero");

  let contadorAtual = parseInt(numero.textContent);

  contadorAtual++;

  numero.textContent = contadorAtual;
}

function zerarContador() {
  let numero = document.getElementById("numero");
  numero.textContent = 0;
}
