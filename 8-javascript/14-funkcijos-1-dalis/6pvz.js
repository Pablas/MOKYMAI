// Dvi random funkcijos:
function pasisveikinti(){
    console.log(`Sveiki`)
}

function duSkaiciai() {
    let pirmas = Math.ceil(Math.random() * 10)
    let antras = Math.ceil(Math.random() * 10)
    console.log(pirmas, antras)
}

// Jas idedame i kitos funkcijos vidu:
function pagrindine() {
    console.log(`---------`)
    console.log(`Pagrindines pradzia`)

    pasisveikinti();

    duSkaiciai();

    console.log(`Pagrindines pabaiga`)
    console.log(`---------`)
}

// Iskvieciame viena, bet kadangi kitos dvi buvo jos viduje, issikviecia visos:
pagrindine()