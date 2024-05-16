////////////////
// PIRMAS PARAGRAFAS
////////////////

let pirmasElementas = document.getElementById(`pirmas`)

console.dir(pirmasElementas)

//innerHTML, innerText, textContent

console.log(`pirmo teksto:`, pirmasElementas.innerHTML)
console.log(`pirmo teksto:`, pirmasElementas.innerText)
console.log(`pirmo teksto:`, pirmasElementas.textContent)

let tekstas = pirmasElementas.textContent

console.log(`tekstas:`, tekstas)

console.log(`simboliu kiekis:`, pirmasElementas.textContent.length)
console.log(`simboliu kiekis:`, pirmasElementas.textContent.split(` `).length)

pirmasElementas.textContent = `Mano naujas tekstas`;

console.log(`simboliu kiekis:`, pirmasElementas.textContent.length)
console.log(`simboliu kiekis:`, pirmasElementas.textContent.split(` `).length)


////////////////
// ANTRAS PARAGRAFAS
////////////////

let antrasParagrafas = document.getElementById('antras');
console.log(antrasParagrafas)

console.log(`antro paragrafo innerhtml:`, antrasParagrafas.innerHTML);
console.log(`antro paragrafo textContent:`, antrasParagrafas.textContent);
console.log(`antro paragrafo innerText:`, antrasParagrafas.innerText);

////////////////
// TRECIAS BLOKELIS
////////////////

let treciasBlokas = document.getElementById(`trecias`);
console.log(treciasBlokas);

console.log(`trecio bloko isvedimai texcontent:`, treciasBlokas.textContent)
console.log(`trecio bloko isvedimai innerhtml:`, treciasBlokas.innerHTML)
console.log(`trecio bloko isvedimai innertext:`, treciasBlokas.innerText)

////////////////
// KETVIRTAS IR PENKTAS PARAGRAFAI
////////////////

let naujasHTML = `Zmogus <strong>Petras</strong> turi kate`;

document.getElementById(`ketvirtas`).innerHTML = naujasHTML;
document.getElementById(`penktas`).textContent = naujasHTML;

////////////////
// AUTOMOBILIO BLOKAS
////////////////

let autoBlokas = document.querySelector(`.automobilio-blokas`);
console.log(autoBlokas)

let autoMarke = 'Volvo';
let autoModelis = 'XC60';
let autoRida = 10000;
let autoMetai = 2010;

autoBlokas.innerHTML = `<h1>${autoMarke} ${autoModelis}</h1>
<p class="ridos-info">Rida: ${autoRida} km</p>
<p class="metu-info">Metai: ${autoMetai} km</p>`;

////////////////
// ZMOGUS BLOKAS
////////////////

let zmogusBlokas = document.getElementById(`zmogus-blokas`)
console.log(zmogusBlokas);

let zmogauAntraste = document.createElement(`h1`);
zmogauAntraste.textContent = `Petras Petraitis`;

zmogusBlokas.appendChild(zmogauAntraste);