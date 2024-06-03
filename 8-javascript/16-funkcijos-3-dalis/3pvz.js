function maxSkaicius (skaiciuMasyvas) {
    let maxSk = skaiciuMasyvas[0];

    for (const x of skaiciuMasyvas) {
        if (x > maxSk){
            maxSk = x;
        }
    }

    console.log(`RASTAS MAX SKAICIUS:`, maxSk)
}

function minSkaicius (skaiciuMasyvas){
    let minSk = skaiciuMasyvas[0];

    for (const x of skaiciuMasyvas) {
        if (x < minSk){
            minSk = x;
        }
    }

    console.log(`RASTAS MIN SKAICIUS:`, minSk)
}

let pirmi = [2, 3, 4, 6, 7, 6]
let antri = [45, 6, 78, 4]

console.log(`PIRMI SKAICIAI`)
console.log(pirmi)
maxSkaicius(pirmi)
minSkaicius(pirmi)


console.log(`ANTRI SKAICIAI`)
console.log(antri)
maxSkaicius(antri)
minSkaicius(antri)