let specialistas = 'Programuotojas';
let atlyginimas = 2000;
let miestas = 'Klaipeda';

// noriu rasti specialista kuris butu programuotojas
// uzdirbtu virs 1000
//ir butu is vilniaus, kauno ar klaipedos

if (specialistas === 'Programuotojas' && atlyginimas > 1000 &&
    (miestas === 'Vilnius' || miestas === 'Kaunas' || miestas === 'Klaipeda')){
        console.log('radome')
    } else {
        console.log('neradome')
    }