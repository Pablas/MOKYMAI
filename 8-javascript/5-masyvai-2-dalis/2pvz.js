let skaiciai = [1234, 21 , 213, 1231, 123, 4, 546, 7, 23];

for (let i = 0; i < skaiciai.length; i++){
    console.log(i, `indekse yra`, skaiciai[i])
}

console.log(`-----------------------`)

for (let i = 0; i < skaiciai.length; i++){
    if (skaiciai[i] % 2 == 0){
        console.log(skaiciai[i], `yra lyginis`)
    } else {
        console.log(skaiciai[i], `nelyginis`)
    }
}

console.log(`-----------------------`)

for (let i = 0; i < skaiciai.length; i++){
    if (skaiciai[i] >= 50) {
        console.log(`Skaičius 50 ar didesnis:`, skaiciai[i])
    }
}

console.log(`-----------------------`)
//1. UZDUOTIS:

for (let i = 0; i < skaiciai.length; i++){
    if (skaiciai[i] < 50){
        console.log(`Skaičius mažesnis nei 50:`, skaiciai[i])
    }
}

console.log(`-----------------------`)

let medziai = [`Uosis`, `Azuolas`, `Pusis`, `Drebule`]

for (let i = 0; i < medziai.length; i++){
    console.log(i, `indekse yra:`, medziai[i])
    console.log(`Šio medžio:`, medziai[i], `teksto ilgis:`, medziai[i].length)
    console.log(`Pirma raidė:`, medziai[i], `yra:`, medziai[i][0])
    console.log(`Antra raidė:`, medziai[i], `yra:`, medziai[i][1])

    console.log(`Paskutine raidė:`, medziai[i], `yra:`, medziai[i][medziai[i].length - 1])
}

console.log(`-----------------------`)

let zodis = `kompiuteris`;

for (let i = 0; i < zodis.length; i++){
    console.log(zodis[i])
}

console.log(`-----------------------`)

let vardai = [`Jonas`, `Petras`, `Ugnius`, `Gintare`, `Gabija`, `Austeja`]

for (let i = 0; i < vardai.length; i++){
    if (vardai[i].length > 6){
        console.log(vardai[i])
    }
}