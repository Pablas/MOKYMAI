import { useState } from "react"

const Pvz2 = () => {

    const [zodis, setZodis] = useState(``)
    const [zodis2, setZodis2] = useState(``)

    const pirmasInputHandler = (e) => {
        setZodis(e.target.value)
    }

    const antrasInputHandler = (e) => {
        setZodis2(e.target.value)
    }

    const ilgiausiasZodis = () => {
        if (zodis.length > zodis2.length){
            return zodis;
        } else if (zodis.length < zodis2.length){
            return zodis2;
        } else {
            return `Abu žodžiai vienodo ilgio`
        }
    }

    return (
        <div className="blokas">
            <h2>Pvz2</h2>
            <div>
                <label htmlFor="pirmasInput">Pirmas žodis: </label>
                <input type="text" id="pirmasInput" onInput={pirmasInputHandler}/>
            </div>

            <div>
                <label htmlFor="antrasInput">Antras žodis: </label>
                <input type="text" id="antrasInput" onInput={antrasInputHandler}/>
            </div>
            {
                zodis && zodis2 &&
                <>
                    <p>
                        <strong>Įvesti žodžiai: </strong>
                        {zodis} ir {zodis2}
                    </p>
                    <p>
                        <strong>Ilgiausias žodis: </strong> {ilgiausiasZodis()}
                    </p>
                </>
            }
            {
                !zodis && !zodis2 && <p>Žodžiai neįvesti!</p>
            }

        </div>
    )
}

export default Pvz2