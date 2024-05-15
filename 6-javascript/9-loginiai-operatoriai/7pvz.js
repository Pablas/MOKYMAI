let auto = 'Toyota Avensis';
let metai = 2012;

if (auto.includes('Ave') && metai >= 2010 && metai <= 2012){
    console.log('tinka')
} else {
    console.log('netinka')
}

if (auto.toLowerCase().includes('ave') && metai >= 2010 && metai <= 2012){
    console.log('tinka')
} else {
    console.log('netinka')
}