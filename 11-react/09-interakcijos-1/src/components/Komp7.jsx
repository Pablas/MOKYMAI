

const Komp7 = () => {

    let skaicius = 8;

    const tikrintiHandler = () => {
        if (skaicius >= 10) {
            alert(`daugiau arba lygu 10`)
        } else {
            alert(`maziau nei 10`)
        }
    }

    return (
        <>
            <h2>Komp7</h2>
            <button onClick={tikrintiHandler}>Patikrinti</button>
        </>
    )
}

export default Komp7