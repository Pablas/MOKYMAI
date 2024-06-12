import Darbuotojas from "./Darbuotojas"

const Imone = () => {

    let darbuotojas1 = {
        vardas: `Jonas`,
        pavarde: `Jonaitis`,
        amzius: 25,
        pareigos: `Programuotojas`,
        atlyginimas: 1500,
    }

    let darbuotojas2 = {
        vardas: `Petras`,
        pavarde: `Petraitis`,
        amzius: 30,
        pareigos: `Dizaineris`,
        atlyginimas: 2500,
    }

    return (
        <div className="blokas">
            <h2>Imone</h2>
            <Darbuotojas duomenys={darbuotojas1}/>
            <Darbuotojas duomenys={darbuotojas2}/>
        </div>
    )
}

export default Imone