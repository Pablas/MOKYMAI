let studentai = [
    {vardas: `Tomas`, pazymiai: [ 10, 8, 2, 4]},
    {vardas: `Robertas`, pazymiai: [2, 4, 5, 6]},
    {vardas: `Jonas`, pazymiai: [10, 7, 4, 10]},
    {vardas: `Ona`, pazymiai: [6, 6, 10, 6]},
    {vardas: `Rasa`, pazymiai: [8, 5, 6, 10]}
]


////////////////////////////////////
// RASTI INDIVIDUALIUS VIDURKIUS IR JUOS SURASYTI I OBJEKTUS:


//paskaiciuotas studentu vidurkis:
for (const stud of studentai) {
    let suma = stud.pazymiai.reduce((a, b) => a + b, 0);
    let vidurkis = suma / stud.pazymiai.length;
    console.log(stud.vardas, `vidurkis yra:`, vidurkis)

    // ideti gauta vidurki atgal i objekta:
    stud.vidurkis = vidurkis; // naujas objekte raktas "vidurkis" ir ten guli studentu vidurkiai.
}
//gaunasi toks masyvas:
console.log(studentai)

// KURIO DIDZIAUSIAS VIDURKIS:

let studMaxVid = studentai[0]; // pasiimti visa info apie studenta

for (const stud of studentai) {
    if (stud.vidurkis > studMaxVid.vidurkis){ // pasiima kitus studentu vidurkius ir lygina ar pasiimto studento vidurkis nera didesnis
        studMaxVid = stud; // JEIGU kito studento vidurkis didesnis, jis perraso musu pasiimta studenta, kad tai butu naujas diziausias pazymys, ir jei ras dar kita, tada dar karta replaceins ir t.t.
    }
}

console.log(`DIDZIAUSIAS VIDURKIS:`, studMaxVid.vardas, `=`,studMaxVid.vidurkis)








