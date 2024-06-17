import propTypes from 'prop-types'
const ServiceBox = ({ title, description}) => {

  let stiliai = {
    background: `#f8f8f8`,
    padding: `20px`,
    boxSizing: `border-box`,
  }

  return (
    <div style={stiliai}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

ServiceBox.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}

export default ServiceBox