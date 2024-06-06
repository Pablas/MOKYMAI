import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="brand">
                    <a href="#">Projektas</a>
                </div>
                <ul>
                    <li>
                        <a href="#">Link 1</a>
                    </li>
                    <li>
                        <a href="#">Link 2</a>
                    </li>
                    <li>
                        <a href="#">Link 3</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar