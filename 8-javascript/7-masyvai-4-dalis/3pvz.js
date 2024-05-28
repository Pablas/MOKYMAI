let vardai = [`Paulius`, `Gintare`, `Ugnius`, `Ona`]
let kopija = vardai;

vardai[0] = `Petras`;
kopija[1] = `Giedre`;

console.log(vardai)
console.log(kopija)

console.log(`================`)

let zmogus1 = `Petras`;
let zmogus2 = zmogus1;

zmogus1 = `Jonas`;

console.log(zmogus1, zmogus2)