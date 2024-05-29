let vardai = [`Jonas`, `Petras`, `Antanas`, `Kazimieras`, `Povilas`, `Aukse`, `Tomas`, `Gintare`]

console.log(vardai)

for (const vardas of vardai) {
    console.log(`-`, vardas)
}

console.log(vardai.slice())

console.log(vardai.slice(0, 3))

console.log(vardai.slice(0, 3))

console.log(vardai.slice(2, 5)) //nuo Antanas iki Povilas (nors Povilas 4 index, antras sk nusako nuo kurio pradeti neberodyt)

console.log(vardai.slice(3)) // nurodyta tik pradzia, tai isves tik  nuo 3 index vardus (duomenis)

console.log(vardai.slice(-5)) // -minusas eina nuo galo, kiek elementu (ne nuo 0, o nuo 1 is galo eina)

console.log(vardai.slice(0, 5)) // pirmi penki, reikia nurodyt starta iki kur (index), reikes duomenu

for (const v of vardai.slice(3, 6)) {
    console.log(`nuo 3 iki 6`, v)
}   

for (const v of vardai.slice(0, 5)) {
    console.log(`nuo 1 - 5:`, v)
}