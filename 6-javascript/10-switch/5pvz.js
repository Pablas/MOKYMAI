let pirmas = 2;
let antras = 102;
let veiksmas = '+';


switch (veiksmas){
    case '+': 
        console.log(`${pirmas} + ${antras} = ${pirmas + antras}`)
    break;
    case '*':
        console.log(`${pirmas} * ${antras} = ${pirmas * antras}`)
    break;
    default:
        console.log(`Ivyko klaida`)
    break;
}