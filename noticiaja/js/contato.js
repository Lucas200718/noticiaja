
const form = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");

// Áreas para apresentar mensagens
const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroMensagem = document.getElementById("erroMensagem");
const sucesso = document.getElementById("sucesso");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  let valido = true;

  erroNome.textContent = "";
  erroEmail.textContent = "";
  erroMensagem.textContent = "";
  sucesso.textContent = "";

  if (campoNome.value.trim() === "") {
    erroNome.textContent = "Digite o seu nome.";
    valido = false;
  }

  if (!campoEmail.value.includes("@")) {
    erroEmail.textContent = "Digite um e-mail válido, com @.";
    valido = false;
  }

  if (campoMensagem.value.trim().length < 20) {
    erroMensagem.textContent = "Escreva pelo menos 20 caracteres.";
    valido = false;
  }

  if (valido) {
    sucesso.textContent = `Obrigado, ${campoNome.value.trim()}! Sua pauta foi recebida.`;
    form.reset();
  }
});
