import { useState } from "react"
import Kalbos from "./Kalbos"


const Programuotojas = () => {

    const [kalba, setKalba] = useState(``)

    const gaunuKalba = (x) => {
        setKalba(x)
    }

    const tikrinimas = () => {
        switch (kalba) {
            case `JavaScript`: return `Jega!`;
            case `C#`: return `rimtuolis`;
            case `PHP`: return `nemirstantis`;
            default: return ``;
        }
    }



    return (
        <div className="blokas">
            <h2>Programuotojas</h2>
            <p>Kokia tavo megstamiausia kalba?</p>
            <Kalbos onNewKalba={gaunuKalba} />
            {
                kalba &&
                <>
                    <p>Jusu pasirinkimas: {kalba}</p>
                    <p>{ tikrinimas() }</p>
                </>
            }
        </div>
    )
}

export default Programuotojas