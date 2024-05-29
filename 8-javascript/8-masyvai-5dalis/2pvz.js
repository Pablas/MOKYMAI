let miestai = [`Vilnius`, `Kaunas`, `Kretinga`, `Varsuva`, `Berlynas`]


//be indekso:
miestai.forEach(m => console.log(m[0]))

// su indeksu:
miestai.forEach((m, i) => {console.log(m[0], i)})