document.getElementById(`pirma-antraste`).innerHTML = `Naujas pirmos antraštės tekstas`;
document.getElementById(`pirmas-paragrafas`).innerHTML = `Naujas pirmo paragrafo tekstas`;

/////////////////////

let tekstasIsParagrafo = document.getElementById(`paragrafo-tekstas`).innerHTML;
console.log(`Paimtas tekstas iš paragrafo:`, tekstasIsParagrafo)

let tekstasIsParagrafo2 = document.getElementById(`paragrafo-tekstas`).innerText;
console.log(`Paimtas su innerTEXT:`, tekstasIsParagrafo2)

console.log()


////trecias div

console.log(`Trecias div`)

console.log(`innerHTML turinys:`, document.getElementById(`trecias`).innerHTML)
console.log(`innerText turinys:`, document.getElementById(`trecias`).innerText)

console.log()


/// septintas div

function pakeisti() {
    document.getElementById(`septinto-tekstas`).innerHTML = `Naujas tekstas`;
}