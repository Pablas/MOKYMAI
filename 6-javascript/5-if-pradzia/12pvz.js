// inlife if
// ternary operator


let auto = 'Volvo';
let amzius = 5;

// simple: (ilgasis variantas)
if (amzius < 10) {
    console.log(`${auto} (${amzius}m.) yra apynaujis`)
}

if (amzius >= 10){
    console.log(`${auto} (${amzius}m.) yra senukas`)
}

// inline if: (iskart sakinyje)

console.log(`${auto} (${amzius}m.) yra ${amzius < 10 ?'apynaujis' : 'senukas'}`)
//arba
console.log(`${auto} (${amzius}m.) yra`, amzius < 10 ? 'apynaujis' : 'senukas')


//priskirimas prie kintamojo

let statusas = amzius < 10 ? 'apynaujis' : 'senukas';
console.log(`${auto} (${amzius}m.) yra ${statusas}`)


