import Studentas from "./Studentas"

const Grupe = () => {

    let pirmas = {
        vardas: `Jonas`,
        pavarde: `Jonaitis`,
        amzius: 25,
    }

    let antras = {
        vardas: `Petras`,
        pavarde: `Petraitis`,
        amzius: 22,
    }

  return (
    <div className="blokas">
        <h2>Grupe</h2>
        <Studentas duomenys={pirmas}/>
        <Studentas duomenys={antras}/>
    </div>
  )
}

export default Grupe