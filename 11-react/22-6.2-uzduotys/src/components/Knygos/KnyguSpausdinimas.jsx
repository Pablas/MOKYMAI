const KnyguSpausdinimas = (props) => {

    const knyguMasyvas = props.visosKnygos

    const valytiHandler = () => {

        

    }

    return (
        <div>
            {   
                knyguMasyvas.length > 0 &&
                <button onClick={valytiHandler}>Isvalyti knygas</button>
            }
            
        </div>
    )
}

export default KnyguSpausdinimas