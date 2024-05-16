let role = 'guest';


if (role == 'admin') {
    console.log('jūs galite peržiūrėti, atnaujinti, pridėti ir šalinti')
} else if (role == 'moderator') {
    console.log('jūs galite peržiūrėti ir atnaujinti')
} else if (role == 'user') {
    console.log('jūs galite peržiūrėti')
} else if (role == 'guest') {
    console.log('jūs galite tik prisijungti')
} else {
    console.log('klaida')
}

//su switch lengviau pasiraso:
switch (role) {
    case 'admin':
        console.log('jūs galite peržiūrėti, atnaujinti, pridėti ir šalinti')
        break;
    case 'moderator':
        console.log('jūs galite peržiūrėti ir atnaujinti')
        break;
    case 'user':
        console.log('jūs galite peržiūrėti')
        break;
    case 'guest':
        console.log('jūs galite tik prisijungti')
        break;
    default:
        console.log('klaida')
        break;
}