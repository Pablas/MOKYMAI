let gyvunai = [`Lion`, `Tiger`, `Cat`, `Dog`, `Elephant`, `Zebra`]


////////////////
// noriu surasti gyv pati pirma kuris prasideda C raide:
console.log(  gyvunai.find(g => g.startsWith(`C`))  )


////////////////
// surasti gyv kuris baigiasi t raide:
console.log(  gyvunai.find(g => g.endsWith(`t`))  )


////////////////
// surasti gyv kurio vardas sudaro 2 simboliai:
console.log(  gyvunai.find(g => g.length <= 2)  ) //neranda


////////////////
// surasti "Dog":
console.log(  gyvunai.find(g => g.includes(`Dog`))  )


////////////////
// surasti gyv ar viduje yra raide "O" (nesvarbu kaip ivesta):
console.log(  gyvunai.find(g => g.toLowerCase().includes(`o`))  ) // ismeta pati pirma varianta, nes cia find, jei norim, kad rodytu visus reikia naudoti filter.


///////////////
// norint surasti gyvuno indekso numeri kur yra "Cat":
console.log(  gyvunai.findIndex(g => g.includes(`Cat`))  )