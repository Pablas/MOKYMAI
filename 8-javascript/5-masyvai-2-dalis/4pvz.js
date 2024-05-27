let skaiciai = [7, 3, 4, 8, 7, 6]

let bendraSuma = 0;

for (let i = 0; i < skaiciai.length; i++){
    bendraSuma += skaiciai[i]
}

console.log(`Skaičių:`, skaiciai, `suma yra:`, bendraSuma)

let bendrasVidurkis = bendraSuma / skaiciai.length;

console.log(`Bendras vidurkis:`, bendrasVidurkis)

console.log(`====================`)

let lyginiuSuma = 0;
let lyginiuKiekis = 0;

for (i = 0; i < skaiciai.length; i++){
    if (skaiciai[i] % 2 == 0){
        lyginiuSuma += skaiciai[i];
        lyginiuKiekis++;
    }
}

console.log(`Lyginiu skaiciu suma:`, lyginiuSuma)
console.log(`Lyginiu skaiciu kiekis:`, lyginiuKiekis)