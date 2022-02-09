const q = (element) => document.querySelector(element)
const qAll = (element) => document.querySelectorAll(element)
let contador = 0;
const receitas = [
    {   
        url: 'assets/img-prato-sanduiche.png' ,
        adicionado: 'Adicionado ontem',
        nome: 'Sanduíche de tomate com salada de ovos',
        dificuldade: 'Fácil',
        estrelas: 2
    },
    {
        url: 'assets/img-prato-iogurte.png',
        adicionado: 'Adicionado há 2 dias',
        nome: 'Iogurte de fruta crocante',
        dificuldade: 'Difícil',
        estrelas: 4
    }
]


function trocarReceita(event) {

    if (event.target.classList.contains('next')) {

        if (contador >= receitas.length - 1) {
            contador = 0
        } else {
            contador++
        }

    } else {

        if (contador <= 0) {
            contador = receitas.length - 1
        } else {
            contador--
        }
    
    }

    mostrarReceita()

}

function mostrarReceita() {

    q('div.receitas div#prato-receita img').setAttribute('src', receitas[contador].url)
    q('div.receitas div.textos p.data-add').innerHTML = receitas[contador].adicionado
    q('div.receitas div.textos h3.nome').innerHTML = receitas[contador].nome
    q('div.receitas div.textos p.diff').innerHTML = receitas[contador].dificuldade

    qAll('div.estrelas-container div.estrelas img').forEach(img => img.style.opacity = '.1')

    for (let i = 1; i <= receitas[contador].estrelas; i++) {

        q(`div.estrelas-container div.estrelas img:nth-child(${i})`).style.opacity = '1'
    
    }

}

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



// API

const mostrarUser = async() => {
    
    const dadosJSON = await fetch('https://randomuser.me/api/')
    const dados = await dadosJSON.json()

    q('header div.main-header div.textos h1 span').innerHTML = `${dados.results[0].name.first} ${dados.results[0].name.last}`
    q('div#sidebar div.profile div.nome p').innerHTML = `${dados.results[0].name.first} ${dados.results[0].name.last}`
    q('div#sidebar div.profile div.email p').innerHTML = dados.results[0].email
    q('div#sidebar div.profile div.telefone p').innerHTML = dados.results[0].phone

    q('header nav ul li#perfil p').innerHTML = dados.results[0].name.first

    switch(dados.results[0].gender) {
        case 'male':
            qAll('img[alt="Ícone avatar"]').forEach(img => img.setAttribute('src', 'assets/avatar_masculino.svg'))
            break
        case 'female':
            qAll('img[alt="Ícone avatar"]').forEach(img => img.setAttribute('src', 'assets/avatar_feminino.svg'))
            break
    }

}

mostrarUser()
