// 1. RASTI ILGIAUSIA ZODI FUNKCIJA:
function ilgiausiasZodis(masyvas) {
    let ilgiausias = ``;
    for (const x of masyvas) {
        if (x.length > ilgiausias.length){
            ilgiausias = x;
        }
    }
    return ilgiausias; // grazinam ilgiausia atrasta zodi, kaip funkcijos isvesta reiksme
}

// 2. FUNKCIJA NURODANT KOKS TAI ŽODIS IR IŠ KUR IMAMAS BUVO:
function patikrinimai(zodziai, ilgiausias){
    console.log(`Tarp kurių žodžių ieškojo:`, zodziai.join(`, `))
    console.log(`Ilgiausias žodis:`, ilgiausias);
    console.log(`Simbolių kiekis:`, ilgiausias.length)
}

let zodziai = [`obelis`, `oras`, `sernas`, `lapes`, `katinas`]

// iskvieciam 2. funkcija, kuri parodys viska:
patikrinimai(zodziai, ilgiausiasZodis(zodziai))

//////////////////////////////////////
//////////////////////////////////////
// NEBEREIKIA KARTOTI, NES TAS FUNKCIJAS GALI IR PRITAIKYTI KITIEMS:
let temos = [`kintamieji`, `salyga if`, `ciklas for`, `funkcijos`]
// tik isideti reikia is kur mes norime tai rasti:
patikrinimai(temos, ilgiausiasZodis(temos))





