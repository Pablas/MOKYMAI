

const Komp8 = () => {

    let pageTitle = `Projekto pavadinimas`

    let links = [
        { id: 1, title: `Pradinis`, url: `/` },
        { id: 2, title: `Kontaktai`, url: `/kontaktai` },
        { id: 3, title: `Apie mus`, url: `/apie` },
        { id: 4, title: `Paslaugos`, url: `/paslaugos` },
    ]

    return (
        <div>
            <h2>{pageTitle}</h2>
                
                <ul>
                    {
                        links.map(link => (
                            <li key={link.id}>
                                <a href={link.url}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>

        </div>
    )
}

export default Komp8