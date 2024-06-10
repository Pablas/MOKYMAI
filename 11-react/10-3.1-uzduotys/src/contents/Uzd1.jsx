

const Uzd1 = () => {

    const laimekHandler = () => {
        alert(`Laimėjai 100 eur!!!`)
    }

  return (
    <div className="blokas">
        <h2>Nori 100 eur?</h2>
        <button onClick={laimekHandler}>Paspausk ir laimėsi 100 eur!</button>
    </div>
  )
}

export default Uzd1