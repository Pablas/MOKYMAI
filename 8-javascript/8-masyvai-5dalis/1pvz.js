let salys = [`Lietuva`, `Latvija`, `Suomija`, `Estija`, `Latvija`]
//paprastas budas:
for (const salis of salys) {
    console.log(salis, salis.length)
}




console.log(`1  =====================`)
//su forEach (function) be indekso (jei reikia galima atskirti kableliu):
salys.forEach(function(salis2){
    console.log(salis2, salis2.length)
})






console.log(`2  =====================`)

//su forEach (function) su indeksu (indeksas prisideda jei jo reikia, per kableli):
salys.forEach(function(salis3, indeksas3){
    console.log(salis3, indeksas3)
})






console.log(`3  =====================`)
//su forEach (=> function rodyklyte):

salys.forEach((salis33, indeksas33) => {
    console.log(salis33, indeksas33)
})

console.log(`----`)

//gali netureti salis33 skliaustuku jeigu nereikia indekso:
salys.forEach(salis33 => 
    console.log(`be skliaustu:`, salis33)
)