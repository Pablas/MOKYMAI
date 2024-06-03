function tekstas(){
    return `koks nors tekstas`;
}

tekstas(); // gausis tas pats kas, tode nieko neisves:
`koks nors tekstas`

//gaunas rezultata ir iskart isveda:
console.log( tekstas() )

let kintamasis = tekstas()
console.log(kintamasis)