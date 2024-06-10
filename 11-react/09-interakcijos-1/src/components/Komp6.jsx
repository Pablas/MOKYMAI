

const Komp6 = () => {

    const generuotiSkaiciuHandler = () => {
        let skaicius = Math.ceil(Math.random() * 100);
        alert(`Slaptas skaicius:` +  skaicius)
    }

    return (
        <>
            <h2>Komp6</h2>
            <button onClick={generuotiSkaiciuHandler}>Slaptas skaicius</button>
        </>
    )
}

export default Komp6