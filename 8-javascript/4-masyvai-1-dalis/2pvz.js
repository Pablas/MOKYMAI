// basic jei noriu pakeisti kintamaji:
let mokykla = `KTU`;
let mokykla2 = `VDU`;
let mokykla3 = `KU`;
console.log(mokykla, mokykla2, mokykla3)

//pakeitimas:
mokykla2 = `VU`;
console.log(mokykla, mokykla2, mokykla3)

console.log(`==============================`)

//pakeitimas su masyvu:
let mokyklos = [`KTU`, `VDU`, `KU`];

console.log(mokyklos)
//specifiskai viena pasiimti, reikia prideti indeksa:
console.log(mokyklos[0], mokyklos[1], mokyklos[2])

//pakeiciu 2 irasa (1, nes pirmas masyvas yra 0):
mokyklos[1] = `VU`;

console.log(mokyklos)