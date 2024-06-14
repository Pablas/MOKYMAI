import { useState } from "react"

const Pvz4 = () => {

    const [progresas, setProgresas] = useState({
        width: `0%`,
        background: `limegreen`,
        height: `100%`,
        transition: `width 0.5s ease-in-out`
    })

    const makeProgressHandler = () => {
        let perskaiciuotas = parseInt(progresas.width.slice(0, progresas.width.length -1)) + 10;

        
        if (perskaiciuotas <= 100){
            setProgresas({...progresas, width: `${perskaiciuotas}%`})
        }
    }

    const isvalytiHandler = () => {
        setProgresas({...progresas, width: `0%`})
    }

    return (
        <div>
            <h2>Pvz4</h2>
            <button onClick={makeProgressHandler}>Didinti</button>
            {   
                progresas.width !== `0%` &&
                <button onClick={isvalytiHandler}>Isvalyti</button>
            }
            
            <div style={{ background: `#f8f8f8`, height: `50px`, margin: `20px` }}>
                <div style={progresas}></div>
            </div>
        </div>
    )
}

export default Pvz4