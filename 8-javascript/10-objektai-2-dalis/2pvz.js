moksleiviai = {
    jonas: 8,
    petras: 2,
    ona: 4,
    birute: 7,
};

// for in
for (const x in moksleiviai) { //x keliauja iskarto i giluma ir
    console.log(x, `mokosi`, moksleiviai[x], `klaseje.`) //norint paimti dar gilesne info reikia deti i skliaustus ta 'x'
}

////////////////////////////////////////

let studentai = [
    {
        vardas: `Jonas`,
        pazymys: 10,
        mokykla: `KTU`
    },
    {
        vardas: `Tomas`,
        pazymys: 9,
        mokykla: `VU`
    }
]

// for of
for (const x of studentai) {
    console.log(x.vardas, `mokosi`, x.mokykla, `ir jo pazymys`, x.pazymys)
}