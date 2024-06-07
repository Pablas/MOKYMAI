

const Komp6 = () => {

    let pirmas = [`Kaunas`, `Vilnius`, `Klaipeda`]
    let antras = []


    //ternary operator: {klausymas ? taip : ne}

    return (
        <div>
            <h2>Pirmi miestai:</h2>
            {
                pirmas.length > 0 //salyga, ir issivedimas, jeigu yra duomenys ar nera, kas spausdinama:
                    ?
                    <p>Duomenu yra</p>
                    :
                    <p>Duomenu nera</p>
            }

            <h2>Pirmi miestai 2</h2>

            {
                pirmas.length > 0 // taip pat kaip anam pvz, tik jeigu yra duomenu, mes ir spausdiname su map (paimdami kiekviena duomeni).
                    ?
                    <ul>
                        {
                            pirmas.map((miestas, index) => (
                                <li key={index}>{miestas}</li>
                            ))
                        }
                    </ul>
                    :
                    <p>Duomenu nera</p> // ojei nera, ismeta, kad nera
            }

            <h2>Antri miestai:</h2>

            {
                antras.length > 0
                    ?
                    <p>Duomenu yra</p>
                    :
                    <p>Duomenu nera</p>
            }

            <h2>Antri miestai 2:</h2>

            {
                antras.length > 0
                    ?
                    <ul>
                        {
                            antras.map((x, i) => (
                                <li key={i}>{x}</li>
                            ))
                        }
                    </ul>
                    :
                    <p>Duomenu nera</p>
            }
        </div>
    )
}

export default Komp6