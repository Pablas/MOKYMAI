let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let history = [];

let calculationSpan = document.getElementById(`calculation`);
let input = document.getElementById(`calc-input`);

function onNumberClick(number){
    input.value += number;

    //
    //removina action button disable rezima:
    if (!(input.value.endsWith(` x `||` + `||` - `||` / `))){
        document.querySelector(`.daugyba`).disabled = false;
        document.querySelector(`.dalyba`).disabled = false;
        document.querySelector(`.suma`).disabled = false;
        document.querySelector(`.minusavimas`).disabled = false;
    }
}

function onActionClick (clickedAction) {
    input.value += ` ` + clickedAction + ' ';
    action = clickedAction;

    //
    // prideta kad neveiktu po action kitas action mygtukas:
    let negalimosPabaigos = [` x `, ` + `, ` - `, ` / `]

    for (const x of negalimosPabaigos) {
        if (input.value.endsWith(x)){
            document.querySelector(`.daugyba`).disabled = true;
            document.querySelector(`.dalyba`).disabled = true;
            document.querySelector(`.suma`).disabled = true;
            document.querySelector(`.minusavimas`).disabled = true;
        }
    }
    
}

function onCountClick(){
    let splitted = input.value.split(` `);
    firstNumber = parseInt(splitted[0])
    action = splitted[1];
    secondNumber = parseInt(splitted[2]);

    calculateAnswer()
    input.value = answer;

    calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`

    addToHistory()
}

function calculateAnswer(){
    switch (action) {
        case `x`: answer = firstNumber * secondNumber; break;
        case `-`: answer = firstNumber - secondNumber; break;
        case `+`: answer = firstNumber + secondNumber; break;
        case `/`: answer = firstNumber / secondNumber; break;
    }
}

function onClickClean() {
    firstNumber = 0;
    secondNumber = 0;
    action = `+`;
    answer = 0;
    input.value = ``;

    calculationSpan.innerText = ``;
}

function addToHistory(){
    let historyItem = {
        firstNumber,
        action,
        secondNumber,
        answer
    };
    history.push(historyItem)
}

function valytiIsGalo(){   
    if (input.value.endsWith(` `)){
        input.value = input.value.slice(0, -3);
    } else {
        input.value = input.value.slice(0, -1);
    }
}

document.getElementById(`show-history`).onclick = function(){
    let formatted = history.map(x => `<p>${firstNumber} ${action} ${secondNumber} = ${answer}</p>`)
    let historyBlock = document.querySelector(`.calculator .history-items`);
    
    document.querySelector(`.history-items`).style.display = `block`;
    historyBlock.innerHTML = formatted.join(``);
}

document.getElementById(`hide-history`).onclick = function(){
    document.querySelector(`.history-items`).style.display = `none`;
}




