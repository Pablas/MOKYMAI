const Pvz3 = () => {

    let trecioStiliai = {
        background: `black`,
        color: `white`,
        padding: `20px 40px`,
        fontSize: `24px`,
    }

    return (
        <div>
            <h2>Pvz3</h2>
            <p style={{ background: `black`, color: `orange`}}>Tekstas 1</p>
            <p style={{ background: `orange`, fontSize: `20px`}}>Tekstas 2</p>
            <p style={trecioStiliai}>Tekstas 3</p>
            <p className="bendras-teksto-stilius" style={{color: `red`}}>Tekstas 4</p>
            
        </div>
    )
}

export default Pvz3