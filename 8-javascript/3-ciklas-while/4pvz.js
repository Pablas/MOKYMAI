//išvedinėti random skaičius iki kol nepasitaikys kuris dalinasi is 3 ir 5:

let skaicius = 1;

while (!(skaicius % 3 == 0 && skaicius % 5 == 0)){
    skaicius = Math.floor(Math.random() * 100) + 1;
    console.log(skaicius)
}

console.log(`==========================`)

let skaicius2 = 15;

while (skaicius2 % 3 == 0 && skaicius2 % 5 == 0){
    skaicius2 = Math.floor(Math.random() * 100) + 1;
    console.log(skaicius2)
}

console.log(`==========================`)

while(true){
    let sk = Math.floor(Math.random() * 100) + 1;
    console.log(sk)

    if (sk % 3 == 0 && sk % 5 == 0){
        break;
    }
}