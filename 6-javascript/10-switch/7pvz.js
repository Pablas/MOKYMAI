let diena = 'antradienis';

// darbo diena kai:
// pirmadienis, antradienis, treciadienis, ketvirtadienis, penktadienis
// savaitgalis kai:
// sestadienis, sekmadienis

switch (diena) {
    case 'pirmadienis':
    case 'antradienis':
    case 'treciadienis':
    case 'ketvirtadienis':
    case 'penktadienis':
        console.log('darbo diena');
        break;
    case 'sestadienis':
    case 'sekmadienis':
        console.log('savaitgalis');
        break;
    default:
        console.log('tai ne diena...');
        break;
}