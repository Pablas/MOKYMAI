import React from 'react'
import Preke from './Preke'

const Parduotuve = () => {
  return (
    <div className='blokas'>
        <h2>Parduotuve</h2>
        <Preke pavadinimas="Flomasteriai" kaina="2" kiekis="200"/>
        <Preke pavadinimas="Piestukai" kaina="3" kiekis="180"/>
        <Preke kaina="10" pavadinimas="obuoliai" kiekis="20"/>
    </div>
  )
}

export default Parduotuve