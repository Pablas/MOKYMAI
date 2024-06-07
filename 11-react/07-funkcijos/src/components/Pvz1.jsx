
const Pvz1 = () => {

    let skaicius = 92;
    let antras = 74;

    function arLyginis() {
        if (skaicius % 2 == 0) {
            return `lyginis`;
        } else {
            return `nelyginis`;
        }
    }

    const arTeigiamas = (sk) => {
        if (sk > 0){
            return `teigiamas`;
        } else if (sk < 0){
            return `neigiamas`;
        } else {
            return `nulis`;
        }
    }

    return (
        <div className="blokas">
            <h2>Pvz1</h2>
            <p>{skaicius}</p>
            <p>{skaicius}</p>
            <p>{9 + 3}</p>
            <p>4 * 2 = {4 * 2}</p>
            <p>Dvigubintas skaicius: {skaicius} reiksme {skaicius * 2}</p>
            <p>{skaicius / 2} - padalinta is dvieju</p>
            <p>{skaicius} + {antras} = {skaicius + antras}</p>
            <p>{skaicius % 2 == 0 ? `lyginis` : `nelyginis`}</p>

            <p>{arLyginis()}</p>
        
            <p>{ antras } yra { arTeigiamas(antras) }</p>
        </div>

    )
}

export default Pvz1