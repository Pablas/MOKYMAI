let prekes = [`pomidorai`, `agurkai`, `morkos`, `bulves`, `jogurtas`, `kiausiniai`, `arbuzai`, `kefyras`, `pienas`]


///////////////////////
// prekes prasidedancios su `k` raide:
let prasidedaK = prekes.filter(p => p.startsWith(`k`))
console.log(prasidedaK)



//////////////////////
// prekes prasideda su `p` raide ir nesvarbu kaip ivesta p (didziaja ar mazaja):
let ieskau = `P`;
let prasidedaP = prekes.filter(p => p.toLowerCase().startsWith(ieskau.toLowerCase()));
console.log(prasidedaP)



///////////////////////
// prekes kuriu teksto ilgis 7 arba iki 7 simboliu:
let septyniSimboliai = prekes.filter(p => p.length <= 7)
console.log(septyniSimboliai)