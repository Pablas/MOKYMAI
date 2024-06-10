

const Uzd2 = () => {

    let randomSk = Math.ceil(Math.random() * 10)

    const patikrintiHandler = () => {
        alert(randomSk >= 5 ? `Laimėjai` : `Nelaimėjai`)
    }

  return (
    <div className="blokas">
        <h2>Šanso mygtukas:</h2>
        <button onClick={patikrintiHandler}>Bandyti</button>
    </div>
  )
}

export default Uzd2