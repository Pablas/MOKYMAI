import { useState, useRef } from "react"

const Komp3 = () => {

    const [zodis, setZodis] = useState(``)
    const [zodis2, setZodis2] = useState(``)

    const pirmasRef = useRef()
    const antrasRef = useRef()

    const buttonHandler = () => {
        setZodis(pirmasRef.current.value)
        setZodis2(antrasRef.current.value)

        //issivalyti:
        pirmasRef.current.value = ``
        antrasRef.current.value = ``
    }

    const daugiauAraidziu = () => {
        let pirmoRaides = zodis.toLowerCase().split(``).filter(x => x == `a`).length
        let antroRaides = zodis2.toLowerCase().split(``).filter(x => x == `a`).length

        return `Zodzio "a" raidziu kiekis: PIRMO: ${pirmoRaides}, ANTRO: ${antroRaides}`
    }

    return (
        <div className="blokas">
            <h2>Daugiau "a" raidziu:</h2>
            <div>
                <label htmlFor="pirmasInput">Pirmas zodis: </label>
                <input ref={pirmasRef} type="text" id="pirmasInput" />
            </div>
            <div>
                <label htmlFor="antrasInput">Antras zodis: </label>
                <input ref={antrasRef} type="text" id="antrasInput" />
            </div>
            <button onClick={buttonHandler}>Ivesti</button>
            <p>Pirmas zodis: {zodis}, Antras zodis: {zodis2}</p>
            <p>{daugiauAraidziu()}</p>
        </div> 
    )
}

export default Komp3