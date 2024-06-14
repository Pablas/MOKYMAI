import ServiceBox from '../shared/ServiceBox'
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <h1>Projekto pavadinimas</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum deleniti magnam doloribus sed quaerat unde possimus nam optio voluptatem!</p>
                    <Link to='/paslaugos'>Mūsų paslaugos</Link>
                </div>
            </header>

            <div className='section'>
                <div className="container">
                    <h2 className='section-title'>Paslaugos</h2>
                    <div className={styles.services_list}>
                        <ServiceBox title='Ratų balansavimas' description='Gerai balansuojame jūsų padangėles' />
                        <ServiceBox title='Padangų remontas' description='Visų tipų padangų remontas' />
                        <ServiceBox title='Ratų geometrija' description='Profesionalus ratų geometrijos tikrinimas' />
                    </div>
                </div>
            </div>

            <div className={['section', styles.about_us_section].join(' ')}>
                <div className="container">
                    <h2 className='section-title'>Apie mus</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat dolorum saepe aliquid distinctio, perferendis consectetur quod eveniet, quasi nesciunt esse animi quos delectus natus consequuntur quas nisi. Expedita, maiores.</p>
                </div>
            </div>
        </>
    )
}

export default HomePage