const q = (element) => document.querySelector(element)
const qAll = (element) => document.querySelectorAll(element)

// ideia: Função pegar o key-event e usar ele para o nome do elemento que colocará o evento remove/add d-none

function removerDNone(event) {

    q(`#${event.target.dataset.key}`).classList.remove('d-none')

}

function addDNone(event) {

    q(`#${event.target.dataset.key}`).classList.add('d-none')

}
function expandirPrato(event) {
    q('#ceviche-expandido').classList.remove('d-none')
}

function mudarImg() {}
