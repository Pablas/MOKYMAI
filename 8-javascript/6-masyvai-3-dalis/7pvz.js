let lietuvosMiestai = [`Kaunas`, `Vilnius`, `Klaipeda`]
let svedijosMiestai = [`Stokholmas`, `Malmo`, `Gotenburgas`]

console.log(`LIETUVOS MIESTAI:`)

for (const miestas of lietuvosMiestai) {
    console.log(miestas)
}

console.log(`PIRMI DU LIETVOS MIESTAI:`)

for (let i = 0; i < 2; i++){
    console.log(lietuvosMiestai[i])
}

console.log(`PIRMI DU LIETVOS MIESTAI:`)

for (const miestas of lietuvosMiestai.slice(0, 2)) {
    console.log(miestas)
}

console.log(`PIRMI DU SVEDIJOS MIESTAI:`)

for (const miestas of svedijosMiestai.slice(0, 2)) {
    console.log(miestas)
}