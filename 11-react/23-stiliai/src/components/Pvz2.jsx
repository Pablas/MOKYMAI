import { useState } from 'react'
import './Pvz2.css'

const Pvz2 = () => {

    const [skaicius, setSkaicius] = useState(0)

    const didintiHandler = () => {
        setSkaicius(skaicius + 1)
    }

    const tekstoKlase = () => {
        if (skaicius < 10) {
            return `pvz2-zalias`
        } else if (skaicius < 20) {
            return `pvz2-geltonas`
        } else {
            return `pvz2-raudonas`
        }
    }

    const dvigubaKlase = () => {
        if (skaicius < 10) {
            return `pvz2-tekstas pvz2-fonas-zalias`
        }

        return `pvz2-tekstas pvz2-fonas-raudonas`
    }

    return (
        <div>
            <h2>Pvz2</h2>
            <button onClick={didintiHandler}>Didinti</button>
            <p className={tekstoKlase()}>{skaicius}</p>
            <p className={skaicius < 10 ? `pvz2-zalias` : `pvz2-raudonas`}>{skaicius}</p>

            <p className={dvigubaKlase()}>Trecias pavyzdys: {skaicius}</p>

            <p className={`pvz2-tekstas` + (skaicius < 10 ? `pvz2-fonas-zalias`: `pvz2-fonas-raudonas`)}>
                Ketvirtas pvz: {skaicius}
            </p>
        </div>
    )
}

export default Pvz2