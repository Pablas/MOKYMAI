import './Naujienos.css'
import Naujiena from "./Naujiena"

const Naujienos = () => {
    return (
        <div>
            <h2>Naujienos</h2>
            <div className="naujienu-list">
                <Naujiena></Naujiena>
                <Naujiena></Naujiena>
                <Naujiena></Naujiena>
            </div>
        </div>
    )
}

export default Naujienos