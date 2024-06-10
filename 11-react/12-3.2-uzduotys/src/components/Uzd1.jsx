

const Uzd1 = () => {

    const arLyginisHandler = (e) => {
        alert(e.target.valueAsNumber % 2 == 0 ? `Skaičius lyginis` : `Skaičius nelyginis`)
    }

    return (
        <div className="blokas">
            <input type="number" onInput={arLyginisHandler}/>
        </div>
    )
}

export default Uzd1