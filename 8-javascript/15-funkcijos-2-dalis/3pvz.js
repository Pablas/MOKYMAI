function suma(a, b){
    console.log(`--------------`)
    console.log(`${a} + ${b} = ${a + b}`)
    console.log(`--------------`)
}

function skirtumas(a, b){
    console.log(`--------------`)
    console.log(`${a} - ${b} = ${a - b}`)
    console.log(`--------------`)
}

//atlieka veiksmus, pakeiciant a, b funkcijoje
suma(9, 10)
suma(4, 9)

skirtumas(10, 2)


//kintamuosius pritaikant prie argumentu:
let sk1 = 99;
let sk2 = 20;

suma(sk1, sk2)
skirtumas(sk1, sk2)