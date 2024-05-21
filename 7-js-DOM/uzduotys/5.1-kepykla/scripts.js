document.getElementById(`calculate`).addEventListener(`click`, () => {
    let employeesCount = document.getElementById(`employees-count`).valueAsNumber;
    let employeeMakesPerDay = document.getElementById(`employee-makes-per-day`).valueAsNumber;
    let dayReservations = document.getElementById(`day-reservations`).valueAsNumber;
    
    let bakeryTotal = employeesCount * employeeMakesPerDay;
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

    let resultsDiv = document.getElementById(`results`)

    resultsDiv.innerHTML = `<p><strong>Kepykla per dieną spės pagaminti:</strong> ${bakeryTotal} kepalų</p>`
    resultsDiv.innerHTML += `<p><strong>Kepyklai reikia spėti pagaminti:</strong> ${dayReservations} kepalų</p>`
    resultsDiv.innerHTML += `<p><strong>Ar kepykla spės pagaminti?</strong> ${isBakeryGonnaMakeIt ? 'Taip' : 'Ne'}</p>`
})

document.getElementById(`employees-count`).addEventListener(`keyup`, (event) => {
    let inputValue = event.target.valueAsNumber;


    if (inputValue < 0){
        event.target.classList.add(`error`)
        event.target.nextElementSibling.classList.add(`show`)
    } else {
        event.target.classList.remove(`error`)
        event.target.nextElementSibling.classList.remove(`show`)
    }
})

document.getElementById(`reset`).addEventListener(`click`, () => {
    document.getElementById(`employees-count`).value = 0;
    document.getElementById(`employee-makes-per-day`).value = 0;
    document.getElementById(`day-reservations`).value = 0;

    document.getElementById(`results`).innerHTML = `<p>Kol kas nieko nėra</p>`
})