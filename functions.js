const q = (element) => document.querySelector(element)
const qAll = (element) => document.querySelectorAll(element)

// ideia: Função pegar o key-event e usar ele para o nome do elemento que colocará o evento remove/add d-none

function removerDNone(event) {

    q(`#${event.target.dataset.key}`).classList.remove('d-none')

}

function addDNone(event) {

    q(`#${event.target.dataset.key}`).classList.add('d-none')

}

function mudarImg() {}


/*function mostrarVerFoto(event) {
    
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

function mostrarSideBar() {}*/
