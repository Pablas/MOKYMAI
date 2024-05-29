let gyvunai = [`Žirafa`, `Avelė`, `Bebras`, `Liūtas`, `Tigras`];

console.log(`ar masyve yra "Liūtas":`, gyvunai.includes(`Liūtas`)) //true

console.log(`ar masyve yra "Bebras":`, gyvunai.includes(`Bebras`)) //true

console.log(`ar masyve yra "Strutis":`, gyvunai.includes(`Strutis`)) //false

console.log(`jei mazosios raides:`, gyvunai.includes(`liūtas`)) //false

if (gyvunai.includes(`Bebras`)){
    console.log(`Bebras yra įrašytas`)
} else {
    console.log(`Bebro nėra įrašuose`)
}

/////////////////////////

let ieskau = `liūtas`;
let arRadau = false;

for (const gyvunas of gyvunai) {
    if (gyvunas.toLowerCase() == ieskau.toLowerCase()){
        arRadau = true;
        break;
    }
}

console.log(`ar radau pavertes viska mazosiom:`, arRadau)

////////////////////////

let ieskau2 = `bebras   `;/// su tarpu
ieskau2 = ieskau2.trim().toLowerCase(); //nukarpo is abieju pusiu
let arRadau2 = false;

for (const gyvunas of gyvunai) {
    if (gyvunas.toLowerCase() == ieskau2){
        arRadau2 = true;
        break;
    }
}

console.log(`ar radau su tarpais ivesta teksta:`, arRadau2)

///////////////////////