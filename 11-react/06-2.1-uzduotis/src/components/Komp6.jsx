

const Komp6 = () => {
    let temperaturos = [15, 20, 25, 30, 35, 40];

    return (
        <div>
            <table>
                <tr>
                    <th>Eilės nr.</th>
                    <th>Temperatūra</th>
                </tr>
                {
                    temperaturos.map((k, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{k}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Komp6
