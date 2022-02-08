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


function ativarIcone(event) {

    switch(event.target.classList[0]) {
        case '1':
            event.target.setAttribute('src', 'assets/icone-fb-active.svg')
            break
        case '2':
            event.target.setAttribute('src', 'assets/icone-ig-active.svg')
            break
        case '3':
            event.target.setAttribute('src', 'assets/icone-tt-active.svg')
            break
        case '4':
            event.target.setAttribute('src', 'assets/icone-in-active.svg')
            break
        case '5':
            event.target.setAttribute('src', 'assets/icone-pin-active.svg')
            break
        case 'seis':
            q('.seis img').setAttribute('src', 'assets/icone-cozinha-active.svg')
            break
        case 'sete':
            q('.sete img').setAttribute('src', 'assets/icone-patisserie-active.svg')
            break
        case 'oito':
            q('.oito img').setAttribute('src', 'assets/icone-drinks-active.svg')
            break
    }
}

function desativarIcone(event) {

    switch(event.target.classList[0]) {
        case '1':
            event.target.setAttribute('src', 'assets/icone-fb.svg')
            break
        case '2':
            event.target.setAttribute('src', 'assets/icone-ig.svg')
            break
        case '3':
            event.target.setAttribute('src', 'assets/icone-tt.svg')
            break
        case '4':
            event.target.setAttribute('src', 'assets/icone-in.svg')
            break
        case '5':
            event.target.setAttribute('src', 'assets/icone-pin.svg')
            break

        case 'seis':
        case 'sete':
        case 'oito':

            if (!q(`div.option.${event.target.classList[0]}.active`)) {

                switch(event.target.classList[0]) {
                    case 'seis':
                        q('.seis img').setAttribute('src', 'assets/icone-cozinha.svg')
                        break
                    case 'sete':
                        q('.sete img').setAttribute('src', 'assets/icone-patisserie.svg')
                        break
                    case 'oito':
                        q('.oito img').setAttribute('src', 'assets/icone-drinks.svg')
                        break
                }

            }
            break
    }

    // se tiver com a classe active, essa função não funciona

}

function ativarDiv(event) {   
    
    let urlImagem = q('.active img').getAttribute('src')
    urlImagem = urlImagem.replace('-active', '')

    q('.active img').setAttribute('src', urlImagem)
    q('.active').classList.remove('active')

    if (event.target.id) {
        event.target.classList.add('active')
    } else {
        event.target.parentElement.classList.add('active')
    }

    ativarIcone(event)
}
