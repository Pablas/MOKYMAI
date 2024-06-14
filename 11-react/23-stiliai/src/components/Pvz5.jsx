import stiliai from './Pvz5.module.css'

const Pvz5 = () => {
    return (
        <div className={stiliai.kartojasi}>
            <h2>Pvz5</h2>
            <p className={stiliai.pirma}>Tekstas 1</p>
            <p className={stiliai.antra}>Tekstas 2</p>

            <p className={stiliai.teksto_dydis + ` ` + stiliai.teksto_spalva}>Tekstas 3</p>
            <p className={`${stiliai.teksto_dydis} ${stiliai.teksto_spalva}`}>Tekstas 4</p>
            <p className={[stiliai.teksto_dydis, stiliai.teksto_spalva].join(` `)}>Tekstas 5</p>

            <div className={stiliai.blokas}>
                <p className={stiliai.kazkas}>Kazkoks stiliukas nr 1</p>
            </div>
        </div>
    )
}

export default Pvz5