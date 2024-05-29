let miestai = [`Kaunas`, `Vilnius`, `Klaipeda`, `Jurbarkas`]

console.log(`join():`, miestai.join())
console.log(`join(''):`, miestai.join(''))
console.log(`join('').lenght:`, miestai.join('').length)
console.log(`join(' '):`, miestai.join(' ')) //tarpas viduj ' '
console.log(`join(', '):`, miestai.join(', ')) // kablelis ir tarpas , 
console.log(`join('__'):`, miestai.join('__')) // apatiniai bruksniai __
console.log(`join('').toUpperCase:`, miestai.join(' ').toUpperCase()) //issiveda didziosiom raidem
console.log(`join('').toUpperCase().includes('VILN'):`, miestai.join('').toUpperCase().includes('VILN')) // randa tik ar tai includes VILN