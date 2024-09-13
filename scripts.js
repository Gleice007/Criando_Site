// let clientes = ["Gleiciele", "Maria", "João"]
// let produtos = ["Televisão", "Microondas"]

// console.log(clientes)

let circulo = document.querySelector('.circulo');
let imagem = document.querySelector('.copo')
// console.log(circulo);

function trocarACor(cor) {
  circulo.style.background = cor;
}


function trocarImagem(endereco){
 
    imagem.src = endereco
}