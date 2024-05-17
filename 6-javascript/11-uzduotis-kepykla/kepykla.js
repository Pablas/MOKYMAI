// Suskaičiuoti kiek duonos kepalų kepykla sugebės iškepti per dieną, ar spės įgyvendinti visus dienos užsakymus ir
// suskaičiuoti kiek iš jų uždirbs pelno.

let darboDiena = 8;
let kepaluPerVal = 20;
let darbuotojas = 5;
let savikaina = 0.5;
let kaina = 2;
let uzsakymas = 130;


// 1. Suskaičiuoti kiek kepykla per vieną darbo dieną spės iškepti duonos kepalų.

let kepalaiPerDiena = darboDiena * kepaluPerVal;

console.log(`1. Per vieną darbo dieną, kepykla iškeps: ${darboDiena * kepaluPerVal} duonos kepalų.`)

//
console.log(`2:`)
// 2. Apskaičiuoti visų kepalų savikainą, gautas pajamas pardavus ir iš to gauto pelno dalį.

if (kepalaiPerDiena * savikaina){
    console.log(`Per dieną išleidžiama ant kepalų: ${kepalaiPerDiena * savikaina} eur`)
}

if (kepalaiPerDiena * kaina) {
    console.log(`Per dieną, gaunama pajamų: ${kepalaiPerDiena * kaina} eur`)
}

if ((kepalaiPerDiena * kaina) - (kepalaiPerDiena * savikaina)){
    console.log(`Per dieną gaunamas pelnas: ${(kepalaiPerDiena * kaina) - (kepalaiPerDiena * savikaina)} eur`)
}

//
console.log(`3:`)
//3. Patikrinti ar kepykla spės iškepti visus tos dienos užsakymus. Jei ne, suskaičiuoti kiek kepalų nespės iškepti.

if (uzsakymas <= kepalaiPerDiena){
    console.log(`Kepykla spės iškepti užsakymą.`)
} else if (uzsakymas > kepalaiPerDiena){
    console.log(`Kepykla nespės iškepti užsakymo. Nespės iškepti: ${uzsakymas - kepalaiPerDiena} kepalų.`)
}

//4. (Papildomai) Įvertinkite tai, kad pajamas ir pelną galite gauti tik iš parduotų kepalų.

let parduotaKepalu = 67;

if (parduotaKepalu <= 0){
    console.log(`Kepalų neparduota, nuostolis: ${kepalaiPerDiena * savikaina} eur`)
} else if ((parduotaKepalu * kaina) - (parduotaKepalu * savikaina)){
    console.log(`Parduota kepalų: ${parduotaKepalu}. 
    Pelnas: ${(parduotaKepalu * kaina) - (parduotaKepalu * savikaina)}`)
}
