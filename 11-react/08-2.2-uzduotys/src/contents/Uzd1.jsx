

const Uzd1 = () => {

    let zodis = `NEMATOMAS`

    const zodisIlgis = () => {
        return zodis.length
    }

    return (
        <div className="block">
            <h3>{zodis}, žodžio ilgis: {zodisIlgis()}</h3>
        </div>
    )
}

export default Uzd1