let fraze = 'SlapTas123';

if (fraze == 'Slaptas123'){
    console.log('radau, case sensitive')
} else if (fraze.toLowerCase() == 'Slaptas123'.toLowerCase()){
    console.log('radau, case insensitive')
} else if (fraze.toLowerCase() != 'slaptas123'){
    console.log('neradau')
}