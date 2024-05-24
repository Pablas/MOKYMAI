console.log(Math.random()); // [0 - 9]
console.log((Math.random() * 10) + 1) //[ 1 - 10]

console.log((Math.random() * 10) + 5) //[ 5 - 14]
//min yra 5 max yra 10 + 5 = 15 (bet max nepatenka)

console.log((Math.random() * 20) + 6) // [6 - 25]




//suapvalina, ismeta per kabli:
console.log(Math.floor(1.9))
//suapvalina, padidina kad ir kiek po kablelio:
console.log(Math.ceil(1.00001))


//sujungus:
console.log(Math.floor((Math.random() * 10) + 5))



console.log(`===========================`)



let sandelys = 30;

console.log(`pradžia:`, sandelys)

let nupirko = Math.floor((Math.random() * 10) + 1);
console.log(`pirkimas`, nupirko)

sandelys -= nupirko;

console.log(`likutis:`, sandelys)

console.log(`== dar vienas pirkimas:`)

nupirko = Math.floor((Math.random() * 10) + 1);
console.log(`pirkimas`, nupirko)

sandelys -= nupirko;

console.log(`likutis:`, sandelys)


console.log(`===========================`)


let obuoliai = 80;

while (obuoliai > 0) {

    let pirkimas = Math.ceil(Math.random() * 80);

    console.log(`is ${obuoliai} nupirko ${pirkimas} obuolių, ir liko ${obuoliai - pirkimas}`)

    obuoliai -= pirkimas;
}


console.log(`===========================`)


let pomidorai = 30;

while (pomidorai > 0) {

    let pirkimas = Math.ceil(Math.random() * 30);

    if (pirkimas > pomidorai) {

        console.log(`Per daug norite pirkti`);

    } else {
        console.log(`is ${pomidorai} nupirko ${pirkimas} pomidorų, ir liko ${pomidorai - pirkimas}`)

        pomidorai -= pirkimas;
    }
}

console.log(`===========================`)


let dviraciai = 39;

while (dviraciai > 0) {

    // jeigu dviraciu turiu daugiau nei 10, tada leidizu pirkti iki 10vnt vienu metu
    // taciau jeigu dviraciu turiu 10 ar maziau, tada leidziu pirkti tiek kiek turiu:

    let limitas = dviraciai <= 10 ? dviraciai : 10;
    let pirkimas = Math.floor(Math.random() * limitas) + 1;

    console.log(`is ${dviraciai} nupirko ${pirkimas} dviračių, ir liko ${dviraciai - pirkimas}`)
    dviraciai -= pirkimas;
}