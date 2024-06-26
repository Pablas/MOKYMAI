import { useRef, useState } from "react"
import PropTypes from 'prop-types'

const NaujaPreke = (props) => {

    const [klaidaPavadinimas, setKlaidaPavadinimas] = useState(``);
    const [klaidaKaina, setKlaidaKaina] = useState(``);


    const pavadinimasRef = useRef()
    const kainaRef = useRef()

    const formSubmitHandler = (e) => {
        e.preventDefault()
        
        let naujaPreke = {
            id: Date.now(),
            pavadinimas: pavadinimasRef.current.value,
            kaina: kainaRef.current.valueAsNumber,
        }

        setKlaidaPavadinimas(``)
        setKlaidaKaina(``)


        let arYraKlaida = false;

        // klaidos per kintamuosius:
        if (naujaPreke.pavadinimas.trim() === ``){
            arYraKlaida = true;
            setKlaidaPavadinimas(`Pavadinimas yra butinas!`)
        } else if (naujaPreke.pavadinimas.trim().length < 3){
            arYraKlaida = true;
            setKlaidaPavadinimas(`Pavadinimas per trumpas`)
        } else if (naujaPreke.pavadinimas.trim().length > 20){
            arYraKlaida = true;
            setKlaidaPavadinimas(`Pavadinimas per ilgas`)
        }


        if (isNaN(naujaPreke.kaina)){
            arYraKlaida = true;
            setKlaidaKaina(`Kaina yra butina!`)
        } else if (naujaPreke.kaina <= 0){
            arYraKlaida = true;
            setKlaidaKaina(`Kaina per maza!`)
        }


        if (!arYraKlaida){ //false jei reiksme, tas pats kaip `arYraKlaida == false`;
            props.onPrekeSukurta(naujaPreke)

            //issivalyti laukelius:
            pavadinimasRef.current.value = ``
            kainaRef.current.value = ``
        }


        
    }
 
    return (
        <div>
            <h3>Nauja preke</h3>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="pavadinimas">Pavadinimas: </label>
                    <input ref={pavadinimasRef} type="text" id="pavadinimas" />
                    {
                        klaidaPavadinimas && <p style={{color: `red`, marginTop: `0`}}>{klaidaPavadinimas}</p>
                    }
                </div>
                <div>
                    <label htmlFor="kaina">Kaina: </label>
                    <input ref={kainaRef} type="number" id="kaina"/>
                    {
                        klaidaKaina && <p style={{color: `red`, marginTop: `0`}}>{klaidaKaina}</p>
                    }
                </div>
                <button type="submit">Sukurti</button>
            </form>
        </div>
    )
}

NaujaPreke.propTypes = {
    onPrekeSukurta: PropTypes.func.isRequired
}

export default NaujaPreke