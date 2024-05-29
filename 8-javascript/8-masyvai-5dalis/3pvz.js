let pazymiai = [10, 8, 4, 7, 10, 9]
let suma = 0;

pazymiai.forEach(p => suma += p++)

let vidurkis = suma / pazymiai.length;

if (vidurkis >= 5){
    console.log(`Vidurkis teigiamas`)
} else {`Vidurkis neigiamas`}