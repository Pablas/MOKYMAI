for (let i = 0; i < 10; i++){
    console.log(i)
}

console.log(`================`)

for (let i = 0; i < 10; i += 2){
    console.log(i)
}

console.log(`================`)

for (let sk = 1; sk <= 10; sk += 2){
    console.log(sk)
}

console.log(`================`)

for (let sk = 1; sk <= 20; sk += 3){
    console.log(sk)
}

console.log(`================`)

let skaicius1 = 1;
let skaicius2 = 2;

for (skaicius1; skaicius1 <= skaicius2; skaicius1++){
    console.log(skaicius1)
}

console.log(`================`)

let isorinisSkaicius = 5;

for (let i = 0; i < 10; i++){
    console.log(i, i > isorinisSkaicius ? `didesnis` : `mazesnis`);
}