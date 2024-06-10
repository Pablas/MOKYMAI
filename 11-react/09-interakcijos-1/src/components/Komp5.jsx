

const Komp5 = () => {

    const mygtukoHandler = (event) => { //galima rasyti betka vietoj 'event' kaip funkcijoj
        console.dir(event.target.textContent) //'target' ir t.t. leidzia targetinti mygtuka ir rodo koks mygtukas buvo paspaustas, nors ir tas pats handler:
        let tekstas = event.target.textContent
        alert (`paspaudei ant mygtuko: ${tekstas}`)
    }

    return (
        <>
            <h2>Komp5</h2>
            <button onClick={mygtukoHandler}>Pirmas</button>
            <button onClick={mygtukoHandler}>Antras</button>
        </>
    )
}

export default Komp5