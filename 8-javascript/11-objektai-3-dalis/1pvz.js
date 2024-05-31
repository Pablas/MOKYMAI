let automobiliai = [
    {
        marke: `Audi`,
        modelis: `A5`,
        metai: 2013,
        rida: 198000
    },
    {
        marke: `Toyota`,
        modelis: `Corolla`,
        metai: 2003,
        rida: 320000
    },
    {
        marke: `Volvo`,
        modelis: `S60`,
        metai: 2008,
        rida: 212000
    }
]

///////////////////////
// norint issivesti kiekviena automobili atskirai:
console.log(`pirmas automobilis:`, automobiliai[0]);
console.log(`antras automobilis:`, automobiliai[1]);
console.log(`trecias automobilis:`, automobiliai[2]);


console.log(`-----------`)
///////////////////////
// norint issivesti kiekviena automobili su for ciklu:
for (let i = 0; i < automobiliai.length; i++){
    console.log(i + 1, `automobilis:`, automobiliai[i])
}


console.log(`-----------`)
///////////////////////
// norint issivesti kiekviena automobili su FOR OF ciklu:

for (const auto of automobiliai) { //auto nusako kiekviena atskira masyvo elementa "automobiliai" masyve.
    console.log(`automobilis`, auto) 
}


console.log(`-----------`)
///////////////////////
// noriu tik 3 automobilio marke, metus issivesti:

console.log(`Marke:`, automobiliai[2].marke)
console.log(`Metai:`, automobiliai[2].metai)


console.log(`-----------`)
///////////////////////
// noriu kiekvieno automobilio marke, metus issivesti, su for ciklu:

for (let i = 0; i < automobiliai.length; i++){
    console.log(i + 1, `Automobilio marke:`, automobiliai[i].marke);
    console.log(i + 1, `Automobilio metai:`, automobiliai[i].metai)
}


console.log(`-----------`)
///////////////////////
// noriu kiekvieno automobilio marke, metus issivesti, su FOR OF ciklu:

for (const auto of automobiliai) {
    console.log(`Marke:`, auto.marke)
    console.log(`Metai:`, auto.metai)
}   
