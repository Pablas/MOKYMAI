import React from 'react'

const GyvunoPakeitimas = (props) => {

    return (
        <div>
            <button onClick={() => props.pakeistas(`Liutas`)}>Liutas</button>
            <button onClick={() => props.pakeistas(`Dramblys`)}>Dramblys</button>
            <button onClick={() => props.pakeistas(`Zirafa`)}>Zirafa</button>
        </div>
    )
}

export default GyvunoPakeitimas