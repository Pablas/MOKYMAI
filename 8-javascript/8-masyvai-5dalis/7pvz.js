let skaiciai = [2, 1, 4, -2, -3, 4, -2, 3, 4]


//////////////////////////////////
// ar skaiciai yra visi teigiami (.every):
console.log(  skaiciai.every(sk => sk > 0))


//////////////////////////////////
// ar yra bent vienas teigiami (.some):
console.log(  skaiciai.some(sk => sk > 0))



////////////////////////
// visi teigiami, priskirti:
let visiTeigiami = skaiciai.every(sk => sk > 0);

if (visiTeigiami){
    console.log(`Visi skaiciai teigiami`)
} else {
    console.log(`Yra neigiamu skaiciu`)
}





///////////////////////
//

if (skaiciai.every(sk => sk > 0)){
    console.log(`Visi skaiciai teigiami`)
} else if (skaiciai.some(sk => sk > 0)){
    console.log(`Yra neigiamu skaiciu`)
}