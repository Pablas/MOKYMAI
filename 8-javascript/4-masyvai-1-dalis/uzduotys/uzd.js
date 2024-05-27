// 1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame masyve yra narių.
console.log(`1. =====`)

let marke = [`Audi`, `BMW`, `MB`, `Toyota`, `Lexus`]

console.log(`Pirmasis narys:`, marke[0]);
console.log(`Paskutinis narys:`, marke[marke.length - 1]);
console.log(`Iš vidurio:`, marke[2], marke[3]);
console.log(`Masyve yra narių:`, marke.length);


// 2. Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.
console.log(`2. =====`)

let skaiciai = [7, 8, 9, 1, 2, 3, 4, 5]

console.log(`Masyvo informacija:`, skaiciai);

skaiciai[skaiciai.length - 1] = 6;
skaiciai[skaiciai.length - 2] = 6;
skaiciai[skaiciai.length - 3] = 6;

console.log(`Su pakeistai paskutiniais 3 skaičiais:`, skaiciai);


// 3. Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.
console.log(`3. =====`)

let geles = [];

geles.push(`Rožė`);
geles.push(`Tulpė`);
geles.push(`Ramūnė`, `Frezija`)

console.log(geles)


// 4. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.
console.log(`4. =====`)

let pazymiai = []

pazymiai.push(Math.ceil(Math.random() * 10));
pazymiai.push(Math.ceil(Math.random() * 10));
pazymiai.push(Math.ceil(Math.random() * 10));
pazymiai.push(Math.ceil(Math.random() * 10));
pazymiai.push(Math.ceil(Math.random() * 10));

console.log(pazymiai)

// 5. Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.
console.log(`5. =====`)

let TomoPazymiai = []
let RobertoPazymiai = []

TomoPazymiai.push(Math.ceil(Math.random() * 10));
TomoPazymiai.push(Math.ceil(Math.random() * 10));
TomoPazymiai.push(Math.ceil(Math.random() * 10));
console.log(`Tomo pažymiai:`, TomoPazymiai)

RobertoPazymiai.push(Math.ceil(Math.random() * 10));
RobertoPazymiai.push(Math.ceil(Math.random() * 10));
RobertoPazymiai.push(Math.ceil(Math.random() * 10));
RobertoPazymiai.push(Math.ceil(Math.random() * 10));
console.log(`Roberto pažymiai:`, RobertoPazymiai)

console.log(`--- VIDURKIAI: ---`)

let TomoVidurkis = 0;
let RobertoVidurkis = 0;

for (i = 0; i < TomoPazymiai.length; i++){
    TomoVidurkis += TomoPazymiai[i];
}

console.log(`Tomo vidurkis yra:`, (TomoVidurkis / TomoPazymiai.length))


for (i = 0; i < RobertoPazymiai.length; i++){
    RobertoVidurkis += RobertoPazymiai[i];
}

console.log(`Roberto vidurkis yra`, (RobertoVidurkis / RobertoPazymiai.length))