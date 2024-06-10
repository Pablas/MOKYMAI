

const Uzd3 = () => {

    let skaicius = Math.ceil(Math.random() * 100);

    const arLyginisHandler = () => {
        alert(skaicius % 2 == 0 ? `Lyginis` : `Nelyginis`)
    }

    const arDidesnisUz30Handler = () => {
        alert(skaicius > 30 ? `Didesnis` : `Mažesnis`)
    }

    const arPirminisHandler = () => {
        alert(skaicius >= 1 ? `Pirminis` : `Ne pirminis`)
    }

  return (
    <div className="blokas">
        <h2>Skaičiaus {skaicius} patikra:</h2>
        <button onClick={arLyginisHandler}>Ar skaičius lyginis</button>
        <button onClick={arDidesnisUz30Handler}>Ar skaičius didesnis už 30</button>
        <button onClick={arPirminisHandler}>Ar skaičius pirminis?</button>
    </div>
  )
}

export default Uzd3