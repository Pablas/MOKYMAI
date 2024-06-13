

const Mygtukai = (props) => {

    const pasirinktiKava = () => {
        props.issiusti(`kava`)
    }

    const pasirinkitArbata = () => {
        props.issiusti(`arbata`)
    }

    const pasirinkitLimonada = () => {
        props.issiusti(`limonadas`)
    }

    const pasirinkitVandeni = () => {
        props.issiusti(`vanduo`)
    }

    return (
        <div>
            <button onClick={pasirinktiKava}>Kava</button>
            <button onClick={pasirinkitArbata}>Arbata</button>
            <button onClick={pasirinkitLimonada}>Limonadas</button>
            <button onClick={pasirinkitVandeni}>Vanduo</button>
        </div>
    )
}

export default Mygtukai