

const Komp3 = () => {
    const clickHandler = () => {
        console.log(`paspaustas pirmas mygtukas`)
    }

    return (
        <>
            <h2>Komp3</h2>
            <button onClick={clickHandler}>Pirmas</button>
            <button>Antras</button>
        </>
    )
}

export default Komp3