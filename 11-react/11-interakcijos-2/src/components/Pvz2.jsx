
const Pvz2 = () => {
    
    const inputHandler = (e) => {
        let skaicius = e.target.valueAsNumber;
        
        if (skaicius == 6){
            alert(`Atspejote skaiciu!`)
        } else {
            alert (`Bandykite dar karta`)
        }
        
    }

  return (
    <div className="blokas">
        <h2>Spekit skaiciu tarp 1-10:</h2>
        <input onInput={inputHandler} type="number"/>
    </div>
  )
}

export default Pvz2