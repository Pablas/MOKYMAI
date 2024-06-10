

const Komp9 = () => {

    let skaiciusRandom = Math.ceil(Math.random() * 3)

    const tikrintiHandler = (skaicius) => {
        alert(skaiciusRandom === skaicius ? `Atspejai` : `Neatspejai`)
    }

    return (
        <>
            <h2>Komp9</h2>
            <button onClick={ () => tikrintiHandler(1) }>Speti 1</button>
            <button onClick={ () => tikrintiHandler(2) }>Speti 2</button>
            <button onClick={ () => tikrintiHandler(3) }>Speti 3</button>
        </>
    )
}

export default Komp9