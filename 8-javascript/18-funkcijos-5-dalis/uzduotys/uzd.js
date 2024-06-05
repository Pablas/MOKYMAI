// 1 Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.
console.log(`1. ================`)

function skaiciuSuma(skMasyvas){
    suma = 0;
    for (const sk of skMasyvas) {
        suma += sk;
    }
    return suma;
}

function DidSuma(sk1, sk2){
    if (sk1 > sk2){
        console.log(`Skaičius:`, sk1, `yra didesnis!`)
    } else if (sk2 > sk1){
        console.log(`Skaičius:`, sk2, `yra didesnis!`)
    } else {
        console.log(`Abu skaičiai lygūs!`)
    }
}

let sk1 = [1, 2, 3, 4, 5]
let sk2 = [4, 5, 6, 7, 8]

//sumos:
console.log(`Skaičių:`, sk1.join(`, `), `suma:`, skaiciuSuma(sk1))
console.log(`Skaičių:`, sk2.join(`, `), `suma:`, skaiciuSuma(sk2))
//kuris didesnis:
DidSuma(skaiciuSuma(sk1), skaiciuSuma(sk2))


// 2 Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą. Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip pat, nurodykite šio žodžio ilgį.
console.log(`2. ================`)

function ilgiausiasZd(zdzMasyvas){
    ilgiausiasZodis = ``;
    for (const zd of zdzMasyvas) {
        if (zd.length > ilgiausiasZodis.length){
            ilgiausiasZodis = zd;
        }
    }
    return ilgiausiasZodis;
}

let zodziai = [`Uoga`,`Kaktusas` , `Sapnas`, `Šuo`]

console.log(`Iš žodžių:`, zodziai.join(`, `), `. Ilgiausias žodis yra:`, ilgiausiasZd(zodziai), `turintis:`, ilgiausiasZd(zodziai).length, `raides.`)


// 3 Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. Ji turėtų patikrinti ar visi pažymiai teigiami: jei visi teigiami turėtų grąžintų true kaip atsakymą, o jei yra bent vienas neigiamas - false. Susikurkite du pažymių masyvus. Iškvieskite šią funkciją du kartus, abu kartus perduodant skirtingus masyvus. Gautus atsakymus paverskite į tekstą (jeigu gavote true - išveskite tekstą 'visi studento pažymiai teigiami', jei false - 'studentas turi bent vieną neigiamą pažymį'). Šiam iškonvertavimui iš true/false į tekstą galite pamėginti pasikurti atskirą funkciją, jai perduoti kitos funkcijos atsakymą.
console.log(`3. ================`)

function patikra(pazymiai){
    return pazymiai.every(paz => paz > 4);
}

function ArVisiTeigiami(ats){
    if (ats === true){
        console.log(`Visi pažymiai teigiami.`)
    } else {
        console.log(`Yra neigiamų pažymių.`)
    }
}

let paz1 = [10, 5, 6, 8, 9]
let paz2 = [5, 7, 5, 2, 8]


ArVisiTeigiami(patikra(paz1))
ArVisiTeigiami(patikra(paz2))
