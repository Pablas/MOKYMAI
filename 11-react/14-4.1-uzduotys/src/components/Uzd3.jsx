import { useState } from "react"

const Uzd3 = () => {

    const [greitis, setGreitis] = useState(0)

    const nulisHandler = () => {
        setGreitis(0)
    }

    const desimtHandler = () => {
        setGreitis(greitis + 10)
    }

    const aprasas = () => {
        switch (greitis) {
            case 0: 
            return <p>STOVITE</p>;
            
            case 10: 
            return <p>RIEDATE</p>;
            
            case 30: 
            return <p>VAŽIUOJATE</p>;
            
            case 50: 
            return <p>VIRŠIJATE LEISTINĄ GREITĮ</p>;

            case 100: 
            return <p>PAVOJINGAS GREITIS!</p>;
        }
    }

    return (
        <div className="blokas">
            <h2>Uzd3</h2>
            <button onClick={nulisHandler}>0 km/h</button>
            <button onClick={desimtHandler}>+ 10 km/h</button>
            <p>Greitis: {greitis} km/h</p>
            {aprasas()}
        </div>
    )
}

export default Uzd3