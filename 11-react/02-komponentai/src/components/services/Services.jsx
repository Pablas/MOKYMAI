import './Services.css'
import ServiceBox from './ServiceBox'

const Services = () => {
  return (
    <div className='services-section'>
      <div className="container">
        <h2>Paslaugos</h2>
        <div className="services-list">
          <ServiceBox/>
          <ServiceBox/>
          <ServiceBox/>
          <ServiceBox/>
          <ServiceBox/>
          <ServiceBox/>
        </div>
      </div>
    </div>
  )
}

export default Services