

const Komp5 = () => {

    let medziai = [`Pusis`, `Egle`, `Kastonas`, `Azuolas`, `Liepa`]

    return (
        <div>
            <h2>Medziai:</h2>
            <ul>
                <li>{medziai[0]}</li>
                <li>{medziai[1]}</li>
                <li>{medziai[2]}</li>
                <li>{medziai[3]}</li>
                <li>{medziai[4]}</li>
            </ul>

            <h2>Medziai antra versija:</h2>
            <ul>
                {medziai.map((medis, indeksas) => <li key={indeksas}>{medis}</li>)}
            </ul>

            <h2>Medziai trecia versija:</h2>
            <ul>
                {medziai.map((medis, indeksas) => {
                    return <li key={indeksas}>{medis}</li> // return reikalingas kai kitoje eiluteje rasome.
                })}
            </ul>

            <h2>Medziai ketvirta versija:</h2>
            <ul>
                {
                    medziai.map((medis, indeksas) => (
                    <li key={indeksas}>{medis}</li> // jeigu atskiriame po rodykles () skliaustukais, nereikia rasyti return
                ))
                }
            </ul>
        </div>
    )
}

export default Komp5