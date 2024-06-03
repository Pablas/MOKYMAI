function generuotiDuomenis(kiekSkaiciu, minSk, maxSk, masyvas){
    for (let x = 0; x < kiekSkaiciu; x++){
        let skaicius = Math.floor(Math.random() * (maxSk - minSk)) + minSk;
        masyvas.push(skaicius)
    }
}

function isvedimas(komentaras, masyvas){
    console.log(komentaras.toUpperCase() + ':')
    console.log(masyvas.join(`, `))
    console.log()
}

function suma(skaiciuMasyvas){
    let sum = 0;
    
    for (const sk of skaiciuMasyvas) {
        sum += sk;
    }

    console.log(`Suma:`, sum)
    console.log()
}

let sk1 = []
let sk2 = []

generuotiDuomenis(5, 1, 10, sk1);
generuotiDuomenis(7, 5, 15, sk2);

// console.log(sk1)
// console.log(sk2)

isvedimas(`Pirmi skaiciai`, sk1)
suma(sk1)

isvedimas(`Antri skaiciai`, sk2)
suma(sk2)