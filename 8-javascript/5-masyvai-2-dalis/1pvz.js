let miestai = [
    `Kaunas`,
    `Klaipeda`,
    `Vilnius`,
    `Kretinga`,
    `Siauliai`
];

// console.log(miestai)
// console.log(miestai[0])
// console.log(miestai[1])

for (let i = 0; i < miestai.length; i++){
    console.log(miestai[i])
}

console.log(`-----------------------`)

for (let kelintas = 0; kelintas < miestai.length; kelintas++){
    console.log(`Miestas:`, miestai[kelintas])
}

console.log(`-----------------------`)

for (let sk = 0; sk < miestai.length; sk++){
    console.log(`${sk + 1}-asis miestas yra ${miestai[sk]}.`)
}

console.log(`-----------------------`)

for (let i = 0; i < miestai.length; i++){
    const miestas = miestai[i];
    console.log(i + 1, `-as miestas`, miestas)
}