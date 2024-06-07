
const Pvz3 = () => {

    let students = [
        { id: 1, name: `John Smith`, grade: 8 },
        { id: 2, name: `Tom Tommy`, grade: 5 },
        { id: 3, name: `Miley Cyrus`, grade: 3 },
        { id: 4, name: `Tik Tak`, grade: 10 },
    ]

    const vidurkis = () => {
        return students.reduce((sum, student) => sum + student.grade, 0) / students.length;
    }

    const arTeigiamas = (pazymys) => {
        if (pazymys > 4){
            return `Taip`;
        } else {
            return `Ne`
        }
    }

    const arVirsVidurkio = (id) => {
        let studentas = students.find(s => s.id == id)

        if (studentas.grade > vidurkis()){
            return `Taip`
        }

        return `Ne` // nereikia else, jeigu tai lieka kaip kita reiksme, jei if nepaeina
    }

    return (
        <div className="blokas">
            <h2>Studentai</h2>

            <p>Bendras vidurkis: {vidurkis()}</p>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Vardas</th>
                        <th>Pazymys</th>
                        <th>Ar teigiamas?</th>
                        <th>Ar virs bendro vidurkio?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(x => (
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td>{x.grade}</td>
                                <td>{arTeigiamas(x.grade)}</td>
                                <td>{arVirsVidurkio(x.id)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Pvz3