function pasisveikinti(vardas) { //"vardas" isideda argumentas, kuri naudojant funkcijoje, jis bus naudotinas:
    console.log(`Labas,`, vardas, `!`) //argumentas idetas i console.log dali
}

pasisveikinti(`Povilai`) //funkcijai "pasisveikinti", pritaikau `Povilai` argumenta, ir tas argumentas isideda i visas "vardas" vietas funkcijoje.
pasisveikinti(`Jonas`) //funkcijai "pasisveikinti", pridejom kita argumenta ir isvedant sia funkcija jau naudos `Jonas` vietoje "vardas" dalis.

