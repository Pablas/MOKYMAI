let auto = {
    marke: `Toyota`,
    modelis: `Avensis`,
    metai: 2015,
    rida: 10000
}

//////////////////////////////////
/// jei noriu info kur tik skaiciai:

//paprastai:
console.log(auto.metai);
console.log(auto.rida)



console.log(`---------------------`)
//kitas metodas surasti koks tai typeof duomenu:
console.log(`Auto tipas:`, typeof auto)
console.log(`modelio tipas:`, typeof auto.metai)



console.log(`---------------------`)
//metodas su ciklu FOR IN:
for (const x in auto) {
    if (typeof auto[x] == `number`){ //jeigu objekto raktai lygus `number` reiksmei:
        console.log(x, `:`, auto[x]) // x - gaunasi rakas : objekto raktas (rodomi duomenys)
    }
}




