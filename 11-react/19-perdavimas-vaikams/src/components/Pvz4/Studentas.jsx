
const Studentas = (props) => {
  return (
    <div>
        <h3>{props?.duomenys?.vardas} {props?.duomenys?.pavarde}</h3>
        <p>Amzius yra: {props?.duomenys?.amzius}</p>
    </div>
  )
}

export default Studentas