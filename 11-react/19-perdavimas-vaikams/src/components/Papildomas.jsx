import { useState, useEffect } from "react";

const Papildomas = () => {
    const [gyvunai, setGyvunai] = useState([
        { id: 1, vardas: 'Katinas', amzius: 2 },
        { id: 2, vardas: 'Šuo', amzius: 3 },
        { id: 3, vardas: 'Paukštis', amzius: 2 },
    ]);

    const [jauniGyvunai, setJauniGyvunai] = useState([]);
    const [kiekJaunuGyvunu, setKiekJaunuGyvunu] = useState(gyvunai.filter(gyvunas => gyvunas.amzius < 3).length);

    const formaHandler = (event) => {
        event.preventDefault();
        // console.log(event);
        // console.log(event.target.elements.vardasInput.value);
        let vardas = event.target.elements.vardasInput.value;
        let amzius = event.target.elements.amziusInput.valueAsNumber;
        // console.log(vardas, amzius);
        let naujasGyvunas = {
            id: Date.now(),
            vardas: vardas, // tas pats kas: vardas
            amzius: amzius // tas pats kas: amzius
        }
        setGyvunai([...gyvunai, naujasGyvunas]);

        event.target.elements.vardasInput.value = '';
        event.target.elements.amziusInput.value = '';

        // setJauniGyvunai(gyvunai.filter(gyvunas => gyvunas.amzius < 3));
        // console.log(jauniGyvunai); // neveikia, nes atsilieka

        // setKazkas( prevData => [...prevData, naujaInfo] )
        // pvz:
        // setGyvunai([...gyvunai, naujasGyvunas]);
        // setGyvunai(prevGyvunai => [...prevGyvunai, naujasGyvunas2]);

        if (amzius < 3) {
            setKiekJaunuGyvunu(kiekJaunuGyvunu + 1);
        }
    }

    useEffect(() => {
        setJauniGyvunai(gyvunai.filter(gyvunas => gyvunas.amzius < 3));
    }, [gyvunai])

    return (
        <div className="blokas">
            <h2>Papildomas pavyzdys</h2>
            <form onSubmit={formaHandler}>
                <div>
                    <label htmlFor="vardasInput">Vardas:</label>
                    <input type="text" id="vardasInput" />
                </div>
                <div>
                    <label htmlFor="amziusInput">Amzius</label>
                    <input type="number" id="amziusInput" />
                </div>
                <button type="submit">Sukurti</button>
            </form>
            {
                gyvunai.length > 0 &&
                <ul>
                    {gyvunai.map(gyvunas => (
                        <li key={gyvunas.id}>
                            {gyvunas.vardas} - {gyvunas.amzius}
                        </li>
                    ))}
                </ul>
            }
            {
                gyvunai.filter(gyvunas => gyvunas.amzius < 3) &&
                <p>Jaunu gyvunu yra: { gyvunai.filter(gyvunas => gyvunas.amzius < 3).length }</p>
            }
            {
                kiekJaunuGyvunu > 0 &&
                <p>Jaunu gyvunu yra: { kiekJaunuGyvunu }</p>
            }
            {
                jauniGyvunai.length > 0 &&
                <p>Jaunu gyvunu yra: {jauniGyvunai.length}</p>
            }
        </div>
    )
}

export default Papildomas
