import { useState, useRef } from "react"

const Komp4 = () => {

    const [pazymiai, setPazymiai] = useState([10, 8, 4, 10, 7])

    const inputRef = useRef()

    const ivestiHandler = () => {
        let pazymys = inputRef.current.valueAsNumber;

        if(!isNaN(pazymys) && pazymys >= 1 && pazymys <=10){
            setPazymiai([...pazymiai, pazymys])
        } else {
            alert(`pazymys netinka`)
        }
    }

    const vidurkis = () => {
        return pazymiai.reduce((a, b) => a + b, 0) / pazymiai.length
    }

    const isvalytiPazymiusHandler = () => {
        setPazymiai([]) //isvalyti visus pazymius
    }

    return (
        <div className="blokas">
            <h2>Studento pazymiai</h2>
            <div>
                <h3>Naujo pazymio ivedimas</h3>
                <label htmlFor="pazymysInput">Iveskite pazymi</label>
                <input ref={inputRef} type="number" id="pazymysInput"/>
                <button onClick={ivestiHandler}>Ivesti</button>
                <button onClick={isvalytiPazymiusHandler}>VALYTI</button>
            </div>
            <div>
                <h3>Ivesti pazymiai</h3>
                {
                    pazymiai.length > 0 &&
                    <ul>
                        {
                            pazymiai.map((pazymys, indeksas) => (
                                <li key={indeksas}>{pazymys}</li>
                            ))
                        }
                    </ul>
                }
                <p>Vidurkis: {vidurkis()}</p>
            </div>
            
        </div>
    )
}

export default Komp4