let duomenys = [];

for (let i = 0; i < 10; i++){
    let sk = Math.floor(Math.random() * 100 + 1);
    console.log(sk)
    duomenys.push(sk)
}

console.log(duomenys)

for (let i = 0; i < duomenys.length; i++){
    console.log(duomenys[i], `yra`, duomenys[i] % 2 == 0 ? `lyginis` : `nelyginis`)
}