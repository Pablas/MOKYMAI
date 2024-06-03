function lyginisNelyginis() {
    let sk = Math.ceil(Math.random() * 10);

    console.log(`Skaicius`, sk);

    if (sk % 2 == 0){
        console.log(`Skaicius`, sk, `lyginis`)
    } else {
        console.log(`Skaicius`, sk, `nelyginis`)
    }

    console.log(`-------`)
}

// pasikvieciu funkcija:

lyginisNelyginis()
lyginisNelyginis()