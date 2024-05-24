//1.Raskite visų skaičių nuo 1 iki 100 sumą.
console.log(`1: ---`)

let suma1 = 0;

for (let i = 0; i <= 100; i++) {
    suma1 += i;
}

console.log(`nuo 1 iki 100 suma:`, suma1)

//2. Raskite visų lyginių skaičių nuo 20 iki 50 sumą.
console.log(`2: ---`)

let suma2 = 0;

for (let i = 20; i <= 50; i++) {
    if (i % 2 == 0) {
        suma2 += i;
    }
}

console.log(`20 iki 50 lyginių skaičių suma:`, suma2)

//3. Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.
console.log(`3: ---`)

let suma3 = 0;

for (let i = 30; i <= 60; i++) {
    if (!(i % 2 === 0)) {
        suma3 += i;
    }
}

console.log(`30 iki 60 nelyginių skaičių suma:`, suma3)

//4. Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, sumą. 
// Pavyzdys:
// 	Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.
// 	Šių skaičių suma yra 23.
// Turite gauti 233168 atsakymą.
console.log(`4: ---`)

let suma4 = 0;

for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        suma4 += i;
    }
}

console.log(`ats:`, suma4)

//5. Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”:
console.log(`5: ---`)

let sk = 0;

for (let i = 1; i <= 100; i++) {
    sk = i;

    if (i % 3 == 0 && i % 5 == 0) {

        sk = `FizzBuzz`;

    } else if (i % 5 == 0) {

        sk = `Buzz`;

    } else if (i % 3 == 0)

        sk = `Fizz`

    console.log(sk)
}

//6. 
console.log(`6: ---`)

let suma6 = 0;
let sk1 = 1;
let sk2 = 1;
let sk3 = 2;
let sk4 = sk1 + sk2;
let suma = sk12 + sk3;

for (i = 2; i <= 100; i = +2 ){
        
    

    console.log(suma)
}

