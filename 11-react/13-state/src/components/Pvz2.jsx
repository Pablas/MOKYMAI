import { useState } from "react"

const Pvz2 = () => {

    let zodziai = [`Panda`, `Meska`, `Gyvate`, `Liutas`, `Iguana`];

    const [istrauktas, setIstrauktas] = useState(`---`);

    const mygtukasHandler = () => {
        let randomIndekstas = Math.floor(Math.random() * zodziai.length);
        let parinktas = zodziai[randomIndekstas];

        setIstrauktas(parinktas);
    }

    return (
        <div className="blokas">
            <h2>Random žodis</h2>
            <button onClick={mygtukasHandler}>Traukit</button>
            <p>Ištrauktas žodis yra: {istrauktas}</p>
        </div>
    )
}

export default Pvz2