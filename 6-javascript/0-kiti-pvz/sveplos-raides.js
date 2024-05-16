let fraze = 'Klaipėda'
let zmogaus = 'Klaipeda'


// replace all ė to e and all į to i and all ų to u

fraze = fraze.replace(/ė/g, 'e').replace(/į/g, 'i').replace(/ų/g, 'u')
if (fraze.toLowerCase() === zmogaus.toLowerCase()) {
    console.log('taip')
} else {
    console.log('ne')
}