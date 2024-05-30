let skaiciai = [2, 3, 5, 6]


// FOR OF BASIC:
let suma = 0;

for (const sk of skaiciai) {
    suma += sk;
}

console.log(suma)

/////////////////////////////
// su .reduce funkcija:

let suma1 = skaiciai.reduce((dalineSuma, skaicius) => dalineSuma + skaicius)// daline suma pirmas skaicius masyve; // skaicius, tai paimta viena masyvo reiksme
console.log(suma1)


/////////////////////////////
// su .reduce funkcija tik kiti tinkamieji:

let suma2 = skaiciai.reduce((sum, sk) => sum + sk)
console.log(suma2)


/////////////////////////////
// su .reduce funkcija, nulis gale reiskia nurodo default reiksme nuo ko startuojam (vietoj "sum" pagal pavyzdi):

let suma3 = skaiciai.reduce((sum, sk) => sum + sk, 0)
console.log(suma3)