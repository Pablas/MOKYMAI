let pirmas = 10;
let antras = 5;
let veiksmas = '*';

let atsakymas;

switch (veiksmas){
    case '+':
        atsakymas = pirmas + antras
    break;
    case '*':
        atsakymas = pirmas * antras
    break;
    case '/':
        atsakymas = pirmas / antras
    break;
}

console.log(`${pirmas} ${veiksmas} ${antras} = ${atsakymas}`)