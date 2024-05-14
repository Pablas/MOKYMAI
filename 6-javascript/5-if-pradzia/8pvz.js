let vardas = 'Jonas';
let amzius = 22;
let automobilis = 'Audi A5';

if ( amzius >= 18) {
    console.log(vardas, 'yra pilnametis')
}

if (automobilis == 'Audi A5') {
    console.log(vardas, 'vairuoja', automobilis, ', jam yra', amzius)
}


// Ugis: veikia tik viduje if, ir kitur neveiks
if (amzius >= 16){
    let ugis = 180;
    console.log(vardas, 'yra pilnametis ir jo ugis yra', ugis, 'cm')
}