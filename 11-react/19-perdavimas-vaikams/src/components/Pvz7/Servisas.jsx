import Automobilis from "./Automobilis"

const Servisas = () => {

    let automobiliai = [
        { gamintojas: `Audi`, modelis: `A6` },
        { gamintojas: `BNW`, modelis: `X5` },
        { gamintojas: `Honda`, modelis: `Civic` },
        { gamintojas: `Mazda`, modelis: `6` },
        { gamintojas: `Toyota`, modelis: `Corolla` },
    ]



    return (
        <div className="blokas">
            <h2>Servisas</h2>

            <div>
                <Automobilis auto={automobiliai[0]} />
                <Automobilis auto={automobiliai[1]} />
                <Automobilis auto={automobiliai[2]} />
                <Automobilis auto={automobiliai[3]} />
                <Automobilis auto={automobiliai[4]} />
            </div>


            <div>
                {
                    automobiliai.map((x, i) => (
                        <Automobilis key={i} auto={x}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Servisas