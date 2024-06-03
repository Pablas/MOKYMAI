function isvedimas(vardas, pavarde, amzius, mokykla){ // i funkcija isidedam 4 argumentus (atskiriami kableliu)
    console.log(`Studentas ${vardas} ${pavarde} mokosi ${mokykla} ir jam yra ${amzius} metu.`) //juos pritaikom prie teksto (//kodo)
}

isvedimas(`Ona`, `Onute`, 25, `Kauno kolegija`) //iskvieciant sia funkcija, eiles tvarka nurodomi visi argumentai kurie turi butu pakeisti fukcijoje ir issiveda juos pakeiciant.

//////////////////// !!!!
isvedimas(`KTU`, `Ona`, `Birutiene`, 20) // BLOGAS PVZ, ne ten kur reikia isistate argumentai!!!!
//////////////////// !!!!


// galima ir is kintamuju kviesti, idedant juos:
let vard = `Jonas`;
let pav = `Pavardutis`;
let amz = 25;
let mok = `VDU`
isvedimas(vard, pav, amz, mok) // issiveda nes paima is kintamuju reiksmes ir ideda i funkcija.