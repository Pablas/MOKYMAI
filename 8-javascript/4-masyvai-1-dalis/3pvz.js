let salys = [
    `Lietuva`,
    `Latvija`,
    `Estija`,
    `Islandija`,
    `Norvegija`];

console.log(salys);
console.log(salys[3]);
console.log(salys[0], salys[3]);

salys[3] = `Italija`;

console.log(salys[3]);
console.log(salys);

salys[3] = `Vengrija`;

console.log(salys[3]);
console.log(salys);

console.log(`====== CIKLAS ======`)

console.log(`saliu kiekis:`, salys.length);


//prideda po viena, nes i++ ir skaiciai nuo 0 eina (as yra indekso pradzia) ir pasibaigia salys.lenght, nes tiek tik yra ir kadangi skaicius prisideda (i++) daugeja ir eina per visus indeksus:
for (i = 0; i < salys.length; i++){
    console.log(`indeksas:`, i, `Šalis:`, salys[i])
}