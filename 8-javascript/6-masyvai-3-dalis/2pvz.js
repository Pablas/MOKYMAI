let miestai = [`Vilnius`, `Kaunas`, `Klaipeda`, `Kretinga`]

console.log(miestai)

console.log(`=============`)

for (const miestas of miestai) {
    console.log(miestas)
}

console.log(`=============`)
// pasikeicia tik tuo isvedimo momentu ir nepersiraso
for (const miestas of miestai) {
    console.log(miestas.toUpperCase())
}

console.log(`=============`)

console.log(miestai)


// let vietoje const leidzia paeditinti miestai kintamaji:
for (let miestas of miestai) {
    miestas = miestas.toUpperCase()
    console.log(miestas)
}

console.log(`=============`)
//bet kad ir isvedimo metu pries tai su let leido ir pasikeite, is naujo jie nepersiraso:
console.log(miestai)

console.log(`=============`)
//for let pakeicia masyvu info:

for (let i = 0; i < miestai.length; i++){
    miestai[i] = miestai[i].toUpperCase()
}
console.log(miestai)