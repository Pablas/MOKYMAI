import './App.css'
import Antras from './components/Antras'
import Komp1 from './components/Komp1'
import Komp3 from './components/Komp3'
import Ketvirtas from './components/Ketvirtas'
import Parduotuve from './components/Parduotuve'
import Naujienos from './components/Naujienos'

function App() {
    return (
        <>
            {Komp1()} 
            <Komp1 />
            <Komp1></Komp1>

            <Antras></Antras>
            
            <Komp3></Komp3>

            <Ketvirtas></Ketvirtas>

            <Parduotuve></Parduotuve>

            <Naujienos></Naujienos>
        </>
    )
}

export default App
