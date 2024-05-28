let miestai = [`Vilnius`, `Kaunas`, `Klaipeda`]

console.log(miestai)

console.log(`=========`)
//////////////////////////////
//ideti nauja (i masyvo gala):
miestai.push(`Silute`, `Panevezys`) //galima viena ar net kelis variantus.
console.log(miestai)

console.log(`=========`)

//////////////////////////////
//ideti i masyvo prieki:

miestai.unshift(`Marijampole`) //galima viena ar daugiau
console.log(miestai)

console.log(`=========`)

//////////////////////////////
//ideti i masyvo vidu (papildom):

//5 - kuri vieta, 0 - kiek trinam, ka pridedam:
miestai.splice(5, 0, `Raseiniai`)

console.log(miestai)

miestai.splice(3, 1, `Rokiskis`)

console.log(miestai)

console.log(`=========`)

//////////////////////////////
//trinimas is galo:

miestai.pop() //viena is galo, nereikia irasyti nieko (norint daugiau istrinti, reikia daugiau irasyti pop'u)
miestai.pop() //du irasus istryne

console.log(miestai)

//parodyti ka istrynem:
let kasIssitryneSuPop = miestai.pop();

console.log(`itryne pop:`, kasIssitryneSuPop)
console.log(miestai)

console.log(`=========`)

//////////////////////////////
//trinimas is priekio:

// miestai.shift()

console.log(miestai)

let kasIssitryneSuShift = miestai.shift();

console.log(`Ka .shift istryne:`, kasIssitryneSuShift)

console.log(miestai)

console.log(`=========`)

//////////////////////////////
//trinimas is masyvo vidurio (be idejimo naujos info):

// startuojam nuo 1 index pozicijos ir trinam 2 elementus nuo jo:
miestai.splice(1, 2)

console.log(miestai)

