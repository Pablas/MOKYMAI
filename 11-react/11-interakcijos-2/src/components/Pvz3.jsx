
const Pvz3 = () => {

    let zodis = `azuolas`;

    const ivedimasHandler = (e) => {
        let ivestasZodis = e.target.value

        if (ivestasZodis === zodis){
            alert(`ATSPEJOTE!`)
        } else {
            alert(`Bandykite dar karta`)
        }
    }

    return (
        <div className="blokas">
            <h2>Spekite zodi:</h2>
            <input type="text" onChange={ivedimasHandler}/>
        </div>
    )
}

export default Pvz3