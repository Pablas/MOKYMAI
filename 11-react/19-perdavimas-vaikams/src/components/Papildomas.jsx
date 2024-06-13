import { useState, useRef } from "react"

const Papildomas = () => {

    const [gyvunai, setGyvunai] = useState([
        { id: 1, vardas: `Katinas`, amzius: 2},
        { id: 2, vardas: `Suo`, amzius: 3},
        { id: 3, vardas: `Paukstis`, amzius: 2},
    ])

    const formaHandler = (event) => {
        event.preventDefault();

        let vardas = event.target.elements.vardasInput.value;
        let amzius = event.target.elements.amziusInput.value;
        
        let naujasGyvunas = {
            id: Date.now(),
            vardas: vardas,
            amzius: amzius
        }

        setGyvunai([...gyvunai, naujasGyvunas])
    }

    return (
        <div className="blokas">
            <h1>PAPILDOMAS PVZ:</h1>

            <form onSubmit={formaHandler}>
                <div>
                    <label htmlFor="vardasInput">Vardas:</label>
                    <input type="text" id="vardasInput"/>
                </div>
                <div>
                    <label htmlFor="amziusInput">Amzius:</label>
                    <input type="text" id="amziusInput"/>
                </div>
                <button type="submit">Sukurti</button>
            </form>

            {
                gyvunai.length &&
                <ul>
                    {gyvunai.map(gyv => (
                        <li key={gyv.id}>
                            {gyv.vardas} - {gyv.amzius}
                        </li>
                    ))}
                </ul>
            }


        </div>
    )
}

export default Papildomas