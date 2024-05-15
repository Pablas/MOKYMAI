let uzsakymoBusena = 'patvirtintas';

if (uzsakymoBusena == 'naujas'){
    console.log('<p class="pilkas">Naujai sukurtas uzsakymas</p>');
} else if (uzsakymoBusena == 'patvirtintas'){
    console.log('<p class="geltonas">Uzsakymas apmoketas</p>')
} else if (uzsakymoBusena == 'issiustas'){
    console.log('<p class="orange">Uzsakymas issiustas</p>')
} else if (uzsakymoBusena == 'baigtas'){
    console.log('<p class="zalias">Uzsakymas baigtas</p>')
}