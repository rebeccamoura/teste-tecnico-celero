const q = (element) => document.querySelector(element)
const qAll = (element) => document.querySelectorAll(element)


function mostrarVerFoto(event) {
    
    q('#hover-first-plate').classList.remove('d-none')

}

function esconderVerFoto(event) {
    q('#hover-first-plate').classList.add('d-none')
}

function mostrarVerReceita() {
    q('#prato-receita div.hover').classList.remove('d-none')
}

function esconderVerReceita() {
    q('#prato-receita div.hover').classList.add('d-none')
}
