const TekstoVaikinis = (props) => {

    const tikrinimas = () => {
        if (props.tekstas
            && props.tekstas.split(``).filter(f => f == `a`).length > 0) {
            return `Tekste yra "a" raidziu.`
        } else {
            return `Tekste nera "a" raidziu`
        }
    }

    return (
        <div>
            <p>------------</p>
            <p>Gautas tekstas: {props?.tekstas}</p>
            <p>Teksto ilgis: {props?.tekstas?.length}</p>
            <p>{tikrinimas()}</p>
        </div>
    )
}

export default TekstoVaikinis