let failas = 'duomenys/mokyklos.json';

let galune = failas.split('.')[1];


console.log(failas, 'failo galune yra', galune);
switch (galune) {
    case 'json':
        console.log('Tai yra JSON failas');
        console.log('Naudoju JSON parser ir visa kita')
        break;
    case 'csv':
        console.log('Tai yra CSV failas');
        console.log('Naudoju CSV skaitymo biblioteka')
        break;
    default:
        console.log('Nezinoma failo galune');
        break;
}