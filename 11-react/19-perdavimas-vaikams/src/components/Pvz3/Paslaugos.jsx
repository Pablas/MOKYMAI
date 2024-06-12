import Paslauga from "./Paslauga"

const Paslaugos = () => {

    let pirmaPavadinimas = `Prekyba turgavieteje`
    let pirmaKategorija = `Prekyba`
    
  return (
    <div className="blokas">
        <h2>Paslaugos</h2>
        <Paslauga pavadinimas="SEO" kategorija="Marketingas"/>
        <Paslauga pavadinimas={pirmaPavadinimas} kategorija={pirmaKategorija}/>
    </div>
  )
}

export default Paslaugos