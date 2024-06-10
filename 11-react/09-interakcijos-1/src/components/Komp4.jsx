

const Komp4 = () => {

    const pirmasHandler = () => {
        alert(`Pirmas veiksmas`)
    }

    const antrasHandler = () => {
        alert(`Antras veiksmas`)
    }

    return (
        <>
            <h2>Komp4</h2>
            <button onClick={pirmasHandler}>Pirmas</button>
            <button onClick={antrasHandler}>Antras</button>
            <button onClick={antrasHandler}>Trecias</button>
        </>
    )
}

export default Komp4