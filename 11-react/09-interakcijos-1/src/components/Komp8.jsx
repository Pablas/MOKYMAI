

const Komp8 = () => {

    let slaptasSkaicius = Math.ceil(Math.random() * 3)

    const speti1Handler = () => { 
        alert(slaptasSkaicius === 1 ? `Atspejai` : `Neatspejai`)
    }
    const speti3Handler = () => {
        alert(slaptasSkaicius === 2 ? `Atspejai` : `Neatspejai`)
    }
    const speti2Handler = () => {
        alert(slaptasSkaicius === 3 ? `Atspejai` : `Neatspejai`)
    }

    return (
        <>
            <h2>Komp8</h2>
            <button onClick={speti1Handler}>Speti 1</button>
            <button onClick={speti2Handler}>Speti 2</button>
            <button onClick={speti3Handler}>Speti 3</button>
        </>
    )
}

export default Komp8