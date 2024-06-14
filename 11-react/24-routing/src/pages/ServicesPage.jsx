import styles from './ServicesPage.module.css'
import ServiceBox from '../shared/ServiceBox'

const ServicesPage = () => {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <h1>Paslaugos</h1>
                    <p>Musu paslaugos</p>
                </div>
            </header>


            <div className='section'>
                <div className="container">
                    <div className={styles.services_list}>
                        <ServiceBox title='Ratų balansavimas' description='Gerai balansuojame jūsų padangėles' />
                        <ServiceBox title='Padangų remontas' description='Visų tipų padangų remontas' />
                        <ServiceBox title='Ratų geometrija' description='Profesionalus ratų geometrijos tikrinimas' />
                        <ServiceBox title='Ratų geometrija' description='Profesionalus ratų geometrijos tikrinimas' />
                        <ServiceBox title='Ratų geometrija' description='Profesionalus ratų geometrijos tikrinimas' />
                        <ServiceBox title='Ratų geometrija' description='Profesionalus ratų geometrijos tikrinimas' />
                        <ServiceBox title='Ratų geometrija' description='Profesionalus ratų geometrijos tikrinimas' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesPage