

const Komp7 = () => {

    let pirmas = [`Kaunas`, `Vilnius`, `Klaipeda`]
    let antras = []

    //{klausymas && taip} - jei klausymas yra true, tada atvaizduojama taip ir pagal tai pritaikom salygas

    return (
        <div>
            <h2>Pirmi miestai:</h2>
            {
                pirmas.length > 0 // atskirai rasomas kad kaip true
                &&
                <p>Duomenu yra</p>
            }
            {
                pirmas.length == 0 // gaunamas irgi true, bet jau kita reiksme, ir spausdinam kitoki teksta
                &&
                <p>Duomenu nera</p>
            }




            <h2>Antri miestai:</h2>
            {antras.length > 0 && <p>Duomenu yra</p>}
            {antras.length == 0 && <p>Duomenu nera</p>}





            <h2>Pirmi miestai 2:</h2>
            {pirmas.length > 0
                &&
                <ul>
                    {
                        pirmas.map((x, i) => (
                            <li key={i}>{x}</li>
                        ))
                    }
                </ul>}

            {pirmas.length == 0
                &&
                <p>Duomenu nera</p>}


        </div>
    )
}

export default Komp7