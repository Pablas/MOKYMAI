let pramogos = [
    `Šuolis parašiutu`, //10
    `Riedlentės`,       //1
    `Bungee Jumping`,   //2
    `Baseinas`          //3
]

pramogos.push(`Kino teatras`); //4

console.log(pramogos)

pramogos[5] = `Lazerių mūšis`; //5

console.log(pramogos)

pramogos[10] = `Dviratis`; //10

// 4 praskipinti rodomi kaip 'empty':
console.log(pramogos)

// pasiima kiek yra elementu ir isideda i ta vieta:
pramogos[pramogos.length] = `Riedžiai` //11
console.log(pramogos)