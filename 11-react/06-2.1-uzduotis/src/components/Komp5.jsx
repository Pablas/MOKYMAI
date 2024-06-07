

const Komp5 = () => {
    let spalvos = ['raudona', 'geltona', 'žalia', 'mėlyna', 'violetinė'];

    return (
        <div>
            <ol>
                {
                    spalvos.map((x, i) => (
                        <li key={i}>{x}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Komp5
