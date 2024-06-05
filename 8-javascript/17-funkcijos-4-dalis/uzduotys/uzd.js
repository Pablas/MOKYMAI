// 1. Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite šią funkciją ir išspausdinkite gautus rezultatus.
console.log(`1. ================`)

function sakinys(){
    return `noriu ledų`
}

console.log(sakinys(), `DABAR!`)

// 2. Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių. Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.
console.log(`2. ================`)

function randomSk(){
    return randomSkaiciukas = Math.ceil(Math.random() * 1000)
}

console.log(`Random skaičius:`, randomSk())

// 3. Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį. Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų, perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.
console.log(`3. ================`)

function studentas(vardas, pavarde){
    return `Studentas ${vardas} ${pavarde}, neatliko namų darbų.`
}

console.log(studentas(`Povilas`, `Račkauskas`))
console.log(studentas(`Tomas`, `Tomaitis`))

// 4. Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje iškvieskite šią funkciją, perduodant ciklo kintamąjį.
console.log(`4. ================`)

function funkcija4(skMasyvas){
    maziausiasDaliklis = skMasyvas[0];

    for (const sk of skMasyvas) {
        if (sk % 2 == 0 && sk < maziausiasDaliklis){
            maziausiasDaliklis = sk;
        }
    }
}


// 5. Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis). Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).
console.log(`5. ================`)
