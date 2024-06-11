import { useState, useRef } from "react"

const Komp5 = () => {

    const [automobiliai, setAutomobiliai] = useState([
        { marke: `Audi`, modelis: `A4`, metai: 2010, rida: 200000 },
        { marke: `BMW`, modelis: `320`, metai: 2015, rida: 150000 },
    ])

    const markeRef = useRef()
    const modelisRef = useRef()
    const metaiRef = useRef()
    const ridaRef = useRef()

    const newCarHandler = (e) => {
        e.preventDefault()

        let naujasAutomobilis = {
            marke: markeRef.current.value,
            modelis: modelisRef.current.value,
            metai: metaiRef.current.valueAsNumber,
            rida: ridaRef.current.valueAsNumber,
        }

        setAutomobiliai([...automobiliai, naujasAutomobilis])

        //issivalymai laukelio po ivedimo:
        markeRef.current.value = ``
        modelisRef.current.value = ``
        metaiRef.current.valueAsNumber = ``
        ridaRef.current.valueAsNumber = ``
    }

    const naujausiasAuto = () => {
        let naujausias = automobiliai[0];

        for (const auto of automobiliai) {
            if (auto.metai > naujausias.metai){
                naujausias = auto;
            }
        }

        return `${naujausias.marke} ${naujausias.modelis} pagamintas ${naujausias.metai} metais, nuvažiavo ${naujausias.rida}`
    }

    return (
        <div className="blokas">
            <h2>Automobiliai</h2>
            <h3>Naujo ivedimas</h3>
            <form onSubmit={newCarHandler}>
                <div>
                    <label htmlFor="markeInput" >Marke </label>
                    <input ref={markeRef} type="text" id="markeInput" />
                </div>
                <div>
                    <label htmlFor="modelisInput" >Modelis </label>
                    <input ref={modelisRef} type="text" id="modelisInput" />
                </div>
                <div>
                    <label htmlFor="metaiInput" >Metai </label>
                    <input ref={metaiRef} type="number" id="metaiInput" />
                </div>
                <div>
                    <label htmlFor="ridaInput" >Rida </label>
                    <input ref={ridaRef} type="number" id="ridaInput" />
                </div>
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>

            <h3>Turimi automobiliai</h3>
            {
                automobiliai.length > 0 &&
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Marke</th>
                            <th>Modelis</th>
                            <th>Metai</th>
                            <th>Rida</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            automobiliai.map((auto, index) => (
                                <tr key={index}>
                                    <td>{auto.marke}</td>
                                    <td>{auto.modelis}</td>
                                    <td>{auto.metai}</td>
                                    <td>{auto.rida}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
            {
                !automobiliai.length == 0 &&
                <p>Naujausias auto: {naujausiasAuto()}</p>
            }
            {
                automobiliai.length == 0 &&
                <p>Automobiliu nera.</p>
            }
        </div>
    )
}

export default Komp5