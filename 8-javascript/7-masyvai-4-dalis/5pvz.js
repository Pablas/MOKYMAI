let vardai = [`Paulius`, `Gintare`, `Ugnius`, `Ona`]

//daryti kopija originalaus ^
//1 budas:
// let kopija = vardai.slice();

//2 budas:
let kopija = [...vardai]

vardai[0] = `Povilas`;

console.log(`Vardai:`, vardai)
console.log(`Kopija:`, kopija)