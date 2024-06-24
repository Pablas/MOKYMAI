import styles from './AdsList.module.css'

const AdsList = (props) => {

    const adsList = props.data


    return (
        <div className={styles.list}>
            {
                adsList.length > 0 &&
                adsList.map(ad => (
                    <div key={ad._id} className={styles.item}>
                        <h3>{ad.title}</h3>
                        <p>{ad.price} Eur</p>
                        <p>{ad.category}</p>
                    </div>
                ))
            }
        </div>



    )
}

export default AdsList