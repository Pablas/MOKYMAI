

const Uzd5 = () => {

    let skaiciai = [10, 4, 55, 6, 8]

    const skSuma = () => {
        alert(skaiciai.reduce((a, b) => a + b, 0))
    }

    const didSk = () => {
        alert(Math.max(...skaiciai))
    }

    return (
        <div className="blokas">
            <h2>{skaiciai.join(`, `)}</h2>
            <button onClick={skSuma}>Skaičių suma</button>
            <button onClick={didSk}>Didžiausias skaičius</button>
        </div>
    )
}

export default Uzd5