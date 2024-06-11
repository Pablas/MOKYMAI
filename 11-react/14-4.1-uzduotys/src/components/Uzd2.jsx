import { useState } from "react"

const Uzd2 = () => {

    const [arPersoko, setArPersoko] = useState(true)

    const persoktiHandler = () => {
        let random = Math.ceil(Math.random() * 2);
        
        if (random === 1){
            setArPersoko(true)
        } else {
            setArPersoko(false)
        }
    }

    const suSparnaisHandler = () => {
        setArPersoko(true)
    }

    return (
        <div className="blokas">
            <h2>Uzd2</h2>
            <button onClick={persoktiHandler}>Peršokti</button>
            <button onClick={suSparnaisHandler}>Su sparnais šokti</button>
            <p>„Ar zuikis peršoko griovį - {arPersoko ? `taip` : `ne`}“</p>
        </div>
    )
}

export default Uzd2