

const Uzd6 = () => {

  let vardai = [`Tomas`, `Tadas`, `Petras`, `Robertas`]

  const randomVardas = () => {
    alert(vardai[Math.floor(Math.random() * vardai.length)])
  }

  return (
    <div className="blokas">
      <h2>Random studentas</h2>
      <button onClick={randomVardas}>Generuoti</button>
    </div>
  )
}

export default Uzd6