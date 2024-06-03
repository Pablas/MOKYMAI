function isvedimas(masyvas){
    console.log(`MASYVO DUOMENYS`);
    console.log(masyvas.join(`, `));
}

function suma(skaiciuMasyvas){
    let sum = 0;
    for (const x of skaiciuMasyvas) {
        sum += x;
    }
    console.log(`SUMA:`, sum)
}

// skaiciai yra masyvas ir ji idedam i function
let skaiciai1 = [1, 2, 3, 4, 5, 6]
let skaiciai2 = [9, 8, 5, 6, 5, 7]

isvedimas(skaiciai1);
suma(skaiciai1)

isvedimas(skaiciai2);
suma(skaiciai2)