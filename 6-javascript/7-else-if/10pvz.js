let tekstas = 'Lietuvoje didziausi miestai yra Vilnius, Kaunas ir Klaipeda'
let ieskomas = 'Vilnius';


if  (tekstas === ieskomas){
    console.log('tekstas lygus ieskomas');
} else if (tekstas.startsWith(ieskomas)){
    console.log('tekstas prasideda ieskomas')
} else if (tekstas.startsWith('Lietuva')){
    console.log('tekstas pradzioje turi Lietuva')
} else if (tekstas.includes(ieskomas)){
    console.log('tekstas turi ieskomas')
}