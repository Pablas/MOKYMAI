let tekstas = 'Pas mus sode ura Kengūrų, Lapių ir net Žirafų.' // paprastas tekstas

console.log(`split(''):`, tekstas.split('')) //pagal raide splitina, nes nieko neideta viduje
console.log(`split(' '):`, tekstas.split(' ')) //pagal tarpa splitina
console.log(`split(','):`, tekstas.split(',')) //pagal kableli splitina
console.log(`split(', '):`, tekstas.split(', ')) //pagal kableli ir tarpeli po jo

/////////////

let eilute = `Jonas;Jonauskas;20;KTU`; // duomenys gali taip ateiti

console.log(`split(';'):`, eilute.split(';')) //pagal ; splitina ir informacija graziai issisplitino



////////////////////
// PVZ KAIP ISIMTI IS MASYVO, IDETI NAUJA INFO IR ISVESTI ATGAL VISA NAUJA MASYVA:

let datos = `2022-12-31|2021-01-01|2034-03-24`

let datosMasyvas = datos.split(`|`); // pasidarom atskira masyva is datu
console.log(`datosMasyvas:`, datosMasyvas)

//jeigu norim iterpti nauja data:

datosMasyvas.splice(2, 0, '2000-01-01'); // 2 - antrame indexe, 0 - nieko netrinti, ideti kokia data
console.log(`datosMasyvas su papild data:`, datosMasyvas)

//ir norint ikelti atgal i  datos formata:

datos = datosMasyvas.join(`|`);

console.log(`datos pradinis su nauja info:`, datos)