const Automobilis = (props) => {

    let { gamintojas, modelis } = props.auto;

    return (
        <div>
            <h3>{gamintojas} {modelis}</h3>
        </div>
    )
}

export default Automobilis