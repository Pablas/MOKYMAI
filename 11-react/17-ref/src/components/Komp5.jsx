import { useState, useRef } from "react"

const Komp5 = () => {

    const [automobiliai, setAutomobiliai] = useState([
        { marke: `Audi`, modelis: `A4`, metai: 2010, rida: 200000 },
        { marke: `BMW`, modelis: `320`, metai: 2015, rida: 150000 },
    ])



    return (
        <div className="blokas">
            <h2>Automobiliai</h2>
            <h3>Naujo ivedimas</h3>
            <form>
                <div>
                    <label htmlFor="markeInput" >Marke </label>
                    <input type="text" id="markeInput" />
                </div>
                <div>
                    <label htmlFor="modelisInput" >Modelis </label>
                    <input type="text" id="modelisInput" />
                </div>
                <div>
                    <label htmlFor="metaiInput" >Metai </label>
                    <input type="text" id="metaiInput" />
                </div>
                <div>
                    <label htmlFor="ridaInput" >Rida </label>
                    <input type="text" id="ridaInput" />
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
                automobiliai.length == 0 &&
                <p>Automobiliu nera.</p>
            }
        </div>
    )
}

export default Komp5