// atskirai sukti be funkcijos:
let skaicius1 = Math.ceil(Math.random() * 100);
let skaicius2 = Math.ceil(Math.random() * 100);
let skaicius3 = Math.ceil(Math.random() * 100);

console.log(skaicius1, skaicius2, skaicius3)

console.log(`---------------`)

//su funkcija pritaikant, efektyviau:
// RETURN ir reiksme kuri nusako ta funkcija, kuria duoda
function randomSkaicius(){
    let skaicius = Math.ceil(Math.random() * 100)
    return skaicius; // GRAZINA REIKSME skaicius, siai funkcijai.
}

// tas pats gaunasi, tik greiciau:
let sk1 = randomSkaicius()
let sk2 = randomSkaicius()
let sk3 = randomSkaicius()

console.log(sk1, sk2, sk3)
