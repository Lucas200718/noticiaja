const agora = new Date();
const hora =  agora.getHours();
let mensagem;

if(hora < 12){
    mensagem = "Bom dia";
}else if(hora < 18){
    mensagem = "Boa tarde"
}else{
    mensagem = "Boa noite";
}

const saudacao = document.querySelector("#saudacao");
saudacao.textContent = '${mensagem}, leitor! Hoje é ${agora.toLocaleDateString("pt-BR")}.';

let curtidas = 0;
const botaoCurtir = document.querySelector("#btn-curtir");
const contador = document.querySelector("#curtidas");

function curtir() {
    curtidas = curtidas + 1;
    contador.textContent = curtidas;
    botaoCurtir.classList.add("curtido");
}
botaoCurtir.addEventListener("click", curtir);

const botaoMais = document.querySelector("#btn-mais");
const detalhes = document.querySelector("#detalhes");

botaoMais.addEventListener("click", () => {
    detalhes.hidden = !detalhes.hidden;
    botaoMais.textContent = detalhes.hidden ? "Ler mais" : "Ler menos";

});