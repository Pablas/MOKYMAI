let pazymiai = []

for (let i = 0; i < 10; i++){
    pazymiai.push(Math.ceil(Math.random() * 10))
}

console.log(`Sugeneruoti pazymiai:`, pazymiai)

//atrinkimas

let neigiamiPazymiai = []
let teigiamiPazymiai = []

for (const pazymys of pazymiai) {
    if (pazymys < 5){
        neigiamiPazymiai.push(pazymys)
        console.log(`${pazymys} Pazymys neigiamas, iki teigiamo truksta:`, 5 - pazymys, `balo/-u`)
    } else {
        console.log(pazymys, `teigiamas`)
    }
}