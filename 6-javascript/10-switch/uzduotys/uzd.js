//1. Susikurkite kintamąjį pasirinkimui saugoti, į jį įrašykite norimą reikšmę. Tikrinkite:

let pasirinkimas = 4;

switch (pasirinkimas){
    case 1:
        console.log(`Laimejote vandens!`)
    break;
    case 2:
        console.log(`Laimejote limonado!`)
    break;
    case 3:
        console.log(`Laimejote arbatos!`)
    break;
    case 4:
        console.log(`Laimejote kavos!`)
    break;
    default:
        console.log(`Atsitiko klaida, nezinomas laimejimas.`)
    break;
}

//2. Susikurkite kintamuosius trims skaičiams saugoti ir priskirkite jiems reiškmes. Tikrinkite pirmą skaičių:

let sk1 = 2;
let sk2 = 8;
let sk3 = -10;

switch(sk1){
    case 1:
        console.log(`Skaicius lygus vienam, stai visu 3 skaiciu suma: ${sk1 + sk2 + sk3}`)
    break;
    case 2:
        console.log(`Skaicius lygus dviems, stai 2 ir 3 skaiciaus sandauga: ${sk2 * sk3}`)
    break;
    case 3:
        console.log(`Skaicius lygus trims, stai 1 skaiciaus kvadratas: ${sk1 ** 2}`)
    break;
    default:
        console.log(`Klaida, neimanoma parodyti atsakymo.`)
    break;
}

//3. Susikurkite kintamąjį klaidos kodui saugoti, jam priskirkite kokį nors klaidos kodą. Tikrinkite koks tai klaidos kodas
//(bent 3 skirtingus variantus), ties kiekvienu jų išveskite skirtingą tekstą, nurodantį, kad bus atliekami skirtingi veiksmai.

let klaida = 404;

switch(klaida){
    case 302:
        console.log(`Klaida - neivestas skaicius`)
    break;
    case 404:
        console.log(`Klaida - toks puslapis neegzistuoja`)
    break;
    case 78:
        console.log(`Klaida - kazkas neveikia tinkamai`)
    break;
    default:
        console.log(`Nezinoma klaida`)
    break;
}
