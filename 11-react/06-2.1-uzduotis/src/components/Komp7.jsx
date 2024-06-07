

const Komp7 = () => {
    let straipsniai = [
        {
            id: 1,
            pavadinimas: 'Pirmas straipsnis',
            tekstas: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        },
        {
            id: 2,
            pavadinimas: 'Antras straipsnis',
            tekstas: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        },
        {
            id: 3,
            pavadinimas: 'Trečias straipsnis',
            tekstas: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        },
    ];

    return (
        <div>
            <h1>Straipsniai</h1>
            {
                straipsniai.map(x => (
                    <div key={x.id} className="straipsnis">
                        <h3>{x.pavadinimas}</h3>
                        <p>{x.tekstas}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default Komp7
