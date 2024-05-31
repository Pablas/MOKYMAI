let studentai = [
        {vardas: `Tomas`, pazymiai: [ 10, 8, 2, 4]},
        {vardas: `Robertas`, pazymiai: [2, 4, 5, 6]},
        {vardas: `Jonas`, pazymiai: [10, 7, 4, 10]},
        {vardas: `Ona`, pazymiai: [6, 6, 10, 6]},
        {vardas: `Rasa`, pazymiai: [8, 5, 6, 10]}
]

//////////////////////////////////////////////////
//// APSKAICIUOTI PAZYMIU VIDURKIUS:

for (let studentas of studentai) {
    console.log(studentas.vardas)

    let suma = 0; //kur sumuosim pazymius
    
    // ciklas cikle, jeigu noriu issivesti atskirai pazymius, isvedus studenta
    for (const pazymys of studentas.pazymiai) {
        console.log(pazymys)
        suma += pazymys; // sumuojam prie sumos
    }

    console.log(`Suma`, suma) //gaunam pazymiu suma

    let vidurkis = suma / studentas.pazymiai.length; // vidurkius gauti kiekvieno studento
    console.log(`Vidurkis:`, vidurkis)


    console.log(`------`)
}



console.log(`=======================`)

/////////////////////////////////////
// Atlikta per viena cikla, studento vardas ir isvestas pazymiu vidurkis:
for (const stud of studentai){
    console.log(stud.vardas)
    let suma = stud.pazymiai.reduce((a,b) => a + b, 0);
    let vidurkis = suma / stud.pazymiai.length;
    console.log(`Vidurkis:`, vidurkis)
}