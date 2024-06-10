

const Pvz1 = () => {

    const inputasHandler = (e) => {
        
        let tekstas = e.target.value;

        if (tekstas.length >= 5){
            alert(`ups, tekstas ${tekstas} dideja`)
        }
    }

    return (
        <div className="blokas">
            <h2>Pvz1</h2>
            <input onInput={inputasHandler} type="text" />

        </div>
    )
}

export default Pvz1