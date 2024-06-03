function sakinys(vardas, pavarde, mokykla){
    return `${vardas} ${pavarde}, kuris mokosi ${mokykla}.`;
}


let jonas = sakinys(`Jonas`, `Jonaitis`, `VDU`)
let ona = sakinys(`Ona`, `Oniene`, `KTU`)

console.log(jonas)
console.log(ona)