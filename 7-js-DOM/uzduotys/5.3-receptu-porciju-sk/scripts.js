let vistiena = document.querySelector(`.pirmas`)
let tortas = document.querySelector(`.antras`)
let makaronai = document.querySelector(`.trecias`)
let checkmark = document.querySelector(`.icon`)
let atsakymas = document.querySelector(`.ats`)


vistiena.addEventListener(`click`, () => {

    // vistiena:
    let vistienaKrutinele = 400;
    let vistienaSalotu = 50;
    let vistienaPomidoru = 1;
    let vistienaAgurku = 3;
    let vistienaDruskos = 5;

    checkmark.classList.toggle(`icon1`)
    //remove:
    checkmark.classList.remove(`icon2`)
    checkmark.classList.remove(`icon3`)
    atsakymas.innerHTML = ``



    //jeigu icon1 aktyvus tai:
    if (checkmark.classList.contains(`icon1`)) {
        document.getElementById(`inputas`).disabled = false;


        document.querySelector(`input`).addEventListener(`click`, () => {
            let porciju = document.querySelector(`input`).valueAsNumber

            atsakymas.innerHTML = ``
            atsakymas.innerHTML += `Vištienos krutinėlių: <strong>${vistienaKrutinele * porciju} gramų</strong>
        <br>
        Salotų lapų: <strong>${vistienaSalotu * porciju} gramų</strong>
        <br>
        Pomidorų (slyvinių): <strong>${vistienaPomidoru * porciju} vnt.</strong>
        <br>
        Agurkų (trumpavaisių): <strong>${vistienaAgurku * porciju} vnt.</strong>
        <br>
        Druskos: <strong>${vistienaDruskos * porciju} gramų</strong>`
        })
    } else {
        document.getElementById(`inputas`).disabled = true;
        atsakymas.innerHTML = ``
    }
})

tortas.addEventListener(`click`, () => {

    // tortas:
    let tortasMiltai = 500;
    let tortasMelynes = 100;
    let tortasKiausiniai = 2;
    let tortasCukrus = 2;

    checkmark.classList.toggle(`icon2`)
    //remove:
    checkmark.classList.remove(`icon1`)
    checkmark.classList.remove(`icon3`)
    atsakymas.innerHTML = ``

    //jeigu icon2 aktyvus tai:
    if (checkmark.classList.contains(`icon2`)) {
        document.getElementById(`inputas`).disabled = false;


        document.querySelector(`input`).addEventListener(`click`, () => {
            let porciju = document.querySelector(`input`).valueAsNumber

            atsakymas.innerHTML = ``
            atsakymas.innerHTML += `Miltų: <strong>${tortasMiltai * porciju} gramų</strong>
        <br>
        Mėlynių: <strong>${tortasMelynes * porciju} gramų</strong>
        <br>
        Kiaušinių: <strong>${tortasKiausiniai * porciju} vnt.</strong>
        <br>
        Cukraus: <strong>${tortasCukrus * porciju} šaukšteliai</strong>
        <br>`
        })
    } else {
        document.getElementById(`inputas`).disabled = true;
        atsakymas.innerHTML = ``
    }
})

makaronai.addEventListener(`click`, () => {

    // makaronai:
    let makaronaiMakaronai = 500;
    let makaronaiFarsas = 380;
    let makaronaiKiausiniai = 1;
    let makaronaiKarioPrieskoniai = 20;
    let makaronaiSultinys = 2;
    let makaronaiGrietinele = 70;

    checkmark.classList.toggle(`icon3`)
    //remove:
    checkmark.classList.remove(`icon1`)
    checkmark.classList.remove(`icon2`)
    atsakymas.innerHTML = ``

    //jeigu icon2 aktyvus tai:
    if (checkmark.classList.contains(`icon3`)) {
        document.getElementById(`inputas`).disabled = false;


        document.querySelector(`input`).addEventListener(`click`, () => {
            let porciju = document.querySelector(`input`).valueAsNumber

            atsakymas.innerHTML = ``
            atsakymas.innerHTML += `Makaronų (pagal norą): <strong>${makaronaiMakaronai * porciju} gramų</strong>
        <br>
        Faršo (jautienos-kiaulienos): <strong>${makaronaiFarsas * porciju} gramų</strong>
        <br>
        Kiaušinių: <strong>${makaronaiKiausiniai * porciju} vnt.</strong>
        <br>
        Kario prieskoniai: <strong>${makaronaiKarioPrieskoniai * porciju} gramų</strong>
        <br>
        Sultinys: <strong>${makaronaiSultinys * porciju} kubeliai</strong>
        <br>
        Grietinėlė: <strong>${makaronaiGrietinele * porciju} ml</strong>
        <br>`
        })
    } else {
        document.getElementById(`inputas`).disabled = true;
        atsakymas.innerHTML = ``
    }
})


