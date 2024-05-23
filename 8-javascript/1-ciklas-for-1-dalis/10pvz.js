for (let i = 1; i < 10; i++) {

    console.log(i);

    if (i % 7 == 0) {
        console.log(`Pasiekem riba`)
        break;
    }
}

console.log(`=============`)

// ar skaicius pirminis (dalinasi tik is saves ir vieno):

let skaicius = 9;
let arPirminis = true;

for (let daliklis = 2; daliklis < skaicius; daliklis++){
    // console.log(daliklis, skaicius % daliklis === 0 ? `dalinasi`: `nesidalina`)

    if (skaicius % daliklis === 0){
        arPirminis = false;
        break;
    }
}

console.log(skaicius, arPirminis ? `pirminis` : `nepirminis`)


console.log(`=============`)

let duomenys = [10, 9, 10, 8, null, 9, 10, 7];

for (let i = 0; i < duomenys.length; i++){
    if (typeof duomenys[i] != `number`){
        console.log(`Ne visi įrašai yra tvarkingi.`);
        break;
    } 
    console.log(duomenys[i]);
}

console.log(`=============`)


for (let i = 0; i < duomenys.length; i++){
    if (typeof duomenys[i] != `number`){
        console.log(`Praleidžiam klaidingą įrašą.`);
        continue; 
    } 
    console.log(duomenys[i]);
}