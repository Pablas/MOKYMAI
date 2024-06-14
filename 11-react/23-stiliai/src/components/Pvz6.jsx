import stiliai from './Pvz6.module.css'

const Pvz6 = () => {
    return (
        <div className={stiliai.kartojasi}>
            <div className="container">
                <h2>Pvz 6</h2>
                <div className='skiltis'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, a.
                    </p>
                    <p className={`skiltis ` + stiliai.ypatingaSkiltis}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, atque!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pvz6