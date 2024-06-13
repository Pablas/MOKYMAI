const PrekiuIsvedimas = (props) => {

    let prekiuMasyvas = props.data;

    return (
        <div>
            <h3>Turimos prekes:</h3>
            {
                prekiuMasyvas.length > 0 &&

                <div style={{ display: `flex`, flexWrap: `wrap`, gap: `20px` }}>
                    {
                        prekiuMasyvas.map(preke => (
                            <div key={preke.id} style={{background: `#f9f9f9`, padding: `20px 40px`}}>
                                <h4>{preke.pavadinimas}</h4>
                                <p>Kainuoja: {preke.kaina}</p>
                            </div>
                        ))
                    }
                </div>
            }
            {
                prekiuMasyvas.length === 0 &&
                <p>Prekiu siuo metu nera.</p>
            }
        </div>
    )
}

export default PrekiuIsvedimas