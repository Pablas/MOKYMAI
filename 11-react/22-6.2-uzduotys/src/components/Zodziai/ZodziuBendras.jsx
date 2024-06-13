import React from 'react'
import { useState } from 'react'
import ZodziuIvedimas from './ZodziuIvedimas'

const ZodziuBendras = () => {

    const [zodziai, setZodziai] = useState([
        
    ])

    const gautasZd = (zd) => {
        setZodziai([zd, ...zodziai])
    }

    const ilgiausiasZd = () => {

        let ilgiausias = zodziai[0];

        for (const zd of zodziai) {
            if (zd.length > ilgiausias.length) {
                ilgiausias = zd;
            }
        }

        return ilgiausias
    }

    return (
        <div className='blokas'>
            <h2>Zodziai</h2>
            <ZodziuIvedimas onNaujasZodis={gautasZd}/>
            <ul>
                {   
                    zodziai.length > 0 &&
                    zodziai.map((zd, index) => (
                        <li key={index}>{zd}</li>
                    ))
                }
            </ul>
            {
                zodziai.length == 0 &&
                <p>Deja, nera ivestos informacijos</p>
            }

            {
                zodziai.length > 0 &&
                <p>Ilgiausias zodis: {ilgiausiasZd()}</p>
            }
        </div>
    )
}

export default ZodziuBendras