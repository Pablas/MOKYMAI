let uzsakymoBusena = 'apmoketas';

// galima ir kompaktiskai viska surasyti:
switch (uzsakymoBusena) {
    case 'naujas': console.log(`<p class="naujas-uzs">Naujas užsakymas</p>`); break;
    case 'apmoketas': console.log(`<p class="apmoketas-uzs">Apmokėtas užsakymas</p>`); break;
    case 'issiustas': console.log(`<p class="issiustas-uzs">Išsiųstas užsakymas</p>`); break;
    case 'atsiimtas': console.log(`<p class="atsiimtas-uzs">Atsiimtas užsakymas</p>`); break;
    case 'baigtas': console.log(`<p class="baigtas-uzs">Baigtas užsakymas</p>`); break;
    case 'atmestas': console.log(`<p class="atmestas-uzs">Atmestas užsakymas</p>`); break;
    default: console.log(`<p class="klaida-uzs">Klaida</p>`); break;
}

