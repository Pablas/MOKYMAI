let skaicius = 128;

if (skaicius % 2 == 0){
    console.log(skaicius, 'dalinasi is 2')
}

if (skaicius % 3 == 0){
    console.log(skaicius, 'dalinasi is 3')
}

if (skaicius % 4 == 0){
    console.log(skaicius, 'dalinasi is 4')
}

if (skaicius % 5 == 0){
    console.log(skaicius, 'dalinasi is 5')
}

console.log('-----------------')

if (skaicius % 2 == 0){
    console.log('skaiciaus maziausias daliklis 2')
} else if (skaicius % 3 == 0){
    console.log('skaiciaus maziausias daliklis 3')
} else if (skaicius % 4 == 0){
    console.log('skaiciaus maziausias daliklis 4')
} else {
    console.log('nesidalina is 4 ar maziau')
}
