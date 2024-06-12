import { useRef } from "react"
import { useState } from "react"


const Uzd3 = () => {

    const [medziaguKaina, setMedziaguKaina] = useState(null)
    const [darboVal, setDarboVal] = useState(null)
    const [algaVal, setAlgaVal] = useState(null)

    const medziaguKainaRef = useRef()
    const darboValRef = useRef()
    const algaValRef = useRef()

    const patvirtintiHandler = () => {
        setMedziaguKaina(medziaguKainaRef.current.valueAsNumber)
        setDarboVal(darboValRef.current.valueAsNumber)
        setAlgaVal(algaValRef.current.valueAsNumber)

        //ivesties isvalymas:
        medziaguKainaRef.current.value = null
        darboValRef.current.value = null
        algaValRef.current.value = null
    }

    const projektoIslaidos = () => {
        return <p>Bendros projekto islaidos: {(darboVal * algaVal) + medziaguKaina} eur.</p>
    }

    const pardavimas = () => {
        return <p>Produkto kaina: {(((darboVal * algaVal) + medziaguKaina) / 100) * 130} eur.</p>
    }


    return (
        <div className="blokas">
            <h2>Uzd3</h2>
            <br />
            <input ref={medziaguKainaRef} id="kainavoMedziagosInput" type="number" />
            <label htmlFor="kainavoMedziagosInput"> eur., kainavo medziagos.</label>
            <br />
            <input ref={darboValRef} id="kiekDirboInput" type="number" />
            <label htmlFor="kiekDirboInput"> val., zmogus dirbo prie projekto.</label>
            <br />
            <input ref={algaValRef} id="valandinisUzdarbisInput" type="number" />
            <label htmlFor="valandinisUzdarbisInput"> valandinis uzdarbis.</label>
            <br />
            <button onClick={patvirtintiHandler}>Patvirtinti</button>

            <p>
                Medziagos kainavo: {medziaguKaina} eur.
                <br />
                Praleista prie projekto: {darboVal} val.
                <br />
                Uzdarbis: {algaVal} per val.
            </p>
            
            {projektoIslaidos()}

            {pardavimas()}
            
        </div>
    )
}

export default Uzd3