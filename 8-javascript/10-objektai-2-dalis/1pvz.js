let auto = {
    marke: `Audi`,
    modelis: `A6`,
    metai: 2014,
    kaina: 15000
}

console.log(auto.marke)
console.log(auto[`marke`])

let raktas = `modelis`;
console.log(auto.raktas) // neras
console.log(auto[raktas]) // ras tik taip rasant (naudojant [])

//// forin ciklas:
for (const key in auto) {
    console.log(`raktas yra:`, key)
    console.log(`o reiksme yra:`, auto[key]) //'key' i vidu kad rastume reiksme
}

