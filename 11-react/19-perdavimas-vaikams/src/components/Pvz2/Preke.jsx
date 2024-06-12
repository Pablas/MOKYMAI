import React from 'react'

const Preke = (props) => {
  return (
    <div style={{ border: `1px solid grey` }}>
        <h3>{props?.pavadinimas}</h3>
        <p>Prekyboje turime {props?.kiekis} vnt.</p>
        <p>Kainuoja {props?.kaina} euru.</p>
    </div>
  )
}

export default Preke