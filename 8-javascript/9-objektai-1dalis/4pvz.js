let studentas = {
    vardas: `Jonas`,
    pavarde: `Jonaitis`,
    pazymiai: [10, 8, 4, 5, 7],
    mokosi: {
        mokykla: `VDU`,
        kursas: 2
    }
}

console.log(studentas)

console.log(`vardas:`, studentas.vardas)
console.log(`pavarde:`, studentas.pavarde)
console.log(`pazymiai:`, studentas.pazymiai)

for (const pazymys of studentas.pazymiai) {
    console.log(`pazymys:`, pazymys)
}

console.log(`pazymiu kiekis:`, studentas.pazymiai.length)

///gali ir imti per bracket notation:

console.log(`pavarde:`, studentas[`pavarde`])
console.log(`antras pazymys:`, studentas[`pazymiai`][1])