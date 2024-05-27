//basic metodu:
let pazymys1 = 10;
let pazymys2 = 9;
let pazymys3 = 8;
let pazymys4 = 9;
let pazymys5 = 9;

console.log(`turimi pazymiai:`, pazymys1, pazymys2, pazymys3, pazymys4, pazymys5);

let vidurkis = (pazymys1 + pazymys2 + pazymys3 + pazymys4 + pazymys5) / 5;

console.log (`pazymiu vidurkis:`, vidurkis);

console.log(`====================================`)

//masyvu metodu:
let pazymiai = [10, 9, 8, 9, 9];

console.log(`turimi pazymiai:`, pazymiai);
console.log(`turime pazymiu (su lenght):`, pazymiai.length, `vnt.`);

let suma = 0;

for (let i = 0; i < pazymiai.length; i++){
    suma += pazymiai[i]; //ima pazymiai indeksus nuo 0 (kiek yra pazymiai.lenght pazimiu) ir is eiles visus ima ir suma+= prideda visus.
}

vidurkis = suma / pazymiai.length;

console.log(`siu pazymiu vidurkis:`, vidurkis);