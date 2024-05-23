for (let skaicius = 1; skaicius <= 10; skaicius++){
    if (skaicius % 2 === 0){
        console.log(`Skaičius`, skaicius, `yra lyginis.`)
    }
}

console.log(`===============`)

for (let skaicius = 1; skaicius <= 10; skaicius++){
    if (skaicius % 2 === 0){
        console.log(`Skaičius`, skaicius, `lyginis.`)
    } else {
        console.log(`Skaičius`, skaicius, `nelyginis.`)
    }
}

console.log(`===============`)

for (let skaicius = 2; skaicius <= 10; skaicius += 2){
    console.log(skaicius, `lyginis`)
}