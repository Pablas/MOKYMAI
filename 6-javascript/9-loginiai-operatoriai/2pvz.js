let skaicius = 28;

if (skaicius >= 1 && skaicius <= 50) {
    console.log('Skaicius telpa tarp 1 ir 50')
} else {
    console.log('Skaicius netelpa tarp 1 ir 50')
}

console.log('------------')

if (skaicius >= 50 && skaicius <= 100) {
    console.log('Skaicius patenka tarp 50 ir 100')
} else {
    console.log('Skaicius netelpa tarp 50 ir 100')
}

console.log('------------')

if (skaicius >= 1 && skaicius <= 50) {
    console.log('Skaicius telpa tarp 1 ir 50')
} else if (skaicius >= 50 && skaicius <= 100) {
    console.log('Skaicius telpa tarp 50 ir 100')
} else {
    console.log('Skaicius nepateko')
}

