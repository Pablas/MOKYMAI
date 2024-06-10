import './App.css'
import Komp1 from './components/Komp1'
import Komp2 from './components/Komp2'
import Komp3 from './components/Komp3'
import Komp4 from './components/Komp4'

function App() {
    return (
        <>
            <div className='blokas'>
                <Komp1 />
            </div>
            <div className='blokas'>
                <Komp2 />
            </div>
            <div className='blokas'>
                <Komp3 />
            </div>
            <div className='blokas'>
                <Komp4 />
            </div>
        </>
    )
}

export default App
