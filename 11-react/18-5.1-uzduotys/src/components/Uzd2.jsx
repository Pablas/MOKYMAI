import { useState, useRef } from "react"

const Uzd2 = () => {

    const [kmKelione, setKmKelione] = useState(null)
    const [kuroSanaudos, setKuroSanaudos] = useState(null)
    const [litroKaina, setLitroKaina] = useState(null)

    const kmKelioneRef = useRef()
    const kuroSanaudosRef = useRef()
    const litroKainaRef = useRef()

    const ivestiHandler = () => {
        setKmKelione(kmKelioneRef.current.valueAsNumber)
        setKuroSanaudos(kuroSanaudosRef.current.valueAsNumber)
        setLitroKaina(litroKainaRef.current.valueAsNumber)

        //isvalyti:
        kmKelioneRef.current.value = null
        kuroSanaudosRef.current.value = null
        litroKainaRef.current.value = null
    }

    const kuroIsnaudota = () => {
        if (kmKelione == null || kuroSanaudos == null || litroKaina == null){
            return <p></p>
        }

        return <p>Kelioneje bus isnaudota: {(kmKelione / 100) * kuroSanaudos} litru kuro</p>
    }

    const kuroKaina = () => {
        if (kmKelione == null || kuroSanaudos == null || litroKaina == null){
            return <p></p>
        }

        return <p>Kuras kainuos: {((kmKelione / 100) * kuroSanaudos) * litroKaina} eur</p>
    }


    return (
        <div className="blokas">
            <h2>Uzd2</h2>
            <input ref={kmKelioneRef} type="number" id="kiekNuvziuosiuKmInput" />
            <label htmlFor="kiekNuvziuosiuKmInput"> km kelione.</label>
            <br />
            <input ref={kuroSanaudosRef} type="number" id="kuroSanaudos100KmInput" />
            <label htmlFor="kuroSanaudos100KmInput"> automobilio kuro sanaudos 100km.</label>
            <br />
            <input ref={litroKainaRef} type="number" id="kainaVienoLitroInput" />
            <label htmlFor="kainaVienoLitroInput"> litro kuro kaina.</label>
            <br />
            <button onClick={ivestiHandler}>Ivesti</button>

            <p>Keliones atstumas: {kmKelione} km. Automobilio sanaudos: {kuroSanaudos} l/km. Litro kaina: {litroKaina} eur.</p>

            {kuroIsnaudota()}

            {kuroKaina()}
        </div>
    )
}

export default Uzd2