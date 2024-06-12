import Diena from "./Diena"


const Savaite = () => {

    let temperaturos = [10, 24, 25, 26, 14, 20]

    let stiliai = {
        background: `#f9f9f9`,
        padding: `10px`,
        margin: `10px`,
    }

    return (
        <div className="blokas">
            <h2>Savaite</h2>

            <div style={stiliai}>
                {
                    temperaturos.map((temp, i) => (
                        <p key={i}>Dienos temperatura: {temp}</p>
                    ))
                }
            </div>



            <div style={stiliai}>
                <Diena temp={temperaturos[0]}/>
                <Diena temp={temperaturos[1]}/>
                <Diena temp={temperaturos[2]}/>
                <Diena temp={temperaturos[3]}/>
                <Diena temp={temperaturos[4]}/>
            </div>



            <div style={stiliai}>
                {
                    temperaturos.map((x, i) => (
                        <Diena key={i} temp={x}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Savaite