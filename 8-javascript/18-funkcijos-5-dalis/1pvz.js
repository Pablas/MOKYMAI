// SUMOS FUNKCIJA:
function sumosPaieska(skMasyvas){
    let suma = 0;
    for (let x = 0; x < skMasyvas; x++){
        suma += skMasyvas[x];
    }
    return suma; //funkcija duos sumos atsakyma, vienas scenarijus, ka grazins
}

let skaiciai = [10, 2, 4, 5, 1, 6]
let suma = sumosPaieska(skaiciai);
console.log(`Skaiciu:`, skaiciai, `suma:`, suma)