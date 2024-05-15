let amzius = 17;
let pinigai = 5;

// tinakmas variantas (be loginiu operatoriu):
if (amzius >= 18){
    if (pinigai >= 10){
        console.log('pinigai ir amzius tinka');
    } else {
        console.log('negalima');
    }
} else {
    console.log('negalima');
}

// sprendimas su loginiais operatoriais:

if (amzius >= 18 && pinigai >= 10){
    console.log('pinigai ir amzius tinka')
} else {
    console.log('negalima')
}


if (amzius >= 18 || pinigai >= 10){
    console.log('pinigai ir amzius tinka')
} else {
    console.log('nei vieno nera')
}


