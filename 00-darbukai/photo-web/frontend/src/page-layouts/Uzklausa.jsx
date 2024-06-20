import { useState } from 'react'
import styles from './styles/Uzklausa.module.css'

const Uzklausa = () => {

    const [lentele, setLentele] = useState(``)

    const uzklausaPopUpHandler = () => {
        
        if (lentele === ``) {
            return setLentele(
                <div className={styles.form_block}>
                    <form onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="vardasInput">Vardas: </label>
                            <input type="text" id="vardasInput" />
                        </div>
                        <div>
                            <label htmlFor="pastasInput">El. paštas: </label>
                            <input type="email" id="pastasInput" />
                        </div>
                        <div>
                            <label htmlFor="dataInput">Norima data: </label>
                            <input type="date" id="dataInput" />
                        </div>
                        <div>
                            <label htmlFor="vietaInput">Šventės vieta: </label>
                            <input type="text" id="vietaInput" />
                        </div>
                        <button type="submit">Pateikti</button>
                        
                        <button onClick={suskleistiHandler}>Suskleisti</button>
                    </form>
                </div>
            )
        }
        
        else {
            <p>Uzstrigo</p>
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()


    }

    const suskleistiHandler = () => {
        return setLentele(``)
    }

    return (
        <div className={styles.main_block}>

            <div onClick={uzklausaPopUpHandler}>
                <p>Pateikti užklausą</p>
            </div>
            {lentele}

        </div>
    )
}

export default Uzklausa