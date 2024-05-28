let skaiciai = [6, 7, 8, 88, 23, 3, 5]

for (const skaicius of skaiciai) {
    console.log(skaicius)
}

console.log(`=============`)

for (const sk of skaiciai) {
    if (sk <= 5){
        console.log(sk)
    }    
}

console.log(`=============`)

// su for paprastu ciklu, sunkiau vyksta:
for (let i = 0; i < skaiciai.length; i++){
    if (skaiciai[i] <= 5){
        console.log(skaiciai[i])
    }
}

console.log(`=============`)

for (const sk of skaiciai) {
    if (sk % 2 == 0){
        console.log(sk, `yra lyginis`)
    } else {
        console.log(sk, `yra nelyginis`)
    }
}

console.log(`=============`)

let suma = 0;

for (const sk of skaiciai) {
    suma+= sk;
}

console.log(`visu skaiciu suma:`, suma)