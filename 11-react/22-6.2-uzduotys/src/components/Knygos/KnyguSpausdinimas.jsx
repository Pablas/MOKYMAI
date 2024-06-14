const KnyguSpausdinimas = (props) => {

    const knyguMasyvas = props.visosKnygos

    const valytiHandler = () => {

        let isvalytasMasyvas = []
        props.onValyti(isvalytasMasyvas)

    }

    return (
        <div>
            {
                knyguMasyvas.length > 0 &&
                knyguMasyvas.map((k, i) => (
                    <p key={i}>Knyga: {k.pavadinimas}, isleista: {k.metai}, kaina: {k.kaina}</p>
                ))
            }
            {
                knyguMasyvas.length < 1 &&
                <p>Siuo metu knygu nera</p>
            }
            {   
                knyguMasyvas.length > 0 &&
                <button onClick={valytiHandler}>Isvalyti knygas</button>
            }
            
        </div>
    )
}

export default KnyguSpausdinimas