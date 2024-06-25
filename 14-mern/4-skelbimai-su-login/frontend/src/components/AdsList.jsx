import styles from './AdsList.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const AdsList = (props) => {
    const adsList = props.data

    return (
        <div className={styles.list}>
            {
                adsList.length > 0 &&
                adsList.map(ad => (
                    <div key={ad._id} className={styles.item}>
                        <h3>
                            <Link to={`/skelbimai/${ad._id}`}>
                                {ad.title}
                            </Link>
                        </h3>
                        <p>{ad.price} Eur</p>
                        <p>{ad.category}</p>
                    </div>
                ))
            }
            { adsList.length === 0 && <p>Skelbimų nėra</p> }
        </div>
    )
}

AdsList.propTypes = {
    data: PropTypes.array.isRequired
}

export default AdsList
