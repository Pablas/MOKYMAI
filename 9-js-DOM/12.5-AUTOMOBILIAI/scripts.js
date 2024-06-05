//===========================
//PRADINIAI DUOMENYS
//======================================

let automobiliai = [
    {
        id: 1,
        marke: `Audi`,
        modelis: `A4`,
        metai: 2005,
        kaina: 3000,
        rida: 200000,
    },
    {
        id: 2,
        marke: `BMW`,
        modelis: `320`,
        metai: 2007,
        kaina: 3500,
        rida: 230000,
    },
    {
        id: 3,
        marke: `VW`,
        modelis: `Passat`,
        metai: 2008,
        kaina: 3500,
        rida: 230000,
    },
    {
        id: 4,
        marke: `Opel`,
        modelis: `Astra`,
        metai: 2006,
        kaina: 2500,
        rida: 180000,
    },
    {
        id: 5,
        marke: `Toyota`,
        modelis: `Corolla`,
        metai: 2004,
        kaina: 2000,
        rida: 220000,
    },
    {
        id: 6,
        marke: `Toyota`,
        modelis: `Avensis`,
        metai: 2009,
        kaina: 5000,
        rida: 150000,
    },
    {
        id: 7,
        marke: `Audi`,
        modelis: `A6`,
        metai: 2008,
        kaina: 6000,
        rida: 180000,
    },
]

let filtravimoFraze = ``;
let rikiavimoBudas = ``;

//===========================
//DUOMENU SPAUSDINIMAS HTML PUSLAPYJE
//======================================

function automobiliuSpausdinimas() {
    let htmlBlokas = document.querySelector(`.automobiliu-blokas`);
    htmlBlokas.innerHTML = ``;

    //atrinkami tinkami automobiliai pries spausdinant [AUTOMOBILIU FILTRAVIMAS]:
    let atrinkti = automobiliai.filter(auto => (auto.marke + ` ` + auto.modelis).toLowerCase().includes(filtravimoFraze.toLowerCase()));

    //rikiavimas pagal pasirinkta buda:


    //ir spausdinam tik antrinktus:
    for (const automobilis of atrinkti) {
        htmlBlokas.innerHTML += `
        <div class="automobilis">
            <h3>${automobilis.marke} ${automobilis.modelis}</h3>
            <p><strong>Metai: </strong>${automobilis.metai}</p>
            <p><strong>Kaina: </strong>${automobilis.kaina} eur</p>
            <p><strong>Rida: </strong>${automobilis.rida}</p>
        </div>`
    }
}

//===========================
//AUTOMOBILIU FILTRAVIMAS
//===========================

document.getElementById(`pavadinimasInput`).addEventListener(`input`, (event) => {
    // console.log(event)
    filtravimoFraze = event.target.value; //gaunam reiksme is input laukelio
    automobiliuSpausdinimas(); //kvieciam spausinima is jo
})

//===========================
//AUTOMOBILIU RIKIAVIMAS
//===========================

document.getElementById(`rikiavimasInput`).addEventListener(`change`, (e) => {
    rikiavimoBudas = e.target.value; // gauna reiksme is select laukelio
    automobiliuSpausdinimas() //kvieciam is naujo

})

function automobiliuRikiavimas(){
    //#9 vide neuzbaigta det
}


//===========================
//PRADINIS SPAUSDINIMAS
//===========================

//gale laikomas, nes tai viksta po visu kitu funkciju:
automobiliuSpausdinimas()

