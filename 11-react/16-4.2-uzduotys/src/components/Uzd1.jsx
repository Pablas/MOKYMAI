import { useState } from "react"

const Uzd1 = () => {

    const [pirmas, setPirmas] = useState(0)

    const [antras, setAntras] = useState(0)

    const pirmasHandler = (e) => {
        setPirmas(e.target.valueAsNumber)
    }

    const antrasHandler = (e) => {
        setAntras(e.target.valueAsNumber)
    }

    const greitesnis = () => {
        
        if (pirmas > antras){
            return <p>Antras bėgikas greitesnis!</p>
        } else if (pirmas < antras){
            return <p>Pirmas bėgikas greitesnis!</p>
        } else if (pirmas == antras) {
            return <p>Abu bėgikai nubėgo lygiai.</p>
        } 

        return <p></p>
    }

  return (
    <div className="blokas">
        <h2>Uzd1</h2>
        <label htmlFor="pirmasBeg" >1 bėgikas: </label>
        <input type="number" id="pirmasBeg" onInput={pirmasHandler}/>

        <br />

        <label htmlFor="antrasBeg" >2 bėgikas: </label>
        <input type="number" id="antrasBeg" onInput={antrasHandler}/>

        {greitesnis()}
    </div>
  )
}

export default Uzd1