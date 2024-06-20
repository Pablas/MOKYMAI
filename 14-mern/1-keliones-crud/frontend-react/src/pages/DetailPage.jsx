import { useParams } from "react-router-dom" //kad pagal id galetu ieiti i sita puslapi, ima pavadinimo gala (ne failo id), LINKO GALA IMA!!! (is Route /:id - sitas naudojamas cia)


const DetailPage = () => {

    const { id } = useParams()

    return (
        <div>
            <h1>Kelione: { id }</h1>
        </div>
    )
}

export default DetailPage