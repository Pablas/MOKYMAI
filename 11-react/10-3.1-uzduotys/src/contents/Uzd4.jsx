

const Uzd4 = () => {

    const koksMedisHandler = (medis) => {
        if (medis == `Uosis`){
            alert(`oho koks rimtas Uosis`)
        } else if (medis == `Ąžuolas`){
            alert(`labai mielas raštas Ąžuolas`)
        } else if (medis == `Liepa`){
            alert(`sadplaspd Liepa`)
        }
    }


  return (
    <div className='blokas'>
        <h2>Medžiai:</h2>
        <button onClick={ () => koksMedisHandler(`Uosis`) }>Uosis</button>
        <button onClick={ () => koksMedisHandler(`Ąžuolas`) }>Ąžuolas</button>
        <button onClick={ () => koksMedisHandler(`Liepa`) }>Liepa</button>
    </div>
  )
}

export default Uzd4