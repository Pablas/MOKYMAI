

const Uzd2 = () => {

    let skaicius = 23;

    const arTeigiamas = (sk) => {
        if (sk % 2 == 0){
            return <p>Skaičius {sk}, TEIGIAMAS.</p>
        } 
        
        return <p>Skaičius {sk}, NEIGIAMAS.</p>
    }

    const arLyginis = (sk) => {
        if (sk > 0){
            return <p>Skaičius {sk}, LYGINIS.</p>
        } 
        
        return <p>Skaičius {sk}, NELYGINIS.</p>
    }

    return (
        <div className="block">
            <h3>Skaičius {skaicius}</h3>
            {arTeigiamas(skaicius)}
            {arLyginis(skaicius)}
        </div>
    )
}

export default Uzd2