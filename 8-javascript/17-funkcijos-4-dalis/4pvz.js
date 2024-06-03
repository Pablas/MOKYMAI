function isvedimas(sk1, sk2) {
    console.log(`Skaičiai ${sk1} ir ${sk2}`)
    console.log(`${sk1} + ${sk2} = ${suma(sk1, sk2)}`);
    console.log(`${sk1} - ${sk2} = ${skirtumas(sk1, sk2)}`);
    console.log(`------`)
}

function suma(sk1, sk2){
    return sk1 + sk2;
}

function  skirtumas(sk1, sk2){
    return sk1 - sk2;
}

isvedimas(8, 6)
isvedimas(102, 14)
isvedimas(516, 434)
isvedimas(10, 5)
