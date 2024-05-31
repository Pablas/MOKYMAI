let studentai = [
    {vardas: `Tomas`, pazymiai: [ 10, 8, 2, 4]},
    {vardas: `Robertas`, pazymiai: [2, 4, 5, 6]},
    {vardas: `Jonas`, pazymiai: [10, 7, 4, 10]},
    {vardas: `Ona`, pazymiai: [6, 6, 10, 6]},
    {vardas: `Rasa`, pazymiai: [8, 5, 6, 10]}
]


////// LYGINIMAS PAZYMIU VIDURKIO, KURIS DIDESNIS:

let maxStudentas = studentai[0]
let maxVidurkis = 0;

for (const stud of studentai){
    let suma = stud.pazymiai.reduce((a, b) => a + b, 0);
    let vidurkis = suma / stud.pazymiai.length; //issiaiskinom studento vidurki
    console.log(stud.vardas, `vidurkis yra:`, vidurkis);

    if (vidurkis > maxVidurkis){
        maxStudentas = stud;
        maxVidurkis = vidurkis;
    }
}


