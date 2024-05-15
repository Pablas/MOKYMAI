let arTuriuBilieta = true;

if (arTuriuBilieta == true){
    console.log('Turiu bilieta')
} else {
    console.log('Neturiu bilieto')
}

// tas pats tik parasymas greitesnis, nes issiveda vistiek boolen
if (arTuriuBilieta){
    console.log('Turiu bilieta')
} else {
    console.log('Neturiu bilieto')
}

// jei norima apkeisti boolean reiksme, naudojamas toks (!):
if (!(arTuriuBilieta)){
    console.log('Neturiu bilieto')
} else {
    console.log('Turiu bilieta')
}