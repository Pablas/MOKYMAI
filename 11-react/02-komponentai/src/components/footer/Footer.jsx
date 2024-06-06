import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; Visos teisės saugomos, {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer