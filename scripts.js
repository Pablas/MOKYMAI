console.log(document);
console.dir(document);

console.log(`pagal id:`, document.getElementById(`pirmo-bloko-paragrafas`));

let pirmoBlokoParagrafas = document.getElementById(`pirmo-bloko-paragrafas`);
console.log(`pagal id, bet is kintamojo:`, pirmoBlokoParagrafas);

let pirmasBlokas = document.querySelector(`.pirmas`)
console.log(`pirmas blokas:`, pirmasBlokas)


console.log(`trecias paragrafas pirmame bloke:`, document.querySelector(`.pirmas .paragrafas3`))

console.log(`trecias blokas pirmame bloke:`, pirmasBlokas.querySelector(`.paragrafas3`))


console.log('pirmas paragrafas:', document.querySelector('.paragrafas'));
console.log('visi paragrafai:', document.querySelectorAll('.paragrafas'));
console.log('pirmas paragrafas:', document.querySelector('div p'));

//galim ieskoti nuo document arba kito kintamojo kuris yra html zyma (pvz pirmasBlokas)

//galime naudoti:
//getElementById: iesko pagal id
//querySelector - iesko pagal klase pirmo selectoriaus
//querySelectorAll - iesko visu pagal klase


// console.dir(pirmoBlokoParagrafas);
console.log('pasirinktas paragrafas:', pirmoBlokoParagrafas);
console.log('paragrafui ankstesnis:', pirmoBlokoParagrafas.previousElementSibling);
console.log('paragrafui sekantis:', pirmoBlokoParagrafas.nextElementSibling);
console.log('paragrafo tevinis:', pirmoBlokoParagrafas.parentElement);

let pirmasParagrafas = document.querySelector(`p`)
console.log(`pirmas paragrafas:`, pirmasParagrafas)

console.log(`sekantis paragrafas:`, pirmasParagrafas.nextElementSibling)

let antrasParagrafas = pirmasParagrafas.nextElementSibling

console.log(`jajajaj`, antrasParagrafas)

let treciasParagrafas = pirmasParagrafas.nextElementSibling.nextElementSibling

console.log(`trecias p:`, treciasParagrafas)

console.log(`trecias dar`, antrasParagrafas.nextElementSibling)


/// PADIRBEJIMAS:


