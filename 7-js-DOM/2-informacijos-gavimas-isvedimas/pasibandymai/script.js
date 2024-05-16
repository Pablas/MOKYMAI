let pirmasb = document.querySelector(`.pirmas-blokas`);
let antrasb = document.querySelector(`.antras-blokas`);

pirmasb.innerHTML = `<h1> Sveiki atvyke! </h1>`;

antrasb.innerHTML = `<h2> Mėgaukites pavasario nuolaidomis:<h2>
<p>sajdsalk dlsakdlask dlsdlakdlasd. askdlas .skdalskda.</p>
<a href="#"> Spauskite, kad pamatytumėte visą katalogą</a>`;

let konteineris = document.querySelector(`.container`);

konteineris.innerHTML += '<div class="trecias-blokas"></div>';

let treciasb = document.querySelector(`.trecias-blokas`);

treciasb.innerHTML = `<h2>Blokas sukurtas per js</h2>`;
treciasb.innerHTML += `<p>tekstas sukurtas per js, hahahahahhahahahahahahahhahahahaha</p>`;

treciasb.querySelector(`p`).previousElementSibling.textContent = `Tekstas dar karta paredaguotas per js!! ir su previous!`;

konteineris.innerHTML += `<h3> ATSISVEIKINIMO ZODZIAI:</h3>`;

konteineris.querySelector(`h3`).textContent += `Viso gero, gero vejo!`