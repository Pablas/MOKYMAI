let miestai = [`Vilnius`, `Kaunas`, `Klaipeda`, `Taurage`]
let pridejimui = [`Kupiskis`, `Visaginas`, `Utena`]



//1 variantas:
// miestai = miestai.concat(pridejimui);

//2 variantas:
miestai.push(...pridejimui)

console.log(miestai);